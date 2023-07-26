import { Component } from 'component';
import { emitter } from 'eventEmitter';
import { HTML, throbber } from 'lib/HTML';
import { MobileMicaMenu } from 'ui/mica';
import { modalConstructor } from 'ui/modal';
import { filenameFromPath } from 'utils/paths.js';
import { detailPanel } from 'pages/discovery/detailPanel';
import { db } from 'db';

import './index.css';

export const placeholderUGCResult = HTML.wire()`
	<button
		class='ugc_item'
		title='Loading Result...'
	>
		<span>...</span>
	</button>
`;

export class Discovery extends Component {
	async init() {
		this.search = new UGCSearch();
		this.manifest = new UGCManifest();
		this.recommended = new RecommendedProject();

		this.state.view = this.search;

		const { pathname } = new URL(window.location);
		const pathParts = pathname.split('/');
		console.warn(pathParts)
		if (pathParts?.[2]?.startsWith('recommended')) this.state.view = this.recommended;

		this.render();
		await discovery.loadUgcStats();

		if (this.state.view === this.search) this.search.submit();
	}

	get defaultState() {
		return {
			// view: this.learn
		};
	}

	render() {
		return this.html`
		<div class="mica_viewer discovery-parent" id="discovery-parent">
			<header class="mica_header-strip">
				<h2>Discovery</h2>
				<div class="discovery-categories">
					${this.renderRecommendedButton()}
					${this.renderUgcButton()}
				</div>
			</header>
			<div class="main-content" id="discovery-content">
				${this.view}
			</div>
		</div>
		`;
	}

	renderManifestButton() {
		if (this.state?.view.title === 'Manifest') return '';
		return HTML.wire(this, ':manifestButton')`
			<button
				onclick=${() => this.setState({ view: this.manifest })}
			>
				Manifest
			</button>
		`;
	}

	renderRecommendedButton() {
		if (this.state?.view.title === 'Recommended') return '';
		return HTML.wire(this, ':manifestButton')`
			<button
				onclick=${() => this.navigatePage(this.recommended)}
			>
				Recommended
			</button>
		`;
	}

	renderUgcButton() {
		if (this.state?.view.title === 'Search') return '';
		return HTML.wire(this, ':manifestButton')`
			<button
				onclick=${() => this.navigatePage(this.search)}
			>
				UGC
			</button>
		`;
	}

	get view() {
		return this.state.view?.render?.() ?? '...';
	}

	navigatePage(view) {
		this.setState({ view });
		view.init();
	}
}

class DiscoveryManager {
	get assetKinds() {
		return this._assetKindMap ??= new Map([
			['Unknown', 'Unknown'],
			['Film', 'Film'],
			['Map', 'Map'],
			['Playlist', 'Playlist'],
			['Prefab', 'Prefab'],
			['TestAsset', 'Test Asset'],
			['UgcGameVariant', 'Mode Variant'],
			['MapModePair', 'Map-Mode Pair'],
			['Project', 'Project'],
			['Manifest', 'Manifest'],
			['EngineGameVariant', 'Engine Game Variant']
		]);
	}

	get assetKindArray() {
		return this._assetKindArray ??= [...this.assetKinds.keys()];
	}

	getAssetKindByIndex(index) {
		return this.assetKindArray?.[index] ?? '???';
	}

	getAssetKindIndexByName(string) {
		return this.assetKindArray?.indexOf(`${string}`) ?? 2;
	}

	getAssetStorageTypeByIndex(index) {
		// stubbed until all are mapped
		if (index === 2) return 'maps';
		if (index === 4) return 'prefabs';
		if (index === 6) return 'ugcGameVariants';
	}

	get assetSorts() {
		return this._assetSorts ??= new Map([
			['Name', 'Name'],
			['Likes', 'Likes'],
			['PlaysRecent', 'Plays, Recent'],
			['PlaysAllTime', 'Plays, All Time'],
			['NumberOfObjects', 'Number Of Objects'],
			['NumberOfRatings', 'Number Of Ratings'],
			['ParentAssetCount', 'Parent Asset Count'],
			['AverageRating', 'Average Rating'],
			['DateCreatedUtc', 'Date Created'],
			['DateModifiedUtc', 'Date Modified'],
			['DatePublishedUtc', 'Date Published'],
			['Bookmarks', 'Bookmarks']
		]);
	}

