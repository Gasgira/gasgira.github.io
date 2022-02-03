import { Component } from 'component';
import { db, Item } from 'db';
import { emitter } from 'eventEmitter';
import { HTML } from 'lib/HTML';

import './index.css';

class Inventory extends Component {
	async init() {
		const inventoryPath = 'Inventory/catalog/inventory_catalog.json';
		this.data = await db.getJSON(inventoryPath);

		this.categories = [new InventoryCategory({categoryName: 'Favorites'})];

		for (const property in this.data) {
			const categoryTerm = 'sOwnableCount';
			if (property.includes(categoryTerm) && this.data[property] !== 0)
			{
				const categoryName = property.replace(categoryTerm, '');
				this.categories.push(new InventoryCategory({categoryName}));
			}
		}

		console.info(`[Inventory] Found "${this.categories.length}" item categories.`)
	}

	render() {
		return this.html`<div class="inventory_wrapper">
			<header>Inventory</header>
			<div class="inventory_content">
				<ul class="inventory-catergories">
					${this.categories.map(category => HTML.wire(category)`<li><button
						onclick=${() => this.showCategory(category)}
						class=${this.state?.inventoryCategory === category ? 'active' : null}
					><span>${db.getItemType(category.categoryName) ?? '...'}</span></button></li>`)}
				</ul>
				${this.state?.inventoryCategory?.render() ?? ''}
				${{html: this.state?.inventoryCategory ? '' : '<div class="inv-category-placeholder">CHOOSE A CATEGORY</div>'}}
			</div>
		</div>`;
	}

	showCategory(inventoryCategory) {
		if (this.state?.inventoryCategory === inventoryCategory) {
			this.setState({inventoryCategory: undefined});
			return;
		}
		inventoryCategory.init();
		this.setState({inventoryCategory});
	}

	itemPathsOfCategoryName(categoryName) {
		if (!categoryName || typeof categoryName !== 'string') return;

		console.log(`[Inventory] Getting category "${categoryName}"`);

		if (categoryName === 'Favorites') {
			return db.favoriteItemPaths;
		}

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

	get coreList() {
		if (!this.data) return [];
		return this.data?.Cores;
	}
}

export const inventory = new Inventory();

class InventoryCategory extends Component {
	constructor({
		categoryName
	}) {
		super();
		this.categoryName = categoryName;

		if (this.categoryName === 'Favorites') {
			emitter.on('favoriteItemPaths', (path) => {
				console.log('fav update', path);
				this.init();
				if (inventory.state?.inventoryCategory === this) this.render();
			})
		}
	}

	init() {
		if (this.items && this.categoryName !== 'Favorites') return;
		this.itemPaths = inventory.itemPathsOfCategoryName(this.categoryName);
		// console.log(`[InventoryCategory] Got items`, this.itemPaths);
		this.items = [...this.itemPaths].map(path => new Item(path));
	}

	render() {
		return this.html`
			<div
				class ="inventory-category_wrapper"
			>
			${db.getItemType(this.categoryName) ?? ''} // ${this.items.length}
				<ul
					class="inventory-category_items"
				>
					${this.items.map(item => HTML.wire()`<li>${item.renderIcon('inventory', {itemTypeIcon: true})}</li>`)}
				</ul>
			</div>
		`;
	}
}