import { Component } from 'component';
import { emitter } from 'eventEmitter';
import { HTML } from 'lib/HTML';
import { settings } from 'ui/settings';

import './index.css';

class Database {
	constructor() {
		this.dbPath = 'db';
		if (settings.data.has('dbPath')) this.dbPath = settings.data.get('dbPath');
		if (settings.data.has('pathCasing')) this.pathCasing = settings.data.get('pathCasing');

		// TODO get manufacturer info
		// metadata/metadata.json
	}

	async init() {
		this.metadata = await this.getJSON('metadata/metadata.json')
			.catch(error => {
				console.warn(`[skimmer] metadata did not load...`, error);
				this.metadata = {}
			});
		
		this.index = await this.getJSON('index.json')
			.then(response => {
				if (!response || !Array.isArray(response?.types) || !Array.isArray(response?.manifest))
				{
					throw new Error(`[skimmer] index malformed...`)
				}
				return {
					date: new Date(response.date),
					types: new Set(response?.types ?? []),
					manifest: new Map(response?.manifest ?? [])
				}
			})
			.catch(error => {
				console.error(`[skimmer] index did not load...`, error);
				this.index = {
					date: new Date(),
					types: new Set(),
					manifest: new Map()
				}
			});
		if (this.index) console.info(`[skimmer.db.init] "${this.index.manifest.size}" items in index.`);
	}

	async getJSON(path) {
		// console.log(`[db.get] "${path}"`);
		if (!path || typeof path !== 'string')
		{
			console.warn(`[db.get] Bad path! "${path}"`);
			return;
		}
		
		return await fetch(`/${this?.dbPath ?? 'db'}/${this.pathCase(path)}`)
			.then(response => {
				if (response.ok) return response.json();
				console.error(`[db.get] ${response.status} "${this.pathCase(path)}"`)
				return Promise.reject(response);
			});
	}

	get items() {
		return this?._items ?? (this._items = new Map());
	}

	get typeIDs() {
		return this?._typeIDs ?? (this._typeIDs = new Map());
	}

	itemPathToID(path) {
		if (!path || typeof path !== 'string') return;
		try {
			const pathLowercase = path.toLowerCase();
			const pathParts = pathLowercase.split('/');
			if (!pathParts.length) return;

			const fileName = pathParts[pathParts.length-1];
			const name = fileName.substring(0, fileName.length-5); // remove '.json'
			if (name) return name;
		} catch (error) {
			console.error(`[db.itemPathToID] Bad id/path for "${path}"`);
			return '???';
		}
	}

	getItemIDsByType(type) {
		if (!type || typeof type !== 'string') return new Set();
		if (this.typeIDs.has(type)) return this.typeIDs.get(type);

		if (type === 'Favorites') {
			return new Set([...this.favoriteItemPaths].map(path => this.itemPathToID(path)));
		}

		if (this.index.types.has(type))
		{
			const entries = [...this.index.manifest.values()].filter(entry => entry?.type === type);
				// .sort((a, b) => {
				// 	if (a.title && b.title) return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
				// });
			this.typeIDs.set(type, new Set(entries.map(entry => entry?.name ?? 'UNK')));
			return this.typeIDs.get(type);
		}
		console.warn(`[db.getItemIDsByType] Type not found! "${type}"`);
	}

	getItemManifestByID(id) {
		if (!id || typeof id !== 'string') return;
		if (this.index.manifest.has(id)) return this.index.manifest.get(id);
		console.warn(`[db.getItemManifestByID] Not found! "${id}"`);
	}

	getItemPathByID(id) {
		if (!id || typeof id !== 'string') return;
		const path = this.getItemManifestByID(id)?.path;
		if (path) return path;
		console.warn(`[db.getItemPathByID] Not found! "${id}"`);
	}

	getItemByID(id) {
		if (!id || typeof id !== 'string') return;
		const path = this.getItemPathByID(id);
		if (path)
		{
			// TODO
		}
	}

