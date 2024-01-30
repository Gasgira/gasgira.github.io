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
			<div class=${`dbItemPanel_wrapper ugc_detail-panel${asset.is343 ? ' is343' : ''}${asset.isRecommendedBadge ? ' isRec' : ''}${asset.hasParentAssets ? ' isFeatured' : ''}`}>
				<header id="ugc_detail-panel_header" class="asset-title">
					<h2>${asset.title}<div class=${`icon-masked icon-ugc-${asset.isRecommendedBadge ? 'rec' : 'no-rec'}`}></div></h2>
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
							<span>Recent Plays</span>
							<span>${asset.playsRecent.toLocaleString()}</span>
						</li>
						<li
							title=${`${asset.ratingCount} ratings`}
						>
							<span>Rating</span>
							<span>${asset.averageRating}</span>
						</li>
					</ul>
					<div class="description">
						<span class="date-modified"><div class=${`icon-masked icon-ugc-${asset.assetKindIndex}`}></div>Last Updated: ${asset.lastModifiedVersion}</span>
						<span class="recommended-note">${asset.recommendedNote}</span>
						<span class="text">${asset.description}</span>
					</div>
					<ul class="tags">
						${asset.tags.map(tag => `<li>${tag}</li>`)}
					</ul>
					<div class=${`history-stats ${asset.assetKind}`}>
						<h3 class="margin">Plays</h3>
						${asset.assetKind === 'Map' ? asset.historyPlays.length > 1 ? this.chartCanvasPlays() : 'No Data' : ''}
					</div>
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

	chartCanvasPlays() {
		return HTML.wire(this, ':chartCanvasPlays')`
			<canvas
				id="chartCanvasPlays"
				class="chartHistory plays"
				onconnected=${() => this.renderHistoryPlays()}
			></canvas>
		`;
	}

	renderHistoryPlays() {
		const element = document.getElementById('chartCanvasPlays');
		if (!element) return;
		const data = [...this.asset.historyPlays];
		if (!data || data.length < 1) return;

		let sum = 0;
		const totals = data.map(([date, plays]) => {
			sum = sum + plays;
			return [date, sum];
		})
		// if (data[0][1] > data[1][1]) data[0][1] = 0;

		if (this.playChart) this.playChart.destroy();

		this.playChart = new Chart(element, {
			type: 'line',
			data: {
				labels: totals.map(el => new Date(`${el[0]}T18:05:03.402Z`).toLocaleDateString()),
				datasets: [
					{
						label: 'Day',
						data: data.map(el => el[1]),
						cubicInterpolationMode: 'monotone',
						tension: 0.4,
						borderColor: '#2dbfe1',
						backgroundColor: '#0d2436',
						pointStyle: false
					},
					{
						label: 'Overall',
						data: totals.map(el => el[1]),
						cubicInterpolationMode: 'monotone',
						tension: 0.4,
						borderColor: '#8a3513',
						backgroundColor: '#2b1005',
						pointStyle: false
					}
				]
			},
			options: {
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
						suggestedMin: 5,
						type: 'logarithmic',
					}
				},
				animation: false
			}
		});
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

	get asset() {
		return this.state.asset;
	}
}

export const detailPanel = new UGCDetailPanel();