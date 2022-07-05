import { db } from 'db';
import { Item, placeholderItem } from 'db/item';
import { Component } from 'component';
import { HTML } from 'lib/HTML';
import { filenameFromPath } from 'utils/paths.js';
import { modalConstructor } from 'ui/modal';

import './index.css';

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
		return (this.state.items = [...this.displayedItemIDs].map(id => new Item(db.getItemPathByID(id))));
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
	}

	get defaultState() {
		return {
			visible: false,
			item: {},
			pretty: true,
			copyStatus: 'Copy Link',
			page: 'api',
			community: false
		};
	}

	hide() {
		if (this.state.visible)
		{
			this.setState({visible: false});
			history.pushState(null, 'Halosets', `#`);
			document.body.style.overflow = 'auto';
		}
	}

	toggleVisibility() {
		this.setState({visible: !this.state.visible});
		document.body.style.overflow = 'auto';
	}

	displayItem(item, skipState) {
		// check if is of class Item...
		if (skipState) {
			history.replaceState({path: `${item?.path}`}, `Halosets`, `#item/${item?.id}`);
		} else {
			history.pushState({path: `${item?.path}`}, `Halosets`, `#item/${item?.id}`);
		}
		// this.setState({
		// 	item,
		// 	visible: true,
		// 	relations: undefined
		// });
		this.state = {
			...this.defaultState,
			item,
			visible: true,
			page: this.state.page,
			community: this.state.community
		}
		this.render();
		document.body.style.overflow = 'hidden';

		this.internalRelationsPage.init();
		this.externalRelationsPage.init();

		if (this.state.page === 'internal')
		{
			this.showInternalRelations();
		}

		if (this.state.page === 'external')
		{
			this.showExternalRelations();
		}
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
					>
						<button
							class="item-img"
							style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(this.item.imagePath)})`}}
							onclick=${() => modalConstructor.showView(this.renderImageModal())}
						></button>
						<div class=${`dbItemPanel_titles ${this.state.item.quality}`}>
							<h2>${this?.item?.name ?? 'Item'}</h2>
							${this?.item.isRedacted ? this.unredactButton() : ''}
							<h3>${this?.item.isRedacted ? '' : this?.item.description ?? '...'}</h3>
						</div>
						<button
							class=${'favorite'}
							onclick=${() => {
								if (!this.state.item?.data?.CommonData) return;
								db.toggleFavorite(this.state.item.path);
								this.render();
							}}
							style=${{backgroundImage: `url(/items.svg#${db.favoriteItemPaths.has(this.state.item.path) ? 'favored' : 'unfavored'})`}}
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
									style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(this.state.item?.manufacturerImage)})`}}
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
						<span class="attribute">
							${this.state.item?.parentPaths ? `Applies to: ` : ''}
							${[...this.state.item?.parentPaths ?? []].map(async path => {
								const id = filenameFromPath(path);
								const meta = db.getItemManifestByID(id);
								if (!meta) return '';

								return `<a class="parentSocket" href=${`#${meta.path}`}>${meta.title}</a>`
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
						<div class="modified-info_wrapper">
								<label for="item-modified-date">Modified: </label>
								<button id="item-modified-date"
									onclick=${() => modalConstructor.showView(this.renderDates())}
								>
									${this?.item?.lastModifiedDate?.toLocaleDateString(undefined, {
										year: 'numeric', month: 'numeric', day: 'numeric'
									}) ?? 'untracked'}
								</button>
						</div>
					</section>
					${this.renderCommunity()}
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
				<button
					onclick=${() => this.setState({pretty: !this.state.pretty})}
				>${this.state.pretty ? 'raw' : 'pretty'}</button>
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
		return 'Unknown';
	}

	renderCommunity() {
		if (!this?.item.community) return;
		const community = this.item.community;
		const displays = [];
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
				case 'stats':
					const cur = community?.stats?.cur ?? 0;
					const delta = (parseFloat(community?.stats?.delta ?? 0) * 100).toFixed(2);
					const deltaSymbol = delta > 0 ? '+' : delta < 0 ? '' : '~';
					const deltaClass = delta > 0 ? 'pos' : delta < 0 ? 'neg' : 'neut';

					displays.push(`<div class="community_item">
							<label>Popularity as Equipped by Recent Players</label>
							<br/>
							<span class="community_pop">
								<span>${this.popularityBucket(cur)} — ${(parseFloat(cur) * 100).toFixed(2)}%</span>
								<span class="community_pop-delta ${deltaClass}">${deltaSymbol} ${delta}%</span>
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
					Community Notes
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
				</div>
			</section>
		`;
	}

	renderDates() {
		return HTML.wire(this, ':modDates')`
			<header>${this.state.item.name}</header>
			<p>API updates were logged for these dates:</p>
			<ul>
				${{html: this.state.item.manifestItem.touched.map(dateString => `${new Date(dateString).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}`).join('<br/>')}}
			</ul>
		`;
	}

	renderCommunityDisclaimer() {
		return HTML.wire(this, ':communityDisclaimer')`
			<header><h1>Community Notes</h1></header>
			<p>Information in this section is maintained by volunteer contributors.</p>
			<p>To report issues or help maintain this information you may visit the <a href="https://cylix.guide/discord" target="_blank">discord.</a></p>
			<h2>Popularity</h2>
			<p>Item popularity represents a statistical sample of what active players are wearing in-game. Updated regularly, these stats represent fashion trends - showing the percentage of players wearing the item and the delta from the previous sample.</p>
			<p>This information encompasses publicly visible equipped items, not private player inventories, and thus should not be interpreted in any other context than momentary fashion.</p>
			<p>Named breaks are given to better understand how often an item may show up in an average match.</p>
			<ul>
				<li>Ubiquitous — Many players.</li>
				<li>Basic — Several players.</li>
				<li>Common — At least one player.</li>
				<li>Rare — Once every couple matches.</li>
				<li>Exotic — It would be strange to see someone wear this.</li>
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
					return `<a href=${`#${value}`}>${value}</a>`;
				}
				// image links
				if (value.substring(value.length -4) === '.png')
				{
					return `<a href=${`/${db?.dbPath ?? 'db'}/images/${db.pathCase(value)}`} target="_blank">${value}</a>`;
				}
			}

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
				<img src=${`/${db?.dbPath ?? 'db'}/images/${db.pathCase(this.item.imagePath)}`}>
			</div>
		`;
	}
}

export const itemPanel = new ItemPanel();