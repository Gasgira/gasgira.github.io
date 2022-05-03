import { AppearanceCore } from 'pages/vanity/core';
import { Component } from 'component';
import { db } from 'db';
import { emitter } from 'eventEmitter';
import { HTML } from 'lib/HTML';
import { MobileMicaMenu } from 'ui/mica';

import './index.css';

class Vanity extends Component {
	constructor() {
		super();

		this.mobileMicaMenu = new MobileMicaMenu('MobileMicaMenu-Vanity', 'Categories');
		emitter.on('MobileMicaMenu-Vanity', () => {
			this.setState({mobileMenu: !this.state.mobileMenu});
			if (this.state.mobileMenu) history.pushState({}, `Halosets`, ``);
		});
		emitter.on('popstate', () => {
			if (this.state.mobileMenu) this.setState({mobileMenu: false});
		});

		this.wrongGamertags = new Set();
	}

	async init(gamertag) {
		if (!gamertag?.trim())
		{
			if (this.state.gamertag) this.setUrlPathToGamertag(this.state.gamertag);
			return;
		}

		const appearance = await this.requestAppearance(gamertag);
		if (appearance)
		{
			this.state = this.defaultState;
			return await this.initAppearance(appearance, gamertag);
		}
	}

	get defaultState() {
		return {
			gamertag: '',
			search: '',
			failedSearch: '',
			mobileMenu: false,
			cores: [],
			status: '',
			fetching: false
		};
	}

	get gamertag() {
		return this.dashDecodeURIComponent(this.state.gamertag);
	}

	render() {
		return this.html`<div class="inventory_wrapper vanity_wrapper mica_viewer" id="inventory">
			<header class="mica_header-strip">
				<button aria-label="Search" title="Search" onclick=${() => this.submitSearch()}><div class="icon-masked icon-search"></div></button>
				<input
					aria-label="Search Input"
					type="search"
					class="vanity-search_input"
					id="vanity-search"
					name="vanity-search"
					placeholder="Search..."
					maxlength="32"
					oninput=${(e) => this.inputSearch(e?.target?.value ?? '')}
					onkeydown=${(e) => {
						if (e?.key === 'Enter') this.submitSearch();
					}}
					value=${this.state.term}
				>
				<div class="vanity-status">${this.renderStatus()}</div>
			</header>
			<div class="inventory_content mica_main-content">
				<ul class=${`inventory-catergories mica_nav-list ${this.state.mobileMenu ? 'show-mobile' : 'hide-mobile'}`}>
					${this.state.cores.map(core => HTML.wire(core)`<li><button
						onclick=${() => this.showCore(core)}
						class=${this.state?.core === core ? 'active' : null}
					><span>${core?.getName() ?? 'core'}</span></button></li>`)}
				</ul>
				${this.state?.core?.render?.() ?? ''}
				${{html: this.state?.core ? '' : '<div class="vanity-placeholder"><span>Search for a gamertag to see their currently equipped items.</span></div>'}}
				<div class=${`mica_mobile-menu_container ${this.state.mobileMenu ? 'show-mobile' : 'hide-mobile'}`}>${this?.mobileMicaMenu.render()}</div>
			</div>
			${this.state.feats ? this.state.featsRender : ''}
		</div>`;
	}

	renderStatus(status) {
		return HTML.wire(this, ':status')`${status ?? this.state.status}`;
	}

	showCore(appearanceCore) {
		this.state.mobileMenu = false;
		if (this.state.core === appearanceCore) return;

		appearanceCore.init();
		this.setState({core: appearanceCore});
	}

	inputSearch(string) {
		if (typeof string === 'string') this.state.search = string;
	}

	async submitSearch() {
		if (this.state.fetching) return;
		if (!this.state.search || typeof this.state.search !== 'string') return;

		const search = this.state.search;
		if (search === this.state.failedSearch) return;
		console.info(`[Vanity.submitSearch]`, search);

		const appearance = await this.requestAppearance(search.trim());
		if (appearance)
		{
			this.state = this.defaultState;
			return await this.initAppearance(appearance, search);
		}

		this.state.failedSearch = search;
	}

