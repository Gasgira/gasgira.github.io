import { db } from 'db';
import { itemPanel } from 'db/itemPanel';
import { Component } from 'component';
import { HTML } from 'lib/HTML';
import { i18n } from 'ui/i18n';
import { filenameFromPath } from 'utils/paths.js';
import { settings } from 'ui/settings';
import { STATIC_ROOT } from 'environment';

import './index.css';

export const placeholderItem = HTML.wire()`
	<button
		class='dbItem dbItemIcon dbItemPlaceholder'
		title='Loading Item...'
	>
		<span>...</span>
	</button>
`;

export class Item extends Component {
	constructor(properties) {
		super();
		if (!properties) return;

		if (properties.item && properties.meta)
		{
			this._meta = properties.meta;
			this._id = properties.meta.name;
			this.data = properties.item;

			db.items.set(this.meta.name, this);
		} else if (properties.id) {
			const id = properties.id.toLowerCase();
			if (db.items.has(id)) return db.items.get(id);
			const meta = db.getItemManifestByID(id);
			if (!meta)
			{
				console.error(`[Item.constructor] No meta for "${id}"!`);
				// return 'Bad item id!';
				return new emptyItem(id);
			}
			this._meta = meta;
			this._id = meta.name;

			db.items.set(this.meta.name, this);
		} else if (properties.path) {
			const id = filenameFromPath(properties.path).toLowerCase();
			if (!id) return;

			if (db.items.has(id)) return db.items.get(id);
			const meta = db.getItemManifestByID(id);
			if (!meta)
			{
				console.error(`[Item.constructor] No meta for "${id}"!`);
				// return 'Bad item id!';
				return new emptyItem(id);
			}
			this._meta = meta;
			this._id = meta.name;

			db.items.set(this.meta.name, this);
		}

		// let path = '';

		// if (typeof properties === 'string')
		// {
		// 	path = properties.toLowerCase();
		// } else if (properties.id) {
		// 	const meta = db.getItemManifestByID(properties.id);
		// 	if (!meta)
		// 	{
		// 		console.error(`[Item.constructor] No meta for "${id}"!`);
		// 		return 'Bad item id!';
		// 	}
		// 	this._meta = meta;
		// 	this._id = meta.name;
		// 	path = meta.path;
		// }

		// if (db.items.has(path))
		// {
		// 	// console.warn('[skimmer][db.item] Duplicate', path);
		// 	return db.items.get(path);
		// }
		// this.path = path;
		// db.items.set(`${path}`, this);

		this.renderCount = 0;
	}

	get meta() {
		if (this?._meta) return this._meta;
		return (this._meta = db.getItemManifestByID(this.id));
	}

	get id() {
		return this?._id ?? (this._id = this.meta.name);
	}

	get altName() {
		return this?._altName ?? (this._altName = this?.data?.CommonData?.AltName || this.id);
	}

	get cylixPath() {
		return `item/${this.id}/${this.meta.res}.json`;
	}

	get name() {
		if (this.isRedacted) return '[REDACTED]';

		if (db.replacedInfoItems.has(this.id))
		{
			const replacedInfo = db.replacedInfoItems.get(this.id);
			if (replacedInfo.name) return replacedInfo.name;
		}

		const title = i18n.resolveItemTitle(this.id);
		// const title = this.meta.title;
		if (title && typeof title === 'string') return title;
		if (this?.data?.Title) return this.data.Title;

		return this.meta?.title || this.id || '???';
	}

	get untranslatedName() {
		if (!settings.isTranslated) return '';
		if (this.isRedacted) return '';
		const title = this.meta.title;
		return title === this.name ? '' : title;
	}

	get type() {
		return this.meta.type;
	}

	get niceType() {
		return db.getItemType(this.type);
	}

	async getName() {
		if (this.isRedacted) return '[REDACTED]';
		// return i18n.resolveItemTitle(this.id) ?? this.meta.title;
		return this.meta.title;
		// await this.init();
		// if (this.isRedacted) return '[REDACTED]';
		// return this?.data?.CommonData?.Title ?? this.id;
	}

	async getSeasonNumber() {
		if (this?._seasonNumber) return this._seasonNumber;
		await this.init();
		const season = this?.data?.CommonData?.SeasonNumber;
		if (!season) return (this._seasonNumber = 0);
		return (this._seasonNumber = parseInt(season));
	}

	get seasonNumber() {
		const season = this?.data?.CommonData?.SeasonNumber;
		if (!season) return '0';
		return parseInt(season);
	}

	get parentPaths() {
		if (!this?.data?.CommonData?.ParentPaths?.length) return;
		return this?._parentPaths ?? (this._parentPaths = new Set([...this?.data?.CommonData?.ParentPaths.map(parent => parent?.Path)]));
	}

