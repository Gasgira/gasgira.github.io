import { HTML } from 'lib/HTML';
import { headerNav } from 'ui/nav';
import { db } from 'db';
import { armorCores, inventory } from 'entries';

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
		this.entries = [
			armorCores.init(),
			inventory.init()
		]

		Promise.all(this.entries)
			.then(() => this.render())
			.then(() => this.parseUri());
		
		window.addEventListener('popstate', (event) => {
			console.log('popstate', event.state);
			if (event?.state?.path) db.showItemPanelByPath(event.state.path, true)
		});
		window.addEventListener('hashchange', (event) => {
			const hash = window.location.hash?.substring?.(1);
			if (hash && typeof hash === 'string' && hash.length > 6 && hash.substring(hash.length -5) === '.json') db.showItemPanelByPath(hash, true)
		});
	}

	async render() {
		HTML.bind(document.querySelector('.js--main'))`
			${headerNav.render()}
			<div class="inventory-cores_wrapper">${armorCores.render()}</div>
			<div>${inventory.render()}</div>
		`;
	}

	parseUri() {
		const hash = window.location.hash?.substring?.(1);
		if (hash && typeof hash === 'string') {
			try {
				db.showItemPanelByPath(hash, true);
			} catch (error) {
				console.error(`[halosets][parseUri]`, error)
			}
		}
	}
}

const app = new App();
app.init();

// TODO accept #path urls to open in item panel

