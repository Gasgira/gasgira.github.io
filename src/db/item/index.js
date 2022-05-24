import { db } from 'db';
import { itemPanel } from 'db/itemPanel';
import { Component } from 'component';
import { HTML } from 'lib/HTML';

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
		if (!properties) throw new Error(`[Item.constructor] No props!`);

		let path = '';

		if (typeof properties === 'string')
		{
			path = properties.toLowerCase();
		} else if (properties.id) {
			const meta = db.getItemManifestByID(properties.id);
			if (!meta)
			{
				console.error(`[Item.constructor] No meta for "${id}"!`);
				return 'Bad item id!';
			}
			this._meta = meta;
			this._id = meta.name;
			path = meta.path;
		}

		if (db.items.has(path))
		{
			// console.warn('[skimmer][db.item] Duplicate', path);
			return db.items.get(path);
		}
		this.path = path;
		db.items.set(`${path}`, this);

		this.renderCount = 0;
	}

	get meta() {
		if (this?._meta) return this._meta;
		return (this._meta = db.getItemManifestByID(this.id));
	}

	get id() {
		return this?._id ?? (this._id = db.itemPathToID(this.path));
	}

	get name() {
		if (this.isRedacted) return '[REDACTED]';

		if (db.replacedInfoItems.has(this.path))
		{
			const replacedInfo = db.replacedInfoItems.get(this.path);
			if (replacedInfo.name) return replacedInfo.name;
		}

		const title = this.meta.title;
		if (title && typeof title === 'string') return title;

		return this.id ?? '???';
	}

	get type() {
		return this.meta.type;
	}

	get niceType() {
		return db.getItemType(this.type);
	}

	async getName() {
		await this.init();
		if (this.isRedacted) return '[REDACTED]';
		return this?.data?.CommonData?.Title ?? this.id;
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

	get manufacturerName() {
		return db.getManufacturerByIndex(this?.data?.CommonData?.ManufacturerId ?? 0)?.ManufacturerName ?? '';
	}

	get manufacturerImage() {
		return db.getManufacturerByIndex(this?.data?.CommonData?.ManufacturerId ?? 0)?.ManufacturerLogoImage ?? '';
	}

	async init() {
		if (this.data)
		{
			await this.data;
			return this;
		}
		try {
			this.data = db.getJSON(this.path)
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

	async renderIcon(id, {
		itemTypeIcon = false
	} = {}) {
		await this.init();
		return HTML.wire(this, `:${id ?? 'icon'}`)`
			<button
				class=${
					`dbItem dbItemIcon ${this?.type ?? 'defaultType'} ${this.quality}${
						this.type === 'SpartanBackdropImage' ? ' invert-hover' : ''
						}`
				}
				onclick=${() => this.showItemPanel()}
				style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(this.imagePath)})`}}
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

	get itemTypeIcons() {
		return this?._itemTypeIcons ?? (this._itemTypeIcons = new Set([
			'ArmorCoating',
			'VehicleCoating',
			'WeaponCoating'
		]));
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
				style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(this.imagePath)})`}}
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

	async renderItemTypeIcon() {
		const path = this?.data?.CommonData?.ParentPaths?.[0]?.Path ?? this?.data?.CommonData?.ParentTheme ?? '';
		const type = this?.type;
		if (!path || !this.itemTypeIcons.has(type)) return '';
		if (type && type === 'WeaponCoating')
		{
			const parent = await new Item(path).getImagePath();
			const imagePath = `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(parent)})`;
			return HTML.wire(this, `:itemType-${path}`)`
				<div
					class=${`item-type-icon WeaponCoating`}
					style=${{webkitMaskImage: imagePath, maskImage: imagePath}}
				></div>
			`;
		} else if (type && type === 'VehicleCoating')
		{
			const parentCore = await new Item(path).getParentCoreItem();
			if (!parentCore) return;
			const parent = await parentCore?.getImagePath?.();
			const imagePath = `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(parent)})`;
			return HTML.wire(this, `:itemType-${path}`)`
				<div
					class=${`item-type-icon VehicleCoating`}
					style=${{webkitMaskImage: imagePath, maskImage: imagePath}}
				></div>
			`;
		} else if (type && type === 'ArmorCoating')
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
				case 'Inventory/Armor/Themes/007-000-eagle-strike-0903655e.json':
					svgId = 'ENTRENCHED'
					break;
				case 'Inventory/Armor/Themes/007-000-lone-wolf-0903655e.json':
					svgId = 'RAKSHASA'
					break;
			
				default:
					break;
			}
			return HTML.wire(this, `:itemType-${performance.now()}`)`
				<div
					class=${`item-type-icon ${this?.data?.CommonData?.Type ?? 'default-type'}`}
					style=${{backgroundImage: `url(/items.svg#${svgId ?? 'default'})`}}
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
			else if (db.replacedInfoItems.has(this.path))
		{
			const replacedInfo = db.replacedInfoItems.get(this.path);
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
			this._parentItem = new Item(this?.data?.CommonData?.ParentTheme);
			await this._parentItem.init();
			return this._parentItem;
		}
		// const test = async path => `<a class="parentSocket" href=${`#${path}`}>${await new Item(path).getName()}</a>`
	}

	async getParentCoreItem() {
		if (this?._parentItem) return this._parentItem;
		await this.init();
		if (this?.data?.CommonData?.ParentPaths)
		{
			this._parentItem = new Item(this?.data?.CommonData?.ParentPaths?.[0]?.Path);
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
			const manifest = this.manifestItem;
			const lastVisible = manifest?.visible;

			if (!manifest.path.startsWith('inventory'))
			{
				return (this._visibility = {
					status: 'Visible',
					date: new Date(lastVisible)
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
		if (this.manifestItem.community) return this.manifestItem.community;
	}

	get quality() {
		const quality = this?.data?.CommonData?.Quality;
		if (quality) return quality.toLowerCase();
		if (this.type === 'Offering') return 'Offering';
		return 'common';
	}

	get tags() {
		if (this?._tags) return this._tags;
		if (Array.isArray(this.community?.tags)) return (this._tags = new Set(this.community.tags));
		return (this._tags = new Set());
	}
}