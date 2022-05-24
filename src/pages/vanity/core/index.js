import { Component } from 'component';
import { db } from 'db';
import { Item, placeholderItem } from 'db/item';
import { HTML } from 'lib/HTML';
import { filenameFromPath } from 'utils/paths.js';

const SKIP_TYPES = new Set([
	'core',
	'serviceTag'
]);

export class AppearanceCore extends Component {
	constructor({ core: profileCore, gamertag = 'Spartan', type } = {}) {
		super();
		// console.log('AppearanceCore', type)
		if (!profileCore) throw new Error('Invalid profileCore');

		this.gamertag = gamertag;

		if (profileCore.core)
		{
			const coreMeta = db.getItemManifestByID(profileCore.core);
			this.coreName = coreMeta.title;
			this.coreType = type ?? coreMeta.type;
		} else {
			this.coreName = type ?? '...';
		}

		this.sockets = new Map();

		for (const socketType in profileCore)
		{
			if (SKIP_TYPES.has(socketType)) continue;

			const itemID = profileCore[socketType];
			if (!itemID || !db.manifestHasID(itemID)) continue;

			this.sockets.set(pathNames.get(socketType) ?? socketType, itemID);
		}
		this.items = [];
		this.itemIDs = new Set([...this.sockets.values()]);
	}

	init() {
		if (this.items.length) return;
		// console.log('AppearanceCore init', this.sockets);
		this.items = [...this.itemIDs].map(id => new Item({id}));
	}

	render() {
		// console.log('AppearanceCore render', this.items.length);
		
		return this.html`
			<div
				class ="inventory-category_wrapper mica_content"
			>
				<header class="h-favorites">
					<div>${this.gamertag} // ${this?.coreName ?? 'Core'} // ${this?.items.length}</div>
				</header>
				<ul
					class="inventory-category_items"
				>
					${this.items.map(item => HTML.wire()`<li>
						${{
							any: item.renderIcon('vanity', {itemTypeIcon: true}),
							placeholder: placeholderItem.cloneNode(true)
						}}
					</li>`)}
				</ul>
			</div>
		`;
	}

	getName() {
		return db.getItemType(this?.coreName ?? '...');
	}
}

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