	getCorePaths() {
		const coreTypes = ['ArmorCore', 'VehicleCore', 'WeaponCore'];
		return coreTypes.map(type => {
			return [...this.getItemIDsByType(type)].map(entry => entry.path);
		});
	}

	get manufacturers() {
		if (!this.metadata) return new Map();
		return this?._manufacturers ?? (this._manufacturers = new Map(
			this?.metadata?.Manufacturers.map((properties, index) => [index, properties])
		))
	}

	getManufacturerByIndex(index) {
		const defaultMan = {
			"ManufacturerName": "",
			"ManufacturerLogoImage": ""
		}
		if (!index || index === 0) return defaultMan;
		if (this.manufacturers.has(index)) return this.manufacturers.get(index);
		return defaultMan;
	}

	get itemTypes() {
		return this?._types ?? (this._types = new Map([
			['ArmorCoating', 'Coating, Armor'],
			['ArmorHelmet', 'Helmet'],
			['ArmorHelmetAttachment', 'Helmet Atch.'],
			['ArmorVisor', 'Visor'],
			['ArmorLeftShoulderPad', 'Shoulder, Left'],
			['ArmorRightShoulderPad', 'Shoulder, Right'],
			['ArmorGlove', 'Gloves'],
			['ArmorChestAttachment', 'Chest Atch.'],
			['ArmorKneePad', 'Knee Pads'],
			['ArmorWristAttachment', 'Wrist Atch.'],
			['ArmorHipAttachment', 'Hip Atch.'],
			['ArmorEmblem', 'Emblem, Armor'],
			['ArmorFx', 'Armor Effects'],
			['ArmorMythicFx', 'Mythic Effects'],
			['ArmorTheme', 'Kit, Armor'],
			['ArmorCore', 'Core, Armor'],
			['SpartanActionPose', 'Stance'],
			['SpartanBackdropImage', 'Backdrop'],
			['SpartanEmblem', 'Emblem, Nameplate'],
			['SpartanVoice', 'Voice Imprint'],
			['WeaponCharm', 'Charm'],
			['WeaponCoating', 'Coating, Weapon'],
			['WeaponDeathFx', 'Death Effect'],
			['WeaponEmblem', 'Emblem, Weapon'],
			['WeaponTheme', 'Kit, Weapon'],
			['WeaponCore', 'Core, Weapon'],
			['WeaponAlternateGeometryRegion', 'Model, Weapon'],
			['VehicleAlternateGeometryRegion', 'Model, Vehicle'],
			['VehicleCoating', 'Coating, Vehicle'],
			['VehicleEmblem', 'Emblem, Vehicle'],
			['VehicleTheme', 'Kit, Vehicle'],
			['VehicleCore', 'Core, Vehicle'],
			['HelmetAttachments', 'Helmet Atch.'],
			['LeftShoulderPads', 'Shoulder, Left'],
			['RightShoulderPads', 'Shoulder, Right'],
			['KneePads', 'Knee Pads'],
			['ChestAttachments', 'Chest Atch.'],
			['WristAttachments', 'Wrist Atch.'],
			['HipAttachments', 'Hip Atch.'],
			['WeaponCharms', 'Weapon Charms'],
			['DeathFx', 'Death Effects'],
			['AlternateGeometryRegions', 'Models'],
			['MythicFx', 'Mythic Effects'],
			['AiColor', 'AI Color'],
			['AiModel', 'AI Model'],
			['AiTheme', 'Kit, AI'],
			['AiCore', 'Core, AI'],
			['meta', 'Meta']
		]))
	}

	getItemType(name) {
		if (name && this.itemTypes.has(name)) return this.itemTypes.get(name);
		return name;
	}

	async showItemPanelByPath(path, skipState) {
		const item = new Item(path);
		const response = await item?.init();
		if (response) itemPanel.displayItem(item, skipState);
	}

