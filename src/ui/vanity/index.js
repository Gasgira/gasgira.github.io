import { AppearanceCore } from 'ui/vanity/core';
import { Component } from 'component';
import { HTML } from 'lib/HTML';
import { MobileMicaMenu } from 'ui/mica';

class Vanity extends Component {
	async init(gamertag) {
		if (!gamertag?.trim()) return;
		this.state = this.defaultState;

		const appearance = await this.requestAppearance(gamertag);
		if (appearance) await this.showAppearance(appearance);
	}

	get defaultState() {
		return {
			mobileMenu: false,
			cores: []
		};
	}

	render() {
		return this.html`<div class="inventory_wrapper mica_viewer" id="inventory">
			<header class="inventory mica_header-strip">
				<a class="mica_header-anchor" href="#inventory"><h2>Vanity</h2></a>
			</header>
			<div class="inventory_content mica_main-content">
				<ul class=${`inventory-catergories mica_nav-list ${this.state.mobileMenu ? 'show-mobile' : 'hide-mobile'}`}>
					${this.state.cores.map(core => HTML.wire(core)`<li><button
						onclick=${() => console.log('showCore', core)}
						class=${this.state?.core === core ? 'active' : null}
					><span>${core?.getName?.() ?? 'core'}</span></button></li>`)}
				</ul>
				${this.state?.core?.render?.() ?? '...'}
			</div>
		</div>`;
	}

	async requestAppearance(gamertag) {
		// return testAppearance;
		try {
			if (!gamertag || typeof gamertag !== 'string') throw new Error(`No gamertag "${gamertag}"`);

			// throw new Error(`host https://${window.location.host}`)
			const response = await fetch(new URL(`/api/vanity/${gamertag}`, `https://cylix.guide`));
			console.log('appearance', response.status);
			if (response && response.ok)
			{
				const json = await response.json();
				if (json && json.ArmorCores) return json;
			}
		} catch (error) {
			console.error(`[Vanity.requestAppearance] Fetch error`, error);
		}
	}

	async showAppearance(appearance) {
		this.state.appearance = appearance;

		// TODO iterate through all core types

		if (appearance?.ArmorCores?.ArmorCores?.[0]?.CorePath)
		{
			const coreData = appearance?.ArmorCores?.ArmorCores?.[0];
			const appearanceCore = this.makeAppearanceCore(coreData);
			if (appearanceCore)
			{
				this.state.cores.push(appearanceCore);
				await appearanceCore.init();
				this.state.core = appearanceCore;
			}
			this.render();
		}
	}

	makeAppearanceCore(coreData) {
		try {
			// TODO CoreType branching
			const type = coreData.CoreType;
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

			const appearanceCore = new AppearanceCore({ type, core, sockets });
			if (appearanceCore) return appearanceCore;
		} catch (error) {
			console.error(`[Vanity.makeAppearanceCore]`, error);
		}
	}
}

export const vanity = new Vanity();

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