	get parentIDs() {
		if (this._parentIDs) return this._parentIDs;

		const parentPaths = this.parentPaths;
		if (!parentPaths || !parentPaths.size) return (this._parentIDs = new Set());

		const parentIDs = new Set();
		parentPaths.forEach(path => {
			const id = db.itemPathToID(path);
			if (id) parentIDs.add(id);
		})

		return parentIDs;
	}

	get manufacturerName() {
		return db.getManufacturerByIndex(this?.data?.CommonData?.ManufacturerId ?? 0)?.ManufacturerName ?? '';
	}

	get manufacturerImage() {
		return db.getManufacturerByIndex(this?.data?.CommonData?.ManufacturerId ?? 0)?.ManufacturerLogoImage ?? '';
	}

	get description() {
		const itemDescription = i18n.resolveItemDescription(this.id) ?? this?.data?.CommonData?.Description;
		if (itemDescription) return itemDescription;
		if (this.type === 'Offering' && Array.isArray(this?.data?.Prices))
		{
			return this.data.Prices.map(price => `${price?.Cost ?? '???'} ${filenameFromPath(price?.CurrencyPath)}`).join(', ');
		}
		if (this.type === 'meta' && this?.data?.Description)
		{
			return this.data.Description;
		}
	}

	async init() {
		if (this.data)
		{
			await this.data;
			return this;
		}
		try {
			this.data = db.getJSON(this.cylixPath)
				.then(res => this.data = res);
			await this.data;
		} catch (error) {
			console.error(`[Item.init]`, error);
			return false;
		}
		this.renderIcon();
		return this;
	}

	async render() {
		console.warn('render', this);
	}

	get tempUnsupportedCores() {
		return this._tempUnsupportedCores ??= new Set([
			'007-001-reach-2564121f',
			'007-000-eagle-strike-0903655e',
			'007-000-lone-wolf-0903655e',
			'007-001-samurai-55badb14'
		])
	}

	get showCoatingRenderIcon() {
		const parentIDs = this.parentIDs;
		const unsupportedIDs = this.tempUnsupportedCores;

		let supported = true;

		parentIDs.forEach(id => {
			if (unsupportedIDs.has(id))  supported = false;
		});

		return supported;
	}

