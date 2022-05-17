import { Component } from 'component';
import { db } from 'db';
import { emitter } from 'eventEmitter';
import { HTML } from 'lib/HTML';
import { MobileMicaMenu } from 'ui/mica';
import { Compositor } from 'pages/vanity/compositor';

import './index.css';

class ArmorHall extends Component {
	constructor() {
		super();

		this.mainMenu = new Menu();
		this.debugMenu = new DebugMenu();

		emitter.on('announceProfile', ({profile, gamertag}) => {
			this.initProfile({profile, gamertag});
		});
	}

	get defaultState() {
		return {
			debugMenu: true,
			mobileMenu: false,
			currentMenu: this.mainMenu
		};
	}

	async init() {
		if (this?._vanity)
		{
			await this._vanity;
			return;
		}

		const vanity = db.getAssetJSON('vanity.json');
		this._vanity = await vanity;
		if (!this._vanity || !this._vanity?.cores) throw new Error('Invalid vanity.json');

		this.initCores(this._vanity);

		if (!this?._compositor) this._compositor = new Compositor();
		this._compositor.setCanvas(this.renderCanvas());
	}

	get vanityIndex() {
		if (this?._vanity) return this._vanity;
	}

	initCores(vanityIndex) {
		if (this?.coreMap) return;

		const coreIDs = new Set([...db.getItemIDsByType('ArmorCore')]);

		const coreMap = new Map();
		coreIDs.forEach(coreID => coreMap.set(coreID, new Core(db.getItemManifestByID(coreID))));

		coreMap.set('vanityIndex', new UniCore(vanityIndex));

		console.log(`[ArmorHall.initCores]`, coreMap);
		this.coreMap = coreMap;
		return this.coreMap;
	}

	async initProfile({profile}) {
		this.state = {
			...this.defaultState,
			profile
		}

		await this._compositor.initProfile(profile);
		this._compositor.render();
	}

	async render() {
		await this.init();
		return this.html`
			<section class="armorhall_wrapper">
				<div class="armorhall-canvas_wrapper">
					${this.renderCanvas()}
				</div>
				<div class ="core-viewer_wrapper mica_viewer">
					<nav class ="cores-list_nav"><ul>
						<li>
							<button
								onclick=${() => this.showMenu(this.mainMenu)}
								class=${this.state?.currentMenu === this.mainMenu ? 'active' : null}
							>
								Menu
							</button>
						</li>
						${this.state.debugMenu ? HTML.wire(this, ':developerButton')`
							<li>
								<button
									onclick=${() => this.showMenu(this.debugMenu)}
									class=${this.state?.currentMenu === this.debugMenu ? 'active' : null}
								>
									Debugger
								</button>
							</li>
						` : ''}
						${this.renderCoreList()}
					</ul></nav>
				${this.state.currentMenu.render()}
				</div>
			</section>
		`;
	}

	renderCanvas() {
		if (this?._canvas) return this._canvas;
		return (this._canvas = HTML.wire(this, ':canvas')`
			<canvas
				id="vanity-canvas"
				class="vanity-canvas_armor-hall"
				width="512"
				height="1024"
			></canvas>
		`);
	}
  
	renderCoreList() {
		if (!this.coreMap?.size) return;
		return HTML.wire(this, ':coreList')`
			${[...this.coreMap.values()].map(core => HTML.wire(core, ':nav')`<li><button
				onclick=${() => this.showMenu(core)}
				class=${this.state?.currentMenu === core ? 'active' : null}
			>${core.title}</button></li>`)}
		`;
	}

	async showMenu(menu) {
		if (menu) this.setState({currentMenu: menu})
	}

	async initCore(meta) {
		if (!this.coreItemMap) this.coreItemMap = new Map();

		const item = db.getJSON(meta.path);
		if (!item) return;

		this.coreItemMap.set(meta.name, item);
	}

	get gamertag() {
		return this.state?.profile?.gamertag ?? 'Gamertag';
	}
}

class Menu extends Component {
	render() {
		return this.html`
			<div
			>
				renderMune
			</div>
		`;
	}
}

class DebugMenu extends Menu {
	render() {
		return this.html`
			<div
			>
				DebugMenu
			</div>
		`;
	}
}

class Core extends Component {
	constructor(coreMeta) {
		super();
		this.meta = coreMeta;
	}

	render() {
		return this.html`
			<div
			>
				${this.id}
			</div>
		`;
	}

	async init() {

	}

	get title() {
		return this.meta?.title ?? 'core';
	}

	get id() {
		return this.meta?.name ?? 'core';
	}
}

class UniCore extends Core {

	get title() {
		return 'UniCore';
	}

	get id() {
		return 'UniCore';
	}
}

export const armorHall = new ArmorHall();