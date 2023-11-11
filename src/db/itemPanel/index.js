import { db } from 'db';
import { Item, placeholderItem } from 'db/item';
import { Component } from 'component';
import { HTML } from 'lib/HTML';
import { filenameFromPath } from 'utils/paths.js';
import { modalConstructor } from 'ui/modal';
import { STATIC_ROOT } from 'environment';
import { diff as createDiff, formatters as renderDiff } from 'jsondiffpatch';
import Chart from 'chart.js/auto';

import './index.css';
import './diff.css';

class RelatedItems extends Component {
	constructor(description) {
		super();
		if (description && typeof description === 'string') this.description = description;
	}
	async init(itemIDs) {
		this.state = this.defaultState;
		if (!itemIDs || !itemIDs.size) return;

		this.state.itemIDs = itemIDs;
	}

	get defaultState() {
		return {
			more: false,
			itemIDs: new Set(),
			items: new Set(),
			itemsDisplayed: this.initialItemsDisplayed
		};
	}

	render() {
		if (!this.state.items.size) this.getDisplayedItems();
		return this.html`
			<div class="related-items_wrapper">
				<header>${this?.description ?? ''} Relations // ${this.state.itemIDs.size}</header>
				<ul class="related-items_list">
					${this.state.items.map(item => HTML.wire()`<li>
						${{
							any: item.renderIcon('related', {itemTypeIcon: true}),
							placeholder: placeholderItem.cloneNode(true)
						}}
					</li>`)}
				</ul>
				${this.state.itemIDs.size > this.state.itemsDisplayed ? this.showMoreButton() : ''}
			</div>
		`;
	}

	get displayedItemIDs() {
		const itemIDs = this.state.itemIDs;
		return new Set([...itemIDs].slice(0, this.state.itemsDisplayed));
	}

	getDisplayedItems() {
		return (this.state.items = [...this.displayedItemIDs].map(id => new Item({ id })));
	}

	get initialItemsDisplayed() {
		return 20;
	}

	showMoreButton() {
		return HTML.wire(this, ':more')`
			<div
				class="related-items_show-more_wrapper"
			>
				<button
					class="hi-box"
					onclick=${() => this.showMore()}
				>
					Show More (${(this.state.itemIDs.size - this.state.itemsDisplayed)})
				</button>
			</div>
		`;
	}

	showMore() {
		this.state.itemsDisplayed = this.state.itemsDisplayed + this.initialItemsDisplayed;
		this.getDisplayedItems();
		this.render();
	}
}

class Palettes extends Component {
	constructor() {
		super();
		this.types = new Set([
			'SpartanEmblem',
			// 'ArmorEmblem',
			// 'WeaponEmblem',
			// 'VehicleEmblem'
		]);

		this.playerTag = 'Cylix Guide'
	}

	get defaultState() {
		return {
			configs: new Map(),
			expanded: false
		};
	}

	get item() {
		if (this.state.item) return this.state.item;
	}

	getEmblemColor(config) {
		if (this.emblemColors && this.emblemColors.has(config)) return this.emblemColors.get(config);
		return '#FFFFFF';
	}

	async init() {
		if (this.emblemColors) return;
		this.emblemColors = await db.getEmblemColorIndex();
	}

	display(item) {
		const expanded = this.state.expanded;
		this.state = this.defaultState;
		this.state.expanded = expanded;
		if (!this.types.has(item?.type)) return;
		try {
			if (item && item?.data?.AvailableConfigurations)
			{
				const configurations = item.data.AvailableConfigurations;
				configurations.forEach(configuration => {
					this.state.configs.set(`${configuration.ConfigurationId}`, {
						title: this.resolveConfigName(configuration.ConfigurationPath) ?? configuration.ConfigurationId
					})
				});
				this.state.item = item;
			}
		} catch (error) {
			console.error(`[ItemPanel.Palettes]`, error);
		}
	}

	get configs() {
		return this.state.expanded ? [...this.state.configs] : [...this.state.configs].slice(0, 1);
	}

