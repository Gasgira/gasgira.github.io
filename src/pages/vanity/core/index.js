import { Component } from 'component';
import { db } from 'db';
import { Item, placeholderItem } from 'db/item';
import { HTML } from 'lib/HTML';
import { filenameFromPath } from 'utils/paths.js';

export class AppearanceCore extends Component {
	constructor({ type = 'Sockets', core, sockets, gamertag = 'Spartan' } = {}) {
		super();
		// console.log('AppearanceCore', type)
		this.meta = {
			type,
			core,
			sockets,
			gamertag
		}
		this.items = [];
		this.itemIDs = new Set([...this.meta.sockets.values()].map(path => filenameFromPath(path)));
	}

	init() {
		if (this.items.length) return;
		console.log('AppearanceCore init', this.meta.sockets);
		this.items = [...this.meta.sockets.values()].map(path => new Item(path));
	}

	render() {
		// console.log('AppearanceCore render', this.items.length);
		return this.html`
			<div
				class ="inventory-category_wrapper mica_content"
			>
				<header class="h-favorites">
					<div>${this.meta.gamertag} // ${this.meta?.type ?? 'Core'} // ${this?.items.length}</div>
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
		return this?.meta?.type ?? 'TYPE'
	}
}