import { HTML } from 'lib/HTML';
import { emitter } from 'eventEmitter';
import { headerNav } from 'ui/nav';
import { db } from 'db';
import { itemPanel } from 'db/itemPanel';
import { calendar } from 'ui/calendar';
import { coreViewer } from 'ui/cores';
import { inventory } from 'ui/inventory';
import { modalConstructor } from 'ui/modal';
import { privacy } from 'ui/privacy';
import { vanity } from 'ui/vanity';

import './styles.css';

console.log('hello world');

class App {
	async init() {
		await db.init();
		// this.render();

		HTML.bind(document.querySelector('.js--privacy'))`
			<span
				class="privacy-button"
				onclick=${() => modalConstructor.showView(privacy.render())}
			>Privacy</span>
		`;

		await this.handleNavigation();
		this.parseUriHash();
		
		window.addEventListener('popstate', async (event) => {
			// event?.preventDefault();
			console.log('popstate', event.state);
			if (event?.state?.path) db.showItemPanelByPath(event.state.path, true);
			emitter.emit('popstate');

			await this.handleNavigation(event);
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
		this?.page?.render() ?? console.warn('no page...');
	}

	async handleNavigation(event) {
		console.log('handleNavigation', this?.pathname)
		const url = new URL(window.location);
		const { pathname } = url;
		console.log(`url ${url}`, pathname);

		if (this?.pathname === pathname) return;
		this.pathname = pathname;

		console.log('navigating', this?.pathname)

		if (pathname.startsWith('/vanity'))
		{
			this.page = new VanityExplorer();
		} else {
			console.log('else')
			this.page = new ItemExplorer();
		}

		await this.page.init();
		this.render();
	}

	parseUriHash() {
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

let _explorer;
class ItemExplorer {
	constructor() {
		if (_explorer) return _explorer;
		_explorer = this;
	}

	async init() {
		console.log('Explorer.init');
		if (this?._init) return await this._init;
		this._init = Promise.all([
			coreViewer.init(),
			calendar.init(),
			inventory.init()
		]).then(() => {
			this.render();
		})
	}

	async render() {
		console.log('Explorer.render');
		HTML.bind(document.querySelector('.js--main'))`
			${headerNav.render()}
			${coreViewer.render()}
			${calendar.render()}
			${inventory.render()}
		`;
	}
}

let _vanity;
class VanityExplorer {
	constructor() {
		if (_vanity) return _vanity;
		_vanity = this;
	}

	async init() {
		if (this?._init) return;
		
		let gamertag;
		const { pathname } = new URL(window.location);
		const pathParts = pathname.split('/');
		if (pathParts && pathParts.length > 2) gamertag = decodeURIComponent(pathParts[2]);
		console.log('gt', gamertag);
		
		this._init = await vanity.init(gamertag);
		console.log('App.Vanity.init');
		this.render();
	}

	async render() {
		console.log('App.Vanity.render');
		HTML.bind(document.querySelector('.js--main'))`
			${headerNav.render()}
			${vanity.render()}
		`;
	}
}