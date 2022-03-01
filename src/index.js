import { HTML } from 'lib/HTML';
import { emitter } from 'eventEmitter';
import { headerNav } from 'ui/nav';
import { db } from 'db';
import { itemPanel } from 'db/itemPanel';
import { calendar } from 'ui/calendar';
import { coreViewer } from 'ui/cores';
import { inventory } from 'ui/inventory';

import './styles.css';

console.log('hello world');

class App {
	async init() {
		await db.init();
		Promise.all([
			coreViewer.init(),
			calendar.init(),
			inventory.init()
		]).then(() => {
			this.parseUri();
			this.render();
		})
		this.render();
		
		window.addEventListener('popstate', (event) => {
			console.log('popstate', event.state);
			if (event?.state?.path) db.showItemPanelByPath(event.state.path, true);
			emitter.emit('popstate');
		});
		window.addEventListener('hashchange', (event) => {
			const hash = window.location.hash?.substring?.(1);
			if (hash && typeof hash === 'string' && hash.length > 6 && hash.substring(hash.length -5) === '.json')
			{
				return db.showItemPanelByPath(hash, true);
			}

			return itemPanel.hide();
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
		} else if (hash && typeof hash === 'string') {
			const el = document.querySelector(`#${hash}`);
			if (el)
			{
				el.scrollIntoView();
			}
		}
	}
}

const app = new App();
app.init();