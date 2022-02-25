import { Component } from 'component';
import { db, Item } from 'db';
import { emitter } from 'eventEmitter';
import { HTML } from 'lib/HTML';
import { modalConstructor } from 'ui/modal';
import { urlParams } from 'urlParams';
import { MobileMicaMenu } from 'ui/mica';

import './index.css';

class Inventory extends Component {
	async init() {
		const favorites = new Favorites({categoryName: 'Favorites'});
		const search = new Search({categoryName: 'Search'});

		this.categories = [favorites, search];

		const paramCategoryName = urlParams.getSecionSetting('inventory');
		const paramBundle = urlParams.getSecionSetting('bundle');

		if (paramBundle)
		{
			const bundleSet = new Set(paramBundle.split('~'));
			if (bundleSet.size)
			{
				const bundleCategory = new InventoryCategory({
					categoryName: 'Collection',
					itemIDs: bundleSet
				});
				this.categories.push(bundleCategory);
				if (!paramCategoryName || paramCategoryName === 'Collection')
				{
					bundleCategory.init();
					this.state.inventoryCategory = bundleCategory;
				}
			}
		}

		const skipTypes = new Set([
			'ChallengeReroll',
			'XPBoost',
			'XPGrant',
			'None',
			'AiTheme',
			'AiCore',
		]);

		for (const type of db.index.types)
		{
			if (skipTypes.has(type)) continue;
			const category = new InventoryCategory({categoryName: type});
			this.categories.push(category);

			if (paramCategoryName && paramCategoryName === type)
			{
				category.init();
				this.state.inventoryCategory = category;
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

		this.mobileMicaMenu = new MobileMicaMenu('MobileMicaMenu-Inventory', 'Categories');
		emitter.on('MobileMicaMenu-Inventory', () => {
			this.setState({mobileMenu: !this.state.mobileMenu});
		});

		emitter.on('nav-search', () => {
			this.showCategory(search);
			search.focus();
		});

		// Listen for updates to favorites list, render on change
		emitter.on('favoriteItemPaths', (path) => {
			// console.log('fav update', path);
			favorites.init();
			if (this.state?.inventoryCategory === favorites) favorites.render();
		})
	}

	get defaultState() {
		return {
			mobileMenu: false
		};
	}

	render() {
		return this.html`<div class="inventory_wrapper mica_viewer" id="inventory">
			<header class="inventory mica_header-strip">
				<a class="mica_header-anchor" href="#inventory"><h2>Inventory</h2></a>
			</header>
			<div class="inventory_content mica_main-content">
				<ul class=${`inventory-catergories mica_nav-list ${this.state.mobileMenu ? 'show-mobile' : 'hide-mobile'}`}>
					${this.categories.map(category => HTML.wire(category)`<li><button
						onclick=${() => this.showCategory(category)}
						class=${this.state?.inventoryCategory === category ? 'active' : null}
					><span>${db.getItemType(category.categoryName) ?? '...'}</span></button></li>`)}
				</ul>
				${this.state?.inventoryCategory?.render() ?? ''}
				${{html: this.state?.inventoryCategory ? '' : '<div class="inv-category-placeholder">CHOOSE A CATEGORY</div>'}}
				<div class=${`mica_mobile-menu_container ${this.state.mobileMenu ? 'show-mobile' : 'hide-mobile'}`}>${this?.mobileMicaMenu.render()}</div>
			</div>
		</div>`;
	}

	showCategory(inventoryCategory) {
		this.state.mobileMenu = false;
		if (this.state?.inventoryCategory === inventoryCategory) {
			this.scrollIntoView();
			// this.setState({inventoryCategory: undefined});
			// urlParams.deleteSecionSetting('inventory');
			return;
		}
		inventoryCategory.init();
		this.setState({inventoryCategory});
		urlParams.setSecionSetting('inventory', inventoryCategory?.categoryName ?? 'unk');
		this.scrollIntoView();
	}

	scrollIntoView() {
		const el = document.querySelector(`#inventory`);
		if (el)
		{
			el.scrollIntoView();
			history.replaceState({}, `Cylix`, `#inventory`);
		}
	}
}

export const inventory = new Inventory();

class InventoryCategory extends Component {
	constructor({
		categoryName,
		itemIDs
	}) {
		super();
		this.categoryName = categoryName;
		this.items = [];
		this.itemIDs = new Set();

		if (itemIDs && itemIDs.size)
		{
			// TODO get items
			console.log('TEST Bundle', itemIDs);
			this.itemIDs = new Set(itemIDs);
		}
	}

	get defaultState() {
		return {
			page: 0
		};
	}

	init() {
		if (this.items.length) return;

		if (!this.itemIDs.size) this.itemIDs = db.getItemIDsByType(this.categoryName);
		
		if (!this.itemIDs.size) return;
		// console.info('IDs', this.itemIDs);

		this.getCurrentItemPage();
	}

	getCurrentItemPage() {
		return (this.items = [...this.currentPageIDs].map(id => new Item(db.getItemPathByID(id))));
	}

	nextPage() {
		if (this.pageNumber === this.pages-1) return;
		this.state.page = this.pageNumber + 1;
		this.getCurrentItemPage();
		this.render();
		inventory.scrollIntoView();
	}

	previousPage() {
		if (this.pageNumber === 0) return;
		this.state.page = this.pageNumber - 1;
		this.getCurrentItemPage();
		this.render();
		inventory.scrollIntoView();
	}

	get pageLength() {
		return 100;
	}

	get pages() {
		return Math.ceil(this.itemIDs.size / this.pageLength);
	}

	get pageNumber() {
		return this.state?.page ?? 0;
	}

	get currentPageIDs() {
		return new Set([...this.itemIDs].slice((this.pageNumber * this.pageLength), (this.pageNumber * this.pageLength) + this.pageLength));
	}

	renderPageControls(id = upper) {
		if (this.pages < 2) return '';
		return HTML.wire(this, `:${id}`)`
			<div class="page-controls_wrapper">
				<button
					onclick=${() => this.previousPage()}
					disabled=${this.pageNumber === 0}
				>Prev Page</button>
				<span>${this.pageNumber+1} of ${this.pages}</span>
				<button
					onclick=${() => this.nextPage()}
					disabled=${this.pageNumber + 1 === this.pages}
				>Next Page</button>
			</div>
		`;
	}

	render() {
		return this.html`
			<div
				class ="inventory-category_wrapper"
			>
				<header class="h-favorites">
					<div>${db.getItemType(this.categoryName)?.replace('Atch.', 'Attachments') ?? ''} // ${this?.itemIDs.size}</div>
				</header>
				${this.renderPageControls('upper')}
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
				${this.renderPageControls('lower')}
			</div>
		`;
				// ${this.categoryName === 'Favorites' ? HTML.wire(this, ':manage')`
				// <button
				// 	onclick=${() => modalConstructor.showView(this.renderFavoritesManager())}
				// >Manage</button>` : ''}
	}
}

class Favorites extends InventoryCategory {
	init() {
		this.itemIDs = db.getItemIDsByType(this.categoryName);
		this.items = [...this.itemIDs].map(id => new Item(db.getItemPathByID(id)));
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
		// this.items = new Set();
		const term = urlParams.getSecionSetting('s');
		if (!this.state.term && term && typeof term === 'string')
		{
			this.state.term = term;
		}
		
		const modifiedDateString = urlParams.getSecionSetting('smd');
		if (modifiedDateString && typeof modifiedDateString === 'string' && Date.parse(`${modifiedDateString}T00:00:00Z`))
		{
			console.log('sdm', modifiedDateString)
			this.state.filters.set('modifiedDate', new Date(`${modifiedDateString}T00:00:00Z`));
		}

		if (this.state.term || this.state.filters.size) {
			this.searchItems();
		}
	}

	get defaultState() {
		return {
			term: '',
			filters: new Map(),
			showFilters: false
		};
	}

	render() {
		return this.html`
			<div
				class ="inventory-category_wrapper"
			>
				<header class="h-favorites">
					<div>Search // ${this?.itemIDs?.size ?? 0}</div>
				</header>
				<div class="inventory-search_wrapper">
					<div class="inventory-search-bar_wrapper">
						<input
							aria-label="Search Input"
							type="search"
							class="inventory-search_input"
							id="inventory-search"
							name="inventory-search"
							placeholder="Search..."
							maxlength="24"
							oninput=${(e) => this.input(e?.target?.value ?? '')}
							onkeydown=${(e) => {
								if (e?.key === 'Enter') this.submit();
							}}
							value=${this.state.term}
						>
						<button
							class="inventory-search_submit"
							onclick=${() => this.submit()}
							aria-label="Submit Search"
						><label for="inventory-search" class="icon-masked icon-search"></label></button>
					</div>
					<div class="inventory-search-filter_wrapper">
						<button
							class="inventory-search_toggle-filters"
							onclick=${() => this.setState({showFilters: !this.state.showFilters})}
							aria-label="Toggle Search Filter Menu"
							disabled=${this.state.filters.size}
						><div class="icon-masked icon-filter"></div></button>
						${(this.state.showFilters || this.state.filters.size) ? this.renderFilters() : ''}
					</div>
				</div>
				<div class="inventory-search_info">
					${{html: this.state.term && !this?.itemIDs?.size ? '<div class="icon-masked icon-alert"></div> No results' : ''}}
				</div>
				${this.renderPageControls('upper')}
				<ul
					class="inventory-category_items"
				>
					${[...this.items].map(item => HTML.wire()`<li>${item.renderIcon('inventory', {itemTypeIcon: true})}</li>`)}
				</ul>
				${this.renderPageControls('lower')}
			</div>
		`;
	}

	renderFilters() {
		return HTML.wire(this, ':filters')`
			<ul class="inventory-search-filters">
				<li class="filter-input_wrapper">
					<label for="date_modified-after">Modified After</label>
					<input
						type="date"
						id="date_modified-after"
						onchange=${(e) => this.filterModifiedDate(e.target.value)}
						value=${urlParams.getSecionSetting('smd')
							? `${urlParams.getSecionSetting('smd')}`
							: ''
						}
					>
				</li>
			</ul>
		`;
	}

	input(value) {
		if (value && typeof value === 'string')
		{
			return this.state.term = value.toLowerCase();
		}
		return this.state.term = '';
	}

	searchItems() {
		// if (!this.state.term || typeof this.state.term !== 'string') return;
		this.itemIDs = new Set();
		// console.info(`[search] "${db.index.manifest.size}" items in index`);
		for (const entry of db.index.manifest.values())
		{
			const title = entry.title.toLowerCase();
			if (this.state.term && !title.includes(this.state.term)) continue;

			const filters = this.state.filters;

			if (filters.has('modifiedDate') && Array.isArray(entry?.touched))
			{
				const dateString = entry.touched[entry.touched.length-1];
				if (Date.parse(dateString))
				{
					const lastModified = new Date(dateString);
					if (new Date(filters.get('modifiedDate')) > lastModified)
					{
						// console.log(lastModified)
						continue;
					}
				}
			}

			this.itemIDs.add(entry.name);
		}
		
		console.info(`[search] Found "${this.itemIDs.size}" items`);
		if (this.itemIDs.size)
		{
			// TODO slice, pagination
			// this.items = new Set([...this.itemIDs].slice(0, 100).map(id => new Item(db.getItemPathByID(id))));
			this.getCurrentItemPage();
			this.render();
			return;
		}

		this.items = new Set();
		this.render();
	}

	submit() {
		if ((!this.state.term || typeof this.state.term !== 'string') && !this.state.filters.size)
		{
			this.items = new Set();
			this.itemIDs = new Set();
			urlParams.deleteSecionSetting('s');
			this.render();
			return;
		}
		console.log('submit', this.state.term, this.state.filters);
		urlParams.setSecionSetting('s', this.state.term);
		this.searchItems();
		this.render();

		inventory.scrollIntoView();
	}

	filterModifiedDate(dateString) {
		console.log('date', dateString)
		if (!dateString || !Date.parse(dateString))
		{
			// console.log('del', dateString)
			if (this.state.filters.has('modifiedDate')) this.state.filters.delete('modifiedDate');
			urlParams.deleteSecionSetting('smd');
			return;
		}
		const date = new Date(`${dateString}T00:00:00Z`);
		if (!date) return;
		console.log('datep', date)
		// date.setDate(date.getDate() + 1);
		// console.log(date);
		this.state.filters.set('modifiedDate', date);
		urlParams.setSecionSetting('smd', `${dateString}`);
	}

	focus() {
		const input = document.querySelector(`#inventory-search`);
		if (input) input.focus();
	}
}