	pathCase(path) {
		if (!path || typeof path !== 'string') return '';
		return `${(this?.pathCasing ?? true) ? path.toLowerCase() : path}`
	}

	get favoriteItemPaths() {
		if (this?._favoriteItemPaths) return this._favoriteItemPaths;
		const stored = localStorage.getItem('userFavorites');
		if (!stored) return (this._favoriteItemPaths = new Set());
		// console.log('stored!')
		// TODO process for is a path? etc
		const paths = JSON.parse(stored);
		if (!Array.isArray(paths)) return (this._favoriteItemPaths = new Set());
		return (this._favoriteItemPaths = new Set(paths.map(path => path.toLowerCase())));
	}

	toggleFavorite(path) {
		console.log('fav', path);
		if (!path) return;
		if (this.favoriteItemPaths.has(`${path}`))
		{
			console.info(`[skimmer] Removing favorite path ${path}`);
			this.favoriteItemPaths.delete(`${path}`);
		} else {
			console.info(`[skimmer] Adding favorite path ${path}`);
			this.favoriteItemPaths.add(`${path}`);
		}

		localStorage.setItem('userFavorites', JSON.stringify([...this.favoriteItemPaths]));
		console.warn(localStorage.getItem('userFavorites'))
		emitter.emit('favoriteItemPaths', `${path}`)
	}
}

export const db = new Database();



export class Item extends Component {
	constructor(path) {
		super();
		if (!path || path.length < 10) return console.error(`[Item] Bad path ${path}`);
		const pathLowercase = path.toLowerCase();
		if (db.items.has(pathLowercase))
		{
			// console.warn('[skimmer][db.item] Duplicate', path);
			return db.items.get(pathLowercase);
		}
		this.path = pathLowercase;
		db.items.set(`${pathLowercase}`, this);
	}

	get id() {
		return this?._id ?? (this._id = db.itemPathToID(this.path));
	}

	get name() {
		return this?.data?.CommonData?.Title ?? this.id;
	}

	get seasonNumber() {
		const season = this?.data?.CommonData?.Season;
		if (!season || typeof season !== 'string') return '0';
		const split = season.split(' ');
		if (split && split?.[1]) return parseInt(split[1]);
		return '0';
	}

	async getName() {
		await this.init();
		return this?.data?.CommonData?.Title ?? this.id;
	}

	get parentPaths() {
		if (!this?.data?.CommonData?.ParentPaths?.length) return;
		return this?._parentPaths ?? (this._parentPaths = new Set([...this?.data?.CommonData?.ParentPaths.map(parent => parent?.Path)]));
	}

	get manufacturerName() {
		return db.getManufacturerByIndex(this?.data?.CommonData?.ManufacturerId)?.ManufacturerName ?? '';
	}

	get manufacturerImage() {
		return db.getManufacturerByIndex(this?.data?.CommonData?.ManufacturerId)?.ManufacturerLogoImage ?? '';
	}

	get defaultState() {
		return {
			expand: false
		};
	}

	async init() {
		if (this.data)
		{
			await this.data;
			return this;
		}
		try {
			this.data = db.getJSON(this.path) // TODO need to get rid of this await. errors with itempanel on refresh
				.then(res => this.data = res);
			await this.data;
		} catch (error) {
			console.error(`[Item.init]`, error);
			return false;
		}
		return this;
	}

	async render() {
		console.warn('render', this);
	}

