import { Component } from 'component';
import { db } from 'db';
import { emitter } from 'eventEmitter';
import { HTML, throbber } from 'lib/HTML';
import { MobileMicaMenu } from 'ui/mica';
import { Compositor } from 'pages/vanity/compositor';
import { Item, placeholderItem } from 'db/item';
import { filenameFromPath } from 'utils/paths.js';

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
			currentMenu: this?.mainMenu ?? ''
		};
	}

	async init() {
		if (this?._vanity)
		{
			await this._vanity;
			return;
		}

		console.info(`[ArmorHall.init]`);

		const vanity = db.getAssetJSON('vanity.json');
		this._vanity = await vanity;
		if (!this._vanity || !this._vanity?.cores) throw new Error('Invalid vanity.json');

		this.initCores(this._vanity);

		if (!this.compositor) this._compositor = new Compositor();
		if (!this.compositor) return;

		this.compositor.setUniCore(vanity);

		this.compositor.setCanvas(this.renderCanvas());
		this.mainMenu.setCanvas(this.renderCanvas());
		this.debugMenu.setCanvas(this.renderCanvas());

		await this.compositor.initProfile();
	}

	get vanityIndex() {
		if (this?._vanity) return this._vanity;
	}

	get compositor() {
		if (this?._compositor) return this._compositor;
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

		if (this.compositor)
		{
			await this.compositor.initProfile(profile);
			// this.compositor.render();
		}
	}

	async setProfile(profile) {
		db.selectedItemIDs = new Set(Object.values(profile.armor));
		if (profile && profile?.armor) await this.compositor.initProfile(profile);
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
				${{
					any: this.state.currentMenu.render(),
					placeholder: throbber.cloneNode(true)
				}}
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

	get supportedItemIDs() {
		if (this?._supportedItemIDs) return this._supportedItemIDs;

		let supportedItemIDs = new Set();
		
		const vanityIndex = this.vanityIndex;
		if (vanityIndex)
		{
			for (const property in vanityIndex)
			{
				if (Array.isArray(vanityIndex?.[property]?.options))
				{
					const options = vanityIndex?.[property]?.options;
					supportedItemIDs = new Set([...supportedItemIDs, ...options]);
				}
			}

			console.info(`[ArmorHall.supportedItemIDs] "${supportedItemIDs.size}" items`);

			if (this.compositor) this.compositor.setSupportedItems(supportedItemIDs);
			return (this._supportedItemIDs = supportedItemIDs);
		}
	}

	get defaultProfile() {
		return {
			"title": "untitled",
			"created": new Date().toJSON(),
			"spartan": {
				"emblem": "",
				"backdrop": "",
				"bodyType": "Small",
				"prosthetics": {
					"leftArm": "None",
					"rightArm": "None",
					"leftLeg": "None",
					"rightLeg": "None"
				}
			},
			"armor": {
				"core": "017-001-olympus-c13d0b38",
				"theme": "007-001-olympus-c13d0b38",
				"coating": "",
				"helmet": "",
				"helmetAttachment": "",
				"visor": "",
				"chestAttachment": "",
				"leftShoulderPad": "",
				"rightShoulderPad": "",
				"gloves": "",
				"wristAttachment": "",
				"kneepads": "",
				"hipAttachment": "",
				"emblem": "",
				"armorFX": "",
				"mythicFX": ""
			},
			"weapons": [
				{
					"core": "209-201-olympus-aa30213b",
					"theme": "207-201-olympus-aa30213b",
					"coating": "203-201-olympus-aa30213b",
					"emblem": "",
					"deathFX": "",
					"charm": "",
					"model": ""
				}
			]
		}
	}
}

class Menu extends Component {
	get defaultState() {
		return {
			matte: {
				red: 0,
				green: 0,
				blue: 0,
				opacity: 1
			},
			mobileMenu: false,
			currentMenu: this.mainMenu
		};
	}

	render() {
		return this.html`
			<div
				class="vanity-menu_wrapper"
			>
				<div class="option-wrapper">
					<label
						for="vanity-menu_matte-color"
					>Matte Color</label>
					<input
						id="vanity-menu_matte-color"
						type="color"
						value="transparent"
						onchange=${(e) => this.updateMatteColor(e.target.value)}
					>
				</div>
				<div class="option-wrapper">
					<label
						for="vanity-menu_matte-alpha"
					>Matte Opacity</label>
					<input
						id="vanity-menu_matte-alpha"
						type="range"
						min="0"
						max="1"
						step="0.01"
						value="0"
						onchange=${(e) => this.updateMatteOpacity(e.target.value)}
					>
				</div>
				<button
					class="hi-box"
					onclick=${async () => await this.downloadCanvas()}
				>Blob</button>
				<button
					class="hi-box"
					onclick=${async () => await this.testBucket()}
				>Test</button>
			</div>
		`;
	}

