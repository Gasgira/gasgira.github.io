import { Component } from 'component';
import { db } from 'db';
import { Item, placeholderItem } from 'db/item';
import { emitter } from 'eventEmitter';
import { HTML, throbber } from 'lib/HTML';
import { settings } from 'ui/settings';
import { urlParams } from 'urlParams';
import { MobileMicaMenu } from 'ui/mica';
import MiniSearch from 'minisearch';

import './index.css';

class Inventory extends Component {
	async init() {
		if (this?._init) return;
		this._init = true;

		this.pageSize = parseInt(settings.pageSize ?? 100);
		const favorites = new Favorites({categoryName: 'Favorites'});
		const search = new Search({categoryName: 'Search'});
		// const offerings = new Offerings({categoryName: 'Offerings'});

		this.categories = [favorites, search]; // , offerings

		const paramCategoryName = urlParams.getSecionSetting('inventory');
		const paramBundle = urlParams.getSecionSetting('bundle');

		if (paramBundle)
		{
			const bundleSet = new Set(paramBundle.split('~').filter(id => db.manifestHasID(id)));
			if (bundleSet.size)
			{
				const bundleCategory = new InventoryCategory({
					categoryName: 'Collection',
					itemIDs: bundleSet,
					revealSpoilers: true
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
			if (this.state.mobileMenu) history.pushState({}, `Halosets`, ``);
		});
		emitter.on('popstate', () => {
			if (this.state.mobileMenu) this.setState({mobileMenu: false});
		});

		emitter.on('nav-search', () => {
			this.showCategory(search);
			search.focus();
		});

		// window.addEventListener("keydown", (event) => {
		// 	if (event.defaultPrevented) return;
		
		// 	if (event.key === '/')
		// 	{
		// 		this.showCategory(search);
		// 		search.focus();
		// 		event.preventDefault();
		// 	}
		// }, true);

		// Listen for updates to favorites list, render on change
		emitter.on('favoriteItems', (id) => {
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

	get userSort() {
		return settings.getSetting('userSort') ?? 'alphanumeric';
	}

	get userSortOrder() {
		return settings.getSetting('userSortOrder') ?? false;
	}

	get sortOptions() {
		return this._sortOptions ??= new Map([
			['alphanumeric', 'Alphanumeric'],
			['popularity', 'Popularity'],
			['popularityDelta', 'Popularity Delta'],
			['dateAdded', 'Date Added'],
			['dateModified', 'Date Modified'],
			['dateVisible', 'Date Visible']
		])
	}

	async render() {
		this.init();
		return this.html`<div class="inventory_wrapper mica_viewer" id="inventory">
			<header class="inventory mica_header-strip">
				<a class="mica_header-anchor" href="#inventory"><h2>Inventory</h2></a>
				<ul class="sort-controls_wrapper">
					<li class="option">
						<label for="inv-sort">Sort</label>
						<select
							onchange=${(e) => this.setSort(e.target.value)}
						>
							${() => [...this.sortOptions.entries()].map(([value, title]) => {
								const selected = `${this.userSort}` === `${value}` ? true : false;
								if (selected) return `<option value=${value} selected>${title}</option>`
								return `<option value=${value}>${title}</option>`
							})}
						</select>
					</li>
				</ul>
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

	setSort(value) {
		settings.setSort(value);
		console.log(`[Inventory.setSort]`, settings.getSetting('userSort'));
		emitter.emit('Inventory.setSort');
	}

	toggleSortOrder() {
		const current = settings.getSetting('userSortOrder') ?? false;
		settings.setSortOrder(current ? false : true);
		console.log(`[Inventory.toggleSortOrder]`, settings.getSetting('userSortOrder'));
		this.render();
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
		itemIDs,
		revealSpoilers
	}) {
		super();
		this.categoryName = categoryName;
		this.items = [];
		if (revealSpoilers) this.revealSpoilers = true;

		if (itemIDs && itemIDs.size)
		{
			// TODO get items
			console.log('TEST Bundle', itemIDs);
			this.itemIDs = new Set(itemIDs);
		} else {
			this.itemIDs = new Set();
		}

		emitter.on('Inventory.setSort', () => this.sortItemIDs());
	}

	get defaultState() {
		return {
			page: 0
		};
	}

	set itemIDs(unsortedArray) {
		const unsortedSet = new Set([...unsortedArray]);
		if (!unsortedSet || !unsortedSet.size) return (this._itemIDs = unsortedSet);
		this._unsortedItemIDs = unsortedSet;
		const userSort = settings.getSetting('userSort') ?? 'default';
		let sorted = this._unsortedItemIDs;
		switch (userSort) {
			case 'dateAdded':
				console.log('Sort: dateAdded');
				sorted = new Set([...unsortedSet].sort((a, b) => {
					const aMeta = db.getItemManifestByID(a);
					const bMeta = db.getItemManifestByID(b);
					return (new Date(bMeta.added) - new Date(aMeta.added))
				}));
				break;
			case 'dateModified':
				console.log('Sort: dateModified');
				sorted = new Set([...unsortedSet].sort((a, b) => {
					const aMeta = db.getItemManifestByID(a);
					const bMeta = db.getItemManifestByID(b);
					return (new Date(bMeta.touched) - new Date(aMeta.touched))
				}));
				break;
			case 'dateVisible':
				console.log('Sort: dateVisible');
				sorted = new Set([...unsortedSet].sort((a, b) => {
					const aMeta = db.getItemManifestByID(a);
					const bMeta = db.getItemManifestByID(b);
					return (new Date(bMeta?.visible ?? new Date('2021-11-10')) - new Date(aMeta?.visible ?? new Date('2021-11-10')))
				}));
				break;
			case 'popularity':
				console.log('Sort: popularity');
				sorted = new Set([...unsortedSet].sort((a, b) => {
					const aMeta = db.getItemManifestByID(a);
					const bMeta = db.getItemManifestByID(b);

					const aPop = parseFloat(aMeta?.community?.stats?.cur ?? 0);
					const bPop = parseFloat(bMeta?.community?.stats?.cur ?? 0);
					return (bPop - aPop);
				}));
				break;
			case 'popularityDelta':
				console.log('Sort: popularityDelta');
				sorted = new Set([...unsortedSet].sort((a, b) => {
					const aMeta = db.getItemManifestByID(a);
					const bMeta = db.getItemManifestByID(b);

					const aPop = Math.abs(parseFloat(aMeta?.community?.stats?.delta ?? 0));
					const bPop = Math.abs(parseFloat(bMeta?.community?.stats?.delta ?? 0));
					return (bPop - aPop);
				}));
				break;
			case 'alphanumeric':
				console.log('Sort: alphanumeric');
			default:
				console.warn('Sort: default');
				sorted = new Set([...unsortedSet].sort((a, b) => {
					const aMeta = db.getItemManifestByID(a);
					const bMeta = db.getItemManifestByID(b);
					return (aMeta.title.localeCompare(bMeta.title, 'en', { ignorePunctuation: true }))
				}));
		}

		console.warn('sorted!', sorted)
		return (this._itemIDs = sorted);
	}
	get itemIDs() {
		return (this._itemIDs ??= new Set());
	}

	sortItemIDs() {
		// TODO this is really bad
		if (this.items.length)
		{
			this.items = [];
			this.itemIDs = this.itemIDs;
			this.init();
			this.render();
		}
	}

	init() {
		if (this.items.length) return;

		if (!this.itemIDs.size) this.itemIDs = db.getItemIDsByType(this.categoryName);

		if (!this.itemIDs.size) return;
		// console.info('IDs', this.itemIDs);

		this.getCurrentItemPage();
	}

	getCurrentItemPage() {
		return (this.items = [...this.currentPageIDs].map(id => new Item({ id })));
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
		return inventory?.pageSize ?? 100;
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
				><div class=${`icon-masked icon-arrow-left`}></div>Prev</button>
				<span>${this.pageNumber+1} of ${this.pages}</span>
				<button
					onclick=${() => this.nextPage()}
					disabled=${this.pageNumber + 1 === this.pages}
				>Next<div class=${`icon-masked icon-arrow-right`}></div></button>
			</div>
		`;
	}

	render() {
		if (this.revealSpoilers && this.items.length) this.items.forEach(item => item.unredact())
		return this.html`
			<div
				class ="inventory-category_wrapper mica_content"
			>
				<header class="h-favorites">
					<div>${db.getItemType(this.categoryName)?.replace('Atch.', 'Attachments') ?? ''} // ${this?.itemIDs.size}</div>
				</header>
				${this.renderPageControls('upper')}
				<ul
					class="inventory-category_items"
				>
					${this.items.map(item => HTML.wire()`<li>
						${{
							any: item.renderIcon('inventory', {itemTypeIcon: true}),
							placeholder: placeholderItem.cloneNode(true)
						}}
					</li>`)}
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
		this.items = [...this.itemIDs].map(id => new Item({ id }));
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

	sortItemIDs() {
		// TODO this is really bad
		if (this.items.length)
		{
			// this.items = [];
			// this.itemIDs = this.itemIDs;
			this.init();
			this.render();
		}
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

		const modifiedDateString = urlParams.getSecionSetting('sma');
		if (modifiedDateString && typeof modifiedDateString === 'string' && Date.parse(`${modifiedDateString}T00:00:00Z`))
		{
			console.log('sdm', modifiedDateString)
			this.state.filters.set('sma', new Date(`${modifiedDateString}T17:00:00Z`));
		}

		const modifiedBeforeDateString = urlParams.getSecionSetting('smb');
		if (modifiedBeforeDateString && typeof modifiedBeforeDateString === 'string' && Date.parse(`${modifiedBeforeDateString}T00:00:00Z`))
		{
			console.log('smb', modifiedBeforeDateString)
			this.state.filters.set('smb', new Date(`${modifiedBeforeDateString}T17:00:00Z`));
		}

		const addedDateString = urlParams.getSecionSetting('saa');
		if (addedDateString && typeof addedDateString === 'string' && Date.parse(`${addedDateString}T00:00:00Z`))
		{
			console.log('saa', addedDateString)
			this.state.filters.set('saa', new Date(`${addedDateString}T17:00:00Z`));
		}

		const addedBeforeDateString = urlParams.getSecionSetting('sab');
		if (addedBeforeDateString && typeof addedBeforeDateString === 'string' && Date.parse(`${addedBeforeDateString}T00:00:00Z`))
		{
			console.log('sab', addedBeforeDateString)
			this.state.filters.set('sab', new Date(`${addedBeforeDateString}T17:00:00Z`));
		}

		const types = urlParams.getSecionSetting('types');
		if (types && typeof types === 'string')
		{
			console.log('types', types)
			this.state.filters.set('types', types);
		}

		const tags = urlParams.getSecionSetting('sct');
		if (tags && typeof tags === 'string')
		{
			console.log('tags', tags)
			this.state.filters.set('sct', tags);
		}

		const manufacturer = urlParams.getSecionSetting('smf');
		if (manufacturer !== false)
		{
			console.log('manufacturer urlParams', manufacturer)
			this.state.filters.set('smf', manufacturer);
		}

		const popularityMin = urlParams.getSecionSetting('spmin');
		if (popularityMin !== false)
		{
			console.log('popularityMin urlParams', popularityMin)
			this.state.filters.set('spmin', parseFloat(popularityMin));
		}

		const popularityMax = urlParams.getSecionSetting('spmax');
		if (popularityMax !== false)
		{
			console.log('popularityMax urlParams', popularityMax)
			this.state.filters.set('spmax', parseFloat(popularityMax));
		}

		const itemQuality = urlParams.getSecionSetting('siq');
		if (itemQuality !== false && db.qualities.has(itemQuality))
		{
			console.log('itemQuality urlParams', itemQuality)
			this.state.filters.set('siq', itemQuality);
		}

		const seasonNumber = urlParams.getSecionSetting('ssn');
		if (seasonNumber !== false)
		{
			console.log('seasonNumber urlParams', seasonNumber)
			this.state.filters.set('ssn', parseInt(seasonNumber));
		}

		const visibility = urlParams.getSecionSetting('svis');
		if (visibility)
		{
			console.log('visibility urlParams', visibility)
			this.state.filters.set('svis', parseInt(visibility));
		}

		if (this.state.term || this.state.filters.size) {
			this.searchItems();
		} else {
			this.loadSearchIndex();
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
				class ="inventory-category_wrapper mica_content"
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
							maxlength="64"
							oninput=${(e) => this.input(e?.target?.value ?? '')}
							onkeydown=${async (e) => {
								if (e?.key === 'Enter') await this.submit();
							}}
							value=${this.state.term}
						>
						<button
							class="inventory-search_submit"
							onclick=${async () => await this.submit()}
							aria-label="Submit Search"
						><label for="inventory-search" class="icon-masked icon-search"></label></button>
						${this.renderSuggestions()}
					</div>
					<div class="inventory-search-filter_wrapper">
						<button
							class="inventory-search_toggle-filters"
							id="inventory-search_toggle-filters"
							onclick=${() => this.setState({showFilters: !this.state.showFilters})}
							aria-label="Toggle Search Filter Menu"
							disabled=${this.state.filters.size}
						><div class="icon-masked icon-filter"></div></button>
						${this.renderFilters()}
					</div>
				</div>
				<div class="inventory-search_info">
					${{html: this.state.term && !this?.itemIDs?.size && !this.state.loading ? '<div class="icon-masked icon-alert"></div> No results' : ''}}
				</div>
				${this.renderThrobber()}
				${this.renderPageControls('upper')}
				<ul
					class="inventory-category_items"
				>
					${[...this.items].map(item => HTML.wire()`<li>${{
							any: item.renderIcon('inventory', {itemTypeIcon: true}),
							placeholder: placeholderItem.cloneNode(true)
						}}</li>`)}
				</ul>
				${this.renderPageControls('lower')}
			</div>
		`;
	}

	renderFilters() {
		const filters = this.state.filters;
		if (!this.state.showFilters && !this.state.filters.size)
		{
			return HTML.wire(this, ':filters')`
				<label for="inventory-search_toggle-filters">Filters</label>
			`;
		}
		return HTML.wire(this, ':filters')`
			<ul class="inventory-search-filters">
				<li>
					<button
						onclick=${() => {
							this.state.filters.forEach((value, key) => urlParams.deleteSecionSetting(key));
							this.state.filters.clear();
							this.renderFilters();
						}}
					>
						Clear Filters
					</button>
				</li>
				<li class="filter-input_wrapper">
					<label for="select_season">Season</label>
					<select
						name="select_season"
						id="select_season"
						onchange=${(e) => this.filterSeason(e.target.value)}
					>
						<option value="">Any</option>
						${() => [...db.seasons.entries()].map(season => {
							const [ number, seasonName ] = season;
							const selected = `${filters.get('ssn')}` === `${number}` ? true : false;
							if (selected) return `<option value=${number} selected>${number} - ${seasonName}</option>`
							return `<option value=${number}>${number} - ${seasonName}</option>`
						})}
					</select>
				</li>
				<li class="filter-input_wrapper">
					<label for="select_visibility">Visibility</label>
					<select
						name="select_visibility"
						id="select_visibility"
						onchange=${(e) => this.filterVisibility(e.target.value)}
					>
						<option value="-1">Any</option>
						<option value="0">Hidden</option>
						<option value="1">Visible</option>
						<option value="2">Seen</option>
					</select>
				</li>
				<li class="filter-input_wrapper">
					<label for="date_modified-after">Last Modified After</label>
					<input
						type="date"
						id="date_modified-after"
						onchange=${(e) => this.filterModifiedDate(e.target.value)}
						value=${filters.get('sma')?.toLocaleDateString?.('sv') || ''}
					>
				</li>
				<li class="filter-input_wrapper">
					<label for="date_modified-before">Last Modified Before</label>
					<input
						type="date"
						id="date_modified-before"
						onchange=${(e) => this.filterModifiedBeforeDate(e.target.value)}
						value=${filters.get('smb')?.toLocaleDateString?.('sv') || ''}
					>
				</li>
				<li class="filter-input_wrapper">
					<label for="select_types">Type</label>
					<select
						name="select_types"
						id="select_types"
						onchange=${(e) => this.filterType(e.target.value)}
					>
						<option value="">Any</option>
						${() => [...db.itemTypes.entries()].map(([rawType, niceType]) => `<option value=${rawType}>${niceType}</option>`)}
						${() => [...db.itemTypes.entries()].map(([rawType, niceType]) => {
							const selected = `${filters.get('types')}` === `${rawType}` ? true : false;
							if (selected) return `<option value=${rawType} selected>${niceType}</option>`
							return `<option value=${rawType}>${niceType}</option>`
						})}
					</select>
				</li>
				<li class="filter-input_wrapper">
					<label for="select_tags">Tag</label>
					<select
						name="select_tags"
						id="select_tags"
						onchange=${(e) => this.filterTag(e.target.value)}
					>
						<option value="">Any</option>
						${() => [...db.communityTags].map(tag => {
							const selected = `${filters.get('sct')}` === `${tag}` ? true : false;
							if (selected) return `<option value=${tag} selected>${tag}</option>`
							return `<option value=${tag}>${tag}</option>`
						})}
					</select>
				</li>
				<li class="filter-input_wrapper">
					<label for="select_mf">Manufacturer</label>
					<select
						name="select_mf"
						id="select_mf"
						onchange=${(e) => this.filterManufacturer(e.target.value)}
					>
						<option value="">Any</option>
						${() => [...db.manufacturers].map(mf => {
							const selected = `${filters.get('smf')}` === `${mf[0]}` ? true : false;
							if (selected) return `<option value=${mf[0]} selected>${mf[1]?.ManufacturerName ?? '???'}</option>`
							return `<option value=${mf[0]}>${mf[1]?.ManufacturerName ?? '???'}</option>`
						})}
					</select>
				</li>
				<li class="filter-input_wrapper">
					<label for="select_quality">Quality</label>
					<select
						name="select_quality"
						id="select_quality"
						onchange=${(e) => this.filterQuality(e.target.value)}
					>
						<option value="">Any</option>
						${() => [...db.qualities].map(quality => {
							const selected = `${filters.get('siq')}` === quality ? true : false;
							if (selected) return `<option value=${quality} selected>${quality}</option>`
							return `<option value=${quality}>${quality}</option>`
						})}
					</select>
				</li>
				<li class="filter-input_wrapper">
					<label>Popularity</label>
					<div class="filter-popularity_wrapper">
						<label for="range_pop-min">Min</label>
						<input
							class="filter_popularity"
							id="filter_popularity-min"
							type="number"
							min="0"
							max="100"
							step="0.01"
							placeholder="0"
							value=${parseFloat(filters.get('spmin') || 0) * 100}
							onchange=${(e) => this.filterPopularityCurrentMin(e.target.value)}
						>
					</div>
					<div class="filter-popularity_wrapper">
						<label for="range_pop-max">Max</label>
						<input
							class="filter_popularity"
							id="filter_popularity-max"
							type="number"
							min="0"
							max="100"
							step="0.01"
							placeholder="100"
							value=${parseFloat(filters.get('spmax') || 1) * 100}
							onchange=${(e) => this.filterPopularityCurrentMax(e.target.value)}
						>
					</div>
				</li>
				</li>
				<li class="filter-input_wrapper">
					<label>Popularity Delta</label>
					<div class="filter-popularity_wrapper">
						<label for="range_pop-delta-min">Min</label>
						<input
							class="filter_popularity"
							id="range_pop-delta-min"
							type="number"
							min="0"
							max="100"
							step="0.01"
							placeholder="-100"
							value=${parseFloat(filters.get('spdmin') || 0) * 100}
							onchange=${(e) => this.filterPopularityDeltaMin(e.target.value)}
						>
					</div>
					<div class="filter-popularity_wrapper">
						<label for="range_pop-delta-max">Max</label>
						<input
							class="filter_popularity"
							id="range_pop-delta-max"
							type="number"
							min="0"
							max="100"
							step="0.01"
							placeholder="100"
							value=${parseFloat(filters.get('spdmax') || 1) * 100}
							onchange=${(e) => this.filterPopularityDeltaMax(e.target.value)}
						>
					</div>
				</li>
			</ul>
		`;
	}

	renderThrobber() {
		return HTML.wire(this, ':throbber')`
			<div>${this.state.loading ? throbber.cloneNode(true) : ''}</div>
		`;
	}

	renderSuggestions(suggestions = []) {
		// console.log('suggestions red', suggestions);
		return HTML.wire(this, ':suggestions')`
			<ul class="inventory-search_suggestions">
				${suggestions.map((suggestion, index) => HTML.wire(this, `:sug-${index}`)`<li>
					<button
						onclick=${() => {
							this.setState({term: suggestion});
							this.submit();
						}}
					>
						${suggestion}
					</button>
				</li>`)}
			</ul>
		`;
	}

	input(value) {
		if (value && typeof value === 'string')
		{
			this.state.term = value.toLowerCase();
			if (this.miniSearch && this.state.term.length > 1)
			{
				const suggestions = this.miniSearch.autoSuggest(this.state.term, {
					fuzzy: 0.2
				});
				this.renderSuggestions(suggestions.slice(0, 5).map(res => res?.suggestion));
			}
			return this.state.term;
		}
		if (this.miniSearch) this.renderSuggestions();
		return this.state.term = '';
	}

	async loadSearchIndex() { 
		if (this.miniSearch) return;
		this.state.loading = true;
		this.renderThrobber();

		this.miniSearch = new MiniSearch({
			fields: ['title', 'availability'],
			storeFields: [
				'id',
				'type',
				'visible',
				'added',
				'lastModified',
				'season',
				'manufacturer',
				'quality',
				'availability',
				'tags',
				'popCurrent',
				'popDelta',
				'popRank'
			]
		});

		const path = 'search.json';
		const json = await db.getJSON(path);

		if (json && Array.isArray(json) && json[0].id)
		{
			this.documents = json;
			console.log(`[Inventory.Search.loadSearchIndex] "${this.documents.length}" documents`);
			await this.miniSearch.addAllAsync(this.documents, { chunkSize: 128 });
			console.log(`[Inventory.Search.loadSearchIndex] loaded!`);
			this.state.loading = false;
			this.renderThrobber();
			return this.documents;
		}
	}

	async searchItems() {
		if (!this.miniSearch)
		{
			await this.loadSearchIndex();
		}
		console.log('filters', this.state.filters);
		// if (!this.state.term || typeof this.state.term !== 'string') return;
		this.itemIDs = new Set();
		// console.info(`[search] "${db.index.manifest.size}" items in index`);

		const filterResult = (result) => {
			if (!this.state.filters.size) return true;

			const filters = this.state.filters;

			// TODO support multiple types
			if (filters.has('types') && result?.type)
			{
				if (filters.get('types') !== result.type) return false;
			}

			// Community Tags
			if (filters.has('sct'))
			{
				if (!result.tags) return false;
				const tagArray = result.tags.split(', ');
				if (!tagArray || !tagArray.includes(filters.get('sct'))) return false;
			}

			// Modified After Date
			if (filters.has('sma'))
			{
				const dateString = result?.lastModified;
				if (Date.parse(dateString))
				{
					const lastModified = new Date(dateString);
					if (new Date(filters.get('sma')) > lastModified)
					{
						return false;
					}
				}
			}

			// Modified Before Date
			if (filters.has('smb'))
			{
				const dateString = result?.lastModified;
				if (Date.parse(dateString))
				{
					const lastModified = new Date(dateString);
					if (new Date(filters.get('smb')) < lastModified)
					{
						return false;
					}
				}
			}

			// Added After Date
			if (filters.has('saa'))
			{
				const dateString = result?.added;
				if (Date.parse(dateString))
				{
					const addedDate = new Date(dateString);
					if (new Date(filters.get('saa')) > addedDate)
					{
						return false;
					}
				}
			}

			// Added Before Date
			if (filters.has('sab'))
			{
				const dateString = result?.added;
				if (Date.parse(dateString))
				{
					const addedDate = new Date(dateString);
					if (new Date(filters.get('sab')) < addedDate)
					{
						return false;
					}
				}
			}

			// Manufacturer
			if (filters.has('smf'))
			{
				if (typeof result.manufacturer === 'undefined') return false;
				if (parseInt(filters.get('smf')) !== parseInt(result.manufacturer)) return false;
				// console.log('manufilter', parseInt(filters.get('smf')), result.manufacturer);
			}

			// Current Popularity Max
			if (filters.has('spmax'))
			{
				if (typeof result.popCurrent === 'undefined') return false;
				if (parseFloat(result.popCurrent) > parseFloat(filters.get('spmax'))) return false;
				// console.log('pop current max', parseFloat(filters.get('spmax')), result.popCurrent);
			}

			// Current Popularity Min
			if (filters.has('spmin'))
			{
				if (typeof result.popCurrent === 'undefined') return false;
				if (parseFloat(result.popCurrent) < parseFloat(filters.get('spmin'))) return false;
				// console.log('pop current min', parseFloat(filters.get('spmin')), result.popCurrent);
			}

			// Current Popularity Delta Max
			if (filters.has('spdmax'))
			{
				if (typeof result.popDelta === 'undefined') return false;
				if (Math.abs(parseFloat(result.popDelta)) > parseFloat(filters.get('spdmax'))) return false;
				// console.log('pop current max', parseFloat(filters.get('spmax')), result.popCurrent);
			}

			// Current Popularity Delta Min
			if (filters.has('spdmin'))
			{
				if (typeof result.popDelta === 'undefined') return false;
				if (Math.abs(parseFloat(result.popDelta)) < parseFloat(filters.get('spdmin'))) return false;
				// console.log('pop current min', parseFloat(filters.get('spmin')), result.popCurrent);
			}

			// Quality
			if (filters.has('siq'))
			{
				if (typeof result.quality === 'undefined') return false;
				if (filters.get('siq') !== result.quality) return false;
				// console.log('Quality', filters.get('siq'), result.manufacturer);
			}

			// Season
			if (filters.has('ssn'))
			{
				if (typeof result.season === 'undefined') return false;
				if (parseInt(filters.get('ssn')) !== parseInt(result.season)) return false;
				// console.log('manufilter', parseInt(filters.get('ssn')), result.season);
			}

			// Visibility
			if (filters.has('svis'))
			{
				const status = parseInt(result?.visible ?? 0);
				if (parseInt(filters.get('svis')) !== status) return false;
			}

			// Default
			return true;
		}

		if (this.state.term && db.index.manifest.has(this.state.term))
		{
			console.log(`[Inventory.Search] Getting item ID from index`, this.state.term);
			// Short circuit for ID lookups
			const entry = db.index.manifest.get(this.state.term);
			this.itemIDs.add(entry.name);
		}
			else if (this.state.term)
		{
			console.log(`[Inventory.Search] Searching with MiniSearch`, this.state.term);
			const results = this.miniSearch.search(this.state.term, {
				boost: { title: 2 },
				fuzzy: 0.2,
				prefix: true,
				filter: (result) => filterResult(result)
			});
			console.log('miniSearch res', results);
			results.forEach(result => this.itemIDs.add(result.id));
		}
			else if (!this.state.term && this.state.filters.size)
		{
			console.log(`[Inventory.Search] Searching raw documents with filters`, this.state.filters.size);
			this.documents.forEach(result => {
				if (filterResult(result)) this.itemIDs.add(result.id);
			})
		}

		console.info(`[search] Found "${this.itemIDs.size}" items`);
		if (this.itemIDs.size)
		{
			this.itemIDs = this.itemIDs;
			this.getCurrentItemPage();
			this.render();
			return;
		}

		this.items = new Set();
		// this.sortItemIDs();
		this.render();
	}

	async submit() {
		if ((!this.state.term || typeof this.state.term !== 'string') && !this.state.filters.size)
		{
			this.items = new Set();
			this.itemIDs = new Set();
			urlParams.deleteSecionSetting('s');
			this.render();
			return;
		}
		console.log('submit', this.state.term, this.state.filters);
		this.state.page = 0;
		urlParams.setSecionSetting('s', this.state.term);
		await this.searchItems();
		this.render();

		inventory.scrollIntoView();
	}

	sortItemIDs() {
		// TODO this is really bad
		if (this.items.length)
		{
			this.items = [];
			this.itemIDs = this.itemIDs;
			this.getCurrentItemPage();
			this.render();
		}
	}

	filterType(value) {
		const filterKey = 'types';
		if (!value && this.state.filters.has(filterKey))
		{
			this.state.filters.delete(filterKey);
			urlParams.deleteSecionSetting(filterKey);
			return;
		}
		if (!value || typeof value !== 'string') return;
		console.log('filterType', value);

		this.state.filters.set(filterKey, value);
		urlParams.setSecionSetting(filterKey, value);
	}

	filterTag(value) {
		const filterKey = 'sct';
		if (!value && this.state.filters.has(filterKey))
		{
			this.state.filters.delete(filterKey);
			urlParams.deleteSecionSetting(filterKey);
			return;
		}
		if (!value || typeof value !== 'string') return;
		console.log('filterTag', value);

		this.state.filters.set(filterKey, value);
		urlParams.setSecionSetting(filterKey, value);
	}

	filterModifiedDate(dateString) {
		const filterKey = 'sma';
		console.log('date', dateString)
		if (!dateString || !Date.parse(dateString))
		{
			// console.log('del', dateString)
			if (this.state.filters.has(filterKey)) this.state.filters.delete(filterKey);
			urlParams.deleteSecionSetting(filterKey);
			return;
		}
		const date = new Date(`${dateString}T00:00:00Z`);
		if (!date) return;
		console.log('datep', date)
		// date.setDate(date.getDate() + 1);
		// console.log(date);
		this.state.filters.set(filterKey, date);
		urlParams.setSecionSetting(filterKey, `${dateString}`);
	}

	filterModifiedBeforeDate(dateString) {
		const filterKey = 'smb';
		console.log('date', dateString)
		if (!dateString || !Date.parse(dateString))
		{
			// console.log('del', dateString)
			if (this.state.filters.has('modifiedBeforeDate')) this.state.filters.delete('modifiedBeforeDate');
			urlParams.deleteSecionSetting('smb');
			return;
		}
		const date = new Date(`${dateString}T00:00:00Z`);
		if (!date) return;
		console.log('datep', date)
		// date.setDate(date.getDate() + 1);
		// console.log(date);
		this.state.filters.set('modifiedBeforeDate', date);
		urlParams.setSecionSetting('smb', `${dateString}`);
	}

	filterAddedDate(dateString) {
		console.log('filterAddedDate', dateString)
		const filterKey = 'saa';
		if (!dateString || !Date.parse(dateString))
		{
			// console.log('del', dateString)
			if (this.state.filters.has(filterKey)) this.state.filters.delete(filterKey);
			urlParams.deleteSecionSetting(filterKey);
			return;
		}
		const date = new Date(`${dateString}T00:00:00Z`);
		if (!date) return;
		console.log('datep', date)
		// date.setDate(date.getDate() + 1);
		// console.log(date);
		this.state.filters.set(filterKey, date);
		urlParams.setSecionSetting(filterKey, `${dateString}`);
	}

	filterAddedBeforeDate(dateString) {
		console.log('filterAddedBeforeDate', dateString)
		const filterKey = 'sab';
		if (!dateString || !Date.parse(dateString))
		{
			// console.log('del', dateString)
			if (this.state.filters.has(filterKey)) this.state.filters.delete(filterKey);
			urlParams.deleteSecionSetting(filterParam);
			return;
		}
		const date = new Date(`${dateString}T00:00:00Z`);
		if (!date) return;
		console.log('datep', date)
		// date.setDate(date.getDate() + 1);
		// console.log(date);
		this.state.filters.set(filterKey, date);
		urlParams.setSecionSetting(filterKey, `${dateString}`);
	}

	filterManufacturer(value) {
		const filterKey = 'smf';
		if (!value && this.state.filters.has(filterKey))
		{
			this.state.filters.delete(filterKey);
			urlParams.deleteSecionSetting(filterKey);
			return;
		}
		const number = parseInt(value);
		if (typeof number !== 'number') return;
		console.log('filterManufacturer', number);

		this.state.filters.set(filterKey, number);
		urlParams.setSecionSetting(filterKey, `${number}`);
	}

	filterPopularityCurrentMax(value) {
		const filterKey = 'spmax';
		if (!value || value > 1 && this.state.filters.has(filterKey))
		{
			this.state.filters.delete(filterKey);
			urlParams.deleteSecionSetting(filterKey);
			return;
		}
		const scalar = parseFloat(value) / 100;
		console.log('filterPopularityCurrentMax', scalar);

		this.state.filters.set(filterKey, scalar);
		urlParams.setSecionSetting(filterKey, `${scalar}`);
	}

	filterPopularityCurrentMin(value) {
		const filterKey = 'spmin';
		if (!value || value < 0.0001 && this.state.filters.has(filterKey))
		{
			this.state.filters.delete(filterKey);
			urlParams.deleteSecionSetting(filterKey);
			return;
		}
		const scalar = parseFloat(value) / 100;
		console.log('filterPopularityCurrentMax', scalar);

		this.state.filters.set(filterKey, scalar);
		urlParams.setSecionSetting(filterKey, `${scalar}`);
	}

	filterPopularityDeltaMax(value) {
		const filterKey = 'spdmax';
		if (value === undefined && this.state.filters.has(filterKey))
		{
			this.state.filters.delete(filterKey);
			urlParams.deleteSecionSetting(filterKey);
			return;
		}
		const scalar = parseFloat(value) / 100;
		console.log('filterPopularityDeltaMax', scalar);

		this.state.filters.set(filterKey, scalar);
		urlParams.setSecionSetting(filterKey, `${scalar}`);
	}

	filterPopularityDeltaMin(value) {
		const filterKey = 'spdmin';
		if (value === undefined && this.state.filters.has(filterKey))
		{
			this.state.filters.delete(filterKey);
			urlParams.deleteSecionSetting(filterKey);
			return;
		}
		const scalar = parseFloat(value) / 100;
		console.log('filterPopularityDeltaMin', scalar);

		this.state.filters.set(filterKey, scalar);
		urlParams.setSecionSetting(filterKey, `${scalar}`);
	}

	filterQuality(value) {
		const filterKey = 'siq';
		if (!value && this.state.filters.has(filterKey))
		{
			this.state.filters.delete(filterKey);
			urlParams.deleteSecionSetting(filterKey);
			return;
		}
		if (!db.qualities.has(value)) return;
		console.log('filterQuality', value);

		this.state.filters.set(filterKey, value);
		urlParams.setSecionSetting(filterKey, `${value}`);
	}

	filterSeason(value) {
		const filterKey = 'ssn';
		if (!value && this.state.filters.has(filterKey))
		{
			this.state.filters.delete(filterKey);
			urlParams.deleteSecionSetting(filterKey);
			return;
		}
		const number = parseInt(value);
		if (typeof number !== 'number' || !db.seasons.has(number)) return;
		console.log('filterSeason', number);

		this.state.filters.set(filterKey, number);
		urlParams.setSecionSetting(filterKey, `${number}`);
	}

	filterVisibility(value) {
		const filterKey = 'svis';
		if ((value === undefined || value < 0) && this.state.filters.has(filterKey))
		{
			this.state.filters.delete(filterKey);
			urlParams.deleteSecionSetting(filterKey);
			return;
		}
		const number = parseInt(value);
		console.log('filterVisibility', number);

		this.state.filters.set(filterKey, number);
		urlParams.setSecionSetting(filterKey, `${number}`);
	}

	focus() {
		const input = document.querySelector(`#inventory-search`);
		if (input) input.focus();
	}
}