	get errorImageFilename() {
		return '104-001-classics-one-782a8d66_98277613';
	}

	render() {
		if (this.state.item && this.state.item.type === 'SpartanEmblem')
		{
			return this.html`
				<div class="palettes_wrapper">
					<header>Emblem Palettes // ${this.state.configs.size}</header>
					<ul class="palettes_list">
						${this.configs.map(([config, properties]) => HTML.wire(this, `:${config}`)`
							<li>
								<div class="palettes_nameplate_wrapper">
									<img
										class="palettes_nameplate"
										src=${`${STATIC_ROOT}images/nameplates/${this.state.brokenImage ? this.errorImageFilename : this.nameplateFilename(config)}.png`}
										width="1280"
										height="240"
										onerror=${() => this.setState({ brokenImage: true })}
									>
									<div class="nameplate_content">
										<img
											class="palettes_emblem"
											src=${`${STATIC_ROOT}images/emblems/${this.state.brokenImage ? this.errorImageFilename : this.nameplateFilename(config)}.png`}
											width="240"
											height="240"
											onerror=${() => this.setState({ brokenImage: true })}
										>
										<div class="nametag_wrapper" style=${{color: this.getEmblemColor(config)}}>
											<span class="nametag_player">${this.playerName ?? properties?.title ?? '...'}</span>
											<span class="nametag_service">${this.playerTag ?? config}</span>
										</div>
									</div>
								</div>
							</li>
						`)}
					</ul>
					${this.state.configs.size > 1 ? this.showMoreButton() : ''}
				</div>
			`;
		}
		if (this.state.item)
		{
			return this.html`
				<div class="palettes_wrapper">
					<header>Emblem Palettes // ${this.state.configs.size}</header>
					<ul class="palettes_list">
						${[...this.state.configs].map(([config, properties]) => HTML.wire(this, `:${config}`)`
							<li class="palettes_emblem_wrapper">
								<img
									src=${`${STATIC_ROOT}images/nameplates/${this.nameplateFilename(config)}.png`}
								>
								<span class="nametag_player">${this.playerName ?? properties?.title ?? '...'}</span>
							</li>
						`)}
					</ul>
				</div>
			`;
		}
	}

	resolveConfigName(path) {
		try {
			if (path)
			{
				const id = db.itemPathToID(path);
				const meta = db.getItemManifestByID(id);
				if (meta) return meta.title;
			}
		} catch (error) {
			console.error(`[Palettes.resolveConfigName]`, error);
		}
	}

	nameplateFilename(config) {
		const configName = `${config}`.replace('-', 'n');
		const id = this.item.id;
		if (this.item.type === 'SpartanEmblem') return `${id}_${configName}`;
	}

	showMoreButton() {
		return HTML.wire(this, ':more')`
			<div
				class="related-items_show-more_wrapper"
			>
				<button
					class="hi-box"
					onclick=${() => this.setState({expanded: !this.state.expanded})}
				>
					${this.state.expanded ? 'Show Less Emblems' : 'Show More Emblems'}
				</button>
			</div>
		`;
	}
}

class Screenshots extends Component {
	constructor() {
		super();
		this.types = new Set([
			'ArmorCoating'
		]);

		this.author = 'Cylix Guide'
	}

	get defaultState() {
		return {
			expanded: false
		};
	}

	get item() {
		if (this.state.item) return this.state.item;
	}

	display(item) {
		const expanded = this.state.expanded;
		this.state = this.defaultState;
		this.state.expanded = expanded;
		if (!this.types.has(item?.type)) return;
		try {
			if (item)
			{
				this.state.item = item;
			}
		} catch (error) {
			console.error(`[ItemPanel.Screenshots]`, error);
		}
	}

	get configs() {
		return this.state.expanded ? [...this.state.configs] : [...this.state.configs].slice(0, 1);
	}

