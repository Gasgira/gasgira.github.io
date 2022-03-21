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
	</button>
`;

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

		this.renderCount = 0;
	}

	get id() {
		return this?._id ?? (this._id = db.itemPathToID(this.path));
	}

	get name() {
		let title = this?.data?.CommonData?.Title;
		if (title && typeof title === 'string')
		{
			return title;
		}
			else if (db.replacedInfoItems.has(this.path))
		{
			const replacedInfo = db.replacedInfoItems.get(this.path);
			if (replacedInfo.name) return replacedInfo.name;
		}
		return this.id ?? '???';
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
					`dbItem dbItemIcon ${this?.data?.CommonData?.Type ?? 'defaultType'}${
						this?.data?.CommonData?.Quality ? ` ${this?.data?.CommonData?.Quality?.toLowerCase?.() ?? ''}` : ''
						}${
						this?.data?.CommonData?.Type === 'SpartanBackdropImage' ? ' invert-hover' : ''
						}`
				}
				onclick=${() => this.showItemPanel()}
				style=${{backgroundImage: `url(/${db?.dbPath ?? 'db'}/images/${db.pathCase(this.imagePath)})`}}
				title=${this.name ?? 'item'}
			>
				<span>${this.name ?? '???'}</span>
				${itemTypeIcon ? this.renderItemTypeIcon() : ''}
				${this.seasonNumber > 1 ? HTML.wire(this, ':seasonIcon')`<div
						class="season-icon"
						style=${{webkitMaskImage: `url(/seasons.svg#${this.seasonNumber ?? 'default'})`}}
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
					style=${{backgroundImage: `url(/items.svg#${svgId ?? 'default'})`}}
				></div>
			`;
		}
	}

	get imagePath() {
		let imagePath = 'progression/default/default.png';
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