	async renderIcon(id, {
		itemTypeIcon = false
	} = {}) {
		await this.init();
		return HTML.wire(this, `:${id ?? 'icon'}`)`
			<button
				class=${
					`dbItem dbItemIcon ${this?.data?.CommonData?.Type ?? 'defaultType'}${
						this?.data?.CommonData?.Quality ? ` ${this?.data?.CommonData?.Quality?.toLowerCase?.() ?? ''}` : ''
						}${
						this?.data?.CommonData?.Type === 'SpartanBackdropImage' ? ' invert-hover' : ''
						}`
				}
				onclick=${() => this.showItemPanel()}
				style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(this.imagePath)})`}}
			>
				<span>${this.name ?? '???'}</span>
				${itemTypeIcon ? this.renderItemTypeIcon() : ''}
				${this.seasonNumber > 1 ? HTML.wire(this, ':seasonIcon')`<div
						class="season-icon"
						style=${{webkitMaskImage: `url(seasons.svg#${this.seasonNumber ?? 'default'})`}}
					></div>` : ''
				}
			</button>
		`;
	}

	get itemTypeIcons() {
		return this?._itemTypeIcons ?? (this._itemTypeIcons = new Set([
			'ArmorCoating',
			'WeaponCoating'
		]));
	}

	async renderItemTypeIcon() {
		const path = this?.data?.CommonData?.ParentPaths?.[0]?.Path ?? this?.data?.CommonData?.ParentTheme ?? '';
		const type = this?.data?.CommonData?.Type;
		if (!path || !this.itemTypeIcons.has(type)) return '';
		if (type && type === 'WeaponCoating')
		{
			const parent = await new Item(path).getImagePath();
			const imagePath = `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(parent)})`;
			return HTML.wire(this, `:itemType-${path}`)`
				<div
					class=${`item-type-icon ${this?.data?.CommonData?.Type ?? 'default-type'}`}
					style=${{webkitMaskImage: imagePath, maskImage: imagePath}}
				></div>
			`;
		}
		if (type && type === 'ArmorCoating')
		{
			let svgId = 'ArmorCoating';
			switch (path) {
				case 'Inventory/Armor/Themes/007-001-olympus-c13d0b38.json':
					svgId = 'MK7'
					break;
				case 'Inventory/Armor/Themes/007-001-reach-2564121f.json':
					svgId = 'MK5'
					break;
				case 'Inventory/Armor/Themes/007-001-samurai-55badb14.json':
					svgId = 'YOROI'
					break;
			
				default:
					break;
			}
			return HTML.wire(this, `:itemType-${performance.now()}`)`
				<div
					class=${`item-type-icon ${this?.data?.CommonData?.Type ?? 'default-type'}`}
					style=${{backgroundImage: `url(items.svg#${svgId ?? 'default'})`}}
				></div>
			`;
		}
	}

	get imagePath() {
		let imagePath = '';
		const displayPath = this?.data?.CommonData?.DisplayPath?.Media?.MediaUrl?.Path;
		if (displayPath && typeof displayPath === 'string') {
			imagePath = `${displayPath[0].toLowerCase()}${displayPath.substring(1)}`;
		}

		return imagePath;
	}

	async getImagePath() {
		if (this?._imagePath) return this._imagePath;
		await this.init();
		let imagePath = '';
		const displayPath = this?.data?.CommonData?.DisplayPath?.Media?.MediaUrl?.Path;
		if (displayPath && typeof displayPath === 'string') {
			imagePath = `${displayPath[0].toLowerCase()}${displayPath.substring(1)}`;
		}

		return (this._imagePath = imagePath);
	}

	async getParentItem() {
		if (this?._parentItem) return this._parentItem;
		if (this?.data?.CommonData?.ParentTheme)
		{
			this._parentItem = new Item(this?.data?.CommonData?.ParentTheme);
			await this._parentItem.init();
			return this._parentItem;
		}
		// const test = async path => `<a class="parentSocket" href=${`#${path}`}>${await new Item(path).getName()}</a>`
	}

	get icon() {
		return this?._icon ?? (this._icon = this.renderIcon())
	}

	showItemPanel() {
		itemPanel.displayItem(this);
	}

	get manifestItem() {
		if (this?._manifestItem) return this._manifestItem;
		const manifest = db.getItemManifestByID(this.id);
		if (manifest) return (this._manifestItem = manifest);
	}

	get lastModifiedDate() {
		if (this?._lastModifiedDate) return this._lastModifiedDate;
		if (!Array.isArray(this?.manifestItem?.touched)) return new Date('2021-11-15T20:00:00.000Z');
		
		const dateString = this?.manifestItem?.touched[this.manifestItem.touched.length-1];
		if (!Date.parse(dateString)) new Date('2021-11-15T20:00:00.000Z');

		const date = new Date(dateString);
		date.setUTCHours(20);
		return (this._lastModifiedDate = date);
	}
}

export class CurrencyItem extends Item {
	get currencies() {
		return this?._currencies ?? (this._currencies = new Map([
			['currency/currencies/rerollcurrency.json', {
				mediaPath: 'progression/currencies/1104-000-data-pad-e39bef84-sm.png',
				name: 'Challenge Swap'
			}],
			['currency/currencies/xpgrant.json', {
				mediaPath: 'progression/currencies/1102-000-xp-grant-c77c6396-sm.png',
				name: 'XP Grant'
			}],
			['currency/currencies/xpboost.json', {
				mediaPath: 'progression/currencies/1103-000-xp-boost-5e92621a-sm.png',
				name: 'XP Boost'
			}],
			['currency/currencies/cr.json', {
				mediaPath: 'progression/Default/default.png',
				name: 'cR'
			}]
		]))
	}

	get currency() {
		const path = this.path.toLowerCase();
		if (this.currencies.has(path)) return this.currencies.get(path);
		return {
			mediaPath: 'progression/Default/default.png',
			name: 'Unknown Currency'
		}
	}

	get name() {
		return this.currency.name;
	}

	get imagePath() {
		return this.currency.mediaPath;
	}
}

class ItemPanel extends Component {
	constructor() {
		super();

		window.addEventListener("keydown", (event) => {
			if (event.defaultPrevented) return;
		
			if (this.state.visible === true && event.key === 'Escape')
			{
				this.hide();
				event.preventDefault();
			}
		}, true);
	}

	get defaultState() {
		return {
			visible: false,
			item: {},
			pretty: true,
			copyStatus: 'Share'
		};
	}

	hide() {
		this.setState({visible: false});
		history.pushState(null, 'Halosets', `#`);
	}

	toggleVisibility() {
		this.setState({visible: !this.state.visible});
	}

	displayItem(item, skipState) {
		// check if is of class Item...
		if (skipState) {
			history.replaceState({path: `${item?.path}`}, `Halosets`, `#${item?.path}`);
		} else {
			history.pushState({path: `${item?.path}`}, `Halosets`, `#${item?.path}`);
		}
		
		this.setState({
			item,
			visible: true
		});
	}

	get item() {
		if (this.state.item) return this.state.item;
	}

	render() {
		if (this.state.visible) {
			const item = this.state.item.data;

			let imagePath = '';
			const displayPath = item?.CommonData?.DisplayPath?.Media?.MediaUrl?.Path;
			if (displayPath && typeof displayPath === 'string') {
				imagePath = `${displayPath[0].toLowerCase()}${displayPath.substring(1)}`;
			}

			return HTML.bind(document.querySelector('.js--item-panel'))`
				<div
					class="dbItemPanel_clickout"
					onclick=${() => this.hide()}
				></div>
				<div
					class="dbItemPanel_wrapper"
				>
					<header>
						<div
							class="item-img"
							style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(imagePath)})`}}
						></div>
						<div class=${`dbItemPanel_titles${item?.CommonData?.Quality ? ` ${item.CommonData.Quality?.toLowerCase?.()}` : ''}`}>
							<h2>${this.state.item?.data?.CommonData?.Title ?? 'Item'}</h2>
							<h3>${this.state.item?.data?.CommonData?.Description ?? '...'}</h3>
						</div>
						<button
							class=${'favorite'}
							onclick=${() => {
								if (!this.state.item?.data?.CommonData) return;
								db.toggleFavorite(this.state.item.path);
								this.render();
							}}
							style=${{backgroundImage: `url(items.svg#${db.favoriteItemPaths.has(this.state.item.path) ? 'favored' : 'unfavored'})`}}
						></button>
					</header>
					<div class="item-info_wrapper">
						<div class="item-badges">
							<div class="badge">
								<div
									class="badge-svg"
									style=${{backgroundImage: `url(seasons.svg#${this.state.item.seasonNumber ?? 'default'})`}}
								></div>
								<span>${this.state.item?.data?.CommonData?.Season ?? 'Season'}</span>
							</div>
							<div class="badge">
								<div
									class="badge-svg"
									data-icon=${this.state.item?.data?.CommonData?.Type ?? 'default'}
									style=${{backgroundImage: `url(items.svg#${this.state.item?.data?.CommonData?.Type ?? 'default'})`}}
								></div>
								<span class="badge">${db.getItemType(this.state.item?.data?.CommonData?.Type) ?? 'Item'}</span>
							</div>
							<div class="badge">
								<div
									class="badge-icon"
									style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(this.state.item?.manufacturerImage)})`}}
								></div>
								<span class="badge">${this.state.item?.manufacturerName ?? ''}</span>
							</div>
						</div>
						<span class="attribute">${this.state.item?.data?.CommonData?.CustomAvailability ?? null}</span>
						<span class="attribute">
							${this.state.item?.parentPaths ? `Applies to: ` : ''}
							${[...this.state.item?.parentPaths ?? []].map(async path => `<a class="parentSocket" href=${`#${path}`}>${await new Item(path).getName()}</a>`)}
						</span>
					</div>
					<div class="modified-info_wrapper">
							<label for="item-modified-date">Modified: </label><span id="item-modified-date">${this?.item?.lastModifiedDate?.toLocaleDateString(undefined, {
								year: 'numeric', month: 'numeric', day: 'numeric'
							}) ?? 'untracked'}</span>
					</div>
					<div class="json-info_wrapper">
						<span class="dbItemPanel_path">
							<button
								aria-label="Copy shareable link"
								onclick=${() => {
									navigator.clipboard.writeText(`https://${window?.location?.host ?? 'cylix.guide'}${this.sharePath}`)
										.then(success => {
											this.setState({copyStatus: 'Copied!'});
											setTimeout(() => {
												this.setState({copyStatus: 'Share'});
											}, 2000);
										}, error => {
											console.error('Copy share link', error);
											this.setState({copyStatus: 'Error!'});
											setTimeout(() => {
												this.setState({copyStatus: 'Share'});
											}, 2000);
										})
								}}
							><span class="icon-masked icon-share"></span> ${this.state?.copyStatus ?? 'Share'}</button>
							<a href=${this.sharePath} target="_blank" rel="noopener noreferrer">${this.state.item?.path ?? 'UNK'}</a>
						</span>
						<button
							onclick=${() => this.setState({pretty: !this.state.pretty})}
						>${this.state.pretty ? 'raw' : 'pretty'}</button>
					</div>
					<pre class="dbItemPanel_json">${{html: this.state.pretty ? this.prettyJson(this.state?.item?.data ?? {}) : JSON.stringify(this.state.item?.data, null, "\t")}}</pre>
				</div>
			`;
			// <pre class="dbItemPanel_json">${JSON.stringify(this.state.item?.data, null, "\t")}</pre>
									// style=${{"maskImage": `url("/assets/icons.svg")`}}
		}
		return HTML.bind(document.querySelector('.js--item-panel'))``;
	}

	get sharePath() {
		return `${this.item?.path.startsWith('inventory/') ? '/share/' : '/#'}${this.item?.path ?? ''}`;
	}

	prettyJson(json) {
		return JSON.stringify(json, (key, value) => {
			if (typeof value === 'string' && value.length > 10 && value.substring(value.length -5) === '.json')
			{
				return `<a href=${`#${value}`}>${value}</a>`;
			}
			return value;
		}, '\t');
	}
}

export const itemPanel = new ItemPanel();