	render() {
		if (this.state.item && this.state.item.type === 'ArmorCoating')
		{
			// style=${{backgroundImage: `url(${STATIC_ROOT}7/screens/${type}/${renderName}.png)`}}
			const type = this.state.item.type.toLowerCase();
			const renderName = this.state.item.altName.toLowerCase();
			return this.html`
				<div class="screenshots-wrapper">
					<ul class="screenshots_list">
						<li class="screenshot-wrapper">
							<button
								class="screenshot-expand-thumb"
								onclick=${() => modalConstructor.showView(this.renderGallery())}
								style=${{backgroundImage: `url(${STATIC_ROOT}7/render/icon/${renderName}_icon.png)`}}
							>
								View Screenshots
							</button>
						</li>
					</ul>
				</div>
			`;
		}
	}

	renderGallery() {
		const type = this.state.item.type.toLowerCase();
		const renderName = this.state.item.altName.toLowerCase();
		return HTML.wire(this, ':imageModal')`
			<div class="dbItemPanel_image-modal">
				<img src=${`${STATIC_ROOT}7/screens/${type}/${renderName}.png`}>
			</div>
		`;
	}
}

class JsonDiff extends Component {
	constructor() {
		super();
		this.state.delta = createDiff(this.state.left, this.state.right);
		renderDiff.html.hideUnchanged();
	}

	get defaultState() {
		return {
			leftHash: '',
			rightHash: '',
			left: { dust: 'echoes' },
			right: { dustin: 'echoes' }
		};
	}

	get default() {
		return { dust: 'echoes' }
	}

	render() {
		return this.html`
			<div class="json-diff-wrapper">
				${this.state.error}
				${{ html: renderDiff.html.format(this.state.delta, this.state.left) || 'No Diff!' }}
			</div>
		`;
	}

	async setRight(request, hash) {
		try {
			const json = await request;

			if (json) this.state.right = json;
			this.state.delta = createDiff(this.state.left, this.state.right);
			if (hash) this.state.rightHash = hash;
			this.render();
			console.log('setRight', json);
		} catch (error) {
			this.state.error = `Error! ${error}`;
		}
	}

	async setLeft(request, hash) {
		try {
			const json = await request;

			if (json) this.state.left = json;
			this.state.delta = createDiff(this.state.left, this.state.right);
			if (hash) this.state.leftHash = hash;
			this.render();
			console.log('setLeft', json);
		} catch (error) {
			this.state.error = `Error! ${error}`;
		}
	}

	async setBoth({
		right,
		rightHash,
		left,
		leftHash
	}) {
		if (!right || !left) return;
		const rightJson = await right;
		const leftJson = await left;

		if (rightJson)
		{
			this.state.right = rightJson;
		} else {
			this.state.left = {...this.default}
		}
		if (leftJson)
		{
			this.state.left = leftJson;
		} else {
			this.state.left = {...this.default}
		}

		this.state.rightHash = rightHash || '';
		this.state.leftHash = leftHash || '';

		console.log('sb', this.state.leftHash);

		this.state.delta = createDiff(this.state.left, this.state.right);

		this.render();
	}
}

class ItemPanel extends Component {
	constructor() {
		super();

		window.addEventListener("keydown", (event) => {
			if (event.defaultPrevented) return;
			if (this.state.visible === true && event.key === 'Escape')
			{
				this.hide();
				event.preventDefault();
			}
		}, true);

		this.internalRelationsPage = new RelatedItems('Internal');
		this.externalRelationsPage = new RelatedItems('External');

		this.palettes = new Palettes();
		this.screenshots = new Screenshots();
		this.jsonDiff = new JsonDiff();
	}

	get defaultState() {
		return {
			visible: false,
			item: {},
			pretty: true,
			copyStatus: 'Copy Link',
			page: 'api',
			community: false,
			showStatHistory: db.isStatHistoryLoaded
		};
	}

	hide() {
		if (this.state.visible)
		{
			this.setState({visible: false});

			const { pathname } = new URL(window.location);
			if (pathname.startsWith('/item/'))
			{
				history.pushState(null, 'Halosets', `/${this.pagePathMeta}`);
			} else {
				history.pushState(null, 'Halosets', `#`);
			}

			document.body.style.overflow = 'auto';
		}
	}

