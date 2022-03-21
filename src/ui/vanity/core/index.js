import { Component } from 'component';
import { db } from 'db';
import { Item, placeholderItem } from 'db/item';
import { emitter } from 'eventEmitter';
import { HTML } from 'lib/HTML';
import { settings } from 'ui/settings';
import { urlParams } from 'urlParams';

export class AppearanceCore extends Component {
	constructor({ type, core, sockets }) {
		super();
		console.log('AppearanceCore', type)
		this.meta = {
			type,
			core,
			sockets 
		}
		this.items = [];
		this.itemIDs = new Set();
	}

	async init() {
		console.log('AppearanceCore init', this.meta.sockets);
		this.items = [...this.meta.sockets.values()].map(path => new Item(path));
	}

	render() {
		console.log('AppearanceCore render', this.items.length);
		return this.html`
			<div
				class ="inventory-category_wrapper mica_content"
			>
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