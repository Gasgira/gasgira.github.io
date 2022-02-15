import { Component } from 'component';
import { db, Item } from 'db';
import { emitter } from 'eventEmitter';
import { HTML } from 'lib/HTML';
import { modalConstructor } from 'ui/modal';
import { urlParams } from 'urlParams';

import './index.css';

class Inventory extends Component {
	async init() {
		const inventoryPath = 'Inventory/catalog/inventory_catalog.json';
		this.data = await db.getJSON(inventoryPath);

		const favorites = new InventoryCategory({categoryName: 'Favorites'});
		const search = new Search({categoryName: 'Search'});

		this.categories = [favorites]; // , search

		const paramCategoryName = urlParams.getSecionSetting('inventory');
		for (const property in this.data) {
			const categoryTerm = 'sOwnableCount';
			if (property.includes(categoryTerm) && this.data[property] !== 0)
			{
				const categoryName = property.replace(categoryTerm, '');
				const category = new InventoryCategory({categoryName});
				this.categories.push(category);

				if (paramCategoryName && categoryName === paramCategoryName)
				{
					category.init();
					this.state.inventoryCategory = category;
				}
			}
		}

		if (!this.state.inventoryCategory && paramCategoryName !== 'Search')
		{
			favorites.init();
			this.state.inventoryCategory = favorites;
		} else if (paramCategoryName === 'Search')
		{
			search.init();
			this.state.inventoryCategory = search;
		}

		console.info(`[Inventory] Found "${this.categories.length}" item categories.`)
	}

	render() {
		return this.html`<div class="inventory_wrapper mica_viewer" id="inventory">
			<header class="inventory mica_header-strip"><a class="mica_header-anchor" href="#inventory"><h2>Inventory</h2></a></header>
			<div class="inventory_content mica_main-content">
				<ul class="inventory-catergories mica_nav-list">
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
			urlParams.deleteSecionSetting('inventory');
			return;
		}
		inventoryCategory.init();
		this.setState({inventoryCategory});
		urlParams.setSecionSetting('inventory', inventoryCategory?.categoryName ?? 'unk');
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
		this.items = [];

		if (this.categoryName === 'Favorites') {
			emitter.on('favoriteItemPaths', (path) => {
				console.log('fav update', path);
				this.init();
				if (inventory.state?.inventoryCategory === this) this.render();
			})
		}
	}

	get defaultState() {
		return {
			importValid: false
		};
	}

	init() {
		if (this.items?.length && this.categoryName !== 'Favorites') return;
		this.itemPaths = inventory.itemPathsOfCategoryName(this.categoryName);
		// console.log(`[InventoryCategory] Got items`, this.itemPaths);
		this.items = [...this.itemPaths].map(path => new Item(path));
	}

	render() {
		return this.html`
			<div
				class ="inventory-category_wrapper"
			>
			<header class="h-favorites">
				<div>${db.getItemType(this.categoryName) ?? ''} // ${this?.items?.length}</div>
			</header>
				<ul
					class="inventory-category_items"
				>
					${this.items.map(item => HTML.wire()`<li>${item.renderIcon('inventory', {itemTypeIcon: true})}</li>`)}
					${this.categoryName === 'Favorites' && !this.items.length ? HTML.wire(this, ':favPlaceholder')`
						<div class="favorites-placeholder">Tap the <span
							class=${'favorite'}
							style=${{backgroundImage: `url(items.svg#unfavored)`}}
						></span> in item detail panels to collect favorites into this section.</div>
					` : ''}
				</ul>
			</div>
		`;
				// ${this.categoryName === 'Favorites' ? HTML.wire(this, ':manage')`
				// <button
				// 	onclick=${() => modalConstructor.showView(this.renderFavoritesManager())}
				// >Manage</button>` : ''}
	}

	renderFavoritesManager() {
		console.log('reb');
		return HTML.wire(this, ':favoritesManager')`
			<div class="favorites-man_wrapper">
				<span>Click the star icon in item detail panels to add favorites!</span>
				<span>Copy and paste the following text box to send your list to someone.</span>
				<textarea id="story" name="fav-export" rows="5" cols="33" readonly>${JSON.stringify([...db.favoriteItemPaths], null, '\t')}</textarea>
				<span>---TODO collapsing import---</span>
				<span>Paste a favorites list in the following box.</span>
				<textarea id="story" name="fav-import" rows="5" cols="33"
					oninput=${(e) => this.validateImport(e.target.value)}
				></textarea>
				<button
					onclick=${() => this.replaceFavorites()}
				>Replace</button>
				<button
					onclick=${() => this.appendFavorites()}
				>Append</button>${this.state?.awaitingImport}
			</div>
		`;
	}

	validateImport(text) {
		try {
			console.log('v', text);
			const json = JSON.parse(text);

			if (json && json.length) {
				const set = new Set(json);
				this.state.awaitingImport = set;
				console.log('arr', this.state.awaitingImport);
				this.renderFavoritesManager();
			}
		} catch (error) {
			console.error(`[skimmer] validateImport`, error)
		}
	}

	replaceFavorites() {
		console.log('rep', this.state?.awaitingImport)
	}

	appendFavorites() {
		console.log('app', this.state?.awaitingImport)
	}
}

class Search extends InventoryCategory {
	init() {
		this.items = new Set();
	}

	get defaultState() {
		return {
			term: ''
		};
	}

	render() {
		return this.html`
			<div
				class ="inventory-category_wrapper"
			>
				<header class="h-favorites">
					<div>Search // ${this?.items?.size}</div>
				</header>
				<div class="inventory-search_wrapper">
					<input
						type="search"
						class="inventory-search_input"
						id="inventory-search"
						name="inventory-search"
						oninput=${(e) => this.input(e?.target?.value ?? '')}
						value=${this.state.term}
					>
					<button
						class="inventory-search_submit"
						onclick=${() => this.submit()}
					>Search</button>
				</div>
				<ul
					class="inventory-category_items"
				>
					${[...this.items].map(item => HTML.wire()`<li>${item.renderIcon('inventory', {itemTypeIcon: true})}</li>`)}
				</ul>
			</div>
		`;
	}

	input(value) {
		if (value && typeof value === 'string')
		{
			return this.state.term = value;
		}
		return this.state.term = '';
	}

	submit() {
		console.log('submit', this.state.term);
		this.render();
	}
}