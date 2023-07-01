import { Component } from 'component';
import { emitter } from 'eventEmitter';
import { HTML, throbber } from 'lib/HTML';
import { db } from 'db';
import { Item, placeholderItem } from 'db/item';
import { urlParams } from 'urlParams';
import { MobileMicaMenu } from 'ui/mica';
import { filenameFromPath } from 'utils/paths.js';
import { modalConstructor } from 'ui/modal';
import { STATIC_ROOT } from 'environment';

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

		const calendarMeta = db.getItemManifestByID('seasoncalendar');
		if (!calendarMeta) return;
		this.data = await db.getJSON(`item/${calendarMeta.name}/${calendarMeta.res}.json`);
		this.events = [];
		this.operations = [];

		const careerMeta = db.getItemManifestByID(filenameFromPath(this.data?.CareerRank?.RewardTrackPath));
		this.career.rewardTrackPath = `item/${careerMeta.name}/${careerMeta.res}.json`;

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
				if (!(startDate < this.minimumEventDate))
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
			});
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

	get economy() {
		return this._economy ??= new Economy();
	}

	get career() {
		return this._career ??= new Career();
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
				onclick=${() => this.showCareer()}
				class=${this.state.rewardTrack === this.career ? 'active' : null}
			>
				<span>Career</span>
			</button></li>
			<li
			><button
				onclick=${() => this.showCapstoneCalendar()}
				class=${this.state?.rewardTrack === 'capstone' ? 'active' : null}
			>
				<span>Capstones</span>
			</button></li>
			<li
			><button
				onclick=${() => this.showEconomy()}
				class=${this.state.rewardTrack === this.economy ? 'active' : null}
			>
				<span>Store</span>
			</button></li>
			${[...this?.rewardTracks.values()].map(rewardTrack => HTML.wire(rewardTrack)`
				<li
					class=${rewardTrack.isSeason ? 'season' : 'event'}
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
				if (days > 7) return `${days} days remaining`;
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

	get minimumEventDate() {
		return this._minimumEventDate ??= new Date('2023-06-20T20:00:00Z');
	}

	calendar() {
		return HTML.wire(this, ':calendar')`
		<div class="reward-track_wrapper mica_content">
			<span>Season 4 // ${this.remainingTimeInSeason()}</span>
			<div class="timeline_wrapper">
				<ul class="timeline_list operations">
					${() => {
						const operation = this?.operations?.[this.operations.length - 1];
						if (!operation) return 'Could not get active season!';

						let active = true;
						let startDate = new Date(operation.startDate);

						// Season 1 special case dates for nice display
						// const launchDate = new Date('2021-11-15T08:00:00');
						// const csrResetDate = new Date('2023-06-20T20:00:00Z');
						const csrResetDate = this.minimumEventDate;

						if (startDate < csrResetDate) startDate = this.minimumEventDate;
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
									style=${{backgroundImage: `url(${STATIC_ROOT}images/${db.pathCase(operation.rewardTrack?.data?.SummaryImagePath)})`}}
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
						if (startDate < this.minimumEventDate) startDate = this.minimumEventDate;
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
									style=${{backgroundImage: `url(${STATIC_ROOT}images/${db.pathCase(event.rewardTrack?.data?.SummaryImagePath)})`}}
								></div>
								<button
									onclick=${() => this.showRewardTrack(event.rewardTrack)}
								>
									<span class="date-range">
										${startDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
										${' - '}${endDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
										<br>
										<span class="upcoming">${event.isNext ? 'Up Next' : ''}</span>
										<span class="upcoming">${active ? 'Live Now' : ''}</span>
									</span>
									<span class="event-name">${event.rewardTrack.name}</span>
								</button>
							</li>
						`;
					}) ?? '...'}
				</ul>
			</div>
		</div>
		`;
	}

	async renderCapstoneCalendar() {
		if (this?._capstoneCalendarWire) return this._capstoneCalendarWire;
		const calendar = await this.getCapstoneCalendar();
		if (!calendar) return `...pardon the dust...`;

		const startDate = new Date(calendar.startDate);
		const finalDate = new Date(calendar.endDate);
		const today = new Date();

		const weekToCalendarItem = async (deckPath, week) => {
			if (!deckPath) return;

			const deck = new Item({ path: deckPath });
			if (!deck) return;

			await deck.init();
			const capstoneChallengePath = deck?.data?.CapstoneChallengePath;
			if (!capstoneChallengePath) return;

			const capstoneChallenge = new Item({ path: capstoneChallengePath });
			await capstoneChallenge.init();
			if (!capstoneChallenge) return;

			const inventoryReward = new Item({ path: capstoneChallenge?.data?.Reward?.InventoryRewards?.[0]?.InventoryItemPath });
			if (!inventoryReward) return;

			const weekStartDate = new Date(startDate);
			weekStartDate.setDate(startDate.getDate() + (7 * (week)));
			const weekEndDate = new Date(weekStartDate);
			weekEndDate.setDate(weekStartDate.getDate() + 7);

			const active = weekStartDate <= today && weekEndDate >= today;

			return HTML.wire(weekStartDate)`
				<li class=${`calendar-item${weekEndDate <= today ? ' past' : active ? ' active' : weekEndDate > finalDate ? ' past' : ' future'}`}>
					<div class="date-wrapper">
						${
							active ? HTML.wire()`
								<span class="icon-masked icon-ritual"></span>
							`
							: ''
						}
						<span class="date">${new Date(weekStartDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}</span>
					</div>
					${{
						any: inventoryReward.renderIcon(`capstone-${weekStartDate}`, {itemTypeIcon: true}),
						placeholder: placeholderItem.cloneNode(true)
					}}
					<a class="challenge-link" href=${`#item/${filenameFromPath(capstoneChallengePath)}`}>${capstoneChallenge?.name ?? '???'}</a>
				</li>
			`;
		}

		return (this._capstoneCalendarWire = HTML.wire(this, ':capstone')`
			<div class="reward-track_wrapper mica_content">
				<span>${calendar.title} Capstones // ${calendar.weeks.length}</span>
				<ul class="capstone-calendar_wrapper">
					${{
						any: calendar.weeks.map((path, week) => weekToCalendarItem(path, week)),
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
		if (name === 'store')
		{
			this.setState({rewardTrack: this.economy});
			this.economy.init();
			return;
		}
		if (name === 'career')
		{
			this.setState({rewardTrack: this.career});
			this.career.init();
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

	showEconomy() {
		this.state.mobileMenu = false;
		this.setState({rewardTrack: this.economy});
		this.economy.init();
		urlParams.setSecionSetting('calendar', 'store', { dash: true });
		this.scrollIntoView();
	}

	showCareer() {
		this.state.mobileMenu = false;
		this.setState({rewardTrack: this.career});
		this.career.init();
		urlParams.setSecionSetting('calendar', 'career', { dash: true });
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
		this.item = new Item({ path: this.path });
		await this.item.init();
		this.data = this.item.data;
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
									any: new Item({ path: reward?.InventoryItemPath }).renderIcon('reward', {itemTypeIcon: true}),
									placeholder: placeholderItem.cloneNode(true)
								}}</li>`
							})}
							${rank?.FreeRewards?.CurrencyRewards?.map(reward => {
								return HTML.wire()`<li class="currency" data-quantity=${parseInt(reward?.Amount)}>${{
									any: new Item({ path: reward?.CurrencyPath }).renderIcon(`${rank.Rank}-${performance.now()}`),
									placeholder: placeholderItem.cloneNode(true)
								}}</li>`
							})}
						</ul>
						<ul class="rank_reward-items paid">
							${rank?.PaidRewards?.InventoryRewards?.map(reward => {
								return HTML.wire()`<li>${{
									any: new Item({ path: reward?.InventoryItemPath }).renderIcon('reward', {itemTypeIcon: true}),
									placeholder: placeholderItem.cloneNode(true)
								}}</li>`
							})}
							${rank?.PaidRewards?.CurrencyRewards?.map(reward => {
								return HTML.wire()`<li class="currency" data-quantity=${parseInt(reward?.Amount)}>${{
									any: new Item({ path: reward?.CurrencyPath }).renderIcon(`${rank.Rank}-${performance.now()}`),
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

class Career extends Component {
	constructor(rewardTrack) {
		super();
		if (rewardTrack && rewardTrack?.Ranks) this._rewardTrack = rewardTrack;
	}

	async init() {
		if (this.ranks.length) return;
		if (this.rewardTrackPath)
		{
			const rewardTrack = await db.getJSON(this.rewardTrackPath);
			if (rewardTrack) this._rewardTrack = rewardTrack;

			let sum = 0;
			for (const rank of this.rewardTrack.Ranks)
			{
				rank.initalXp = parseInt(sum);
				sum = sum + parseInt(rank.XpRequiredForRank);
				rank.totalXp = parseInt(sum);
				this.ranks.push(new CareerRank(rank, this));
			}

			this._careerXpSum = sum;
		}

		this.render();
	}

	render() {
		return this.html`
			<div class="reward-track_wrapper mica_content">
				<ul class="career-ranks-list">${this.renderRewardList()}</ul>
			</div>
		`;
	}

	get ranks() {
		return this._ranks ??= [];
	}

	get careerXpSum() {
		return this._careerXpSum ?? 0;
	}

	async renderRewardList() {
		return HTML.wire(this, ':list')`
			${this.ranks.map(rank => rank.render())}
		`;

	// 	<ul class="rank_reward-items">
	// 	${rank?.FreeRewards?.InventoryRewards?.map(reward => {
	// 		return HTML.wire(reward, ':freeInventory')`<li>${{
	// 			any: new Item({ path: reward?.InventoryItemPath }).renderIcon('reward', {itemTypeIcon: true}),
	// 			placeholder: placeholderItem.cloneNode(true)
	// 		}}</li>`
	// 	})}
	// 	${rank?.FreeRewards?.CurrencyRewards?.map(reward => {
	// 		return HTML.wire(reward, ':freeCurrency')`<li class="currency" data-quantity=${parseInt(reward?.Amount)}>${{
	// 			any: new Item({ path: reward?.CurrencyPath }).renderIcon(`${rank.Rank}-${performance.now()}`),
	// 			placeholder: placeholderItem.cloneNode(true)
	// 		}}</li>`
	// 	})}
	// </ul>
	}

	get rewardTrack() {
		return this._rewardTrack ??= {
			TrackId: "careerRank1",
			Ranks: [],
			Name: "Career Rank Loading...",
			Description: "Earn Personal Score to Advance Career Rank."
		};
	}

	get name() {
		return this.rewardTrack?.Name ?? 'Career';
	}
}

class CareerRank extends Component {
	constructor(rank, career) {
		super();
		if (rank && rank?.Rank) this.rank = rank;
		if (career) this.career = career;
	}

	render() {
		return this.html`
			<li
				class=${`career-rank${this.rewardIds ? ' has-rewards' : ''}`}
				onclick=${() => this.showDetails()}
			>
				<ul class="rank_rewards">
					<li class="rank-img_container">
						<img
							class="rank-img"
							src=${`${STATIC_ROOT}images/${this.rank.RankIcon.toLowerCase()}`}
							decoding="async"
							fetchpriority="low"
							loading="lazy"
							width="200"
							height="280"
						>
						<img
							class="rank-img_adornment"
							src=${`${STATIC_ROOT}images/${this.rank.RankAdornmentIcon.toLowerCase()}`}
							decoding="async"
							fetchpriority="low"
							loading="lazy"
							width="200"
							height="280"
						>
					</li>
					<li class="rank_number">
						<span class="rank-number">${this.level}<br/>${this.xpPercent}</span>
						<span class="rank-title">${this.fullTitle}</span>
						<span class="rank-xp"><span class="fade">+ </span>${this.xpRequiredForRank.toLocaleString()}<span class="fade"> // </span>${this.totalXp.toLocaleString()}</span>
						<span class="rank-rewards">${{ html: this.rank.FreeRewards.InventoryRewards.length ? '<div class="icon-masked icon-emblem"></div>' : '' }}</span>
					</li>
				</ul>
			</li>
		`;
	}

	async showDetails() {
		if (this.rewardIds)
		{
			modalConstructor.showView(this.renderDetails());
			await this.initRewardItems();
			this.renderDetails();
		}
	}

	get rewardIds() {
		if (this.rank?.FreeRewards?.InventoryRewards.length)
		{
			return this.rank.FreeRewards.InventoryRewards.map(reward => filenameFromPath(reward.InventoryItemPath));
		}
	}

	get rewardItems() {
		if (this._rewardItems) return this._rewardItems;
	}

	async initRewardItems() {
		try {
			const items = await Promise.all(this.rewardIds.map(id => db.getItem({ id })));
			this._rewardItems = items;
		} catch (error) {
			console.error(`[CareerRank.initRewardItems]`, error);
		}
	}

	renderDetails() {
		return HTML.wire(this, ':details')`
			<div class="career-rank_details">
				<header>
					<span class="subtitle">${this.subTitle}</span>
					<span class="subtitle">${this.fullTitle}</span>
				</header>
				<span>${this.totalXp.toLocaleString()} XP</span>
				${this.renderRewards()}
			</div>
		`;
	}

	renderRewards() {
		if (!this.rewardItems) return '';
		return HTML.wire(this, ':rewards')`
			<ul class="career-rank_rewards">
				${this.rewardItems.map(reward => reward.renderIcon(`career-${this.level}`, {itemTypeIcon: true}))}
			</ul>
		`;
	}

	get level() {
		return this.rank.Rank ?? '??';
	}

	get subTitle() {
		return `${this.rank?.RankSubTitle ?? 'Metal'}`;
	}

	get fullTitle() {
		return `${this.rank?.RankTitle ?? 'Rank'} ${this.rank.RankGrade || ''}`;
	}

	get totalXp() {
		return this.rank?.totalXp ?? 0;
	}

	get xpRequiredForRank() {
		return this.rank?.XpRequiredForRank ?? 0;
	}

	get xpPercent() {
		return parseFloat(this.rank.initalXp / this.career.careerXpSum).toLocaleString(undefined, {
			style: 'percent',
			minimumFractionDigits: 2
		});
	}
}

class Economy extends Component {
	async init() {
		if (this.stores.length) return;
		console.log(`[Economy.init] Loading stores...`);

		let mainFile = 'main';
		const restoreMainArchive = urlParams.getSecionSetting('storeArchive', { dash: false });
		if (restoreMainArchive && Date.parse(restoreMainArchive))
		{
			mainFile = `${restoreMainArchive}`.substring(0, 10);
			console.log(`[Economy.init] Loading main archive "${mainFile}"`);
		}

		const stores = await Promise.all([
			this.getStore(`main/${mainFile}`, new Date().toJSON().substring(0, 13)),
			this.getStore(`customizationoffers/customizationoffers`),
			this.getStore(`hcs/hcs`)
		]);

		console.log(`[Stores.init] Loaded stores!`, stores);
		const restoreStore = urlParams.getSecionSetting('storefront', { dash: true });

		stores.forEach(store => {
			if (store)
			{
				const storefront = new Storefront(store);
				this.stores.push(storefront);
				if (!this.state.store) this.state.store = storefront;
				if (restoreStore && storefront.name === restoreStore) this.state.store = storefront;
			}
		});

		this.render();
	}

	render() {
		return this.html`
			<div class="economy">
				<ul class="store-list">${this.stores.map(store => {
					return HTML.wire(store, ':button')`
						<li>
							<button
								class="hi-box"
								onclick=${() => this.showStore(store)}
							>${store.name}</button>
						</li>
					`;
				})}</ul>
				${this.state?.store?.render?.() ?? '...loading stores'}
			</div>
		`;
	}

	get stores() {
		return this._stores ??= [];
	}

	get offerings() {
		return this._offerings ??= new Map();
	}

	async getStore(path, query) {
		const store = await db.getJSON(`economy/${path}.json${query ? `?t=${query}` : ''}`);
		if (store) return store;
	}

	registerOffering(offering) {
		if (this.offerings.has(offering.OfferingId)) return this.offerings.get(offering.OfferingId);
		const bundle = new Offering(offering);
		this.offerings.set(`${offering.OfferingId}`, bundle);
		return bundle;
	}

	showStore(store) {
		if (store) this.setState({ store });
		this.scrollIntoView();
		urlParams.setSecionSetting('storefront', store.name, { dash: true });
	}

	scrollIntoView() {
		const el = document.querySelector(`#season-calendar`);
		if (el)
		{
			el.scrollIntoView();
		}
	}
}

class Storefront extends Component {
	constructor(storefront) {
		super();
		if (storefront && storefront?.StoreId) this.storefront = storefront;
		this.init();
		console.log('storefront offerings', this.name, this.offerings)
		// this.render();
	}

	init() {
		if (!this.storefront) return;
		this.storefront.Offerings.forEach(offering => this.offerings.add(calendar.economy.registerOffering(offering)));
	}

	get defaultState() {
		return {
			page: 0
		};
	}

	render() {
		return this.html`
			<div class="storefront" id="economy">
				<span>Storefront // ${this.name}</span>
				${this.renderDatePicker()}
				${this.renderPageControls('upper')}
				<ul class="economy-offerings">
					${{ any: [...this.offeringsPage].map(offering => HTML.wire(offering, ':list')`<li>${offering.render()}</li>`) }}
				</ul>
				${this.renderPageControls('lower')}
			</div>
		`;
	}

	renderDatePicker() {
		if (this.name === 'Main')
		{
			return HTML.wire(this, ':datePicker')`
				<div>
					<label>
						Archival date:
						<input
							name="storeDate"
							type="date"
							min="2023-06-11"
							max=${new Date().toLocaleDateString('se-SE', {
								year: 'numeric', month: 'numeric', day: 'numeric'
							}).replaceAll('/', '-')}
							onchange=${(e) => this.showStoreDate(e.target.value)}
						>
					</label>
					<br/>
					<span class="economy_store-date">${this.storeDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
				</div>
			`;
		}

		return '';
	}

	async showStoreDate(dateString) {
		if (Date.parse(dateString))
		{
			const date = new Date(dateString);
			console.log(date.toJSON().substring(0, 10));
			const storefront = await calendar.economy.getStore(`${this.storefront.StoreId.toLowerCase()}/${date.toJSON().substring(0, 10)}`);

			if (storefront && storefront?.Offerings.length)
			{
				console.log('storefront', storefront);
				this.storefront = storefront;
				this.offerings.clear();
				this.init();
				this.render();
				urlParams.setSecionSetting('storeArchive', dateString, { dash: true });
			}
		}
	}

	get name() {
		let name = this.storefront?.StoreId ?? 'Store';
		switch (name) {
			case 'CustomizationOffers':
				name = 'Catalog'
				break;
			default:
				break;
		}
		return name;
	}

	get storeDate() {
		if (this._storeDate) return this._storeDate;
		try {
			 const expireDate = new Date(this.storefront.StorefrontExpirationDate.ISO8601Date);
			 const storeDate = new Date(expireDate.setDate(expireDate.getDate() - 1));
			 return storeDate;
		} catch (error) {
			return new Date();
		}
	}

	get offerings() {
		return (this._offerings ??= new Set());
	}

	get pageLength() {
		return 20;
	}

	get pages() {
		return Math.ceil(this.offerings.size / this.pageLength);
	}

	get pageNumber() {
		return this.state?.page ?? 0;
	}

	get offeringsPage() {
		return new Set([...this.offerings].slice((this.pageNumber * this.pageLength), (this.pageNumber * this.pageLength) + this.pageLength));
	}

	nextPage() {
		if (this.pageNumber === this.pages-1) return;
		this.state.page = this.pageNumber + 1;
		// this.getCurrentItemPage();
		this.render();
		this.scrollIntoView();
	}

	previousPage() {
		if (this.pageNumber === 0) return;
		this.state.page = this.pageNumber - 1;
		// this.getCurrentItemPage();
		this.render();
		this.scrollIntoView();
	}

	scrollIntoView() {
		const el = document.querySelector(`#season-calendar`);
		if (el)
		{
			el.scrollIntoView();
		}
	}

	renderPageControls(id = 'upper') {
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
}

class Offering extends Component {
	constructor(offering) {
		super();
		this.data = offering;

		const skipOfferingNames = new Set([
			"HCS OFFERS",
			"VIEW BATTLE PASSES",
			"STORE OFFERS",
			"Boost and Swap Pack"
		]);

		if (skipOfferingNames.has(this.name)) this.skipOffering = true;
	}

	get id() {
		return this.data?.OfferingId;
	}

	get name() {
		return this.data?.Display?.Title ?? this.id;
	}

	get description() {
		return this.data?.Display?.Description ?? '...';
	}

	get quality() {
		const quality = this.data?.Display?.Quality ?? 'common';
		return quality.toLowerCase();
	}

	get heightHint() {
		return this.data?.Display?.HeightHint ?? 2;
	}

	get imgHeight() {
		return (this.data?.Display?.HeightHint ?? 2) * 100;
	}

	get imgWidth() {
		return (this.data?.Display?.WidthHint ?? 2) * 100;
	}

	get cost() {
		return this.data.Prices.map(price => {
			return `${price.Cost} ${filenameFromPath(price.CurrencyPath)}`;
		}).join(', ');
	}

	get flair() {
		return `${this.data.Display?.FlairText ?? ''}`
	}

	get itemIds() {
		if (this._itemIds) return this._itemIds;

		const itemIds = new Set();

		if (this.data?.IncludedItems?.length) this.data.IncludedItems.forEach(item => itemIds.add(filenameFromPath(item.ItemPath)));
		if (this.data?.IncludedCurrencies?.length) this.data.IncludedCurrencies.forEach(item => itemIds.add(filenameFromPath(item.CurrencyPath)));

		return (this._itemIds = [...itemIds]);
	}

	get items() {
		return this._items ??= this.itemIds.map(id => new Item({ id }));
	}

	render() {
		if (this.skipOffering) return '';
		return this.html`
			<div
				class=${`economy-offering ${this.quality} height-${this.heightHint}`}
			>
				<header class="offering-title">
					<span>${this.name} — ${this.cost}</span>
					<aside class="flair">${this.flair}</aside>
				</header>
				<div class="offering-layout">
					<img
						class="offering-img"
						src=${`${STATIC_ROOT}images/store/${this.id}.png`}
						decoding="async"
						fetchpriority="low"
						loading="lazy"
					>
					<div class="offering-info">
						<aside>${this.description}</aside>
						<ul class="items_list">
							${this.items.map(item => HTML.wire()`<li>
								${{
									any: item.renderIcon(`${this.id}`, {itemTypeIcon: true}),
									placeholder: placeholderItem.cloneNode(true)
								}}
							</li>`)}
						</ul>
					</div>
				</div>
			</div>
		`;
	}
}