	toggleVisibility() {
		this.setState({visible: !this.state.visible});
		document.body.style.overflow = 'auto';
	}

	get pagePath() {
		const { pathname } = new URL(window.location);
		if (pathname === '/' || pathname.startsWith('/item/')) return '/item';
		return '#item';
	}

	get pagePathMeta() {
		const params = new URLSearchParams(window.location.search);
		const query = `${params.size ? `?${params}` : ''}`;

		const hash = window.location.hash?.substring?.(1);
		const newHash = `${hash && !hash.startsWith('item') ? `#${hash}` : ''}`;

		return `${query}${newHash}`;
	}

	makeUrl(itemId) {
		const params = new URLSearchParams(window.location.search);
		const query = `${params.size ? `?${params}` : ''}`
		return `${this.pagePath}/${itemId}${this.pagePathMeta}`;
	}

	displayItem(item, skipState) {
		// check if is of class Item...
		if (!item?.id) return;
		if (skipState) {
			history.replaceState({path: `${item?.path}`}, `Halosets`, `${this.makeUrl(item.id)}`);
		} else {
			history.pushState({path: `${item?.path}`}, `Halosets`, `${this.makeUrl(item.id)}`);
		}
		this.scrollToTop();
		this.state = {
			...this.defaultState,
			item,
			visible: true,
			page: this.state.page,
			community: this.state.community
		}
		document.body.style.overflow = 'hidden';

		this.internalRelationsPage.init();
		this.externalRelationsPage.init();

		this.palettes.display(item);
		this.screenshots.display(item);

		this.render();

		if (this.palettes.types.has(item.type)) this.palettes.init();

		if (this.state.page === 'internal') this.showInternalRelations();
		if (this.state.page === 'external') this.showExternalRelations();
		if (this.state.page === 'palettes') this.showPalettes();
	}

	scrollToTop() {
		const el = document.querySelector(`#dbItemPanel_header`);
		if (el) el.scrollIntoView();
	}

	get item() {
		if (this.state.item) return this.state.item;
	}

