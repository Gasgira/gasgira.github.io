import { HTML } from 'lib/HTML';
import { emitter } from 'eventEmitter';
import { db } from 'db';
import { itemPanel } from 'db/itemPanel';
import { modalConstructor } from 'ui/modal';
import { privacy } from 'ui/privacy';
import { router } from 'pages';

import './styles.css';

console.log('hello world');

class App {
	async init() {
		try {
			await db.init();
			// throw new Error('tEst')
	
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
				if (hash && typeof hash === 'string' && hash.startsWith('item/') && hash.length > 5)
				{
					return db.showItemPanelByID(hash.substring(5, hash.length).trim(), true);
				}
	
				return itemPanel.hide();
			});
		} catch (error) {
			console.error(`[init] Fatal Error!`, error);
		
			HTML.bind(document.querySelector('.js--main'))`
				<h2>Error :(</h2>
				<p>Sorry, the page could not be initialized by your browser. Please consider sending a message with the below information so that the issue can be fixed.</p>
				<p>${error?.name || 'Unknown Error'}</p>
				<p>${error?.message || 'No message'}</p>
				<p>${error?.stack || 'No stack'}</p>
			`;
		}
	}

	async render() {
		this?.page?.render() ?? console.warn('no page...');
	}

	async handleNavigation(event) {
		return await router.route();
		// console.log('handleNavigation', this?.pathname)
		// const url = new URL(window.location);
		// const { pathname } = url;
		// console.log(`url ${url}`, pathname);

		// if (this?.pathname === pathname) return;
		// this.pathname = pathname;

		// console.log('navigating', this?.pathname)

		// if (pathname.startsWith('/vanity'))
		// {
		// 	this.page = new VanityExplorer();
		// } else {
		// 	this.page = new ItemExplorer();
		// }

		// await this.page.init();
		// this.render();
	}

	parseUriHash() {
		const hash = window.location.hash?.substring?.(1);
		if (hash && typeof hash === 'string' && hash.substring(hash.length-5, hash.length) === '.json') {
			try {
				db.showItemPanelByPath(hash, true);
			} catch (error) {
				console.error(`[skimmer][parseUri]`, error)
			}
		} else if (hash && typeof hash === 'string' && hash.startsWith('item/') && hash.length > 5) {
			try {
				db.showItemPanelByID(hash.substring(5, hash.length).trim(), true);
			} catch (error) {
				console.error(`[skimmer][parseUri]`, error)
			}
		} else if (hash && typeof hash === 'string') {
			const el = document.querySelector(`#${hash}`);
			if (el)
			{
				console.info(`[parseUriHash.scrollIntoView] "${hash}"`);
				el.scrollIntoView();
			}
		}
	}
}

const app = new App();
app.init();