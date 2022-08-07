import { AppearanceCore } from 'pages/vanity/core';
import { Component } from 'component';
import { db } from 'db';
import { emitter } from 'eventEmitter';
import { HTML } from 'lib/HTML';
import { MobileMicaMenu } from 'ui/mica';
import { STATIC_ROOT } from 'environment';

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

		emitter.on('announceProfile', ({profile, gamertag}) => {
			this.initProfile({profile, gamertag});
		});

		this.wrongGamertags = new Set();
	}

	get defaultState() {
		return {
			mobileMenu: false,
			cores: []
		};
	}

	get gamertag() {
		return this.state?.profile?.gamertag ?? '';
	}

	render() {
		return this.html`<div class="inventory_wrapper vanity_wrapper mica_viewer" id="inventory">
			<header class="mica_header-strip">
				<h2>${this.gamertag ? `${this.gamertag}'s Inventory` : 'Inventory'}</h2>
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

	showCore(appearanceCore) {
		this.state.mobileMenu = false;
		if (this.state.core === appearanceCore) return;

		appearanceCore.init();
		this.setState({core: appearanceCore});
	}

	async initProfile({profile}) {
		if (!profile?.gamertag || !profile?.armor) throw new Error('Invalid profile!');
		this.state = this.defaultState;
		this.state.profile = profile;
		const gamertag = profile.gamertag;

		try {
			const appearanceCore = new AppearanceCore({ core: profile.armor, gamertag });
			if (appearanceCore)
			{
				this.state.cores.push(appearanceCore);
				appearanceCore.init();
				this.setState({core: appearanceCore})
			}
		} catch (error) {
			console.error(`[Vanity.showAppearance] Armor`, error);
		}

		try {
			const appearanceCore = new AppearanceCore({ type: 'Spartan ID', core: profile.spartan, gamertag });
			if (appearanceCore) this.state.cores.push(appearanceCore);
		} catch (error) {
			console.error(`[Vanity.showAppearance] spartan`, error);
		}

		try {
			const weaponCores = profile?.weapons ?? [];
			weaponCores?.forEach(weaponCore => {
				const appearanceCore = new AppearanceCore({ core: weaponCore, gamertag });
				if (appearanceCore) this.state.cores.push(appearanceCore);
			});
		} catch (error) {
			console.error(`[Vanity.showAppearance] weaponCores`, error);
		}

		try {
			const vehicleCores = profile?.vehicles ?? [];
			vehicleCores?.forEach(vehicleCore => {
				const appearanceCore = new AppearanceCore({ core: vehicleCore, gamertag });
				if (appearanceCore) this.state.cores.push(appearanceCore);
			});
		} catch (error) {
			console.error(`[Vanity.showAppearance] VehicleCores`, error);
		}

		try {
			const feats = new Map([
				['award', new Map()],
				['memento', new Map()],
				['capstone', new Map()]
			]);
			let hasFeats = true;
			
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

			if (hasFeats)
			{
				await db.getEmblemColorIndex();
				this.state.feats = new Feats({feats, profile});
				this.state.featsRender = this.state.feats.render();
			}
		} catch (error) {
			console.error(`[Vanity.showAppearance] feats`, error);
		}

		this.render();
	}
}

export const vanity = new Vanity();

class Feats extends Component {
	constructor({
		feats,
		profile
	}) {
		super();

		if (!profile) return;
		this.feats = feats;
		this.state.gamertag = profile?.gamertag ?? 'Gamertag...';
		this.state.profile = profile;
		this.state.serviceTag = profile?.spartan?.serviceTag ?? '117';
		// console.log('this', feats);
	}

	get defaultState() {
		return {
			gamertag: '',
			serviceTag: ''
		};
	}

	get enlistedDateString() {
		if (!this.state.profile) return '...';
		const firstModifiedDate = this.state.profile?.enlistedDate;

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
					<div
						class="feats_nameplate-header"
						style=${{backgroundImage: `url(${STATIC_ROOT}images/nameplates/${this.nameplateFilename()}.png)`}}
					></div>
					<header class="feats_header">
						<div
							class="feats_nameplate_wrapper"
						>
							<img
								class="nameplate"
								src=${`${STATIC_ROOT}images/nameplates/${this.nameplateFilename()}.png`}
								width="1280"
								height="240"
							>
							<div
								class="nameplate_content"
							>
								<img
									class="emblem"
									src=${`${STATIC_ROOT}images/emblems/${this.nameplateFilename()}.png`}
									width="240"
									height="240"
								>
								<div
									class="nameplate_text"
									style=${{color: db.getEmblemColor(this.nameplateConfig())}}
								>
									<span class="gamertag">${this.state.gamertag}</span>
									<span class="servicetag">${this.state.serviceTag}</span>
								</div>
							</div>
						</div>
						<div>
							<span class="feats_enlisted">Enlisted // ${this.enlistedDateString}</span>
						</div>
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

	nameplateFilename() {
		try {
			const profile = this.state.profile;
			const configName = `${profile.spartan.emblemConfig}`.replace('-', 'n');
			const id = profile.spartan.emblem;
			return `${id}_${configName}`;
		} catch (error) {
			console.error(`[VaFeatsnity.nameplateFilename]`, error);
		}
	}

	nameplateConfig() {
		return `${this.state.profile.spartan.emblemConfig}`;
	}

	renderFeat(availability, itemIDs) {
		// console.log('rf', availability, itemIDs);
		const titles  = new Set();
		return HTML.wire()`
			<li>
				<header>${availability}</header>
				<ul>
					${[...itemIDs].map(id => {
						const meta = db.getItemManifestByID(id);
						if (!meta || titles.has(meta.title)) return '';
						titles.add(meta.title);
						return `<a class="feat_reward-link" href=${`#item/${meta.name}`}>${meta.title}</a>`;
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