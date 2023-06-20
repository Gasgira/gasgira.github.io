import { Component } from 'component';
import { HTML } from 'lib/HTML';
import { modalConstructor } from 'ui/modal';
import { emitter } from 'eventEmitter';
import Chart from 'chart.js/auto';

import './index.css';

class UGCDetailPanel extends Component {
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

		emitter.on('hide-panel', () => this.hide());
	}

	get defaultState() {
		return {
			visible: false,
			asset: {}
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

	displayAsset(asset, skipState) {
		// check if is of class Item...
		if (skipState) {
			history.replaceState({path: `${asset?.id}`}, `Cylix Guide`, `#${asset.cylixURI}`);
		} else {
			history.pushState({path: `${asset?.id}`}, `Cylix Guide`, `#${asset.cylixURI}`);
		}
		this.scrollToTop();
		this.state = {
			...this.defaultState,
			asset,
			visible: true
		}
		document.body.style.overflow = 'hidden';

		this.render();
	}

	scrollToTop() {
		const el = document.querySelector(`#ugc_detail-panel_header`);
		if (el) el.scrollIntoView();
	}

	render() {
		if (!this.state.visible) return HTML.bind(document.querySelector('.js--item-panel'))``;

		const asset = this.state.asset;
		if (!asset) return;
		// onerror=${() => this.setState({ brokenImage: true })}

		return HTML.bind(document.querySelector('.js--item-panel'))`
			<div
				class="dbItemPanel_clickout"
				onclick=${() => this.hide()}
			></div>
			<div class=${`dbItemPanel_wrapper ugc_detail-panel${asset.is343 ? ' is343' : ''}${asset.isRecommended ? ' isRec' : ''}`}>
				<header id="ugc_detail-panel_header" class="asset-title">
					<h2>${asset.title}</h2>
				</header>
				<div class="img-viewer_wrapper">
					<img
						class=${`img-viewer${this.state.brokenImage ? ' broken' : ''}`}
						style=${{opacity: this.state.loadedImage ? 1 : 0}}
						src=${this.state.brokenImage ? this.defaultImage : asset.mainImage}
						width="1280"
						height="720"
						onerror=${() => this.setState({ brokenImage: true })}
						onload=${() => this.setState({ loadedImage: true })}
					>
				</div>
				<div
					class="overview"
				>
					<ul class="quick-stats">
						<li>
							<span>Bookmarks</span>
							<span>${asset.bookmarks.toLocaleString()}</span>
						</li>
						<li>
							<span>Plays</span>
							<span>${asset.playsAllTime.toLocaleString()}</span>
						</li>
						<li>
							<span>Plays (Recent)</span>
							<span>${asset.playsRecent.toLocaleString()}</span>
						</li>
						<li>
							<span>Rating</span>
							<span>${asset.averageRating}</span>
						</li>
					</ul>
					<div class="description">
						<span class="date-modified"><div class=${`icon-masked icon-ugc-${asset.assetKindIndex}`}></div>Last Updated: ${asset.lastModifiedVersion}</span>
						<span class="text">${asset.description}</span>
					</div>
					<ul class="tags">
						${asset.tags.map(tag => `<li>${tag}</li>`)}
					</ul>
					<div class="credits">
						<h3>${asset.contributors.length > 1 ? 'File Owner' : 'Author'}</h3>
						<div class="author">${asset.originalAuthor}</div>
						<h3>${asset.contributors.length > 1 ? `Contributors [${asset.contributors.length}]` : ''}</h3>
						<ul>
							${asset.contributors.length > 1 ? asset.contributors.map((contributor, index) => `<li>${contributor}</li>`) : ''}
						</ul>
					</div>
				</div>
				<div class="links">
					<h3>Find & Bookmark</h3>
					<a target="_blank" rel="noopener noreferrer" href=${this.waypointLink}>Waypoint</a><br/>
				</div>
				<div class="details">
					<h3>Details</h3>
					<ul class="details-list">
						<li class="details-list-item">
							<label>Type</label>
							<div class=${`icon-masked icon-ugc-${asset.assetKindIndex}`}></div><span>${asset.assetKind}</span>
						</li>
						<li class="details-list-item">
							<label>Date Created</label>
							<span>${asset.dateCreated.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
						</li>
						<li class="details-list-item">
							<label>Date Published</label>
							<span>${asset.datePublished.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
						</li>
						<li class="details-list-item">
							<label>Date Modified</label>
							<span>${asset.dateModified.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
						</li>
						<li class="details-list-item">
							<label>Copy Protected</label>
							<span>${asset.isCopyProtected ? 'Yes' : 'No'}</span>
						</li>
						<li class="details-list-item">
							<label>Objects</label>
							<span>${asset.objectCount.toLocaleString()}</span>
						</li>
					</ul>
				</div>
			</div>
		`;
	}

	get defaultImage() {
		return 'https://hi.cylix.guide/ugc/images/default.jpg';
	}

	async getWaypointAsset() {
		try {
			const url = new URL(`/api/${this.state.asset.cylixURI}`, `https://${window.location.host.replace('beta.', '')}`);

			const res = await fetch(url, {
				headers: {
					'Accept': 'application/json'
				}
			});

			if (!res || !res.ok)
			{
				console.error(`[UGCDetailPanel.getWaypointAsset] Failed to fetch`, res);
				throw new Error(res.status);
			}

			const json = await res.json();
			console.log('res!', json);
		} catch (error) {
			console.error(`[UGCDetailPanel.getWaypointAsset]`, error);
		}
	}

	get xugcLink() {
		const path = `/ugc/halo-infinite/${this.state.asset?.cylixUGCKind}/${this.state.asset?.id}?v=${this.state.asset?.version}`;
		const url = new URL(path, 'https://xugc.halo.info');
		return `${url}`;
	}

	get waypointLink() {
		const url = new URL(this.state.asset.waypointBrowserURI, 'https://www.halowaypoint.com');
		return `${url}`;
	}

	async getMapStats() {
		if (this._mapStats) return this._mapStats;
	}
}

export const detailPanel = new UGCDetailPanel();