	get assets() {
		return this._assets ??= new Map();
	}

	registerAsset(nameVersion, ugcAsset) {
		this.assets.set(nameVersion, ugcAsset);
	}

	async getAsset({ kind, id, version }) {
		const nameVersion = `${id}/${version}`;
		if (this.assets.has(nameVersion)) return this.assets.get(nameVersion);

		const res = await this.fetchAsset({ kind, id, version });
		if (res) return new UGCAsset({ asset: res });
	}

	async fetchAsset({ kind, id, version }) {
		try {
			const url = new URL(`/api/${this.getAssetStorageTypeByIndex(kind)}/${id}/${version}`, `https://${window.location.host.replace('beta.', '')}`);

			const res = await fetch(url, {
				headers: {
					'Accept': 'application/json'
				}
			});

			if (!res || !res.ok)
			{
				console.error(`[DiscoveryManager.fetchAsset] Failed to fetch`, res);
				throw new Error(res.status);
			}

			const json = await res.json();
			console.log('res!', json);
		} catch (error) {
			console.error(`[DiscoveryManager.fetchAsset]`, error);
		}
	}

	get host() {
		return this._host ?? 'blobs-infiniteugc.svc.halowaypoint.com';
	}

	async loadUgcStats() {
		try {
			// TODO This should instead be loaded server side in the future
			const res = await db.getJSON(`/ugc/stats_maps.json`);
			if (!res) throw new Error(`Failed to fetch`, res);

			if (res && Array.isArray(res?.assets))
			{
				this._ugcStats = new Map(res.assets);
				console.log(`[DiscoveryManager.loadUgcStats] "${this._ugcStats.size}" asset stats loaded!`)
			}
		} catch (error) {
			console.log(`[DiscoveryManager.loadUgcStats]`, error)
		}
	}

	getAssetStats(assetId) {
		if (!this._ugcStats || !this._ugcStats.has(assetId)) return;
		return this._ugcStats.get(assetId);
	}
}

export const discovery = new DiscoveryManager();

class UGCSearch extends Component {
	constructor() {
		super();
		this.resultsView = new UGCResults();
	}

	get title() {
		return 'Search';
	}

	get defaultState() {
		return {
			maxPageSize: 24,
			pageSize: 24,
			page: 0,
			estimatedTotal: 0
		};
	}

	init() {
		console.log('init', this.title);
		history.pushState(null, null, `/discovery`);
		if (!this.resultsView.state.results.length) this.submit();
	}

	render() {
		return this.html`
			<div class="ugc_search_wrapper" id="ugc-search">
				${this.renderSearchOptions()}
				<span class="results-info">Results // ${this.state.estimatedTotal}${this.state.noResults ? ' // No results for last search!' : ''}</span>
				${this.renderPageControls('upper')}
				${this.resultsView.render()}
				${this.renderPageControls('lower')}
			</div>
		`;
	}

