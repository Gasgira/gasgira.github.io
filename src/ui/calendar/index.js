import { Component } from 'component';
import { HTML } from 'lib/HTML';
import { db, Item, CurrencyItem } from 'db';

import './index.css';

class Calendar extends Component {
	async init() {
		const calendarPath = 'Calendars/Seasons/SeasonCalendar.json';
		this.data = await db.getJSON(calendarPath);

		this.rewardTracks = new Map();

		this.data?.Seasons?.forEach(async season => {
			const path = season.OperationTrackPath;
			if (!path) return;
			if (!this.rewardTracks.has(path))
			{
				const rewardTrack = new RewardTrack(path, true);
				this.rewardTracks.set(`${path}`, rewardTrack);
				rewardTrack.addDates(season?.StartDate?.ISO8601Date, season?.EndDate?.ISO8601Date);

				if (!this.state?.rewardTrack)
				{
					// await rewardTrack.init();
					// this.setState({rewardTrack});
				}
			}
		});
		this.data?.Events?.forEach(ritual => {
			const path = ritual?.RewardTrackPath;
			console.log(path)
			if (!path) return;
			if (!this.rewardTracks.has(path))
			{
				const rewardTrack = new RewardTrack(path, false);
				this.rewardTracks.set(`${path}`, rewardTrack);
				rewardTrack.addDates(ritual?.StartDate?.ISO8601Date, ritual?.EndDate?.ISO8601Date);
			} else {
				const rewardTrack = this.rewardTracks.get(ritual.RewardTrackPath);
				rewardTrack.addDates(ritual?.StartDate?.ISO8601Date, ritual?.EndDate?.ISO8601Date);
			}
		});

		// this.rewardTracks = [...this.rewardTrackPaths.values()].map(path => new RewardTrack(path));

		console.log('[skimmer] rewardTracks', this.rewardTracks);
		this.render();
		Promise.allSettled([...this?.rewardTracks.values()].map(rewardTrack => rewardTrack.init()))
			.then(() => this.renderEventList())
		return this;
	}

	async render() {
		return this.html`
			<div class="calendar_wrapper">
				<header><span>Season Calendar</span><span class="notice">Note: content and dates subject to change.</span></header>
				<div class="calendar_content">
					<nav><ul>
						${this.renderEventList()}
					</ul></nav>
					${this.state?.rewardTrack?.render() ?? ''}
					${{html: this.state?.rewardTrack ? '' : '<div class="calendar-placeholder">CHOOSE AN EVENT</div>'}}
				</div>
			</div>
		`;
	}

	renderEventList() {
		return HTML.wire(this, ':list')`
			${[...this?.rewardTracks.values()].map(rewardTrack => HTML.wire(rewardTrack)`
				<li
					class=${rewardTrack.isSeason ? 'season' : null}
				><button
					onclick=${() => this.showRewardTrack(rewardTrack)}
					class=${this.state?.rewardTrack === rewardTrack ? 'active' : null}
				>
					<span>${rewardTrack.name}</span>
				</button></li>
			`)}
		`;
	}

	showRewardTrack(rewardTrack) {
		if (this.state?.rewardTrack === rewardTrack) {
			this.setState({rewardTrack: undefined});
			return;
		}
		this.setState({rewardTrack});
		// rewardTrack.render();
	}
}

export const calendar = new Calendar();

class RewardTrack extends Component {
	constructor(path, isSeason) {
		super();
		this.path = path;
		this.dates = [];
		isSeason ? this.isSeason = true : this.isSeason = false;
	}

	async init() {
		this.data = await db.getJSON(this.path);
		// this.renderRewardList();
	}

	render() {
		return this.html`
			<div class="reward-track_wrapper">
				<ul class="dates-list">
					${{html: this.dates.map(dates => `
						<li><span>
							${dates.startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
							${' - '}
							${dates.endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
						</span></li>
					`)}}
				</ul>
				<ul class="reward-list">${this.renderRewardList()}</ul>
			</div>
		`;
	}

	async renderRewardList() {
		// TODO performance.now is a hack to display duplicate items in a single wire
		// need to implement uuid
		return HTML.wire(this, ':list')`
			${this?.data?.Ranks?.map(rank => {
				return HTML.wire(rank)`<li class="reward-rank">
					<ul class="rank_rewards">
						<li class="rank_number">${rank.Rank}</li>
						<ul class="rank_reward-items free">
							${rank?.FreeRewards?.InventoryRewards?.map(reward => {
								return HTML.wire()`<li>${new Item(reward?.InventoryItemPath).renderIcon('reward')}</li>`
							})}
							${rank?.FreeRewards?.CurrencyRewards?.map(reward => {
								return HTML.wire()`<li class="currency" data-quantity=${parseInt(reward?.Amount)}>${new CurrencyItem(reward?.CurrencyPath).renderIcon(`${rank.Rank}-${performance.now()}`)}</li>`
							})}
						</ul>
						<ul class="rank_reward-items paid">
							${rank?.PaidRewards?.InventoryRewards?.map(reward => {
								return HTML.wire()`<li>${new Item(reward?.InventoryItemPath).renderIcon('reward')}</li>`
							})}
							${rank?.PaidRewards?.CurrencyRewards?.map(reward => {
								return HTML.wire()`<li class="currency" data-quantity=${parseInt(reward?.Amount)}>${new CurrencyItem(reward?.CurrencyPath).renderIcon(`${rank.Rank}-${performance.now()}`)}</li>`
							})}
						</ul>
					</ul>
				</li>`
			})}
		`;
	}

	get name() {
		return this?.data?.Name ?? '...';
	}

	addDates(startDateString, endDateString) {
		const startDate = new Date(startDateString);
		const endDate = new Date(endDateString);

		if (startDate && endDate) this.dates.push({startDate, endDate});
	}
}