import { HTML } from 'lib/HTML';
import { Component } from 'component';
import { db, Item } from 'db';

class ArmorCores extends Component {
	async init() {
		this.coreList = await db.getJSON('entries/armor-core-list.json');
		const cores = this.coreList.map(core => db.getJSON(core?.CMSPath));
		await Promise.all(cores)
			.then(res => this.cores = res.map(core => new Core(core)));
		// this.coreWire = this.cores.map(core => this.createCore(core));
		console.log('AC', this.cores);

		// this.cores = cores.map(core => new Core(core));

		return this;
	}

	async render() {
		return this.html`
			<div
				class="entry armor-cores_wrapper"
			>
				<header>ArmorCores</header>
				<div
					class="armor-core-list"
				>
					${this.cores}
				</div>
			</div>
		`;
	}
}

export const armorCores = new ArmorCores();

class Core extends Component {
	constructor(data) {
		super();
		this.data = data;
		console.log('Core class', this.data)

		this.sockets = [];
		for (const socketName in this.data) {
			if (this.data[socketName]?.OptionPaths?.length)
			{
				const OptionPaths = this.data[socketName]?.OptionPaths;
				this.sockets.push(new Socket({OptionPaths, socketName}));
			} else if (socketName === 'Helmets' && this.data[socketName]?.Options?.length) {
				const OptionPaths = this.data[socketName]?.Options.map(option => {
					return option.HelmetPath;
				});
				this.sockets.push(new Socket({OptionPaths, socketName}));
			}
		}

		return this.render();
	}

	async init() {
	}

	render() {
		return this.html`
			<div
				class ="core_wrapper"
			>
				<header>${this.data.CommonData.Title}</header>
				<ul class="core-socket-list">
					${this.sockets.map(socket => HTML.wire(socket)`<li><button onclick=${() => this.showSocket(socket)}><span>${socket.socketName}</span></button></li>`)}
				</ul>
				${this.state?.socket?.render() ?? 'Choose a socket'}
			</div>
		`
	}

	showSocket(socket) {
		if (this.state.socket === socket) {
			this.setState({socket: undefined});
			return;
		}
		this.setState({socket});
	}
}

class Socket extends Component {
	constructor({
		OptionPaths,
		socketName
	}) {
		super();

		this.OptionPaths = OptionPaths;
		this.socketName = socketName;

		this.items = this.OptionPaths.map(path => new Item(path))

		// return this.render();
	}

	render() {
		return this.html`
			<div
				class ="core-sockets_wrapper"
			>
			${this.socketName} // ${this.items.length}
				<ul
					class="socket-items"
				>
					${this.items.map(item => HTML.wire(item)`<li>${item.render()}</li>`)}
				</ul>
			</div>
		`;
	}
}

class Inventory extends Component {
	async init() {
		const inventoryPath = 'Inventory/catalog/inventory_catalog.json';
		this.data = await db.getJSON(inventoryPath);

		this.categories = [];

		for (const property in this.data) {
			const categoryTerm = 'sOwnableCount';
			if (property.includes(categoryTerm) && this.data[property] !== 0)
			{
				const categoryName = property.replace(categoryTerm, '');
				this.categories.push(new InventoryCategory({categoryName, inventory: this}));
			}
		}

		console.info(`[Inventory] Found "${this.categories.length}" item categories.`)
	}

	render() {
		return this.html`<div class="inventory_wrapper">
			<header>Inventory</header>
			<div class="inventory_content">
				<ul class="inventory-catergories">
					${this.categories.map(category => HTML.wire(category)`<li><button onclick=${() => this.showCategory(category)}><span>${category.categoryName}</span></button></li>`)}
				</ul>
				${this.state?.inventoryCategory?.render() ?? 'Choose a category'}
			</div>
		</div>`;
	}

	showCategory(inventoryCategory) {
		console.log('show...')
		inventoryCategory.init();
		this.setState({inventoryCategory});
	}

	itemPathsOfCategoryName(categoryName) {
		if (!categoryName || typeof categoryName !== 'string') return;

		console.log(`[Inventory] Getting category "${categoryName}"`);

		const paths = new Set();

		if (categoryName.includes('Core')) {
			this.data?.Cores?.forEach(core => {
				if (core?.ItemType === categoryName) paths.add(core?.ItemPath);
			});
			return paths;
		}

		this.data?.Items.forEach(item => {
			if (item?.ItemType === categoryName) paths.add(item?.ItemPath);
		});
		return paths;
	}
}

export const inventory = new Inventory();

class InventoryCategory extends Component {
	constructor({
		categoryName,
		inventory
	}) {
		super();
		this.categoryName = categoryName;
		this.inventory = inventory;
	}

	init() {
		if (this.items) return;
		this.itemPaths = this.inventory.itemPathsOfCategoryName(this.categoryName);
		// console.log(`[InventoryCategory] Got items`, this.itemPaths);
		this.items = [...this.itemPaths].map(path => new Item(path));
	}

	render() {
		return this.html`
			<div
				class ="inventory-category_wrapper"
			>
			${this.categoryName} // ${this.items.length}
				<ul
					class="inventory-category_items"
				>
					${this.items.map(item => HTML.wire(item)`<li>${item.render()}</li>`)}
				</ul>
			</div>
		`;
	}
}