	async requestAppearance(gamertag) {
		// return testAppearance;
		try {
			if (this.state.disabled) throw new Error(`System offline. Please come back later.`);
			if (!gamertag || typeof gamertag !== 'string') throw new Error(`No gamertag "${gamertag}"`);
			if (this.wrongGamertags.has(gamertag.toLowerCase()))
			{
				this.setState({status: 'Not Found!'});
				return console.error('Repeated 404 GT', gamertag);
			}

			// throw new Error(`host https://${window.location.host}`);
			this.setState({
				fetching: true,
				status: 'Searching...'
			});
			// const response = await fetch(new URL(`/api/vanity/${gamertag}`, `https://cylix.guide`));
			const response = await fetch(new URL(`/api/vanity/${gamertag}`, `https://${window.location.host}`));
			console.log('requestAppearance', response.status);
			this.state.fetching = false;
			if (response && response.ok)
			{
				// this.renderStatus('Found!');
				const json = await response.json();
				if (json && json.ArmorCores) return json;
			}

			if (!response)
			{
				this.setState({status: 'Network Error!'});
				return;
			}

			if (response.status === 404)
			{
				this.wrongGamertags.add(gamertag.toLowerCase());
				console.log('404', gamertag, this.wrongGamertags);
				this.setState({status: 'Not Found!'});
				return;
			}

			if (response.status === 405)
			{
				console.log('405', gamertag);
				this.setState({
					status: 'System Offline!',
					disabled: true
				});
				return;
			}

			if (response.status >= 500)
			{
				this.setState({status: 'Server Error!'});
				return;
			}
		} catch (error) {
			console.error(`[Vanity.requestAppearance] Fetch error`, error);
		}
		this.setState({
			fetching: false,
			status: 'Error!'
		});
	}

	setUrlPathToGamertag(gamertag) {
		if (gamertag && typeof gamertag === 'string')
		{
			this.state.gamertag = gamertag;
			history.pushState(null, null, `/vanity/${this.dashEncodeURIComponent(gamertag.trim())}`);

			this.renderStatus('');
		}
	}

	dashEncodeURIComponent(string) {
		try {
			if (!string || typeof string !== 'string') return '';
			if (!string.includes(' ')) return encodeURIComponent(string);
			return encodeURIComponent(string.replaceAll(' ', '-'));
		} catch (error) {
			return encodeURIComponent(string);
		}
	}

	dashDecodeURIComponent(string) {
		try {
			if (!string || typeof string !== 'string') return '';
			if (!string.includes('-')) return decodeURIComponent(string);
			return decodeURIComponent(string.replaceAll('-', ' '));
		} catch (error) {
			return decodeURIComponent(string);
		}
	}

