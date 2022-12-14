import { Component } from 'component';
import { emitter } from 'eventEmitter';
import { HTML } from 'lib/HTML';
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

		this.state.view = this.search;
		this.render();

		this.search.submit();
	}

	get defaultState() {
		return {
			// view: this.learn
		};
	}

	render() {
		return this.html`
		<div class="mica_viewer" id="discovery-parent">
			<header class="mica_header-strip">
				<h2>Discovery</h2>
				<div>
					${this.renderManifestButton()}
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

	renderUgcButton() {
		if (this.state?.view.title === 'Search') return '';
		return HTML.wire(this, ':manifestButton')`
			<button
				onclick=${() => this.setState({ view: this.search })}
			>
				UGC
			</button>
		`;
	}

	get view() {
		return this.state.view?.render?.() ?? '...';
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
			['UgcGameVariant', 'Game Variant'],
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
				>
			</div>
			<div class="option">
				<label for="ugc_search-sortOrder">Has Nodegraph</label>
				<select
					id="ugc_search-sortOrder"
					onchange=${(e) => this.setQuery('hasNodeGraph', e.target.value)}
				>
					<option value="">Either</option>
					<option value="true">Yes</option>
					<option value="false">No</option>
				</select>
			</div>
		</div>
		`;
		// <div class="option">
		// 	<label for="ugc_search-tag">Tag</label>
		// 	<input disabled
		// 		id="ugc_search-tag"
		// 		type="text"
		// 		placeholder="broken"
		// 		onchange=${(e) => this.setQuery('tag', e.target.value)}
		// 	>
		// </div>
		// <div class="option">
		// 	<label for="ugc_search-sortOrder">Date Published</label>
		// 	TODO date range
		// </div>
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
		await this.goToPage(this.pageNumber + 1);
		this.scrollIntoView();
	}

	async previousPage() {
		if (this.pageNumber === 0) return;
		await this.goToPage(this.pageNumber - 1);
		this.scrollIntoView();
	}

	get query() {
		// return this.state.query ??= new URLSearchParams(`start=${this.state.pageSize * this.state.page}&count=${this.state.pageSize * (this.state.page + 1)}&include-times=true&order=desc&sort=PlaysRecent`);
		return this.state.query ??= new URLSearchParams(`order=desc&sort=PlaysRecent`);
	}

	get queryAssetKinds() { 
		return this._queryAssetKinds ??= new Set([2]);
	}

	get assetKindString() {
		return [...this.queryAssetKinds].map(index => `assetKind=${discovery.getAssetKindByIndex(index)}`).join('&');
	}

	async search({ page = this.state.page} = {}) {
		// this.setQueryPaging();
		const query = new URLSearchParams(`page=${page}&${this.query.toString()}&${this.assetKindString}`);
		const response = await fetch(new URL(`/api/discovery/search?${query.toString()}`, `https://${window.location.host.replace('beta.', '')}`));
		if (response && response.ok)
		{
			const json = await response.json();
			console.log(json);
			history.replaceState({}, `Cylix Guide`, `?${query.toString()}`);
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
		this.render();
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
				class=${`ugc_item${this.is343 ? ' is343' : ''}`}
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
		return this.asset?.OriginalAuthor ?? '???';
	}

	get contributors() {
		return [...new Set(this.asset?.Contributors || [])];
	}

	get assetKind() {
		return discovery.getAssetKindByIndex(this.asset?.AssetKind);
	}

	get assetKindIndex() {
		return this.asset?.AssetKind ?? 0;
	}

	get defaultThumbnail() {
		return 'https://hi.cylix.guide/ugc/images/default_sm.jpg';
	}

	get defaultImage() {
		return 'https://hi.cylix.guide/ugc/images/default.jpg';
	}

	get thumbnail() {
		return this.asset?.ThumbnailUrl ?? `${this.getAssetRelativeUrl('images/thumbnail.png')}`;
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
		return `https://${discovery.host}/ugcstorage/map/${this.id}/${this.version}/images/${filename}.png`;
	}

	get averageRating() {
		return parseFloat(this.asset?.AverageRating ?? 0).toFixed(1);
	}

	get bookmarks() {
		return parseInt(this.asset?.Bookmarks ?? 0);
	}

	get likes() {
		return parseInt(this.asset?.Likes ?? 0);
	}

	get playsAllTime() {
		return parseInt(this.asset?.PlaysAllTime ?? 0);
	}

	get playsRecent() {
		return parseInt(this.asset?.PlaysRecent ?? 0);
	}

	get tags() {
		return [...new Set(this.asset?.Tags || [])];
	}

	get objectCount() {
		return parseInt(this.asset?.NumberOfObjects || 0);
	}

	get is343() {
		return this._is343 ??= new Set(this.tags).has('343i');
	}

	get dateModified() {
		const string = this.asset?.DateModifiedUtc?.ISO8601Date;
		if (string && Date.parse(string)) return new Date(string);
		return new Date();
	}

	get dateCreated() {
		const string = this.asset?.DateCreatedUtc?.ISO8601Date;
		if (string && Date.parse(string)) return new Date(string);
		return new Date();
	}

	get datePublished() {
		const string = this.asset?.DatePublishedUtc?.ISO8601Date;
		if (string && Date.parse(string)) return new Date(string);
		return new Date();
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

	async loadManifest() {
		const res = await db.getJSON('manifest.json');

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

const sampleAssetMode = {
  "CustomData": {
    "KeyValues": {}
  },
  "Tags": [
    "343i",
    "Arena",
    "Slayer"
  ],
  "EngineGameVariantLink": {
    "AssetId": "1cfee22b-513f-418d-a1d7-2648f1a575e0",
    "VersionId": "010d138f-6cf8-4da5-bc23-04bd2c181141",
    "PublicName": "Slayer",
    "Description": "Control Power Weapons to Eliminate the Enemy.",
    "Files": {
      "Prefix": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/enginegamevariant/1cfee22b-513f-418d-a1d7-2648f1a575e0/010d138f-6cf8-4da5-bc23-04bd2c181141/",
      "FileRelativePaths": [],
      "PrefixEndpoint": {
        "AuthorityId": "iUgcFiles",
        "Path": "/ugcstorage/enginegamevariant/1cfee22b-513f-418d-a1d7-2648f1a575e0/010d138f-6cf8-4da5-bc23-04bd2c181141/",
        "QueryString": null,
        "RetryPolicyId": "linearretry",
        "TopicName": "",
        "AcknowledgementTypeId": 0,
        "AuthenticationLifetimeExtensionSupported": false,
        "ClearanceAware": false
      }
    },
    "Contributors": [],
    "AssetHome": 1,
    "AssetStats": {
      "PlaysRecent": 0,
      "PlaysAllTime": 0,
      "Favorites": 0,
      "Likes": 0,
      "Bookmarks": 0,
      "ParentAssetCount": 730619,
      "AverageRating": 0,
      "NumberOfRatings": 0
    },
    "InspectionResult": 50,
    "CloneBehavior": 0,
    "Order": 0
  },
  "AssetId": "1e8cd10b-1496-423b-8699-f98f6f5db67e",
  "VersionId": "4155142e-b867-4030-a8a0-d5f44f9dce60",
  "PublicName": "Arena:Slayer",
  "Description": "Slay the enemy team.",
  "Files": {
    "Prefix": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/ugcgamevariant/1e8cd10b-1496-423b-8699-f98f6f5db67e/4155142e-b867-4030-a8a0-d5f44f9dce60/",
    "FileRelativePaths": [
      "images/hero.png",
      "images/screenshot1.Png",
      "images/screenshot1.png",
      "images/thumbnail.png"
    ],
    "PrefixEndpoint": {
      "AuthorityId": "iUgcFiles",
      "Path": "/ugcstorage/ugcgamevariant/1e8cd10b-1496-423b-8699-f98f6f5db67e/4155142e-b867-4030-a8a0-d5f44f9dce60/",
      "QueryString": null,
      "RetryPolicyId": "linearretry",
      "TopicName": "",
      "AcknowledgementTypeId": 0,
      "AuthenticationLifetimeExtensionSupported": false,
      "ClearanceAware": false
    }
  },
  "Contributors": [],
  "AssetHome": 1,
  "AssetStats": {
    "PlaysRecent": 113153,
    "PlaysAllTime": 33536857,
    "Favorites": 156334,
    "Likes": 1,
    "Bookmarks": 0,
    "ParentAssetCount": 105,
    "AverageRating": 2.7999268893335385,
    "NumberOfRatings": 103952
  },
  "InspectionResult": 0,
  "CloneBehavior": 0,
  "Order": 0
}

const sampleAssetPrefab = {
  "CustomData": {
    "Parts": 0,
    "HasNodeGraph": false
  },
  "Tags": [
    "#catmovie",
    "I love cats",
    "I want you to respond",
    "cats",
    "im getting desperate",
    "love you 3 4 3 ",
    "please respond",
    "respond immediately"
  ],
  "AssetId": "61147a32-6c29-436a-bfde-3197afa4f00c",
  "VersionId": "1c0b7344-83f8-4246-9913-86d314279799",
  "PublicName": "read the image and description",
  "Description": "I need to know the name of this cat.",
  "Files": {
    "Prefix": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/prefab/61147a32-6c29-436a-bfde-3197afa4f00c/1c0b7344-83f8-4246-9913-86d314279799/",
    "FileRelativePaths": [
      "images/hero.jpg",
      "images/screenshot1.jpg",
      "images/screenshot2.jpg",
      "images/screenshot3.jpg",
      "images/thumbnail.jpg"
    ],
    "PrefixEndpoint": {
      "AuthorityId": "iUgcFiles",
      "Path": "/ugcstorage/prefab/61147a32-6c29-436a-bfde-3197afa4f00c/1c0b7344-83f8-4246-9913-86d314279799/",
      "QueryString": null,
      "RetryPolicyId": "linearretry",
      "TopicName": "",
      "AcknowledgementTypeId": 0,
      "AuthenticationLifetimeExtensionSupported": false,
      "ClearanceAware": false
    }
  },
  "Contributors": [],
  "AssetHome": 2,
  "AssetStats": {
    "PlaysRecent": 0,
    "PlaysAllTime": 0,
    "Favorites": 19,
    "Likes": 0,
    "Bookmarks": 0,
    "ParentAssetCount": 0,
    "AverageRating": 4,
    "NumberOfRatings": 10
  },
  "InspectionResult": 0,
  "CloneBehavior": 0,
  "Order": 0
}

const sampleAssetMap = {
  "CustomData": {
    "NumOfObjectsOnMap": 0,
    "TagLevelId": 117343,
    "IsBaked": true,
    "HasNodeGraph": false
  },
  "Tags": [
    "343i",
    "TRAINING MODE"
  ],
  "PrefabLinks": [],
  "AssetId": "53136ad9-0fd6-4271-8752-31d114b9561e",
  "VersionId": "1d62423c-39ad-4029-9db2-aab60ef664f1",
  "PublicName": "Behemoth",
  "Description": "Buried for millennia, this ancient structure rises from beneath the sands.",
  "Files": {
    "Prefix": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/53136ad9-0fd6-4271-8752-31d114b9561e/1d62423c-39ad-4029-9db2-aab60ef664f1/",
    "FileRelativePaths": [
      "images/hero.png",
      "images/screenshot1.png",
      "images/screenshot2.png",
      "images/thumbnail.png",
      "va_behemoth.mvar"
    ],
    "PrefixEndpoint": {
      "AuthorityId": "iUgcFiles",
      "Path": "/ugcstorage/map/53136ad9-0fd6-4271-8752-31d114b9561e/1d62423c-39ad-4029-9db2-aab60ef664f1/",
      "QueryString": null,
      "RetryPolicyId": "linearretry",
      "TopicName": "",
      "AcknowledgementTypeId": 0,
      "AuthenticationLifetimeExtensionSupported": false,
      "ClearanceAware": false
    }
  },
  "Contributors": [],
  "AssetHome": 1,
  "AssetStats": {
    "PlaysRecent": 62955,
    "PlaysAllTime": 19747478,
    "Favorites": 4366,
    "Likes": 0,
    "Bookmarks": 0,
    "ParentAssetCount": 92,
    "AverageRating": 3.3107955826008566,
    "NumberOfRatings": 4437
  },
  "InspectionResult": 50,
  "CloneBehavior": 0,
  "Order": 0
}

const sampleSearch = {
	"Tags": [
		{
			"Tag": "training mode",
			"Count": 46
		},
		{
			"Tag": "343i",
			"Count": 24
		},
		{
			"Tag": "infiniteleaks",
			"Count": 3
		},
		{
			"Tag": "1v1",
			"Count": 2
		},
		{
			"Tag": "1vall",
			"Count": 2
		}
	],
	"EstimatedTotal": 107,
	"Start": 0,
	"Count": 24,
	"ResultCount": 24,
	"Results": [
		{
			"AssetId": "b6aca0c7-8ba7-4066-bf91-693571374c3c",
			"AssetVersionId": "c63ee410-784e-46ae-911e-ab7bc35933b1",
			"Name": "Live Fire",
			"Description": "Instructors at the Avery J. Johnson Academy of Military Science ensure their Spartans are prepared for any challenge.",
			"AssetKind": 2,
			"Tags": [
				"343i",
				"training mode"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/b6aca0c7-8ba7-4066-bf91-693571374c3c/c63ee410-784e-46ae-911e-ab7bc35933b1/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "aaid(5c7909e9-3620-4920-8abf-f18cfb4333b6)",
			"Likes": 3899,
			"Bookmarks": 0,
			"PlaysRecent": 143214,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2020-07-16T20:59:40.812Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2021-11-04T02:54:00.359Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T19:58:08.938Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 32214972,
			"Contributors": [],
			"ParentAssetCount": 186,
			"AverageRating": 3.864675403840293,
			"NumberOfRatings": 3281
		},
		{
			"AssetId": "e859cf75-9b8a-429a-91be-2376681c8537",
			"AssetVersionId": "977c8fe8-8087-4a48-864d-52b4eeee8765",
			"Name": "Catalyst",
			"Description": "Spent shells rain like water in this ancient sanctuary.",
			"AssetKind": 2,
			"Tags": [
				"343i"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/e859cf75-9b8a-429a-91be-2376681c8537/977c8fe8-8087-4a48-864d-52b4eeee8765/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "aaid(5c7909e9-3620-4920-8abf-f18cfb4333b6)",
			"Likes": 461,
			"Bookmarks": 0,
			"PlaysRecent": 137532,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2020-07-16T20:59:25.39Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2022-04-28T16:14:19.974Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T20:12:58.678Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 5779946,
			"Contributors": [],
			"ParentAssetCount": 72,
			"AverageRating": 3.5024038461538463,
			"NumberOfRatings": 416
		},
		{
			"AssetId": "f0a1760f-0d4a-4bcc-ac7a-e8f9aee331dc",
			"AssetVersionId": "6e9da6f4-fb07-4d38-b26e-2136941d5531",
			"Name": "Streets",
			"Description": "The tranquility of this Mombasa back alley is pierced by the sound of heavy gunfire.",
			"AssetKind": 2,
			"Tags": [
				"343i",
				"training mode"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/f0a1760f-0d4a-4bcc-ac7a-e8f9aee331dc/6e9da6f4-fb07-4d38-b26e-2136941d5531/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "aaid(5c7909e9-3620-4920-8abf-f18cfb4333b6)",
			"Likes": 5187,
			"Bookmarks": 0,
			"PlaysRecent": 131558,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2020-07-16T20:59:11.947Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2021-11-04T02:56:59.669Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T20:15:24.66Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 31014120,
			"Contributors": [],
			"ParentAssetCount": 95,
			"AverageRating": 3.55917667238422,
			"NumberOfRatings": 4081
		},
		{
			"AssetId": "8420410b-044d-44d7-80b6-98a766c8c39f",
			"AssetVersionId": "068c0974-f748-41ba-b457-b8fed603576e",
			"Name": "Recharge",
			"Description": "Power still courses through the walls of this neglected Axys facility.",
			"AssetKind": 2,
			"Tags": [
				"343i",
				"training mode"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/8420410b-044d-44d7-80b6-98a766c8c39f/068c0974-f748-41ba-b457-b8fed603576e/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "aaid(5c7909e9-3620-4920-8abf-f18cfb4333b6)",
			"Likes": 3730,
			"Bookmarks": 0,
			"PlaysRecent": 126491,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2020-07-16T20:59:32.089Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2021-11-04T02:57:14.295Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T20:20:35.551Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 30245119,
			"Contributors": [],
			"ParentAssetCount": 191,
			"AverageRating": 3.6231838281743527,
			"NumberOfRatings": 3166
		},
		{
			"AssetId": "298d5036-cd43-47b3-a4bd-31e127566593",
			"AssetVersionId": "a5582547-29fb-4ceb-ac9d-74f899901501",
			"Name": "Bazaar",
			"Description": "Dusty streets and double doors.",
			"AssetKind": 2,
			"Tags": [
				"343i",
				"training mode"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/298d5036-cd43-47b3-a4bd-31e127566593/a5582547-29fb-4ceb-ac9d-74f899901501/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "aaid(5c7909e9-3620-4920-8abf-f18cfb4333b6)",
			"Likes": 3641,
			"Bookmarks": 0,
			"PlaysRecent": 102816,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2020-07-16T20:59:10.057Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2021-11-04T02:56:59.575Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T19:15:52.029Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 26204955,
			"Contributors": [],
			"ParentAssetCount": 150,
			"AverageRating": 3.515184678522572,
			"NumberOfRatings": 3655
		},
		{
			"AssetId": "33c0766c-ef15-48f8-b298-34aba5bff3b4",
			"AssetVersionId": "8de91561-b9f7-4669-97ef-42e65fb507a7",
			"Name": "Aquarius",
			"Description": "Aquarius Terraforming Solutions: Industry leader in returning life to barren worlds.",
			"AssetKind": 2,
			"Tags": [
				"343i",
				"training mode"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/33c0766c-ef15-48f8-b298-34aba5bff3b4/8de91561-b9f7-4669-97ef-42e65fb507a7/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "aaid(5c7909e9-3620-4920-8abf-f18cfb4333b6)",
			"Likes": 3579,
			"Bookmarks": 0,
			"PlaysRecent": 99882,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2020-07-16T20:59:09.634Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2021-11-04T02:57:04.279Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T19:18:57.951Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 22461630,
			"Contributors": [],
			"ParentAssetCount": 77,
			"AverageRating": 3.3897369275738876,
			"NumberOfRatings": 3079
		},
		{
			"AssetId": "53136ad9-0fd6-4271-8752-31d114b9561e",
			"AssetVersionId": "1d62423c-39ad-4029-9db2-aab60ef664f1",
			"Name": "Behemoth",
			"Description": "Buried for millennia, this ancient structure rises from beneath the sands.",
			"AssetKind": 2,
			"Tags": [
				"343i",
				"training mode"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/53136ad9-0fd6-4271-8752-31d114b9561e/1d62423c-39ad-4029-9db2-aab60ef664f1/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "aaid(5c7909e9-3620-4920-8abf-f18cfb4333b6)",
			"Likes": 4422,
			"Bookmarks": 0,
			"PlaysRecent": 73523,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2020-07-16T20:59:45.551Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2021-11-04T02:57:02.982Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T20:13:49.769Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 20300910,
			"Contributors": [],
			"ParentAssetCount": 97,
			"AverageRating": 3.319253001333926,
			"NumberOfRatings": 4498
		},
		{
			"AssetId": "56a11b8c-64d1-4537-8893-a9241e4d5b93",
			"AssetVersionId": "7804214e-c463-49e9-b269-d22694142916",
			"Name": "Launch Site",
			"Description": "Sabre proving grounds test the limits of human velocity.",
			"AssetKind": 2,
			"Tags": [
				"343i",
				"training mode"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/56a11b8c-64d1-4537-8893-a9241e4d5b93/7804214e-c463-49e9-b269-d22694142916/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "aaid(5c7909e9-3620-4920-8abf-f18cfb4333b6)",
			"Likes": 3235,
			"Bookmarks": 0,
			"PlaysRecent": 51959,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2020-07-16T20:59:21.374Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2021-11-04T02:58:22.943Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T20:15:35.542Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 12811214,
			"Contributors": [],
			"ParentAssetCount": 57,
			"AverageRating": 2.392229646127196,
			"NumberOfRatings": 4041
		},
		{
			"AssetId": "c494ef7c-d203-42a9-9c0f-b3f576334501",
			"AssetVersionId": "e7b22fbf-c768-43db-8fc7-9a5ac5ccc7d6",
			"Name": "Highpower",
			"Description": "High-Power with a high tower.",
			"AssetKind": 2,
			"Tags": [
				"343i"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/c494ef7c-d203-42a9-9c0f-b3f576334501/e7b22fbf-c768-43db-8fc7-9a5ac5ccc7d6/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "aaid(5c7909e9-3620-4920-8abf-f18cfb4333b6)",
			"Likes": 1526,
			"Bookmarks": 0,
			"PlaysRecent": 13438,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2020-07-16T20:59:14.26Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2021-11-04T02:52:38.857Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T20:03:23.083Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 3958206,
			"Contributors": [],
			"ParentAssetCount": 53,
			"AverageRating": 3.919580419580419,
			"NumberOfRatings": 1144
		},
		{
			"AssetId": "e6cbfe01-665b-4a8c-bf3a-d63a65a7c890",
			"AssetVersionId": "8de64c4f-4fbd-4ed8-a26c-793c5dc53c4d",
			"Name": "Breaker",
			"Description": "Plasma Beam. 6500 Terawatts, 25000 degrees Centigrade.",
			"AssetKind": 2,
			"Tags": [
				"343i"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/e6cbfe01-665b-4a8c-bf3a-d63a65a7c890/8de64c4f-4fbd-4ed8-a26c-793c5dc53c4d/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "aaid(5c7909e9-3620-4920-8abf-f18cfb4333b6)",
			"Likes": 343,
			"Bookmarks": 0,
			"PlaysRecent": 12804,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2020-07-16T20:59:07.125Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2022-04-27T16:13:35.922Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T20:12:42.69Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 1764155,
			"Contributors": [],
			"ParentAssetCount": 28,
			"AverageRating": 3.6873449131513647,
			"NumberOfRatings": 403
		},
		{
			"AssetId": "4f196016-0101-4844-8358-2504f7c44656",
			"AssetVersionId": "b7a5f610-4a9c-49de-85f0-2e9aa81193a3",
			"Name": "Fragmentation",
			"Description": "These beacons are no stranger to explosive conflict.",
			"AssetKind": 2,
			"Tags": [
				"343i"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/4f196016-0101-4844-8358-2504f7c44656/b7a5f610-4a9c-49de-85f0-2e9aa81193a3/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "aaid(5c7909e9-3620-4920-8abf-f18cfb4333b6)",
			"Likes": 3298,
			"Bookmarks": 0,
			"PlaysRecent": 11546,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2020-07-16T20:59:29.938Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2021-11-04T02:52:40.2Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T20:12:31.962Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 4041026,
			"Contributors": [],
			"ParentAssetCount": 51,
			"AverageRating": 3.268346923647146,
			"NumberOfRatings": 2698
		},
		{
			"AssetId": "08607bf4-6abe-4a5b-9547-290a6cc1433e",
			"AssetVersionId": "0030c1e3-d8b2-4b60-a060-4873d8f4d4a2",
			"Name": "Deadlock",
			"Description": "UNSC forces have yet to breach this Banished encampment.",
			"AssetKind": 2,
			"Tags": [
				"343i"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/08607bf4-6abe-4a5b-9547-290a6cc1433e/0030c1e3-d8b2-4b60-a060-4873d8f4d4a2/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "aaid(5c7909e9-3620-4920-8abf-f18cfb4333b6)",
			"Likes": 1433,
			"Bookmarks": 0,
			"PlaysRecent": 10797,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2020-07-16T20:59:24.297Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2021-11-04T02:52:36.994Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T19:10:16.068Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 3562892,
			"Contributors": [],
			"ParentAssetCount": 44,
			"AverageRating": 3.364657814096016,
			"NumberOfRatings": 979
		},
		{
			"AssetId": "e2075504-3088-4826-818f-3d36957ee1c8",
			"AssetVersionId": "c1dc6921-10e0-4f4b-bedf-fbe6749421b9",
			"Name": "The Academy 1",
			"Description": "Complete challenges to begin your Spartan career.",
			"AssetKind": 2,
			"Tags": [],
			"ThumbnailUrl": "",
			"ReferencedAssets": [],
			"OriginalAuthor": "xuid(2535461615696415)",
			"Likes": 142,
			"Bookmarks": 0,
			"PlaysRecent": 4,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2022-05-19T12:23:34.437Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2022-05-19T12:23:34.538Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-19T12:24:16.636Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 152,
			"Contributors": [],
			"ParentAssetCount": 0,
			"AverageRating": 5,
			"NumberOfRatings": 6
		},
		{
			"AssetId": "055ca047-122f-4587-9e01-f4d6e5ce998a",
			"AssetVersionId": "127405e9-7d97-4b2d-88ff-c6ff70a569fb",
			"Name": "Misc:Mainmenu",
			"Description": "",
			"AssetKind": 2,
			"Tags": [
				"infiniteleaks"
			],
			"ThumbnailUrl": "",
			"ReferencedAssets": [],
			"OriginalAuthor": "xuid(2533274975267968)",
			"Likes": 62,
			"Bookmarks": 0,
			"PlaysRecent": 1,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2022-05-07T04:11:21.775Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2022-05-07T04:11:21.831Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-22T20:00:02.182Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 77,
			"Contributors": [],
			"ParentAssetCount": 0,
			"AverageRating": 0,
			"NumberOfRatings": 0
		},
		{
			"AssetId": "4cc80fd8-71e7-49fe-960a-608152ef37bb",
			"AssetVersionId": "dab30948-5cc4-4394-ba23-1d93101c44aa",
			"Name": "Misc:Mainmenu",
			"Description": "",
			"AssetKind": 2,
			"Tags": [
				"infiniteleaks"
			],
			"ThumbnailUrl": "",
			"ReferencedAssets": [],
			"OriginalAuthor": "xuid(2535407574672627)",
			"Likes": 0,
			"Bookmarks": 0,
			"PlaysRecent": 1,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2022-05-19T20:53:58.847Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2022-05-19T20:53:58.924Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-19T22:29:46.802Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 3,
			"Contributors": [],
			"ParentAssetCount": 0,
			"AverageRating": 5,
			"NumberOfRatings": 1
		},
		{
			"AssetId": "47349830-7e98-4a1f-b5cd-013e12478e23",
			"AssetVersionId": "14074f84-ad86-47af-aa94-954b43904313",
			"Name": "Void",
			"Description": "A vast expanse of infinite possibilities.",
			"AssetKind": 2,
			"Tags": [
				"343i"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/47349830-7e98-4a1f-b5cd-013e12478e23/14074f84-ad86-47af-aa94-954b43904313/images/thumbnail.jpg",
			"ReferencedAssets": [],
			"OriginalAuthor": "aaid(5c7909e9-3620-4920-8abf-f18cfb4333b6)",
			"Likes": 3,
			"Bookmarks": 0,
			"PlaysRecent": 1,
			"NumberOfObjects": 9,
			"DateCreatedUtc": {
				"ISO8601Date": "2021-02-20T01:12:04.024Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2022-11-03T23:17:51.285Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-11-03T23:22:11.426Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": false,
			"PlaysAllTime": 4,
			"Contributors": [],
			"ParentAssetCount": 5,
			"AverageRating": 0,
			"NumberOfRatings": 1
		},
		{
			"AssetId": "03a5ca0c-2c12-4a60-9b78-1f50eb6efceb",
			"AssetVersionId": "26ccbb0d-b69c-485b-ab15-83ccdeefaa0f",
			"Name": "Nuketown",
			"Description": "Power still courses through the walls of this neglected Axys facility.",
			"AssetKind": 2,
			"Tags": [
				"training mode"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/03a5ca0c-2c12-4a60-9b78-1f50eb6efceb/26ccbb0d-b69c-485b-ab15-83ccdeefaa0f/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "xuid(2535445759501874)",
			"Likes": 15,
			"Bookmarks": 0,
			"PlaysRecent": 1,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2022-01-25T05:32:42.137Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2022-01-25T18:25:45.12Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T18:33:49.508Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 9,
			"Contributors": [],
			"ParentAssetCount": 0,
			"AverageRating": 0,
			"NumberOfRatings": 0
		},
		{
			"AssetId": "5036dc45-d007-4e4d-b009-330fa8de2b2c",
			"AssetVersionId": "00149523-196e-45f8-83a5-f8d283fb953d",
			"Name": "The Academy",
			"Description": "Complete challenges to begin your Spartan career.",
			"AssetKind": 2,
			"Tags": [
				"343i"
			],
			"ThumbnailUrl": "",
			"ReferencedAssets": [],
			"OriginalAuthor": "aaid(5c7909e9-3620-4920-8abf-f18cfb4333b6)",
			"Likes": 349,
			"Bookmarks": 0,
			"PlaysRecent": 1,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2021-04-07T21:36:33.686Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2021-11-04T00:25:20.76Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T20:12:46.595Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 94970,
			"Contributors": [],
			"ParentAssetCount": 10,
			"AverageRating": 4.419753086419753,
			"NumberOfRatings": 81
		},
		{
			"AssetId": "8ac95798-f30e-4b7d-85c3-aa2a2b2721a1",
			"AssetVersionId": "bcf198c4-2c2f-493c-99be-2b3d5c4f82fd",
			"Name": "Aquarius",
			"Description": "Aquarius Terraforming Solutions: Industry leader in returning life to barren worlds.",
			"AssetKind": 2,
			"Tags": [
				"training mode"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/8ac95798-f30e-4b7d-85c3-aa2a2b2721a1/bcf198c4-2c2f-493c-99be-2b3d5c4f82fd/images/thumbnail.jpg",
			"ReferencedAssets": [],
			"OriginalAuthor": "xuid(2535461615696415)",
			"Likes": 56,
			"Bookmarks": 0,
			"PlaysRecent": 1,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2022-07-16T15:12:06.102Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2022-07-20T14:48:48.864Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-07-21T14:07:47.131Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": false,
			"PlaysAllTime": 95,
			"Contributors": [],
			"ParentAssetCount": 0,
			"AverageRating": 3.75,
			"NumberOfRatings": 4
		},
		{
			"AssetId": "ee28cea6-c56c-4348-94ff-38be4e94e3ee",
			"AssetVersionId": "4cef9226-740f-459e-9627-eb3d23712ee6",
			"Name": "The Academy 2",
			"Description": "",
			"AssetKind": 2,
			"Tags": [],
			"ThumbnailUrl": "",
			"ReferencedAssets": [],
			"OriginalAuthor": "xuid(2535432362873999)",
			"Likes": 1,
			"Bookmarks": 0,
			"PlaysRecent": 0,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2022-05-26T15:42:43.834Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2022-05-26T15:42:43.883Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-26T16:40:54.865Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 0,
			"Contributors": [],
			"ParentAssetCount": 0,
			"AverageRating": 0,
			"NumberOfRatings": 0
		},
		{
			"AssetId": "5f459a43-94b1-419b-9fce-2d52486d9676",
			"AssetVersionId": "489604bd-a220-4db4-80e0-22989fdc26fe",
			"Name": "Bazaar",
			"Description": "Dusty streets and double doors.",
			"AssetKind": 2,
			"Tags": [
				"training mode"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/5f459a43-94b1-419b-9fce-2d52486d9676/489604bd-a220-4db4-80e0-22989fdc26fe/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "xuid(2535468304070701)",
			"Likes": 2,
			"Bookmarks": 0,
			"PlaysRecent": 0,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2021-11-30T11:21:42.073Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2021-11-30T11:21:42.355Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T20:13:39.959Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 0,
			"Contributors": [],
			"ParentAssetCount": 0,
			"AverageRating": 0,
			"NumberOfRatings": 0
		},
		{
			"AssetId": "8aaf603b-fa3e-4d18-8016-766100e0d46b",
			"AssetVersionId": "e2f0ece7-d5cc-42b4-910f-eaa88f3dae7c",
			"Name": "Deadlock",
			"Description": "UNSC forces have yet to breach this Banished encampment.",
			"AssetKind": 2,
			"Tags": [],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/8aaf603b-fa3e-4d18-8016-766100e0d46b/e2f0ece7-d5cc-42b4-910f-eaa88f3dae7c/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "xuid(2535419404343090)",
			"Likes": 6,
			"Bookmarks": 0,
			"PlaysRecent": 0,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2022-03-09T01:17:46.98Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2022-03-09T01:17:47.887Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T20:17:16.391Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 0,
			"Contributors": [],
			"ParentAssetCount": 0,
			"AverageRating": 0,
			"NumberOfRatings": 0
		},
		{
			"AssetId": "2320e332-643e-4576-9eee-a158ca82be7c",
			"AssetVersionId": "7ce7fac1-2b16-4a3b-8be4-a0f88e4103eb",
			"Name": "Test-Zaar",
			"Description": "Dusty streets and double doors.",
			"AssetKind": 2,
			"Tags": [
				"training mode"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/2320e332-643e-4576-9eee-a158ca82be7c/7ce7fac1-2b16-4a3b-8be4-a0f88e4103eb/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "xuid(2533274953027379)",
			"Likes": 3,
			"Bookmarks": 0,
			"PlaysRecent": 0,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2022-01-15T00:40:49.254Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2022-01-15T00:41:13.323Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T19:14:15.878Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 0,
			"Contributors": [],
			"ParentAssetCount": 0,
			"AverageRating": 3,
			"NumberOfRatings": 1
		},
		{
			"AssetId": "2843e66d-310f-46e2-be5c-e95e09e96e29",
			"AssetVersionId": "7f1c511f-61ea-4a5f-9520-73fadf5c0f40",
			"Name": "Wacky mode",
			"Description": "BR starts, less gravity",
			"AssetKind": 2,
			"Tags": [
				"4v4",
				"H2",
				"lol",
				"WIP"
			],
			"ThumbnailUrl": "https://blobs-infiniteugc.svc.halowaypoint.com/ugcstorage/map/2843e66d-310f-46e2-be5c-e95e09e96e29/7f1c511f-61ea-4a5f-9520-73fadf5c0f40/images/thumbnail.png",
			"ReferencedAssets": [],
			"OriginalAuthor": "xuid(2535434309930530)",
			"Likes": 0,
			"Bookmarks": 0,
			"PlaysRecent": 0,
			"NumberOfObjects": 0,
			"DateCreatedUtc": {
				"ISO8601Date": "2022-03-22T10:44:56.203Z"
			},
			"DateModifiedUtc": {
				"ISO8601Date": "2022-03-23T17:24:36.096Z"
			},
			"DatePublishedUtc": {
				"ISO8601Date": "2022-05-11T19:15:33.721Z"
			},
			"HasNodeGraph": false,
			"ReadOnlyClones": true,
			"PlaysAllTime": 1,
			"Contributors": [],
			"ParentAssetCount": 0,
			"AverageRating": 5,
			"NumberOfRatings": 1
		}
	],
	"Links": {}
}