	renderSearchOptions() {
		return HTML.wire(this, ':search')`
		<div class="ugc_search-options">
			<div class="ugc_search-term_wrapper">
				<button
					class="ugc_search_submit"
					onclick=${() => this.submit()}
				>
					<span class="icon-masked icon-search"></span>
				</button>
				<input
					id="ugc_search-term"
					type="search"
					placeholder="Search..."
					onchange=${(e) => this.setQuery('term', e.target.value)}
					value=${this.getQuery('term') ?? ''}
				>
			</div>
			<div class="option-group">
				<div class="option">
					<button
						onclick=${() => this.setAssetKind(2)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(2) ? '' : 'un'}checked`}></div>Maps
					</button>
				</div>
				<div class="option">
					<button
						onclick=${() => this.setAssetKind(6)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(6) ? '' : 'un'}checked`}></div>Modes
					</button>
				</div>
				<div class="option">
					<button
						onclick=${() => this.setAssetKind(4)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(4) ? '' : 'un'}checked`}></div>Prefabs
					</button>
				</div>
			</div>
			<div class="option">
				<label for="ugc_search-sort">Sort</label>
				<select
					id="ugc_search-sort"
					onchange=${(e) => this.setQuery('sort', e.target.value)}
				>
					${() => [...discovery.assetSorts.entries()].map(([value, name]) => {
						const currentQuery = this.getQuery('sort');
						const selected = currentQuery && currentQuery === value ? true : false;
						if (selected) return `<option value=${value} selected>${name}</option>`
						return `<option value=${value}>${name}</option>`
					})}
				</select>
			</div>
			<div class="option">
				<label for="ugc_search-sortOrder">Order</label>
				<select
					id="ugc_search-sortOrder"
					onchange=${(e) => this.setQuery('order', e.target.value)}
				>
					<option value="desc">Descending</option>
					<option value="asc">Ascending</option>
				</select>
			</div>
			<div class="option">
				<label for="ugc_search-author">Author</label>
				<input
					id="ugc_search-author"
					type="text"
					placeholder="gamertag..."
					onchange=${(e) => this.setQuery('author', e.target.value)}
					value=${this.getQuery('author') ?? ''}
				>
			</div>
			<div class="option">
				<label for="ugc_search-tag">Tag</label>
				<input
					id="ugc_search-tag"
					type="text"
					onchange=${(e) => this.setQuery('tag', e.target.value)}
					value=${this.getQuery('tag') ?? ''}
				>
			</div>
		</div>
		`;
			// <div class="option">
			// 	<label for="ugc_search-sortOrder">Date Published</label>
			// 	TODO date range
			// </div>
	}

	renderPageControls(id = upper) {
		if (this.pages < 2) return '';
		return HTML.wire(this, `:${id}`)`
			<div class="page-controls_wrapper">
				<div class="page-loading">${id === 'upper' && this.state.loading ? throbber.cloneNode(true) : ''}</div>
				<button
					onclick=${() => this.previousPage()}
					disabled=${(this.pageNumber === 0) || this.state.loading || this.state.rateLimit}
				><div class=${`icon-masked icon-arrow-left`}></div>Prev</button>
				<span>${this.pageNumber+1} of ${this.pages}</span>
				<button
					onclick=${() => this.nextPage()}
					disabled=${(this.pageNumber + 1 === this.pages) || this.state.loading || this.state.rateLimit}
				>Next<div class=${`icon-masked icon-arrow-right`}></div></button>
			</div>
		`;
	}

	get pageNumber() {
		return this.state?.page ?? 0;
	}

	get pageLength() {
		return this.state?.pageSize ?? 24;
	}

	get pages() {
		if (!this.state.estimatedTotal) return 0;
		return Math.ceil(this.state.estimatedTotal / this.state.pageSize);
	}

	async goToPage(requestedPageNumber) {
		let page = parseInt(requestedPageNumber);
		if (page < 1) page = 0;
		if (page > this.pages) page = this.pages;
		const results = await this.search({ page });
		if (results)
		{
			this.resultsView.init(results);
			this.state.page = page;
		}
		this.render();
	}

	async nextPage() {
		if (this.pageNumber === this.pages - 1) return;
		this.scrollIntoView();
		await this.goToPage(this.pageNumber + 1);
	}

	async previousPage() {
		if (this.pageNumber === 0) return;
		this.scrollIntoView();
		await this.goToPage(this.pageNumber - 1);
	}

	get query() {
		// return this.state.query ??= new URLSearchParams(`start=${this.state.pageSize * this.state.page}&count=${this.state.pageSize * (this.state.page + 1)}&include-times=true&order=desc&sort=PlaysRecent`);
		// return this.state.query ??= new URLSearchParams(`order=desc&sort=PlaysRecent`);
		if (this.state.query) return this.state.query;

		const params = new URLSearchParams(window.location.search);
		if (!params.size) return (this.state.query = new URLSearchParams(`order=desc&sort=PlaysRecent`));

		const query = new URLSearchParams(`order=desc&sort=PlaysRecent`);

		if (params.has('assetKind')) this.queryAssetKinds.clear();

		for (const [key, value] of params.entries())
		{
			switch (key) {
				case 'order':
					query.set('order', value.substring(0, 8));
					break;
				case 'sort':
					if (discovery.assetSorts.has(value)) query.set('sort', value);
					break;
				case 'term':
					query.set('term', value.substring(0, 32));
					break;
				case 'assetKind':
					if (discovery.assetKinds.has(value))
					{
						this.queryAssetKinds.add(discovery.getAssetKindIndexByName(value));
					}
					break;
				case 'author':
					query.set('author', value.substring(0, 16));
					break;
				case 'tag':
					query.append('tag', value.substring(0, 24));
					break;
				default:
					break;
			}
		}

		return (this.state.query = query);
	}

	get queryAssetKinds() { 
		return this._queryAssetKinds ??= new Set([2]);
	}

	get assetKindString() {
		return [...this.queryAssetKinds].map(index => `assetKind=${discovery.getAssetKindByIndex(index)}`).join('&');
	}

	updatePageControls() {
		this.renderPageControls('upper');
		this.renderPageControls('lower');
	}

	async controlsRateLimit() {
		this.state.rateLimit = true;
		this.updatePageControls();
		setTimeout(() => {
			this.state.rateLimit = false;
			this.updatePageControls();
		}, 1200);
	}

	async search({ page = this.state.page} = {}) {
		if (this.state.rateLimit) return;
		// this.setQueryPaging();
		this.state.loading = true;
		this.controlsRateLimit();

		const query = new URLSearchParams(`page=${page}&${this.query.toString()}&${this.assetKindString}`);
		const response = await fetch(new URL(`/api/discovery/search?${query.toString()}`, `https://${window.location.host.replace('beta.', '')}`));

		this.state.loading = false;

		if (response && response.ok)
		{
			const json = await response.json();
			history.replaceState({}, `Cylix Guide Discovery`, `?${new URLSearchParams(`${this.query.toString()}&${this.assetKindString}`).toString()}`);
			return json;
		}
	}

	async submit() {
		this.state.page = 0;
		const results = await this.search();
		// const results = sampleSearch;
		if (results && results?.Results.length)
		{
			this.state.noResults = false;
			this.state.estimatedTotal = parseInt(results.EstimatedTotal);
			this.resultsView.init(results);
			this.render();
		} else {
			this.setState({ noResults: true });
		}
	}

	scrollIntoView() {
		const el = document.querySelector(`#ugc-search`);
		if (el)
		{
			el.scrollIntoView();
		}
	}

	setQueryPaging(pageNumber = this.pageNumber) {
		this.setQuery('start', pageNumber * this.pageLength);
		this.setQuery('count', this.pageLength);
	}

	setQuery(queryName, queryValue) {
		const query = this.query;

		if (!queryValue && query.has(queryName))
		{
			query.delete(queryName);
		}

		console.log(`[UGCSearch.setQuery]`, queryName, queryValue);
		query.set(queryName, queryValue);
	}

	getQuery(queryName) {
		if (this.query.has(queryName)) return this.query.get(queryName);
	}

	setAssetKind(index) {
		if (index)
		{
			if (this.queryAssetKinds.has(index))
			{
				this.queryAssetKinds.delete(index);
			} else {
				this.queryAssetKinds.add(index);
			}
			this.renderSearchOptions();
		}
	}

	setAuthor(gamertag) {
		if (!gamertag) this.state.author = '';
		this.state.author = `${gamertag}`;
	}
}