	setCanvas(canvas) {
		if (!canvas) return;

		this.canvas = canvas;
	}

	async downloadCanvas() {
		try {
			if (!this.canvas) return;
	
			const blob = await new Promise((resolve) => this.canvas.toBlob(resolve));
			if (!blob) console.error('No blob!');
	
			const blobUrl = URL.createObjectURL(blob);
			console.log('blob', blobUrl);
	
			const a = document.createElement('a');
			a.href = blobUrl;
			a.download = 'spartan.png';
			a.setAttribute('download', 'spartan.png');
			document.body.append(a);
			a.click();
			a.remove();
			URL.revokeObjectURL(blobUrl);
		} catch (error) {
			console.error(`[ArmorHall.downloadCanvas]`, error);
		}
	}

	updateMatteColor(inputHexColor) {
		console.log('c', inputHexColor);

		const chars = inputHexColor.split('');
		const red = parseInt(chars[1] + chars[2], 16);
		const green = parseInt(chars[3] + chars[4], 16);
		const blue = parseInt(chars[5] + chars[6], 16);

		this.state.matte = {
			...this.state.matte,
			red,
			green,
			blue
		}

		console.log('rgb', this.state.matte);
		this.updateMatte();
	}

	updateMatteOpacity(inputOpacity) {
		if (inputOpacity >= 0 && inputOpacity <= 1)
		{
			this.state.matte = {
				...this.state.matte,
				opacity: parseFloat(inputOpacity)
			}
			this.updateMatte();
		}
	}

	updateMatte() {
		const { red, green, blue, opacity } = this.state.matte;
		document.documentElement.style.setProperty('--vanity-matte',
			`rgba(${red}, ${green}, ${blue}, ${opacity})`
		);
	}

