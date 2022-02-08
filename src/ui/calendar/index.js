import { Component } from 'component';
import { HTML } from 'lib/HTML';
import { db, Item, CurrencyItem } from 'db';
import { urlParams } from 'urlParams';

import './index.css';

class Calendar extends Component {
	async init() {
		const calendarPath = 'Calendars/Seasons/SeasonCalendar.json';
		this.data = await db.getJSON(calendarPath);
		this.events = [];

		this.data?.Seasons?.forEach(async season => {
			const path = season.OperationTrackPath;
			if (!path) return;
			if (!this.rewardTracks.has(path))
			{
				const rewardTrack = new RewardTrack(path, true);
				this.rewardTracks.set(`${path}`, rewardTrack);
				rewardTrack.addDates(season?.StartDate?.ISO8601Date, season?.EndDate?.ISO8601Date);

				this.events.push({
					type: 'operation',
					startDate: season?.StartDate?.ISO8601Date,
					endDate: season?.EndDate?.ISO8601Date,
					rewardTrack
				});
			}
		});
		const launchDate = new Date('2021-11-15T08:00:00');
		this.data?.Events?.forEach(ritual => {
			const path = ritual?.RewardTrackPath;
			// console.log(path)
			if (!path) return;
			if (!this.rewardTracks.has(path))
			{
				const startDate = new Date(ritual?.StartDate?.ISO8601Date);
				if (!(startDate < launchDate))
				{
					const rewardTrack = new RewardTrack(path, false);
					this.rewardTracks.set(`${path}`, rewardTrack);
					rewardTrack.addDates(ritual?.StartDate?.ISO8601Date, ritual?.EndDate?.ISO8601Date);
	
					this.events.push({
						type: 'ritual',
						startDate: ritual?.StartDate?.ISO8601Date,
						endDate: ritual?.EndDate?.ISO8601Date,
						rewardTrack
					});
				}
			} else {
				const rewardTrack = this.rewardTracks.get(ritual.RewardTrackPath);
				rewardTrack.addDates(ritual?.StartDate?.ISO8601Date, ritual?.EndDate?.ISO8601Date);

				this.events.push({
					type: 'ritual',
					startDate: ritual?.StartDate?.ISO8601Date,
					endDate: ritual?.EndDate?.ISO8601Date,
					rewardTrack
				});
			}
		});

		// this.rewardTracks = [...this.rewardTrackPaths.values()].map(path => new RewardTrack(path));

		// console.log('[skimmer] rewardTracks', this.rewardTracks);
		this.render();
		Promise.allSettled([...this?.rewardTracks.values()].map(rewardTrack => rewardTrack.init()))
			.then(() => {
				this.render();
				this.renderEventList();
				const paramEvent = urlParams.getSecionSetting('calendar');
				if (paramEvent) this.showRewardTrackByName(paramEvent);
			})
		return this;
	}

	get rewardTracks() {
		return this?._rewardTracks ?? (this._rewardTracks = new Map());
	}

	async render() {
		return this.html`
			<div class="mica_viewer calendar_wrapper" id="season-calendar">
				<header class="mica_header-strip"><a class="mica_header-anchor" href="#season-calendar"><h2>Season Calendar</h2></a><span class="header-notice">Note: content and dates subject to change.</span></header>
				<div class="mica_main-content">
					<nav><ul class="mica_nav-list">
						${this.renderEventList()}
					</ul></nav>
					${this.state?.rewardTrack?.render() ?? this.calendar()}
				</div>
			</div>
		`;
		// ${{html: this.state?.rewardTrack ? '' : '<div class="calendar-placeholder">CHOOSE AN EVENT</div>'}}
	}

	renderEventList() {
		return HTML.wire(this, ':list')`
			<li
			><button
				onclick=${() => this.showCalendar()}
				class=${!this.state?.rewardTrack ? 'active' : null}
			>
				<span>Timeline</span>
			</button></li>
			${[...this?.rewardTracks.values()].map(rewardTrack => HTML.wire(rewardTrack)`
				<li
					class=${rewardTrack.isSeason ? 'season' : null}
				><button
					onclick=${() => this.showRewardTrack(rewardTrack)}
					class=${this.state?.rewardTrack === rewardTrack ? 'active' : null}
				>
					<span>${rewardTrack?.name}</span>
				</button></li>
			`)}
		`;
	}

	calendar() {
		return HTML.wire(this, ':calendar')`
			<ul class="timeline_wrapper">
				${{html: this?.events ? '' : '<div class="timeline-placeholder">Loading timeline...</div>'}}
				${this?.events?.map(event => {
					let active = false;
					let startDate = new Date(event.startDate);
					const launchDate = new Date('2021-11-15T08:00:00');
					if (startDate < launchDate) startDate = launchDate;
					const endDate = new Date(event.endDate);
					endDate.setDate(endDate.getDate() - 1);

					const today = new Date();
					if (startDate <= today && new Date(event.endDate) >= today) active = true;
					return HTML.wire(event)`
						<li
							class=${`timeline-event ${event?.type ?? 'ritual'}${active ? ' active' : ''}`}
						>
							<div
								class="event-bg"
								style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(event.rewardTrack?.data?.SummaryImagePath)})`}}
							></div>
							<button
								onclick=${() => this.showRewardTrack(event.rewardTrack)}
							>
								<div class="date-range">
								${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
								${' - '}${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
								</div>
								<div class="event-name">${event.rewardTrack.name}</div>
							</button>
						</li>
					`;
				}) ?? 'nop'}
			</ul>
		`;
	}

	showRewardTrack(rewardTrack) {
		if (this.state?.rewardTrack === rewardTrack) {
			this.showCalendar();
			return;
		}
		this.setState({rewardTrack});
		urlParams.setSecionSetting('calendar', rewardTrack?.name);
	}

	showRewardTrackByName(name) {
		for (const rewardTrack of [...this?.rewardTracks.values()])
		{
			if (rewardTrack?.name === name)
			{
				this.showRewardTrack(rewardTrack);
				break;
			}
		}
	}

	showCalendar() {
		this.setState({rewardTrack: undefined});
		urlParams.deleteSecionSetting('calendar');
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
					<li class="event-header">${this.name} // </li>
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
								return HTML.wire()`<li>${new Item(reward?.InventoryItemPath).renderIcon('reward', {itemTypeIcon: true})}</li>`
							})}
							${rank?.FreeRewards?.CurrencyRewards?.map(reward => {
								return HTML.wire()`<li class="currency" data-quantity=${parseInt(reward?.Amount)}>${new CurrencyItem(reward?.CurrencyPath).renderIcon(`${rank.Rank}-${performance.now()}`)}</li>`
							})}
						</ul>
						<ul class="rank_reward-items paid">
							${rank?.PaidRewards?.InventoryRewards?.map(reward => {
								return HTML.wire()`<li>${new Item(reward?.InventoryItemPath).renderIcon('reward', {itemTypeIcon: true})}</li>`
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