class UGCResults extends Component {
	init(response) {
		this.response = response;
		if (response?.Results.length) this.state.results = response.Results.slice(0, this.state.pageSize);
		// this.render();
	}

	get defaultState() {
		return {
			pageSize: 100,
			results: []
		};
	}

	render() {
		console.log('UGCResults.rend', this.state.results)
		return this.html`
			<div class="ugc_results_wrapper">
				<ul class="ugc_results">
					${this.state.results.length ? this.currentPage.map(result => HTML.wire()`<li>
						${{
							any: result.render('results'),
							placeholder: placeholderUGCResult.cloneNode(true)
						}}
					</li>`) : throbber.cloneNode(true)}
				</ul>
			</div>
		`;
	}

	get currentPage() {
		const results = this.state.results;
		return results.map(result => new UGCAsset({ result }));
	}
}

class UGCAsset extends Component {
	constructor({ result, asset }) {
		super();
		if (result) this.asset = result;
		if (asset) this.asset = asset;

		discovery.registerAsset(`${this.id}/${this.version}`, this);
	}

	render() {
		// <div
		// 	class="thumbnail"
		// 	style=${{backgroundImage: `url(${this.thumbnail})`}}
		// ></div>
		return this.html`
			<button
				class=${`ugc_item${this.is343 ? ' is343' : ''}${this.isRecommended ? ' isRec' : ''}`}
				onclick=${() => this.displayDetails()}
				title=${this.title}
			>
				<img
					class="thumbnail"
					src=${this.state.brokenImage ? this.defaultThumbnail : this.thumbnail}
					style=${{opacity: this.state.loadedImage ? 1 : 0}}
					width="256"
					height="144"
					onerror=${() => this.setState({ brokenImage: true })}
					onload=${() => this.setState({ loadedImage: true })}
				>
				<div class="titles">
					<div class=${`icon-masked icon-ugc-${this.assetKindIndex}`}></div>
					<span class="name">${this.title}</span>
				</div>
				<div class="badges">
					${{
						html: this.is343 ? `<span class="badge-343i">343</span>` : ''
					}}
				</div>
			</button>
		`;
	}