	async testBucket() {
		const response = await fetch(`https://hi.cylix.guide/capstones.json`);
		if (!response || !response.ok) return console.error(`Fetch failed ${response.status}`, response);
		const json = await response.json();
		console.log(`[testBucket]`, json);
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

	get defaultState() {
		return {
			mobileMenu: false
		};
	}

	async render() {
		await this.init();
		return this.html`
			<div
			>
				core: ${this.id}
				<br/>
				theme: ${this?.theme?.id ?? '???'}
			</div>
			<div
				class ="core_wrapper mica_main-content"
			>
				<ul class=${`core-socket-list mica_nav-list ${this.state.mobileMenu ? 'show-mobile' : 'hide-mobile'}`}>
					<li class="core-socket-title">${this.theme?.name ?? 'Loading core...'}</li>
					${this.sockets.map(socket => HTML.wire(socket)`
						<li><button
							onclick=${() => this.showSocket(socket)}
							class=${this.state?.socket === socket ? 'active' : null}
						><span>${socket.name}</span></button></li>
					`)}
				</ul>
				<div class="mica_content">${{
					any: this.state?.socket?.render() ?? '',
					placeholder: throbber.cloneNode(true)
				}}</div>
				${{html: this.state?.socket ? '' : '<div class="core-socket-placeholder">CHOOSE A SOCKET</div>'}}
				<div class=${`mica_mobile-menu_container ${this.state.mobileMenu ? 'show-mobile' : 'hide-mobile'}`}>${this?.mobileMicaMenu?.render() ?? ''}</div>
			</div>
		`;
	}

	async init() {
		try {
			if (this.core) return;
			this._core = {};
			const core = new Item({ id: this.id });
			if (core)
			{
				await core.init();
				this._core = core;
				console.log('coreinit', this.core);
		
				const themeID = filenameFromPath(this.core?.data?.Themes?.DefaultOptionPath);
				if (themeID && db.manifestHasID(themeID))
				{
					const theme = new Item({ id: themeID });
					await theme.init();
					this._theme = theme;
					console.log('themeinit', this.theme);

					await this.initSockets();
				} else {
					throw new Error(`Theme ID not found for core "${this.id}"`)
				}
			}
		} catch (error) {
			console.error(`[ArmorHall.Core.init]`, error);
		}

		this.mobileMicaMenu = new MobileMicaMenu(`MobileMicaMenu-${this.name}`, 'Sockets');
		emitter.on(`MobileMicaMenu-${this.name}`, () => {
			this.setState({mobileMenu: !this.state.mobileMenu});
			if (this.state.mobileMenu) history.pushState({}, `Halosets`, ``);
		});
		emitter.on('popstate', () => {
			if (this.state.mobileMenu) this.setState({mobileMenu: false});
		});
	}

	get currentHelmetID() {
		return '005-001-olympus-c13d0b38';
	}
	
	get helmetAttachments() {
		return this._helmetAttachments ??= new Map([['any', []]]);
	}

	get currentHelmetAttachments() {
		if (this.helmetAttachments.size) return this.helmetAttachments.get(this.currentHelmetID);
		return new Set();
	}

	async initSockets() {
		if (!this.theme) return;

		this.sockets = [];
		const item = this.theme.data;
		const defaultProfile = armorHall.defaultProfile;
		defaultProfile.armor.core = this.id;
		defaultProfile.armor.theme = this.theme.id;

		const skipSockets = new Set([
			'Emblems',
			'ArmorFx',
			'MythicFx'
		]);

		for (const socketName in item)
		{
			if (skipSockets.has(socketName)) continue;
			
			if (item[socketName]?.OptionPaths?.length)
			{
				const socket = item[socketName];
				const OptionPaths = socket?.OptionPaths;
				this.sockets.push(new Socket({core: this, OptionPaths, socketName}));

				const profileType = socketNameToProfileType.get(socketName) ?? socketName;
				if (socket.DefaultOptionPath && socket.IsRequired && defaultProfile.armor.hasOwnProperty(profileType))
				{
					defaultProfile.armor[profileType] = filenameFromPath(socket.DefaultOptionPath);
				}
			} else if (socketName === 'Helmets' && item[socketName]?.Options?.length) {
				const helmetOptions = item[socketName]?.Options;
				const helmetPaths = [];

				const defaultID = item[socketName].DefaultOptionPath;
				defaultProfile.armor.helmet = filenameFromPath(defaultID);

				for (const helmetOption of helmetOptions)
				{
					const helmetPath = helmetOption?.HelmetPath;
					if (helmetPath) helmetPaths.push(helmetPath);

					if (helmetOption?.HelmetAttachments?.OptionPaths?.length)
					{
						const helmetID = filenameFromPath(helmetPath);
						const attachmentIDs = new Set(helmetOption.HelmetAttachments.OptionPaths.map(path => filenameFromPath(path)));
						if (attachmentIDs.size)
						{
							this.helmetAttachments.set(helmetID, attachmentIDs);
							this.helmetAttachments.set('any', new Set([...this.helmetAttachments.get('any'), ...attachmentIDs]));
						}
					}
				}

				this.sockets.push(new Socket({core: this, OptionPaths: helmetPaths, socketName}));

				this.sockets.push(new Socket({core: this, socketName: 'ArmorHelmetAttachment'}));
			}
		}

		this._defaultProfile = defaultProfile;
		console.log('defaultProfile', this.defaultProfile);
	}

	showSocket(socket) {
		this.state.mobileMenu = false;
		if (this.state?.socket === socket) {
			this.render();
			this.scrollIntoView();
			return;
		}
		this.setState({socket});
		this.scrollIntoView();
	}

	scrollIntoView() {

	}

	socketDefault(socketName) {
		const defaultItem = this.defaultProfile?.armor?.[socketName];
		if (defaultItem) return defaultItem;
		return '';
	}

	setSocket({
		socketName,
		item
	}) {
		if (!socketName || !item) return;

		if (this?.profile?.armor.hasOwnProperty(socketName))
		{
			const currentItem = this.profile.armor[socketName];
			if (currentItem === item)
			{
				this.profile.armor[socketName] = this.socketDefault(socketName) ?? '';
			} else {
				this.profile.armor[socketName] = item;
			}
			console.log(`[Core.setSocket]`, socketName, item, this.profile);
			armorHall.setProfile(this.profile);
		}
	}

	get defaultProfile() {
		if (this?._defaultProfile) return this._defaultProfile;
	}

	get profile() {
		if (this?._profile) return this._profile;
		return (this._profile = {...this.defaultProfile, armor: {...this.defaultProfile.armor}});
	}

	get title() {
		return this.meta?.title ?? 'core';
	}

	get id() {
		return this.meta?.name ?? 'core';
	}

	get core() {
		if (this?._core) return this._core;
	}

	get theme() {
		if (this?._theme) return this._theme;
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

class Socket extends Component {
	constructor({
		core,
		OptionPaths,
		socketName,
		required
	}) {
		super();

		this.core = core;
		this.OptionPaths = OptionPaths ?? [];
		this.socketName = socketName;
		this.profileSocketName = socketNameToProfileType.get(socketName) ?? socketName;

		this._itemIDs = new Set(this.OptionPaths.map(path => filenameFromPath(path)));
		this.items = [];
	}

	get defaultState() {
		return {
			page: 0
		};
	}

	get itemIDs() {
		if (this.socketName !== 'ArmorHelmetAttachment') return this._itemIDs ?? new Set();
		return this.core.currentHelmetAttachments ?? new Set();
	}

	async render() {
		await this.init();
		return this.html`
			<div
				class ="core-sockets_wrapper mica_content"
			>
			${this.name?.replace('Atch.', 'Attachments') ?? 'Socket'} // ${this?.itemIDs?.size ?? '#'}
				${this.renderPageControls('upper')}
				<ul
					class="socket-items"
				>
					${this.items.map(item => HTML.wire()`<li>
						${{
							any: item.renderSelectable('armorHall', {itemTypeIcon: true}),
							placeholder: placeholderItem.cloneNode(true)
						}}
					</li>`)}
				</ul>
				${this.renderPageControls('lower')}
			</div>
		`;
	}

	renderPageControls(id = upper) {
		if (this.pages < 2) return '';
		return HTML.wire(this, `:${id}`)`
			<div class="page-controls_wrapper">
				<button
					onclick=${() => this.previousPage()}
					disabled=${this.pageNumber === 0}
				>Prev Page</button>
				<span>${this.pageNumber+1} of ${this.pages}</span>
				<button
					onclick=${() => this.nextPage()}
					disabled=${this.pageNumber + 1 === this.pages}
				>Next Page</button>
			</div>
		`;
	}

	async init() {
		this.getCurrentItemPage()
	}

	selectHandler(item) {
		db.selectedItemIDs.add(item.id);
		this.core.setSocket({
			socketName: this.profileSocketName,
			item: item.id
		})
	}

	getCurrentItemPage() {
		return (this.items = [...this.currentPageIDs].map(id => new Item({ id }).selectHandler((item) => {
			console.log('itemClick', item);
			this.selectHandler(item);
			this.render();
		})));
	}

	nextPage() {
		if (this.pageNumber === this.pages-1) return;
		this.state.page = this.pageNumber + 1;
		this.getCurrentItemPage();
		this.render();
	}

	previousPage() {
		if (this.pageNumber === 0) return;
		this.state.page = this.pageNumber - 1;
		this.getCurrentItemPage();
		this.render();
	}

	get name() {
		return db.getItemType(this?.socketName);
	}

	get pageLength() {
		return 100;
	}

	get pages() {
		return Math.ceil(this.itemIDs.size / this.pageLength);
	}

	get pageNumber() {
		return this.state?.page ?? 0;
	}

	get currentPageIDs() {
		return new Set([...this.filteredItemIDs].slice((this.pageNumber * this.pageLength), (this.pageNumber * this.pageLength) + this.pageLength));
	}

	get filteredItemIDs() {
		const selected = [];
		const favorites = [];
		const others = [];
		const unsupported = [];

		this.itemIDs.forEach(id => {
			if (armorHall.supportedItemIDs.has(id))
			{
				if (db.selectedItemIDs.has(id))
				{
					selected.push(id);
				} else if (db.favoriteItemIDs.has(id))
				{
					favorites.push(id);
				} else
				{
					others.push(id);
				}
			} else {
				unsupported.push(id);
			}
		});

		return new Set([...selected, ...favorites, ...others]); // , ...unsupported
	}
}

export const armorHall = new ArmorHall();

const socketNameToProfileType = new Map([
	['Themes', 'theme'],
	['Coatings', 'coating'],
	['Helmets', 'helmet'],
	['HelmetAttachments', 'helmetAttachment'],
	['Visors', 'visor'],
	['ChestAttachments', 'chestAttachment'],
	['LeftShoulderPads', 'leftShoulderPad'],
	['RightShoulderPads', 'rightShoulderPad'],
	['Gloves', 'gloves'],
	['WristAttachments', 'wristAttachment'],
	['KneePads', 'kneepads'],
	['HipAttachments', 'hipAttachment'],
	['Emblems', 'emblem'],
	['ArmorFx', 'armorFX'],
	['MythicFx', 'mythicFX']
])