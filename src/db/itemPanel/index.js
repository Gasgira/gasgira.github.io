import { db } from 'db';
import { Item, placeholderItem } from 'db/item';
import { Component } from 'component';
import { HTML } from 'lib/HTML';
import { filenameFromPath } from 'utils/paths.js';

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
			copyStatus: 'Share',
			page: 'api'
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
			history.replaceState({path: `${item?.path}`}, `Halosets`, `#${item?.path}`);
		} else {
			history.pushState({path: `${item?.path}`}, `Halosets`, `#${item?.path}`);
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
			page: this.state.page
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
						<div
							class="item-img"
							style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(this.item.imagePath)})`}}
						></div>
						<div class=${`dbItemPanel_titles${item?.CommonData?.Quality ? ` ${item.CommonData.Quality?.toLowerCase?.()}` : ''}`}>
							<h2>${this?.item?.name ?? 'Item'}</h2>
							${this?.item.isRedacted ? this.unredactButton() : ''}
							<h3>${this?.item.isRedacted ? '' : this?.item?.data?.CommonData?.Description ?? '...'}</h3>
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
								<span>${this.state.item?.data?.CommonData?.Season ?? 'Season'}</span>
							</div>
							<div class="badge">
								<div
									class="badge-svg"
									data-icon=${this.state.item?.data?.CommonData?.Type ?? 'default'}
									style=${{backgroundImage: `url(/items.svg#${this.state.item?.data?.CommonData?.Type ?? 'default'})`}}
								></div>
								<span class="badge">${db.getItemType(this.state.item?.data?.CommonData?.Type) ?? 'Item'}</span>
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
							title="share"
							onclick=${() => {
								navigator.clipboard.writeText(`https://${window?.location?.host ?? 'cylix.guide'}${this.sharePath}`)
									.then(success => {
										this.setState({copyStatus: 'Copied!'});
										setTimeout(() => {
											this.setState({copyStatus: 'Share'});
										}, 2000);
									}, error => {
										console.error('Copy share link', error);
										this.setState({copyStatus: 'Error!'});
										setTimeout(() => {
											this.setState({copyStatus: 'Share'});
										}, 2000);
									})
							}}
						>
							<span class="icon-masked icon-share"></span> ${this.state?.copyStatus ?? 'Share'}
						</button>
						<div class="modified-info_wrapper">
								<label for="item-modified-date">Modified: </label><span id="item-modified-date">${this?.item?.lastModifiedDate?.toLocaleDateString(undefined, {
									year: 'numeric', month: 'numeric', day: 'numeric'
								}) ?? 'untracked'}</span>
						</div>
					</section>
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
					${this.state.page === 'api' ? this.renderAPI() : ''}
					${this.state.page === 'internal' ? this.internalRelationsPage.render() : ''}
					${this.state.page === 'external' ? this.externalRelationsPage.render() : ''}
				</div>
			`;
			// <pre class="dbItemPanel_json">${JSON.stringify(this.state.item?.data, null, "\t")}</pre>
									// style=${{"maskImage": `url("/assets/icons.svg")`}}
		}
		return HTML.bind(document.querySelector('.js--item-panel'))``;
	}

	renderAPI() {
		return HTML.wire(this, ':api')`
			<section
				class="item-panel_manifest_wrapper"
			>
				<div
					class="item-panel_manifest-property"
				>
					<label class="no-select" for="item-panel_manifest-path">Path: </label><span id="item-panel_manifest-path">${this.state.item?.path ?? 'UNK'}</span>
				</div>
				<div
					class="item-panel_manifest-property"
				>
					<label class="no-select" for="item-panel_manifest-path">ID: </label><span id="item-panel_manifest-path">${this.state.item?.id ?? 'UNK'}</span>
				</div>
				<button
					onclick=${() => this.setState({pretty: !this.state.pretty})}
				>${this.state.pretty ? 'raw' : 'pretty'}</button>
				<pre class="dbItemPanel_json">${{html: this.state.pretty ? this.prettyJson(this.state?.item?.data ?? {}) : JSON.stringify(this.state.item?.data, null, "\t")}}</pre>
			</section>
		`;
	}

	get sharePath() {
		if (this.item?.path.startsWith('inventory/'))
		{
			const id = filenameFromPath(this.item?.path);
			if (id) return `/item/${id}`
		}

		return `${this.item?.path.startsWith('inventory/') ? '/share/' : '/#'}${this.item?.path ?? ''}`;
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
}

export const itemPanel = new ItemPanel();