	displayDetails() {
		detailPanel.displayAsset(this);
	}

	get id() {
		return this.asset.AssetId;
	}

	get version() {
		return this.asset?.AssetVersionId ?? this.asset?.VersionId;
	}

	get cylixURI() {
		return `ugc/${this.cylixUGCKind}/${this?.id ?? '0000'}/${this?.version ?? '0000'}`
	}

	get cylixUGCKind() {
		const index = this.assetKindIndex;
		if (index === 2) return 'map';
		if (index === 4) return 'prefab';
		if (index === 6) return 'mode';
		return 'asset';
	}

	get waypointURI() {
		return `/hi/${discovery.getAssetStorageTypeByIndex(this.assetKindIndex)}/${this?.id}/versions/${this?.version}`;
	}

	get waypointBrowserURI() {
		return `/halo-infinite/ugc/${this.cylixUGCKind}s/${this?.id}`;
	}

	get title() {
		return this.asset?.Name ?? this.asset?.PublicName ?? '???';
	}

	get description() {
		return this.asset?.Description ?? '...';
	}

	get originalAuthor() {
		return this.asset?.OriginalAuthor ??this.asset?.Admin ?? '???';
	}

	get contributors() {
		return [...new Set(this.asset?.Contributors || [])];
	}

	get assetKind() {
		return discovery.getAssetKindByIndex(this.asset?.AssetKind ?? this.asset?.AssetHome);
	}

	get assetKindIndex() {
		return this.asset?.AssetKind ?? this.asset?.AssetHome ?? 0;
	}

	get defaultThumbnail() {
		return 'https://hi.cylix.guide/ugc/images/default_sm.jpg';
	}

	get defaultImage() {
		return 'https://hi.cylix.guide/ugc/images/default.jpg';
	}

	get thumbnail() {
		return this.asset?.ThumbnailUrl ?? `${this.getAssetRelativeUrl('images/thumbnail.jpg')}`;
	}

	get hero() {
		return this.getImageBlob('hero');
	}

	get screenshot() {
		return this.getImageBlob('screenshot1');
	}

	get mainImage() {
		if (this.assetKindIndex === 2) return this.hero;
		if (this.assetKindIndex === 4) return this.hero;
		if (this.assetKindIndex === 6) return this.screenshot;
		return this.thumbnail;
	}

	getImageBlob(filename = 'thumbnail') {
		// return `https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/${this.id}/${this.version}/images/${filename}.png`;
		return `https://${discovery.host}/ugcstorage/${this.cylixUGCKind}/${this.id}/${this.version}/images/${filename}.jpg`;
	}

