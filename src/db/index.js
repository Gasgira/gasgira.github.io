import { emitter } from 'eventEmitter';
import { settings } from 'ui/settings';
import { itemPanel } from 'db/itemPanel';
import { Item } from 'db/item';
import { urlParams } from 'urlParams';
import { filenameFromPath } from 'utils/paths.js';
import { i18n } from 'ui/i18n';
import { STATIC_ROOT } from 'environment';

class Database {
	constructor() {
		this.dbPath = 'db';
		this.assetPath = '7';
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

	async init() {
		const promises = [
			this.getIndex()
		];

		const countryCode = settings.countryCode;
		if (countryCode) promises.push(i18n.init(countryCode));

		const [ index ] = await Promise.all(promises);

		this.index = index;
		console.info(`[db.init] "${this.index.manifest.size}" items in index.`);

		this.metadata = await this.getMetaData();
	}

	get items() {
		return this?._items ?? (this._items = new Map());
	}

	set revealHidden(bool) {
		if (bool) return (this._revealHidden = true);
		this._revealHidden = false;
	}

	get revealHidden() {
		return this._revealHidden ??= false;
	}

	async getMetaData() {
		const meta = this.getItemManifestByID('metadata');
		// const metadata = await this.getJSON('metadata/metadata.json')
		const metadata = await this.getJSON(`item/metadata/${meta.res}.json`)
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
					throw new Error(`[db.getIndex] index malformed...`)
				}
				return {
					date: new Date(response.date),
					types: new Set(response?.types ?? []),
					tags: new Set(response?.tags ?? []),
					manifest: new Map(response?.manifest ?? [])
				}
			})
			.catch(error => {
				console.error('[db.getIndex]', error)
				throw new Error(`[db.getIndex] Fetch Error! "${error?.message ?? error?.statusText ?? error?.status}" "${error?.url}"`);
			});
		if (index) return index;
		throw new Error(`[db.getIndex] No index!`);
	}

	async getJSON(path) {
		// console.log(`[db.get] "${path}"`);
		if (!path || typeof path !== 'string')
		{
			console.warn(`[db.get] Bad path! "${path}"`);
			return;
		}

		return await fetch(`${STATIC_ROOT}${this.pathCase(path)}`)
			.then(response => {
				if (response.ok) return response.json();
				console.error(`[db.getJSON] ${response.status} "${this.pathCase(path)}"`)
				return Promise.reject(response);
			});
	}

	async getAssetJSON(path) {
		// console.log(`[db.get] "${path}"`);
		if (!path || typeof path !== 'string')
		{
			console.warn(`[db.getAssetJSON] Bad path! "${path}"`);
			return;
		}

		return await fetch(`/${this?.assetPath ?? '7'}/${this.pathCase(path)}`)
			.then(response => {
				if (response.ok) return response.json();
				console.error(`[db.getAssetJSON] ${response.status} "${this.pathCase(path)}"`)
				return Promise.reject(response);
			});
	}

	async getItem({ id }) {
		if (!id || typeof id !== 'string') return;
		if (this.items.has(id)) return this.items.get(id);

		try {
			if (!this.manifestHasID(id)) return;

			const meta = this.getItemManifestByID(id);
			if (!meta?.res) throw new Error('No current item hash!');

			const json = await this.getJSON(`item/${meta.name}/${meta.res}.json`);
			if (!json) throw new Error('Failed to fetch item!');

			return new Item({ item: json, meta });
		} catch (error) {
			console.error(`[db.getItem] "${id}"`, error);
		}
	}

	// cache items IDs by type
	get typeIDs() {
		return this?._typeIDs ?? (this._typeIDs = new Map());
	}

	itemPathToID(path) {
		if (!path || typeof path !== 'string') return;
		try {
			const pathLowercase = path.toLowerCase();
			const name = filenameFromPath(pathLowercase);
			if (name) return name;
			return path;
		} catch (error) {
			console.error(`[db.itemPathToID] Bad id/path for "${path}"`);
			return;
		}
	}

	getItemIDsByType(type) {
		if (!type || typeof type !== 'string') return new Set();
		if (this.typeIDs.has(type)) return this.typeIDs.get(type);

		if (type === 'Favorites') {
			return this.favoriteItemIDs;
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

	manifestHasID(id) {
		if (!id || typeof id !== 'string') return false;
		if (this.index.manifest.has(id)) return true;
		return false;
	}

	getItemManifestByID(id) {
		if (!id || typeof id !== 'string') return;
		if (this.index.manifest.has(id)) return this.index.manifest.get(id);
		console.warn(`[db.getItemManifestByID] Not found! "${id}"`);
	}

	getItemTitleById(id) {
		if (!id || typeof id !== 'string') return '???';
		if (this.index.manifest.has(id))
		{
			const meta = this.index.manifest.get(id);
			if (!settings.isTranslated) return meta.title;
			return i18n.resolveItemTitle(id) ?? meta.title;
		}
	}

	getItemPathByID(id) {
		if (!id || typeof id !== 'string') return;
		const path = this.getItemManifestByID(id)?.path;
		if (path) return path;
		console.warn(`[db.getItemPathByID] Not found! "${id}"`);
	}

	getCorePaths() {
		const coreTypes = ['ArmorCore', 'VehicleCore', 'WeaponCore'];
		return coreTypes.map(type => {
			return [...this.getItemIDsByType(type)].map(entry => entry.path);
		});
	}

	async getRelationsByID(id) {
		try {
			if (!id) return;
			if (!this?._relations) this._relations = await this.getRelationsIndex();
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

	async getHistoryIndex() {
		const history = await this.getJSON('history.json')
		if (history && Array.isArray(history.items))
		{
			this._history = new Map(history.items);
			console.info(`[db.getHistoryIndex] loading history with "${this._history.size}" items from "${history.date}"`);
			return this._history;
		}
		console.error(`[db.getHistoryIndex] No history index!`);
	}

	async getHistoryByID(id) {
		try {
			if (!id) return;
			if (!this?._history) await this.getHistoryIndex();

			if (!this._history || !this._history.size)
			{
				console.error(`[db.getHistoryByID] No history index!`);
				return;
			}

			if (this._history.has(id)) return this._history.get(id);
			console.warn(`[db.getHistoryByID] No history for "${id}"!`);
		} catch (error) {
			console.error(`[db.getHistoryByID] uncaught`, error);
		}
	}

	async getEmblemColorIndex() {
		if (this._emblemColors) return this._emblemColors;
		const json = await this.getJSON('emblemColors.json');
		if (json && Array.isArray(json))
		{
			const emblemColors = new Map(json);
			console.info(`[db.getEmblemColorIndex] "${emblemColors.size}" emblem colors`);
			this._emblemColors = emblemColors;
			return this._emblemColors;
		}
		console.error(`[db.getEmblemColorIndex] No emblemColors index!`);
	}

	getEmblemColor(config) {
		const index = this._emblemColors ?? new Map();
		if (index.has(config)) return index.get(config);
		return '#FFFFFF';
	}

	get manufacturers() {
		if (!this.metadata) return new Map();
		return this._manufacturers ??= new Map(
			this?.metadata?.Manufacturers.map((properties, index) => [index, properties])
		);
	}

	getManufacturerByIndex(index) {
		const defaultMan = {
			"ManufacturerName": "",
			"ManufacturerLogoImage": ""
		}
		// if (!index || index === 0) return defaultMan;
		if (this.manufacturers.has(index)) return this.manufacturers.get(index);
		return defaultMan;
	}

	get qualities() {
		return this._qualities ??= new Set([
			'Common',
			'Rare',
			'Epic',
			'Legendary'
		])
	}

	get seasons() {
		return this._seasons ??= new Map([
			[1, 'Heroes of Reach'],
			[2, 'Lone Wolves']
		])
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
			['meta', 'Meta'],
			['None', 'Emblem Palette']
		]))
	}

	getItemType(name) {
		if (name && this.itemTypes.has(name)) return this.itemTypes.get(name);
		return name;
	}

	async showItemPanelByPath(path, skipState) {
		const id = this.itemPathToID(path);
		const item = new Item({ id });
		const response = await item?.init();
		if (response) itemPanel.displayItem(item, skipState);
	}

	async showItemPanelByID(id, skipState) {
		console.log('showItemPanelByID', id);
		if (!this.manifestHasID(id))
		{
			console.warn(`[db.showItemPanelByID] No ID in manifest "${id}"`);
		}
		const item = new Item({ id });
		const response = await item?.init();
		if (response) itemPanel.displayItem(item, skipState);
	}

	pathCase(path) {
		if (!path || typeof path !== 'string') return '';
		return `${(this?.pathCasing ?? true) ? path.toLowerCase() : path}`
	}

	get selectedItemIDs() {
		if (this?._selectedItemIDs) return this?._selectedItemIDs;
		return (this._selectedItemIDs = new Set());
	}

	set selectedItemIDs(set) {
		if (!set || !set instanceof Set || !set.size) return;
		this._selectedItemIDs = set;
	}

	get favoriteItemIDs() {
		if (this?._favoriteItemIDs) return this._favoriteItemIDs;
		const stored = localStorage.getItem('user_favorites');
		if (!stored)
		{
			const legacyStored = localStorage.getItem('userFavorites');
			if (legacyStored)
			{
				try {
					console.warn(`[db.favoriteItemIDs] Recovering legacy favorite paths!`, legacyStored);
					const paths = JSON.parse(legacyStored);
					this._favoriteItemIDs = new Set();
					if (Array.isArray(paths)) paths.forEach(path => ids.add(this.itemPathToID(path)));

					localStorage.setItem('user_favorites', JSON.stringify([...this._favoriteItemIDs]));
					localStorage.removeItem('userFavorites');
					return this._favoriteItemIDs;
				} catch (error) {
					console.error(`[db.favoriteItemIDs] Error recovering legacy favorite paths!`, error);
				}
			}
		}

		if (stored)
		{
			const favoriteIds = JSON.parse(stored);
			this._favoriteItemIDs = new Set([...favoriteIds]);
			return this._favoriteItemIDs;
		}

		return (this._favoriteItemIDs = new Set());
	}

	toggleFavorite(item) {
		if (!item) return;
		const id = item.id;
		if (!id || typeof id !== 'string') return;
		if (this.favoriteItemIDs.has(id))
		{
			// console.info(`[db.toggleFavorite] Removing favorite ${id}`);
			this.favoriteItemIDs.delete(id);
		} else {
			// console.info(`[db.toggleFavorite] Adding favorite ${id}`);
			this.favoriteItemIDs.add(id);
		}

		localStorage.setItem('user_favorites', JSON.stringify([...this.favoriteItemIDs]));
		// console.log('[db.toggleFavorite] favorites:', localStorage.getItem('user_favorites'));
		emitter.emit('favoriteItems', id);
	}

	get replacedInfoItems() {
		return this?._replacedInfoItems ?? (this._replacedInfoItems = new Map([
			['rerollcurrency', {
				mediaPath: 'progression/currencies/1104-000-data-pad-e39bef84-sm.png',
				name: 'Challenge Swap'
			}],
			['xpgrant', {
				mediaPath: 'progression/currencies/1102-000-xp-grant-c77c6396-sm.png',
				name: 'XP Grant'
			}],
			['xpboost', {
				mediaPath: 'progression/currencies/1103-000-xp-boost-5e92621a-sm.png',
				name: 'XP Boost'
			}],
			['cr', {
				mediaPath: 'progression/currencies/credit_coin-sm.png',
				name: 'cR'
			}]
		]))
	}
}

export const db = new Database();