	render() {
		if (this.state.visible) {
			const item = this.state.item.data;

			let imagePath = '';
			const displayPath = item?.CommonData?.DisplayPath?.Media?.MediaUrl?.Path;
			if (displayPath && typeof displayPath === 'string') {
				imagePath = `${displayPath[0].toLowerCase()}${displayPath.substring(1)}`;
			}

			return HTML.bind(document.querySelector('.js--item-panel'))`
				<div
					class="dbItemPanel_clickout"
					onclick=${() => this.hide()}
				></div>
				<div
					class="dbItemPanel_wrapper"
				>
					<header
						class="dbItemPanel_header"
						id="dbItemPanel_header"
					>
						<button
							class="item-img"
							style=${{backgroundImage: `url(${STATIC_ROOT}images/${db.pathCase(this.item.imagePath)})`}}
							onclick=${() => modalConstructor.showView(this.renderImageModal())}
						></button>
						<div class=${`dbItemPanel_titles ${this.state.item.quality}`}>
							<span class="titles_wrapper">
								<h2>${this?.item?.name ?? 'Item'}</h2>
								<h3>${this?.item?.untranslatedName ?? '...'}</h3>
							</span>
							${this?.item.isRedacted ? this.unredactButton() : ''}
							<span class="description">${this?.item.isRedacted ? '' : this?.item.description ?? '...'}</span>
						</div>
						<button
							class=${'favorite'}
							onclick=${() => {
								if (!this.state.item?.data?.CommonData) return;
								db.toggleFavorite(this.item);
								this.render();
							}}
							style=${{backgroundImage: `url(/items.svg#${db.favoriteItemIDs.has(this.item.id) ? 'favored' : 'unfavored'})`}}
						></button>
					</header>
					<div class="item-meta_wrapper">
						<div class="item-badges">
							<div class="badge">
								<div
									class="badge-svg"
									style=${{backgroundImage: `url(/seasons.svg#${this.state.item.seasonNumber ?? 'default'})`}}
								></div>
								<span>Season ${this.state.item.seasonNumber}</span>
							</div>
							<div class="badge">
								<div
									class="badge-svg"
									data-icon=${this.state.item?.type ?? 'default'}
									style=${{backgroundImage: `url(/items.svg#${this.state.item?.type ?? 'default'})`}}
								></div>
								<span class="badge">${db.getItemType(this.state.item?.type) ?? 'Item'}</span>
							</div>
							<div class="badge">
								<div
									class="badge-icon"
									style=${{backgroundImage: `url(${STATIC_ROOT}images/${db.pathCase(this.state.item?.manufacturerImage)})`}}
								></div>
								<span class="badge">${this.state.item?.manufacturerName ?? ''}</span>
							</div>
							<div class="badge" title=${this.state.item?.visibility?.date?.toLocaleDateString()}>
								<div
									class="badge-svg"
									style=${{backgroundImage: `url(/items.svg#${this.state.item?.visibility?.status.toLowerCase()})`}}
								></div>
								<span class="badge">${this.state.item?.visibility?.status}</span>
							</div>
						</div>
						<span class="attribute">${this.state.item?.data?.CommonData?.CustomAvailability ?? null}</span>
						<span class=${`attribute${this.state.item.isCrossCompatible ? '' : ' display-none'}`}>Cross Compatible</span>
						<span class="attribute">
							${this.state.item?.parentPaths ? `Applies to: ` : ''}
							${[...this.state.item?.parentPaths ?? []].map(async path => {
								const id = db.itemPathToID(path);
								const meta = db.getItemManifestByID(id);
								if (!meta) return '';

								return `<a class="parentSocket" href=${`${this.pagePath}/${meta.name}`}>${db.getItemTitleById(id)}</a>`
							})}
						</span>
					</div>
					<section
						class="item-info_wrapper"
					>
						<button
							class="hi-box"
							aria-label="Copy shareable link"
							title="Copy Link"
							onclick=${() => {
								if (!navigator.clipboard) return this.setState({copyStatus: 'Browser Error!'});
								navigator.clipboard.writeText(`https://${window?.location?.host ?? 'cylix.guide'}${this.sharePath}`)
									.then(success => {
										this.setState({copyStatus: 'Copied!'});
										setTimeout(() => {
											this.setState({copyStatus: 'Copy Link'});
										}, 2000);
									}, error => {
										console.error('Copy share link', error);
										this.setState({copyStatus: 'Error!'});
										setTimeout(() => {
											this.setState({copyStatus: 'Copy Link'});
										}, 2000);
									})
							}}
						>
							<span class="icon-masked icon-share"></span> ${this.state?.copyStatus ?? 'Copy Link'}
						</button>
					</section>
					${this.renderCommunity()}
					${() => this.palettes.types.has(this.item.type) ? this.palettes.render() : ''}
					${() => this.screenshots.types.has(this.item.type) && this.item.showCoatingRenderIcon && !this.item.isRedacted ? this.screenshots.render() : ''}
					<ul class="page-list">
						<li>
							<button
								onclick=${() => this.setState({page: 'api'})}
								class=${`hi-box${this.state.page === 'api' ? ' active' : ''}`}
							>
								Manifest
							</button>
						</li>
						<li>
							<button
								onclick=${() => this.showInternalRelations()}
								class=${`hi-box${this.state.page === 'internal' ? ' active' : ''}`}
							>
								References
							</button>
						</li>
						<li>
							<button
								onclick=${() => this.showExternalRelations()}
								class=${`hi-box${this.state.page === 'external' ? ' active' : ''}`}
							>
								Related
							</button>
						</li>
					</ul>
					${this.renderPage()}
				</div>
			`;
			// <pre class="dbItemPanel_json">${JSON.stringify(this.state.item?.data, null, "\t")}</pre>
									// style=${{"maskImage": `url("/assets/icons.svg")`}}
		}
		return HTML.bind(document.querySelector('.js--item-panel'))``;
	}

	renderPage() {
		switch (this.state.page) {
			case 'internal':
				return this.internalRelationsPage.render();
			case 'external':
				return this.externalRelationsPage.render();

			default:
				return this.renderAPI();
		}
	}

	renderAPI() {
		return HTML.wire(this, ':api')`
			<section
				class="item-panel_manifest_wrapper"
			>
				<div
					class="item-panel_manifest-property"
				>
					<label class="no-select" for="item-panel_manifest-path">Last Modified: </label>
					<div id="item-panel_manifest-path">${this?.item?.lastModifiedDate?.toLocaleDateString(undefined, {
						year: 'numeric', month: 'numeric', day: 'numeric'
					}) ?? 'untracked'}
					</div>
				<button
					onclick=${async () => modalConstructor.showView(await this.renderHistoryMenu())}
				>Compare Versions</button>
				</div>
				<pre class="dbItemPanel_json">${{html: this.state.pretty ? this.prettyJson(this.state?.item?.data ?? {}) : JSON.stringify(this.state.item?.data, null, "\t")}}</pre>
			</section>
		`;
	}

	popularityBucket(cur = 0) {
		if (cur >= 0.2) return 'Ubiquitous';
		if (cur >= 0.1) return 'Basic';
		if (cur >= 0.025) return 'Common';
		if (cur >= 0.0025) return 'Rare';
		if (cur > 0) return 'Exotic';
		return 'Unknown';
	}

	popularityRank(rank = 0) {
		if (rank === 1) return 'first';
		if (rank === 2) return 'second';
		if (rank === 3) return 'third';
		return rank;
	}

	renderCommunity() {
		if (!this?.item.community) return;
		const community = this.item.community;
		const displays = [];
		let hasStats = false;

		for (const property in community)
		{
			switch (property) {
				case 'collection':
					displays.push(`<div class="community_item">
							<label>Collection</label>
							<span><a href="https://cylix.guide/collection/${community.collection}" target="_blank">${community.collection}</a></span>
						</div>`);
					break;
				case 'tags':
					displays.push(`<div class="community_item">
							<label>Tags</label>
							<ul class="community_tag-list">
								${community.tags.map(tag => `<li>${tag}</li>`).join('')}
							</ul>
						</div>`);
					break;
				case 'availability':
					displays.push(`<div class="community_item">
							<label>Availability</label>
							<span class="community_tag-list">
								${community.availability}
							</span>
						</div>`);
					break;
				case 'cost':
					displays.push(`<div class="community_item">
							<label>Cost</label>
							<span class="community_tag-list">
								${community.cost}
							</span>
						</div>`);
					break;
				case 'stats':
					const cur = community?.stats?.cur ?? 0;
					const delta = (parseFloat(community?.stats?.delta ?? 0) * 100).toFixed(2);
					const deltaSymbol = delta > 0 ? '+' : delta < 0 ? '' : '~';
					const deltaClass = delta > 0 ? 'pos' : delta < 0 ? 'neg' : 'neut';
					hasStats = true;

					displays.push(`<div class="community_item">
							<label>Popularity as Equipped by Recent Players</label>
							<br/>
							<span class="community_pop">
								<span>${this.popularityBucket(cur)} — ${(parseFloat(cur) * 100).toFixed(2)}%</span>
								<span class="community_pop-delta ${deltaClass}" title="Change from last week.">${deltaSymbol} ${delta}%</span>
								${!community?.stats?.rank ? '' : `<br/>Ranked ${this.popularityRank(community?.stats?.rank ?? 0)} for type <span class="community_pop-type">${db.getItemType(this.state.item?.type)}</span>`}
							</span>
						</div>`);
					break;
				default:
					break;
			}
		}
		return HTML.wire(this, ':community')`
			<section
				class="item-panel_community_wrapper"
			>
				<header>
					Cylix Guide Community Notes
					<aside>
						<button
							onclick=${() => modalConstructor.showView(this.renderCommunityDisclaimer())}
						>
							<div class="icon-masked icon-info"></div>
							Learn More
						</button>
					</aside>
				</header>
				<div
					class="community_content"
				>
					${{html: displays}}
					${hasStats ? this.renderStatHistory() : ''}
				</div>
			</section>
		`;
	}

	async renderStatHistory() {
		return HTML.wire(this, ':communityHistory')`
			<div
				class="item-panel_community-history"
			>
				<h3>Weekly Fashion Stats</h3>
				${this.chartCanvasStatHistory()}
			</div>
		`;
	}

	chartCanvasStatHistory() {
		return HTML.wire(this, ':chartCanvasStatHistory')`
			<canvas
				id="chartCanvasStatHistory"
				class="chartHistory itemStats"
				onconnected=${() => this.renderStatHistoryChart()}
			></canvas>
		`;
	}

	async renderStatHistoryChart() {
		const element = document.getElementById('chartCanvasStatHistory');
		if (!element) return;
		const history = this.state.itemStatHistory ??= await db.getStatHistoryByID(this.item.id);
		if (!history || history.sample.length < 1) return;

		if (this.itemStatHistoryChart) this.itemStatHistoryChart.destroy();

		this.itemStatHistoryChart = new Chart(element, {
			type: 'line',
			data: {
				labels: history.sample.map((el, index) => {
					const date = new Date(history.start);
					return new Date(date.setDate(date.getDate() + (7 * index))).toLocaleDateString();
				}),
				datasets: [
					{
						label: 'Percent',
						data: history.sample.map(scalar => scalar * 100),
						cubicInterpolationMode: 'monotone',
						tension: 0.4,
						borderColor: '#2dbfe1',
						backgroundColor: '#0d2436',
						pointStyle: history.sample.length > 7 ? false : true
					}
				]
			},
			options: {
				responsive: true,
				interaction: {
					intersect: false,
					mode: 'index',
				},
				scales: {
					x: {
						ticks: {
							autoSkip: true,
							maxTicksLimit: 14
						}
					},
					y: {
						min: 0,
						type: 'logarithmic',
					}
				},
				animation: false
			}
		});
	}

	async renderHistoryMenu() {
		const history = new Map(await db.getHistoryByID(this.item.id) ?? []);
		const historyArray = Array.from(history.values());
		const current = historyArray.pop();
		const previous = historyArray.pop();
		console.warn(current, previous);
		this.jsonDiff.setBoth({
			right: this.state?.item?.data,
			rightHash: current,
			left: previous ? db.getItemVersion({ id: this.item.id, hash: previous }) : {},
			leftHash: previous ? previous : ''
		});
		console.warn(this.jsonDiff.state.leftHash);
		return HTML.wire(this, ':modDates')`
			<header>${this.state.item.name}</header>
			<p>API updates were logged for these dates:</p>
			<ul class="history_dates-list">
				${[...history].map(([date, hash]) => HTML.wire(this.item, `:history-${date}`)`
					<li>
						${new Date(date).toLocaleDateString()}
					</li>
				`)}
			</ul>
			<div class="option_wrapper">
				<label for="set-verion-old">Old:</label>
				<select class="set-version" id="set-verion-old" name="set-verion-old"
					onchange=${(e) => {
						this.jsonDiff.setLeft(db.getItemVersion({ id: this.item.id, hash: e.target.value }));
					}}
				>
					${[...history].reverse().filter(([date, hash]) => hash).map(([date, hash], index) => `<option value="${hash}"${index === 1 ? ' selected' : ''}>${new Date(date).toLocaleDateString()}</option>`)}
				</select
			</div>
			<div class="option_wrapper">
				<label for="set-verion-new">New:</label>
				<select class="set-version" id="set-verion-new" name="set-verion-new"
					onchange=${(e) => {
						this.jsonDiff.setRight(db.getItemVersion({ id: this.item.id, hash: e.target.value }));
					}}
				>
					${[...history].reverse().filter(([date, hash]) => hash).map(([date, hash], index) => `<option value="${hash}">${new Date(date).toLocaleDateString()}</option>`)}
				</select
			</div>
			${this.jsonDiff.render()}
		`;
	}

	renderCommunityDisclaimer() {
		return HTML.wire(this, ':communityDisclaimer')`
			<header><h1>Community Notes</h1></header>
			<p>Information in this section is maintained by volunteer contributors.</p>
			<p>To report issues or help maintain this information you may visit the <a href="https://cylix.guide/discord" target="_blank">discord.</a></p>
			<h2>Popularity</h2>
			<p>Item popularity represents a statistical sample of what active players are wearing in-game. Updated weekly, these stats represent fashion trends - showing the percentage of players wearing the item and the delta from the previous sample. The sample is composed of 25,000 random matchmaking players from recent games as well as 1,000 random cylix.guide/vanity users. Players that have never customized any aspect of their spartan are dropped from the sample.</p>
			<p>This information encompasses publicly visible equipped items, not private player inventories, and thus should not be interpreted in any other context than momentary fashion.</p>
			<p>Named breaks are given to better understand how often an item may show up in an average match.</p>
			<ul>
				<li>Ubiquitous — Many players.</li>
				<li>Basic — Several players.</li>
				<li>Common — At least one player.</li>
				<li>Rare — Once every couple matches.</li>
				<li>Exotic — It might be strange to see someone wear this.</li>
			</ul>
		`;
	}

	get sharePath() {
		return `/item/${this.item.id}`;
	}

	prettyJson(json) {
		return JSON.stringify(json, (key, value) => {
			if (value && typeof value === 'string' && value.includes('/') && value.length > 6)
			{
				// item links
				if (value.substring(value.length -5) === '.json')
				{
					const name = db.itemPathToID(value);
					const meta = db.getItemManifestByID(name);
					if (meta)
					{
						return `<a href=${`${this.pagePath}/${meta.name}`}>${db.getItemTitleById(meta.name)}</a>`;
					} else {
						return `<a href=${`#${value}`}>${value}</a>`;
					}
				}
				// image links
				if (value.substring(value.length -4) === '.png')
				{
					return `<a href=${`${STATIC_ROOT}images/${db.pathCase(value)}`} target="_blank">PNG</a>`;
				}
			}
			if ((key === 'Id' || key === 'AltName') && value && typeof value === 'string')
			{
				const meta = db.getItemManifestByID(value);
				if (meta)
				{
					return `<a href=${`#item/${meta.name}`}>${db.getItemTitleById(meta.name)}</a>`;
				}
			}
			if (key === 'FileName') return '';

			// default
			return value;
		}, '\t');
	}

	async showInternalRelations() {
		const relations = await this.getRelations();
		this.internalRelationsPage.init(new Set(relations?.internal ?? []));
		this.setState({page: 'internal'});
	}

	async showExternalRelations() {
		const relations = await this.getRelations();
		this.externalRelationsPage.init(new Set(relations?.external ?? []));
		this.setState({page: 'external'});
	}

	async showPalettes() {
		this.palettes.display(this.item);
		this.setState({page: 'palettes'});
	}

	async getRelations() {
		if (this.state.relations) return this.state.relations;
		const relations = await db.getRelationsByID(this.item.id);
		if (!relations) return;
		this.state.relations = relations;
		return relations;
	}

	async getInternalRelations() {
		console.log('getInternalRelations!');
		const relations = await this.getRelations();
		console.log('getInternalRelations!', relations);
		if (relations?.internal && relations.internal.length)
		{
			// console.log('relations!', relations.internal.join(', '));
			this.relatedItemIDs = new Set(relations.internal);
		}
	}

	unredactButton() {
		return HTML.wire(this, ':unredact')`
			<button
				class="hi-box"
				onclick=${() => {
					this?.item.unredact();
					this.render();
				}}
			>Reveal Spoiler</button>
		`;
	}

	renderImageModal() {
		return HTML.wire(this, ':imageModal')`
			<div class="dbItemPanel_image-modal">
				<h1>${this?.item?.name ?? 'Item'}</h1>
				<img src=${`${STATIC_ROOT}images/${db.pathCase(this.item.imagePath)}`}>
			</div>
		`;
	}
}

export const itemPanel = new ItemPanel();