	async initAppearance(appearance, gamertag) {
		this.state.appearance = appearance;
		this.setUrlPathToGamertag(gamertag);

		try {
			const armorCore = appearance?.ArmorCores?.ArmorCores?.[0];
			const appearanceCore = this.makeAppearanceCore(armorCore);
			if (appearanceCore)
			{
				this.state.cores.push(appearanceCore);
				appearanceCore.init();
				// this.state.core = appearanceCore;
				this.setState({core: appearanceCore})
			}
		} catch (error) {
			console.error(`[Vanity.showAppearance] Armor`, error);
		}

		try {
			const sockets = new Map();
			const spartan = appearance?.Appearance;
			if (spartan.ActionPosePath) sockets.set('Stance', spartan.ActionPosePath);
			if (spartan.BackdropImagePath) sockets.set('Background', spartan.BackdropImagePath);
			if (spartan?.Emblem.EmblemPath) sockets.set('Emblem', spartan.Emblem.EmblemPath);
			
			const aiCore = appearance?.AiCores?.AiCores?.[0]?.Themes?.[0];
			if (aiCore && aiCore.ModelPath) sockets.set('AI Model', aiCore.ModelPath);
			if (aiCore && aiCore.ColorPath) sockets.set('AI Color', aiCore.ColorPath);

			const appearanceCore = new AppearanceCore({ type: 'Spartan ID', sockets, gamertag: this.gamertag });
			if (appearanceCore) this.state.cores.push(appearanceCore);
		} catch (error) {
			console.error(`[Vanity.showAppearance] spartan`, error);
		}

		try {
			const weaponCores = appearance.WeaponCores.WeaponCores;
			weaponCores?.forEach(weaponCore => {
				const appearanceCore = this.makeAppearanceCore(weaponCore);
				if (appearanceCore) this.state.cores.push(appearanceCore);
			})
		} catch (error) {
			console.error(`[Vanity.showAppearance] weaponCores`, error);
		}

		try {
			const vehicleCores = appearance.VehicleCores.VehicleCores;
			vehicleCores?.forEach(vehicleCore => {
				const appearanceCore = this.makeAppearanceCore(vehicleCore);
				if (appearanceCore) this.state.cores.push(appearanceCore);
			})
		} catch (error) {
			console.error(`[Vanity.showAppearance] VehicleCores`, error);
		}

		try {
			const feats = new Map([
				['award', new Map()],
				['memento', new Map()],
				['capstone', new Map()]
			]);
			let hasFeats = false;
			
			this.state.cores.forEach(core => {
				const coreItemIDs = core.itemIDs;
				if (coreItemIDs && coreItemIDs.size) coreItemIDs.forEach(id => {
					const community = db.getItemManifestByID(id)?.community;

					if (community && Array.isArray(community?.tags))
					{
						community.tags.forEach(tag => {
							if (feats.has(tag))
							{
								const feat = feats.get(tag);
								const availability = community?.availability ?? '???';

								if (feat.has(availability))
								{
									feat.get(availability).add(id);
								} else {
									feat.set(availability, new Set([id]));
									hasFeats = true;
								}
							}
						})
					}
				});
			});

			console.log('feats', feats);

			if (hasFeats){
				this.state.feats = new Feats({feats, gamertag: this.gamertag, appearance});
				this.state.featsRender = this.state.feats.render();
			}
		} catch (error) {
			console.error(`[Vanity.showAppearance] feats`, error);
		}

		this.render();
	}

	makeAppearanceCore(coreData) {
		try {
			// TODO CoreType branching
			const type = niceTypes.get(coreData.CoreType) ?? coreData.CoreType;
			const core = coreData.CorePath;
			const theme = coreData.Themes[0];
			const sockets = new Map();

			for (const property in theme)
			{
				// console.log('prop', property)
				const value = theme[property];
				if (pathNames.has(property) && value?.trim())
				{
					sockets.set(pathNames.get(property), value);
				}
			}

			if (Array.isArray(theme?.Emblems) && theme.Emblems?.[0]?.Path) {
				sockets.set('Emblem', theme.Emblems[0]?.Path);
			}

			const appearanceCore = new AppearanceCore({ type, core, sockets, gamertag: this.gamertag });
			if (appearanceCore) return appearanceCore;
		} catch (error) {
			console.error(`[Vanity.makeAppearanceCore]`, error);
		}
	}
}

export const vanity = new Vanity();

class Feats extends Component {
	constructor({
		feats,
		gamertag = 'Spartan',
		appearance
	}) {
		super();

		if (!feats) return;
		this.feats = feats;
		this.state.gamertag = gamertag;
		if (appearance) this.state.appearance = appearance;
		this.state.serviceTag = appearance?.Appearance?.ServiceTag ?? '117';
		console.log('this', feats);
	}

	get defaultState() {
		return {
			gamertag: '',
			serviceTag: ''
		};
	}