	get averageRating() {
		return parseFloat(this.asset?.AverageRating ?? this.asset?.AssetStats?.AverageRating ?? 0).toFixed(2);
	}

	get ratingCount() {
		return parseInt(this.asset?.NumberOfRatings ?? 0);
	}

	get bookmarks() {
		return this.likes || parseInt(this.asset.Bookmarks ?? this.asset?.AssetStats?.Favorites ?? 0);
	}

	get likes() {
		return parseInt(this.asset?.Likes ?? this.asset?.AssetStats?.Favorites ?? 0);
	}

	get playsAllTime() {
		return parseInt(this.asset?.PlaysAllTime ?? this.asset?.AssetStats?.PlaysAllTime ?? 0);
	}

	get playsRecent() {
		return parseInt(this.asset?.PlaysRecent ?? this.asset?.AssetStats?.PlaysRecent ?? 0);
	}

	get tags() {
		return [...new Set(this.asset?.Tags || [])];
	}

	get objectCount() {
		return parseInt(this.asset?.NumberOfObjects || 0);
	}

	get is343() {
		return this._is343 ??= this.asset?.OriginalAuthor?.includes('[343]') || this.asset?.OriginalAuthor?.startsWith('2');
	}

	get isRecommended() {
		return this._isRecommended ??= (this.asset?.ParentAssetCount ?? this.asset?.AssetStats?.ParentAssetCount > 0) && !this.is343;
	}

	get dateModified() {
		const string = this.asset?.DateModifiedUtc?.ISO8601Date;
		if (string && Date.parse(string)) return new Date(string);
		return new Date('2021/11/15');
	}

	get dateCreated() {
		const string = this.asset?.DateCreatedUtc?.ISO8601Date;
		if (string && Date.parse(string)) return new Date(string);
		return new Date('2021/11/15');
	}

	get datePublished() {
		const string = this.asset?.DatePublishedUtc?.ISO8601Date;
		if (string && Date.parse(string)) return new Date(string);
		return new Date('2021/11/15');
	}

	get lastModifiedVersion() {
		if (this.asset?.VersionNumber) return `Version ${this.asset.VersionNumber}`;
		return this.dateModified.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
	}

	get hasNodeGraph() {
		if (this.asset.HasNodeGraph === true) return true;
		return false;
	}

	get isCopyProtected() {
		if (this.asset.ReadOnlyClones === true) return true;
		return false;
	}

	getAssetRelativeUrl(path) {
		const prefix = this.asset?.Files?.Prefix;
		return `${prefix}${path}`;
	}

	get historyPlays() {
		if (this._historyPlays) return this._historyPlays;
		const history = discovery.getAssetStats(this.id);
		if (history) return (this._historyPlays = history);
		return [];
	}
}

class UGCManifest extends UGCSearch {
	constructor() {
		super();
		this.resultsView = new ManifestView();
	}

	get title() {
		return 'Manifest';
	}

