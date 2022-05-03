import { emitter } from 'eventEmitter';
import { settings } from 'ui/settings';
import { itemPanel } from 'db/itemPanel';
import { Item } from 'db/item';
import { urlParams } from 'urlParams';

class Database {
	constructor() {
		this.dbPath = 'db';
		if (settings.data.has('dbPath')) this.dbPath = settings.data.get('dbPath');
		if (settings.data.has('pathCasing')) this.pathCasing = settings.data.get('pathCasing');
		if (settings.data.has('revealHidden'))
		{
			this.revealHidden = settings.data.get('revealHidden');
		} else if (urlParams.getSecionSetting('spoilers'))
		{
			this.revealHidden = true;
		}
	}

	set revealHidden(bool) {
		if (bool) return (this._revealHidden = true);
		this._revealHidden = false;
	}

	get revealHidden() {
		if (this?._revealHidden) return this._revealHidden;
		return false;
	}

	async getMetaData() {
		const metadata = await this.getJSON('metadata/metadata.json')
			.catch(error => {
				console.warn(`[skimmer] metadata did not load...`, error);
				this.metadata = {}
			});
		if (metadata) return metadata;
	}

	async getIndex() {
		const index = await this.getJSON('index.json')
			.then(response => {
				if (!response || !Array.isArray(response?.types) || !Array.isArray(response?.manifest))
				{
					throw new Error(`[skimmer] index malformed...`)
				}
				return {
					date: new Date(response.date),
					types: new Set(response?.types ?? []),
					tags: new Set(response?.tags ?? []),
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
		if (index) return index;
	}

	async init() {
		const [index, metadata] = await Promise.all([
			this.getIndex(),
			this.getMetaData()
		]);

		this.index = index;
		console.info(`[db.init] "${this.index.manifest.size}" items in index.`);

		this.metadata = metadata;
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

	async getRelationsByID(id) {
		try {
			if (!id) return;
			if (!this?._relations) this._relations = this.getRelationsIndex();
			const relations = await this._relations;
			// console.log(`[db.getRelationsByID]`, id, relations)
	
			if (!relations || !relations.size)
			{
				console.error(`[db.getRelationsByID] No relation index!`);
				return;
			}

			if (relations.has(id)) return relations.get(id);
				console.warn(`[db.getRelationsByID] No relations for "${id}"!`);
		} catch (error) {
			console.error(`[db.getRelationsByID] uncaught`, error);
		}
	}

	async getRelationsIndex() {
		const relationsIndex = await this.getJSON('relations.json')
		if (relationsIndex && Array.isArray(relationsIndex))
		{
			const relations = new Map(relationsIndex);
			console.info(`[db.getRelationsIndex] "${relations.size}" item relations`);
			this._relations = relations;
			return relations;
		}
		console.error(`[db.getRelationsIndex] No relations index!`);
	}

	async getOfferings() {
		const offerings = await this.getJSON('offerings.json')
		if (offerings && Array.isArray(offerings?.bundles)) return offerings;
	}

	get items() {
		return this?._items ?? (this._items = new Map());
	}

	// cache items IDs by type
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

	get communityTags() {
		return this.index.tags;
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
			['Offering', 'Offering'],
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

	get replacedInfoItems() {
		return this?._replacedInfoItems ?? (this._replacedInfoItems = new Map([
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
				mediaPath: 'progression/currencies/credit_coin-sm.png',
				name: 'cR'
			}]
		]))
	}
}

export const db = new Database();