	get enlistedDateString() {
		if (!this.state.appearance) return '...';
		const firstModifiedDate = this.state.appearance?.AiCores?.AiCores?.[0]?.Themes?.[0]?.FirstModifiedDateUtc?.ISO8601Date ?? this.state.appearance?.ArmorCores?.ArmorCores?.[0]?.Themes?.[0]?.FirstModifiedDateUtc?.ISO8601Date;

		if (Date.parse(firstModifiedDate))
		{
			return new Date(firstModifiedDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
		}
		return '...';
	}

	render() {
		return this.html`
			<section class="vanity_feats_wrapper">
				<header class="mica_header-strip"><h2>Service Record</h2><span class="beta">BETA</span></header>
				<div class="mica_content">
					<header class="feats_header">
						<span>${this.state.gamertag} [${this.state.serviceTag}] // Enlisted ${this.enlistedDateString}</span>
					</header>
					<ul class="feats_list">
						${this.renderAwards()}
						${this.renderMementos()}
						${this.renderCapstones()}
					</ul>
				</div>
			</section>
		`;
	}

	renderFeat(availability, itemIDs) {
		console.log('rf', availability, itemIDs);
		const titles  = new Set();
		return HTML.wire()`
			<li>
				<header>${availability}</header>
				<ul>
					${[...itemIDs].map(id => {
						const meta = db.getItemManifestByID(id);
						if (!meta || titles.has(meta.title)) return '';
						titles.add(meta.title);
						return `<a class="feat_reward-link" href=${`#${meta.path}`}>${meta.title}</a>`;
					})}
				</ul>
			</li>
		`;
	}

	renderAwards() {
		const featType = 'award';
		const feats = this.feats.get(featType);
		if (!feats || !feats.size) return;
		return HTML.wire(this, ':awards')`
			<li class="feats_feat">
				<header class="feat_feat-type">Awards</header>
				<ul>
					${[...feats.entries()].map(([key, value]) => this.renderFeat(key, value))}
				</ul>
			</li>
		`;
	}

	renderMementos() {
		const featType = 'memento';
		const feats = this.feats.get(featType);
		if (!feats || !feats.size) return;
		return HTML.wire(this, ':mementos')`
			<li class="feats_feat">
				<header class="feat_feat-type">Mementos</header>
				<ul>
					${[...feats.entries()].map(([key, value]) => this.renderFeat(key, value))}
				</ul>
			</li>
		`;
	}

	renderCapstones() {
		const featType = 'capstone';
		const feats = this.feats.get(featType);
		if (!feats || !feats.size) return;
		return HTML.wire(this, ':capstones')`
			<li class="feats_feat">
				<header class="feat_feat-type">Capstones</header>
				<ul>
					${[...feats.entries()].map(([key, value]) => this.renderFeat(key, value))}
				</ul>
			</li>
		`;
	}
}

class ServiceRecord extends Component {
	constructor({
		feats,
		gamertag = 'Spartan',
		appearance
	}) {
		super();

		if (!feats) return;
		this.feats = feats;
		this.state.gamertag = gamertag;
		if (appearance) this.state.appearance = appearance;
		this.state.serviceTag = appearance?.Appearance?.ServiceTag ?? '117';
		console.log('this', feats);

		this.init();
	}

	get defaultState() {
		return {
			gamertag: '',
			serviceTag: ''
		};
	}

