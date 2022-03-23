import { AppearanceCore } from 'ui/vanity/core';
import { Component } from 'component';
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
				${{html: this.state?.core ? '' : '<div class="vanity-placeholder">Search for a gamertag.</div>'}}
				<div class=${`mica_mobile-menu_container ${this.state.mobileMenu ? 'show-mobile' : 'hide-mobile'}`}>${this?.mobileMicaMenu.render()}</div>
			</div>
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
			history.pushState(null, null, `/vanity/${encodeURIComponent(gamertag.trim())}`);

			this.renderStatus('');
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

			const appearanceCore = new AppearanceCore({ type: 'Spartan ID', sockets, gamertag: this.state.gamertag });
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

			const appearanceCore = new AppearanceCore({ type, core, sockets, gamertag: this.state.gamertag });
			if (appearanceCore) return appearanceCore;
		} catch (error) {
			console.error(`[Vanity.makeAppearanceCore]`, error);
		}
	}
}

export const vanity = new Vanity();

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