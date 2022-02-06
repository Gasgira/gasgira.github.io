import { HTML } from 'lib/HTML';
import { emitter } from 'eventEmitter';
import { headerNav } from 'ui/nav';
import { db, itemPanel } from 'db';
import { calendar } from 'ui/calendar';
import { coreViewer } from 'ui/cores';
import { inventory } from 'ui/inventory';

import './styles.css';

console.log('hello world');

HTML.bind(document.querySelector('.js--main'))`
	<div>Loading...</div>
`;

// await fetch('/db/entries/armor-core-list.json')
// 	.then(response => response.json())
// 	.then(data => console.log(data))

// db.init();

class App {
	async init() {
		// this.entries = [
		// 	inventory.init(),
		// 	armorCores.init(),
		// 	coreViewer.init()
		// ]

		// Promise.all(this.entries)
		// 	.then(() => this.render())
		// 	.then(() => this.parseUri());
		await db.init();
		await inventory.init();
		coreViewer.init()
			// .then(() => this.parseUri());
		calendar.init();
		this.render();
		this.parseUri();
		
		window.addEventListener('popstate', (event) => {
			console.log('popstate', event.state);
			if (event?.state?.path) db.showItemPanelByPath(event.state.path, true);
		});
		window.addEventListener('hashchange', (event) => {
			const hash = window.location.hash?.substring?.(1);
			if (hash && typeof hash === 'string' && hash.length > 6 && hash.substring(hash.length -5) === '.json')
			{
				db.showItemPanelByPath(hash, true);
			}
		});
	}

	async render() {
		HTML.bind(document.querySelector('.js--main'))`
			${headerNav.render()}
			${coreViewer.render()}
			${calendar.render()}
			${inventory.render()}
		`;
	}

	parseUri() {
		const hash = window.location.hash?.substring?.(1);
		if (hash && typeof hash === 'string' && hash.substring(hash.length-5, hash.length) === '.json') {
			try {
				db.showItemPanelByPath(hash, true);
			} catch (error) {
				console.error(`[skimmer][parseUri]`, error)
			}
		}
	}
}

const app = new App();
app.init();

// TODO accept #path urls to open in item panel

