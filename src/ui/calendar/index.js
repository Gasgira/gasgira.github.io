import { Component } from 'component';
import { emitter } from 'eventEmitter';
import { HTML, throbber } from 'lib/HTML';
import { db } from 'db';
import { Item, placeholderItem } from 'db/item';
import { urlParams } from 'urlParams';
import { MobileMicaMenu } from 'ui/mica';

import './index.css';

class Calendar extends Component {
	constructor() {
		super();

		this.mobileMicaMenu = new MobileMicaMenu('MobileMicaMenu-Calendar', 'Events');
		emitter.on('MobileMicaMenu-Calendar', () => {
			this.setState({mobileMenu: !this.state.mobileMenu});
			if (this.state.mobileMenu) history.pushState({}, `Halosets`, ``);
		});
		emitter.on('popstate', () => {
			if (this.state.mobileMenu) this.setState({mobileMenu: false});
		});
	}

	async init() {
		if (this?._init) return;
		this._init = true;

		const calendarPath = 'Calendars/Seasons/SeasonCalendar.json';
		this.data = await db.getJSON(calendarPath);
		this.events = [];
		this.operations = [];

		this.data?.Seasons?.forEach(async season => {
			const path = season.OperationTrackPath;
			if (!path) return;
			const rewardTrack = new RewardTrack(path, true);
			this.rewardTracks.set(`${path}`, rewardTrack);
			rewardTrack.addDates(season?.StartDate?.ISO8601Date, season?.EndDate?.ISO8601Date);

			this.operations.push({
				type: 'operation',
				startDate: season?.StartDate?.ISO8601Date,
				endDate: season?.EndDate?.ISO8601Date,
				rewardTrack
			});
		});
		// const launchDate = new Date('2021-11-15T08:00:00');
		const launchDate = new Date('2022-05-03T08:00:00Z');
		const today = new Date();
		let upcoming = false;
		this.data?.Events?.forEach(ritual => {
			const path = ritual?.RewardTrackPath;
			// console.log(path)
			if (!path) return;
			const startDate = new Date(ritual?.StartDate?.ISO8601Date);
			const endDate = new Date(ritual?.EndDate?.ISO8601Date);

			let isNext = false;
			let isPast = today > endDate ? true : false;
			if (startDate > today && !upcoming)
			{
				isNext = true;
				upcoming = true;
			}

			if (!this.rewardTracks.has(path))
			{
				if (!(startDate < launchDate))
				{
					const rewardTrack = new RewardTrack(path, false);
					this.rewardTracks.set(`${path}`, rewardTrack);
					rewardTrack.addDates(ritual?.StartDate?.ISO8601Date, ritual?.EndDate?.ISO8601Date);
	
					this.events.push({
						type: 'ritual',
						startDate: ritual?.StartDate?.ISO8601Date,
						endDate: ritual?.EndDate?.ISO8601Date,
						rewardTrack,
						isNext,
						isPast
					});
				}
			} else {
				const rewardTrack = this.rewardTracks.get(ritual.RewardTrackPath);
				rewardTrack.addDates(ritual?.StartDate?.ISO8601Date, ritual?.EndDate?.ISO8601Date);

				this.events.push({
					type: 'ritual',
					startDate: ritual?.StartDate?.ISO8601Date,
					endDate: ritual?.EndDate?.ISO8601Date,
					rewardTrack,
					isNext,
					isPast
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
				const paramEvent = urlParams.getSecionSetting('calendar', { dash: true });
				if (paramEvent) this.showRewardTrackByName(paramEvent);
			})
		return this;
	}

	get defaultState() {
		return {
			mobileMenu: false
		};
	}

	get rewardTracks() {
		return this?._rewardTracks ?? (this._rewardTracks = new Map());
	}

	async render() {
		this.init();
		return this.html`
			<div class="mica_viewer calendar_wrapper" id="season-calendar">
				<header class="mica_header-strip"><a class="mica_header-anchor" href="#season-calendar"><h2>Season Calendar</h2></a><span class="header-notice"><div class="icon-masked icon-info"></div> Content and dates subject to change.</span></header>
				<div class="mica_main-content">
					<ul class=${`mica_nav-list ${this.state.mobileMenu ? 'show-mobile' : 'hide-mobile'}`}>
						${this.renderEventList()}
					</ul>
					${this.state?.rewardTrack === 'capstone' ? this.renderCapstoneCalendar() : this.state?.rewardTrack?.render() ?? this.calendar()}
					<div class=${`mica_mobile-menu_container ${this.state.mobileMenu ? 'show-mobile' : 'hide-mobile'}`}>${this?.mobileMicaMenu.render()}</div>
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
			<li
			><button
				onclick=${() => this.showCapstoneCalendar()}
				class=${this.state?.rewardTrack === 'capstone' ? 'active' : null}
			>
				<span>Capstones</span>
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

	remainingTimeInSeason() {
		try {
			const operation = this?.operations?.[this.operations.length-1];
			if (operation)
			{
				const today = new Date();
				const endDate = new Date(operation?.endDate);
				const dayMS = 24 * 60 * 60 * 1000;

				const days = Math.round(Math.abs((today - endDate) / dayMS));
				if (days > 6) return `${days} days remaining`;
				return this.renderCountdown(endDate);
			}
		} catch (error) {
			console.error('daysLeftInSeason', error);
			return `Timey Wimey Error`
		}
	}

	renderCountdown(endDate) {
		// endDate = new Date('2022-02-23T00:00:00Z');
		const render = () => {
			const now = new Date();
			const diffTime = Math.abs(now.valueOf() - endDate.valueOf());
			const days = (diffTime / (24*60*60*1000));
			const hours = (days % 1) * 24;
			const minutes = (hours % 1) * 60;
			// const secs = (minutes % 1) * 60;
			return HTML.wire(this, ':countdown')`
				${endDate < now ? '- ' : ''}${Math.floor(days).toString().padStart(2, '0')} Days, ${Math.floor(hours).toString().padStart(2, '0')} Hours, ${Math.floor(minutes).toString().padStart(2, '0')} Minutes
			`;
		};

		const interval = (time) => {
			render();

			setTimeout(() => {
				window.requestAnimationFrame(interval);
			}, 1000);
		}
		// setInterval(render, 10000);
		window.requestAnimationFrame(interval);
		return render();
	}

	calendar() {
		return HTML.wire(this, ':calendar')`
		<div class="reward-track_wrapper mica_content">
			<span>Season 2 // ${this.remainingTimeInSeason()}</span>
			<div class="timeline_wrapper">
				<ul class="timeline_list operations">
					${() => {
						const operation = this?.operations?.[this.operations.length - 1];
						if (!operation) return 'Could not get active season!';

						let active = true;
						let startDate = new Date(operation.startDate);

						// Season 1 special case dates for nice display
						// const launchDate = new Date('2021-11-15T08:00:00');
						const launchDate = new Date('2022-05-03T20:00:00Z');
						const csrResetDate = new Date('2022-02-23T00:00:00Z');

						if (startDate < csrResetDate) startDate = launchDate;
						const endDate = new Date(operation.endDate);
						// endDate.setDate(endDate.getDate() - 1);

						const today = new Date();
						if (startDate <= today && new Date(operation.endDate) >= today) active = true;

						return HTML.wire(operation)`
							<li
								class=${`timeline-event ${operation?.type ?? 'ritual'}${active ? ' active' : ''}`}
							>
								<div
									class="event-bg"
									style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(operation.rewardTrack?.data?.SummaryImagePath)})`}}
								></div>
								<button
									onclick=${() => this.showRewardTrack(operation.rewardTrack)}
								>
									<span class="date-range">
									${startDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
									${' - '}${endDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
									</span>
									<span class="event-name">${operation.rewardTrack.name}</span>
								</button>
							</li>
						`;
					}}
				</ul>
				<ul class="timeline_list rituals">
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
									class=${`event-bg${event.isPast ? ' past' : ''}`}
									style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(event.rewardTrack?.data?.SummaryImagePath)})`}}
								></div>
								<button
									onclick=${() => this.showRewardTrack(event.rewardTrack)}
								>
									<span class="date-range">
										${startDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
										${' - '}${endDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
										<br><span class="upcoming">${event.isNext ? 'Up Next' : ''}</span>
									</span>
									<span class="event-name">${event.rewardTrack.name}</span>
								</button>
							</li>
						`;
					}) ?? 'Could not load events...'}
				</ul>
			</div>
		</div>
		`;
	}

	async renderCapstoneCalendar() {
		if (this?._capstoneCalendarWire) return this._capstoneCalendarWire;
		const calendar = await this.getCapstoneCalendar();
		if (!calendar) return `The capstone calendar could not be loaded`;

		const weekToCalendarItem = async (week) => {
			if (!week.deck) return;

			const deck = new Item(week?.deck ?? 'unknown');
			if (!deck) return;

			await deck.init();
			const capstoneChallengePath = deck?.data?.CapstoneChallengePath;
			if (!capstoneChallengePath) return;

			const capstoneChallenge = new Item(capstoneChallengePath);
			await capstoneChallenge.init();
			if (!capstoneChallenge) return;

			const inventoryReward = new Item(capstoneChallenge?.data?.Reward?.InventoryRewards?.[0]?.InventoryItemPath);
			if (!inventoryReward) return;

			const startDate = new Date(week.startDate);
			const endDate = new Date(week.endDate);

			const today = new Date();

			const active = startDate <= today && endDate >= today;

			return HTML.wire(week)`
				<li class=${`calendar-item${endDate <= today ? ' past' : active ? ' active' : ' future'}`}>
					<div class="date-wrapper">
						${
							active ? HTML.wire()`
								<span class="icon-masked icon-ritual"></span>
							`
							: ''
						}
						<span class="date">${new Date(week.startDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}</span>
					</div>
					${{
						any: inventoryReward.renderIcon('capstone', {itemTypeIcon: true}),
						placeholder: placeholderItem.cloneNode(true)
					}}
					<a class="challenge-link" href=${`#${capstoneChallengePath}`}>${capstoneChallenge?.data?.Title}</a>
				</li>
			`;
		}

		return (this._capstoneCalendarWire = HTML.wire(this, ':capstone')`
			<div class="reward-track_wrapper mica_content">
				<span>Season 2 Capstones // ${calendar.length}</span>
				<ul class="capstone-calendar_wrapper">
					${{
						any: calendar.map(week => weekToCalendarItem(week)),
						placeholder: throbber.cloneNode(true)
					}}
				</ul>
			</div>
		`);
	}

	async getCapstoneCalendar() {
		if (this?._capstoneCalendar) return await this._capstoneCalendar;
		const calendarPath = 'capstones.json';
		this._capstoneCalendar = db.getJSON(calendarPath);
		return await this._capstoneCalendar;
	}

	showRewardTrack(rewardTrack) {
		this.state.mobileMenu = false;
		if (this.state?.rewardTrack === rewardTrack) {
			this.showCalendar();
			return;
		}
		this.setState({rewardTrack});
		urlParams.setSecionSetting('calendar', rewardTrack?.name, { dash: true });
		this.scrollIntoView();
	}

	showRewardTrackByName(name) {
		if (name === 'capstone')
		{
			this.setState({rewardTrack: 'capstone'});
			return;
		}
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
		this.state.mobileMenu = false;
		this.setState({rewardTrack: undefined});
		urlParams.deleteSecionSetting('calendar');
		this.scrollIntoView();
	}

	showCapstoneCalendar() {
		this.state.mobileMenu = false;
		this.setState({rewardTrack: 'capstone'});
		urlParams.setSecionSetting('calendar', 'capstone', { dash: true });
		this.scrollIntoView();
	}

	scrollIntoView() {
		const el = document.querySelector(`#season-calendar`);
		if (el)
		{
			el.scrollIntoView();
			history.replaceState({}, `Cylix`, `#season-calendar`);
		}
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
			<div class="reward-track_wrapper mica_content">
				<ul class="dates-list">
					<li class="event-header">${this.name} // </li>
					${{html: this.dates.map(dates => `
						<li><span>
							${dates.startDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
							${' - '}
							${dates.endDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
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
								return HTML.wire()`<li>${{
									any: new Item(reward?.InventoryItemPath).renderIcon('reward', {itemTypeIcon: true}),
									placeholder: placeholderItem.cloneNode(true)
								}}</li>`
							})}
							${rank?.FreeRewards?.CurrencyRewards?.map(reward => {
								return HTML.wire()`<li class="currency" data-quantity=${parseInt(reward?.Amount)}>${{
									any: new Item(reward?.CurrencyPath).renderIcon(`${rank.Rank}-${performance.now()}`),
									placeholder: placeholderItem.cloneNode(true)
								}}</li>`
							})}
						</ul>
						<ul class="rank_reward-items paid">
							${rank?.PaidRewards?.InventoryRewards?.map(reward => {
								return HTML.wire()`<li>${{
									any: new Item(reward?.InventoryItemPath).renderIcon('reward', {itemTypeIcon: true}),
									placeholder: placeholderItem.cloneNode(true)
								}}</li>`
							})}
							${rank?.PaidRewards?.CurrencyRewards?.map(reward => {
								return HTML.wire()`<li class="currency" data-quantity=${parseInt(reward?.Amount)}>${{
									any: new Item(reward?.CurrencyPath).renderIcon(`${rank.Rank}-${performance.now()}`),
									placeholder: placeholderItem.cloneNode(true)
								}}</li>`
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