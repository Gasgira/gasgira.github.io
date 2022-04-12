import { db } from 'db';
import { Item } from 'db/item';
import { Component } from 'component';
import { HTML } from 'lib/HTML';
import { filenameFromPath } from 'utils/paths.js';

import './index.css';

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
	}

	get defaultState() {
		return {
			visible: false,
			item: {},
			pretty: true,
			copyStatus: 'Share'
		};
	}

	hide() {
		if (this.state.visible)
		{
			this.setState({visible: false});
			history.pushState(null, 'Halosets', `#`);
		}
	}

	toggleVisibility() {
		this.setState({visible: !this.state.visible});
	}

	displayItem(item, skipState) {
		// check if is of class Item...
		if (skipState) {
			history.replaceState({path: `${item?.path}`}, `Halosets`, `#${item?.path}`);
		} else {
			history.pushState({path: `${item?.path}`}, `Halosets`, `#${item?.path}`);
		}
		
		this.setState({
			item,
			visible: true
		});
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
					<header>
						<div
							class="item-img"
							style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(this.item.imagePath)})`}}
						></div>
						<div class=${`dbItemPanel_titles${item?.CommonData?.Quality ? ` ${item.CommonData.Quality?.toLowerCase?.()}` : ''}`}>
							<h2>${this?.item?.name ?? 'Item'}</h2>
							<h3>${this?.item?.data?.CommonData?.Description ?? '...'}</h3>
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
					<div class="item-info_wrapper">
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
							${[...this.state.item?.parentPaths ?? []].map(async path => `<a class="parentSocket" href=${`#${path}`}>${await new Item(path).getName()}</a>`)}
						</span>
					</div>
					<div class="modified-info_wrapper">
							<label for="item-modified-date">Modified: </label><span id="item-modified-date">${this?.item?.lastModifiedDate?.toLocaleDateString(undefined, {
								year: 'numeric', month: 'numeric', day: 'numeric'
							}) ?? 'untracked'}</span>
					</div>
					<div class="json-info_wrapper">
						<span class="dbItemPanel_path">
							<button
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
							><span class="icon-masked icon-share"></span> ${this.state?.copyStatus ?? 'Share'}</button>
							<a href=${this.sharePath} target="_blank" rel="noopener noreferrer">${this.state.item?.path ?? 'UNK'}</a>
						</span>
						<button
							onclick=${() => this.setState({pretty: !this.state.pretty})}
						>${this.state.pretty ? 'raw' : 'pretty'}</button>
					</div>
					<pre class="dbItemPanel_json">${{html: this.state.pretty ? this.prettyJson(this.state?.item?.data ?? {}) : JSON.stringify(this.state.item?.data, null, "\t")}}</pre>
				</div>
			`;
			// <pre class="dbItemPanel_json">${JSON.stringify(this.state.item?.data, null, "\t")}</pre>
									// style=${{"maskImage": `url("/assets/icons.svg")`}}
		}
		return HTML.bind(document.querySelector('.js--item-panel'))``;
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
}

export const itemPanel = new ItemPanel();