	async renderIcon(id, {
		itemTypeIcon = false
	} = {}) {
		await this.init();
		if (this.type === 'ArmorCoating' && this.seasonNumber < 3 && !this.isRedacted && this.showCoatingRenderIcon)
		{
			return HTML.wire(this, `:${id ?? 'icon'}`)`
				<button
					class=${
						`dbItem dbItemIcon ${this?.type ?? 'defaultType'} ${this.quality}${
							this.type === 'SpartanBackdropImage' ? ' invert-hover' : ''
							}`
					}
					onclick=${() => this.showItemPanel()}
					style=${{backgroundImage: `url(${STATIC_ROOT}7/render/icon/${this.altName.toLowerCase()}_icon.png)`}}
					title=${this.name ?? 'item'}
				>
					<div
						class="dbItem-coating-icon"
						style=${{backgroundImage: `url(${STATIC_ROOT}images/${db.pathCase(this.imagePath)})`}}
					></div>
					<span>${this.name ?? '???'}</span>
					${this.renderItemTypeIcon()}
					<div
						class="season-icon"
						data-season="${this.seasonNumber ?? 0}"
						style="-webkit-mask-image:${`url(/seasons.svg#${this.seasonNumber ?? 0})`}"
					></div>
				</button>
			`;
		}
		return HTML.wire(this, `:${id ?? 'icon'}`)`
			<button
				class=${
					`dbItem dbItemIcon ${this?.type ?? 'defaultType'} ${this.quality}${
						this.type === 'SpartanBackdropImage' ? ' invert-hover' : ''
						}`
				}
				onclick=${() => this.showItemPanel()}
				style=${{backgroundImage: `url(${STATIC_ROOT}images/${db.pathCase(this.imagePath)})`}}
				title=${this.name ?? 'item'}
			>
				<span>${this.name ?? '???'}</span>
				${itemTypeIcon ? this.renderItemTypeIcon() : ''}
				${{html: this.seasonNumber > 1 ? `<div
						class="season-icon"
						data-season="${this.seasonNumber ?? 0}"
						style="-webkit-mask-image:${`url(/seasons.svg#${this.seasonNumber ?? 0})`}"
					></div>` : ''
				}}
			</button>
		`;
	}

	get isSelected() {
		if (db.selectedItemIDs.has(this.id)) return true;
		return false;
	}

	async renderSelectable(id, {
		itemTypeIcon = false
	} = {}) {
		await this.init();
		return HTML.wire(this, `:${id ?? 'icon'}`)`
			<button
				class=${
					`dbItem dbItemIcon ${this?.type ?? 'defaultType'} ${this.quality}${
						this.type === 'SpartanBackdropImage' ? ' invert-hover' : ''
						}${
						this.isSelected ? ' selected' : ''
						}`
				}
				onclick=${() => this.onclick()}
				style=${{backgroundImage: `url(${STATIC_ROOT}images/${db.pathCase(this.imagePath)})`}}
				title=${this.name ?? 'item'}
			>
				<span>${this.name ?? '???'}</span>
				${itemTypeIcon ? this.renderItemTypeIcon() : ''}
				${{html: this.seasonNumber > 1 ? `<div
						class="season-icon"
						data-season="${this.seasonNumber ?? 0}"
						style="-webkit-mask-image:${`url(/seasons.svg#${this.seasonNumber ?? 0})`}"
					></div>` : ''
				}}
			</button>
		`;
	}

	selectHandler(callback) {
		this._selectHandler = callback;
		return this;
	}

	onclick() {
		if (this?._selectHandler) return this._selectHandler(this);
		this.showItemPanel();
	}

	get itemTypeIcons() {
		return this?._itemTypeIcons ?? (this._itemTypeIcons = new Set([
			'ArmorCoating',
			'VehicleCoating',
			'WeaponCoating',
			'SpartanEmblem',
			'ArmorEmblem',
			'WeaponEmblem',
			'VehicleEmblem'
		]));
	}

	async renderItemTypeIcon() {
		const type = this?.type ?? 'default';
		if (!this.itemTypeIcons.has(type)) return '';

		const path = this?.data?.CommonData?.ParentPaths?.[0]?.Path ?? this?.data?.CommonData?.ParentTheme ?? '';
		const parentID = db.itemPathToID(path);
		if (type === 'WeaponCoating')
		{
			if (!path) return '';
			const parent = await new Item({ id: parentID }).getImagePath();

			// TODO temp bandit override
			const imagePath = parentID === '207-208-olympus-aa30213b' ? `url(${STATIC_ROOT}images/progression/inventory/weapon/themes/207-208-olympus-aa30213b.png)` : `url(${STATIC_ROOT}images/${db.pathCase(parent)})`;
			return HTML.wire()`
				<div
					class=${`item-type-icon WeaponCoating`}
					style=${{webkitMaskImage: imagePath, maskImage: imagePath}}
				></div>
			`;
		} else if (type === 'VehicleCoating')
		{
			if (!path) return '';
			const parentCore = await new Item({ id: parentID }).getParentCoreItem();
			if (!parentCore) return;
			const parent = await parentCore?.getImagePath?.();
			const imagePath = `url(${STATIC_ROOT}images/${db.pathCase(parent)})`;
			return HTML.wire()`
				<div
					class=${`item-type-icon VehicleCoating`}
					style=${{webkitMaskImage: imagePath, maskImage: imagePath}}
				></div>
			`;
		} else if (type === 'ArmorCoating')
		{
			if (!path) return '';
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
				case 'Inventory/Armor/Themes/007-000-eagle-strike-0903655e.json':
					svgId = 'ENTRENCHED'
					break;
				case 'Inventory/Armor/Themes/007-000-lone-wolf-0903655e.json':
					svgId = 'RAKSHASA'
					break;
				case 'Inventory/Armor/Themes/007-001-spi-c13d0b38.json':
					svgId = 'SPI'
					break;
				case 'Inventory/Armor/Themes/007-001-fwl-7f58d7f6.json':
					svgId = 'CHIMERA'
					break;

				default:
					break;
			}
			return HTML.wire()`
				<div
					class=${`item-type-icon ${this.type ?? 'default-type'}`}
					style=${{backgroundImage: `url(/items.svg#${svgId ?? 'default'})`}}
				></div>
			`;
		} else if (type.includes('Emblem'))
		{
			return HTML.wire()`
				<div
					class=${`item-type-icon emblem ${this.type}`}
					style=${{backgroundImage: `url(/items.svg#${type})`}}
				></div>
			`;
		}
	}

	get imagePath() {
		let imagePath = 'progression/default/default.png';

		if (this.type === 'Offering')
		{
			// offering-20211016-03
			const id = this.id.substring(9);
			return `store/${id}.png`;
		}

		if (this.isRedacted) return imagePath;

		const displayPath = this?.data?.CommonData?.DisplayPath?.Media?.MediaUrl?.Path;
		if (displayPath && typeof displayPath === 'string') {
			imagePath = `${displayPath.toLowerCase().replace('.svg', '.png')}`;
		}
			else if (db.replacedInfoItems.has(this.id))
		{
			const replacedInfo = db.replacedInfoItems.get(this.id);
			if (replacedInfo.mediaPath) return replacedInfo.mediaPath;
		}
		return imagePath;
	}

	async getImagePath() {
		if (this?._imagePath) return this._imagePath;
		await this.init();
		let imagePath = 'progression/default/default.png';

		if (this.isRedacted) return imagePath;
		
		const displayPath = this?.data?.CommonData?.DisplayPath?.Media?.MediaUrl?.Path;
		if (displayPath && typeof displayPath === 'string') {
			imagePath = `${displayPath[0].toLowerCase()}${displayPath.substring(1)}`;
		}

		return (this._imagePath = imagePath);
	}

	async getParentItem() {
		if (this?._parentItem) return this._parentItem;
		await this.init();
		if (this?.data?.CommonData?.ParentTheme)
		{
			const id = filenameFromPath(this.data.CommonData.ParentTheme);
			this._parentItem = new Item({ id });
			await this._parentItem.init();
			return this._parentItem;
		}
	}

	async getParentCoreItem() {
		if (this?._parentItem) return this._parentItem;
		await this.init();
		if (this?.data?.CommonData?.ParentPaths)
		{
			const id = filenameFromPath(this?.data?.CommonData?.ParentPaths?.[0]?.Path);
			this._parentItem = new Item({ id });
			await this._parentItem.init();
			return this._parentItem;
		}
	}

	get icon() {
		return this?._icon ?? (this._icon = this.renderIcon())
	}

	showItemPanel() {
		itemPanel.displayItem(this);
	}

	get lastModifiedDate() {
		return this._lastModifiedDate ??= new Date(this?.meta?.touched ?? '2021-11-15T20:00:00.000Z');
		// if (this?._lastModifiedDate) return this._lastModifiedDate;
		// if (!Array.isArray(this.meta?.touched)) return new Date('2021-11-15T20:00:00.000Z');
		
		// const dateString = this.meta?.touched[this.meta.touched.length-1];
		// if (!Date.parse(dateString)) new Date('2021-11-15T20:00:00.000Z');

		// const date = new Date(dateString);
		// date.setUTCHours(20);
		// return (this._lastModifiedDate = date);
	}

	get isRedacted() {
		if (this.state.userUnredacted) return false;
		if (this?._isRedacted) return this._isRedacted;
		if (db.revealHidden) return (this._isRedacted = false);

		const visibility = this.visibility;
		if (visibility.status === 'Hidden') return (this._isRedacted = true);
		if (visibility.status === 'Seen') return (this._isRedacted = false);
		return (this._isRedacted = false);
	}

	get visibility() {
		if (this?._visibility) return this._visibility;
		try {
			const manifest = this.meta;
			const lastVisible = manifest?.visible;

			const unredactedTypes = new Set([
				'meta',
				'None',
				'Offering'
			])
			if (unredactedTypes.has(this.meta.type))
			{
				return (this._visibility = {
					status: 'Visible',
					date: new Date(lastVisible ?? new Date())
				});
			}

			const isHidden = this?.data?.CommonData.HideUntilOwned;
	
			// Now hidden, but was seen before
			if (isHidden && lastVisible) return (this._visibility = {
				status: 'Seen',
				date: new Date(lastVisible)
			})
	
			// Not hidden and has a date for first appearance
			if (!isHidden && lastVisible) return (this._visibility = {
				status: 'Visible',
				date: new Date(lastVisible)
			})
	
			return (this._visibility = {
				status: isHidden ? 'Hidden' : 'Visible',
				date: new Date('2021-11-15T20:00:00.000Z')
			})
		} catch (error) {
			console.error(`[Item.visibility]`, error);
			return (this._visibility = {
				status: 'Hidden',
				date: new Date('2021-11-15T20:00:00.000Z')
			})
		}
	}

	unredact() {
		this.state.userUnredacted = true;
	}

	get community() {
		if (this.meta.community) return this.meta.community;
	}

	get quality() {
		const quality = this?.data?.CommonData?.Quality;
		if (quality) return quality.toLowerCase();
		if (this.type === 'Offering') return 'Offering';
		if (this?.data?.Quality) return `${this.data.Quality || 'common'}`.toLowerCase();
		return 'common';
	}

	get tags() {
		if (this?._tags) return this._tags;
		if (Array.isArray(this.community?.tags)) return (this._tags = new Set(this.community.tags));
		return (this._tags = new Set());
	}
}

class emptyItem extends Item {
	constructor(id) {
		super();
		this._id = id;
	}

	get meta() {
		return {
			"name": this._id,
			"title": "???",
			"type": "???",
			"touched": "2021-11-15T21:00:00.000Z",
			"res": "831ef64146b867245232326064642228642b6ab6464bae3bd4085aa6b61cef87",
			"added": [
				"2021-11-15T20:00:00.000Z",
				""
			]
		}
	}

	get data() {
		return {}
	}

	get description() {
		return `ERROR: This item is corrupted, unavailable, or does not exist! "${this._id}"`
	}
}