	get enlistedDateString() {
		if (!this.state.appearance) return '...';
		const firstModifiedDate = this.state.appearance?.AiCores?.AiCores?.[0]?.Themes?.[0]?.FirstModifiedDateUtc?.ISO8601Date ?? this.state.appearance?.ArmorCores?.ArmorCores?.[0]?.Themes?.[0]?.FirstModifiedDateUtc?.ISO8601Date;

		if (Date.parse(firstModifiedDate))
		{
			return new Date(firstModifiedDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
		}
		return '...';
	}

	async init() {
		if (this.stats) return await this.stats;
		const gamertag = this.state.gamertag;
		if (!gamertag || typeof gamertag !== 'string')
		{
			console.warn(`[ServiceRecord.init] Invalid Gamertag!`);
		}

		this.stats = this.getStats(gamertag);
		return await this.stats;
		// if (stats) this.state.stats = stats;
	}

	render() {
		return this.html`
			<section class="vanity_feats_wrapper">
				<header class="mica_header-strip"><h2>Service Record</h2><span class="beta">BETA</span></header>
				<div class="mica_content">
					<header class="feats_header">
						<span class="gamertag">${this.state.gamertag}</span><span class="service-tag">[${this.state.serviceTag}]</span><span class="enlisted">Enlisted ${this.enlistedDateString}</span>
					</header>
					${{
						any: this.renderStats(),
						placeholder: 'stats loading...'
					}}
					<ul class="feats_list">
						${this.renderAwards()}
						${this.renderMementos()}
						${this.renderCapstones()}
					</ul>
				</div>
			</section>
		`;
	}

	renderFeat(availability, itemIDs) {
		console.log('rf', availability, itemIDs);
		const titles  = new Set();
		return HTML.wire()`
			<li>
				<header>${availability}</header>
				<ul>
					${[...itemIDs].map(id => {
						const meta = db.getItemManifestByID(id);
						if (!meta || titles.has(meta.title)) return '';
						titles.add(meta.title);
						return `<a class="feat_reward-link" href=${`#${meta.path}`}>${meta.title}</a>`;
					})}
				</ul>
			</li>
		`;
	}

	renderAwards() {
		const featType = 'award';
		const feats = this.feats.get(featType);
		if (!feats || !feats.size) return;
		return HTML.wire(this, ':awards')`
			<li class="feats_feat">
				<header class="feat_feat-type">Awards</header>
				<ul>
					${[...feats.entries()].map(([key, value]) => this.renderFeat(key, value))}
				</ul>
			</li>
		`;
	}

	renderMementos() {
		const featType = 'memento';
		const feats = this.feats.get(featType);
		if (!feats || !feats.size) return;
		return HTML.wire(this, ':mementos')`
			<li class="feats_feat">
				<header class="feat_feat-type">Mementos</header>
				<ul>
					${[...feats.entries()].map(([key, value]) => this.renderFeat(key, value))}
				</ul>
			</li>
		`;
	}

	renderCapstones() {
		const featType = 'capstone';
		const feats = this.feats.get(featType);
		if (!feats || !feats.size) return;
		return HTML.wire(this, ':capstones')`
			<li class="feats_feat">
				<header class="feat_feat-type">Capstones</header>
				<ul>
					${[...feats.entries()].map(([key, value]) => this.renderFeat(key, value))}
				</ul>
			</li>
		`;
	}

	async getStats() {
		// return testStats;
		const gamertag = this.state.gamertag;
		const response = await fetch(new URL(`/api/stats/test/${gamertag}`, `https://${window.location.host}`));
		console.log('getStats', response.status);
		if (response && response.ok)
		{
			// this.renderStatus('Found!');
			const json = await response.json();
			if (json) return json;
		}
	}

	async renderStats() {
		const stats = await this.init();
		return HTML.wire(this, ':stats')`
			<section class="service-record_wrapper">
				${this.renderMatchmaking(stats)}
				${this.renderMatches(stats)}
			</section>
		`;
	}

	renderMatchmaking(stats) {
		const matchmaking = stats?.matchmaking;
		if (!matchmaking) return;
		return HTML.wire(this, ':stats-mm')`
			<section class="matchmaking_wrapper">
				<h2>Matchmaking Stats</h2>
				<div>
					<label>Games Played</label>
					<span>${(matchmaking?.pvp?.matches?.total ?? 0).toLocaleString()} // ${parseInt(matchmaking?.pvp?.matches?.win_rate ?? 0)}% Winrate</span>
				</div>
				<div>
					<label>Play Time</label>
					<span>${matchmaking?.pvp?.time_played?.human ?? 'None'}</span>
				</div>
				<div>
					<label>Eliminations</label>
					<span>${(matchmaking?.pvp?.core?.summary?.kills ?? 0).toLocaleString()} // ${parseFloat(matchmaking?.pvp?.core?.kdr ?? 0).toPrecision(3)} KDR</span>
				</div>
				<div>
					<label>Medals</label>
					<span>${(matchmaking?.pvp?.core?.summary?.medals ?? 0).toLocaleString()}</span>
				</div>
				<div>
					<label>Score</label>
					<span>${(matchmaking?.pvp?.core?.scores?.personal ?? 0).toLocaleString()}</span>
				</div>
			</section>
		`;
	}

	renderMatches(stats) {
		const matches = stats?.matches;
		if (!matches || !Array.isArray(matches) || !matches.length) return;
		return HTML.wire(this, ':stats-mm')`
			<section class="matchmaking_wrapper">
				<h2>Matchmaking Streaks</h2>
				<ul>
					${matches.map(match => {
						const string = match?.player?.outcome === 'win' ? 'W' : match?.player?.outcome === 'loss' ? 'L' : 'O';
						return HTML.wire(this, `:match-${match.id}`)`
							<li
								onmouseover=${(e) => this.renderMatch(match, e.clientX, e.clientY)}
								onclick=${(e) => this.renderMatch(match, e.clientX, e.clientY)}
							>${string}</li>
						`;
					})}
				</ul>
			</section>
		`;
	}

	renderMatch(match, x, y) {
		if (!match || !match.id) return;
		HTML.bind(document.querySelector('.js--hover'))`
			<div>
				${match.id} ${x} ${y}
			</div>
		`;
	}
}

const niceTypes = new Map([
	['WeaponSidekick', 'Sidekick'],
	['WeaponAR', 'Assault Rifle'],
	['WeaponBR', 'Battle Rifle'],
	['WeaponCommando', 'Commando'],
	['WeaponSPnKr', 'SPnKr'],
	['WeaponSniper', 'Sniper'],
	['WeaponShotgun', 'Bulldog'],
	['WeaponHydra', 'Hydra'],
	['Ai', 'AI'],
	['VehicleWarthog', 'Warthog'],
	['VehicleMongoose', 'Mongoose'],
	['VehicleScorpion', 'Scorpion'],
	['VehicleWasp', 'Wasp'],
	['VehicleRazorBack', 'RazorBack'],
	['VehicleGungoose', 'Gungoose'],
	['VehicleRockethog', 'Rockethog']
]);

const pathNames = new Map([
	['ThemePath', 'Kit'],
	['CoatingPath', 'Coating'],
	['GlovePath', 'Gloves'],
	['HelmetPath', 'Helmet'],
	['HelmetAttachmentPath', 'Helmet Atch.'],
	['ChestAttachmentPath', 'Chest Atch.'],
	['KneePadPath', 'Knee Pads'],
	['LeftShoulderPadPath', 'Shoulder, Left'],
	['RightShoulderPadPath', 'Shoulder, Right'],
	// ['Emblems', 'Emblem'],
	// ['Emblem', 'Emblem'],
	['ArmorFxPath', 'Armor FX'],
	['MythicFxPath', 'Mythic FX'],
	['VisorPath', 'Visor'],
	['HipAttachmentPath', 'Hip Atch.'],
	['WristAttachmentPath', 'Wrist Atch.'],
	['ActionPosePath', 'Stance'],
	['BackdropImagePath', 'Backdrop'],
	// ['ServiceTag', 'Service Tag'],
	['DeathFxPath', 'Death FX'],
	['WeaponCharmPath', 'Charm'],
	['AlternateGeometryRegionPath', 'Model'],
	['ModelPath', 'AI Model'],
	['ColorPath', 'AI Color']
]);

const featuredCommunityTags = new Map([
	['award', 'Awards'],
	['memento', 'Mementos'],
	['capstone', 'Capstones']
])