	renderSearchOptions() {
		if (!this.manifest) this.loadManifest();
		return HTML.wire(this, ':search')`
		<div class="ugc_search-options">
			<div class="option">
				<button 
					class="hi-box"
					onclick=${() => modalConstructor.showView(this.renderLoadModal())}
				>
					Load Manifest
				</button>
			</div>
			<div class="option-group">
				<div class="option">
					<button
						onclick=${() => this.setAssetKind(2)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(2) ? '' : 'un'}checked`}></div>Maps
					</button>
				</div>
				<div class="option">
					<button
						onclick=${() => this.setAssetKind(6)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(6) ? '' : 'un'}checked`}></div>Modes
					</button>
				</div>
				<div class="option">
					<button
						onclick=${() => this.setAssetKind(10)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(10) ? '' : 'un'}checked`}></div>Engines
					</button>
				</div>
			</div>
			<div class="option">
				<label for="ugc_search-term">Filter</label>
				<input
					id="ugc_search-term"
					type="text"
					placeholder="term"
					onchange=${(e) => this.setFilterTerm(e.target.value)}
				>
			</div>
		</div>
		`;
	}

	renderLoadModal() {
		return HTML.wire(this, ':loadModal')`
			<div class="ugc_load-modal">
				<div>
					<label for="file-manifest">manifest.json file to load:</label><br/>
					<input
						type="file"
						id="file-manifest"
						onchange=${(e) => this.loadCustomManifest(e)}
					/>
				</div>
				<ul>
					<li>
						<label for="manifest-build">Branch</label>
						<span id="manifest-build">${this?.manifest?.CustomData?.BranchName}</span>
					</li>
					<li>
						<label for="manifest-build">Build</label>
						<span id="manifest-build">${this?.manifest?.CustomData?.BuildNumber}</span>
					</li>
					<li>
						<label for="manifest-build">Build GUID</label>
						<span id="manifest-build">${this?.manifest?.CustomData?.BuildGuid}</span>
					</li>
					<li>
						<label for="manifest-build">Maps</label>
						<span id="manifest-build">${this?.manifest?.MapLinks.length}</span>
					</li>
					<li>
						<label for="manifest-build">Modes</label>
						<span id="manifest-build">${this?.manifest?.UgcGameVariantLinks.length}</span>
					</li>
					<li>
						<label for="manifest-build">Engines</label>
						<span id="manifest-build">${this?.manifest?.EngineGameVariantLinks.length}</span>
					</li>
					<li>
						<label for="manifest-build">Host</label>
						<span id="manifest-build">${this.host}</span>
					</li>
				</ul>
				<div>
					<label for="file-manifest">manifest.json file to dif:</label><br/>
					<input
						type="file"
						id="file-manifest"
						onchange=${(e) => this.loadCustomManifestDif(e)}
					/>
				</div>
			</div>
		`;
	}

	get host() {
		return this._host ??= (() => {
			const url = new URL(this.manifest.Files.Prefix);
			discovery._host = url.host;
			return url.host;
		})
	}

	async search({ page = 0 } = {}) {
		const assets = this.currentAssetKindArray;
		console.warn('a', assets)
		if (!assets) return;
		this.state.estimatedTotal = parseInt(assets.length);
		return assets.slice((this.state.pageSize * page), (this.state.pageSize * (page + 1)))
	}

	async submit({ page = this.state.page } = {}) {
		const results = await this.search({ page });
		if (!results) return;
		this.resultsView.init(results);
		this.render();
	}

	async readManifest(fileText) {
		if (fileText && typeof fileText === 'string')
		{
			try {
				const json = JSON.parse(fileText);
				if (json?.CustomData?.BuildNumber && json?.MapLinks)
				{
					this.manifest = json;
					this._host = undefined;
					await this.submit();
					this.renderLoadModal();
				}
			} catch (error) {
				console.error(`[UGCManifest.readManifest] Failed to read`, error);
			}
		}
	}
	get projectPath() {
		return 'manifest';
	}

	async loadManifest() {
		const res = await db.getJSON(`/ugc/${this.projectPath}.json`);

		if (!res)
		{
			console.error(`[UGCManifest.loadManifest] Failed to fetch`, res);
		}
		console.log('res!', res);
		this.manifest = res;
		await this.submit();
		// this.state.estimatedTotal = parseInt(res.MapLinks.length);
		// this.resultsView.init(res.MapLinks.slice(0, 24));
		// this.render();
	}

	async loadCustomManifest(submitted) {
		try {
			console.log('loadCustomManifest')
			const file = submitted.target.files[0];
			if (!file) throw new Error('No File!');
			this.setState({ filename: filenameFromPath(file.name) })

			const reader = new FileReader();
			reader.onload = (e) => {
				const res = e.target.result;
				this.readManifest(res);
			}
			reader.readAsText(file);
		} catch (error) {
			this.setState({message: error?.message ?? 'loadMvar Error!'});
		}
	}

	async loadCustomManifestDif(submitted) {
		try {
			console.log('loadCustomManifestDif');
			const file = submitted.target.files[0];
			if (!file) throw new Error('No File!');
			this.setState({ filename: filenameFromPath(file.name) })

			const reader = new FileReader();
			reader.onload = (e) => {
				const res = e.target.result;
				// this.readManifest(res);
			}
			reader.readAsText(file);
		} catch (error) {
			this.setState({message: error?.message ?? 'loadMvar Error!'});
		}
	}

	get queryAssetKinds() { 
		return this._queryAssetKinds ??= new Set([2]);
	}

	get currentAssetKindArray() {
		if (this.queryAssetKinds.has(6)) return this.filterAssetKindArray(this.manifest.UgcGameVariantLinks);
		if (this.queryAssetKinds.has(10)) return this.filterAssetKindArray(this.manifest.EngineGameVariantLinks);
		if (this.queryAssetKinds.has(4)) return this.filterAssetKindArray(this.manifest.PrefabLinks);
		return this.filterAssetKindArray(this.manifest.MapLinks);
	}

	get filterTerm() {
		return this.state?.filterTerm || '';
	}

	setFilterTerm(term) {
		if (!term)
		{
			this.state.filterTerm = '';
		} else {
			this.state.filterTerm = `${term}`.toLowerCase();
		}

		this.state.page = 0;
		this.submit();
	}

	filterAssetKindArray(assetKindArray) {
		if (!assetKindArray || !assetKindArray.length) return [];
		if (!this.filterTerm) return assetKindArray;
		return assetKindArray.filter(asset => {
			if (`${asset?.PublicName}`.toLowerCase().includes(this.filterTerm)) return true;
			if (`${asset?.Description}`.toLowerCase().includes(this.filterTerm)) return true;
			if (`${asset?.AssetId}`.toLowerCase().includes(this.filterTerm)) return true;
		});
	}

	setAssetKind(index) {
		if (index)
		{
			if (this.queryAssetKinds.has(index))
			{
				// this.queryAssetKinds.delete(index);
				return;
			} else {
				this.queryAssetKinds.clear();
				this.queryAssetKinds.add(index);
			}
			this.renderSearchOptions();
			this.state.page = 0;
			this.submit();
		}
	}
}

class RecommendedProject extends UGCManifest {
	get title() {
		return 'Recommended';
	}

	get projectPath() {
		return 'recommended';
	}

	init() {
		console.log('init', this.title);
		history.pushState(null, null, `/discovery/recommended`);
	}

	renderSearchOptions() {
		if (!this.manifest) this.loadManifest();
		return HTML.wire(this, ':search')`
		<div class="ugc_search-options">
			<div class="option-group">
				<div class="option">
					<button
						onclick=${() => this.setAssetKind(2)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(2) ? '' : 'un'}checked`}></div>Maps
					</button>
				</div>
				<div class="option">
					<button
						onclick=${() => this.setAssetKind(6)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(6) ? '' : 'un'}checked`}></div>Modes
					</button>
				</div>
				<div class="option">
					<button
						onclick=${() => this.setAssetKind(4)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(4) ? '' : 'un'}checked`}></div>Prefabs
					</button>
				</div>
			</div>
			<div class="option">
				<label for="ugc_search-term">Filter</label>
				<input
					id="ugc_search-term"
					type="text"
					placeholder="term"
					onchange=${(e) => this.setFilterTerm(e.target.value)}
				>
			</div>
		</div>
		`;
	}
}

class ManifestView extends Component {
	init(response) {
		this.response = response;
		if (response?.length) this.state.results = this.response;
		this.render();
	}

	get defaultState() {
		return {
			pageSize: 24,
			results: []
		};
	}

	render() {
		console.log('ManifestView.rend', this.state.results)
		return this.html`
			<div class="ugc_results_wrapper">
				<ul class="ugc_results">
					${this.currentPage.map(result => HTML.wire()`<li>
						${{
							any: result.render('results'),
							placeholder: placeholderUGCResult.cloneNode(true)
						}}
					</li>`)}
				</ul>
			</div>
		`;
	}

	get currentPage() {
		const results = this.state.results;
		return results.map(asset => new UGCAsset({ asset }));
	}
}