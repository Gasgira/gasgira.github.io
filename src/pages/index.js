import { HTML, throbber } from 'lib/HTML';
import { emitter } from 'eventEmitter';
import { headerNav } from 'ui/nav';
import { itemPanel } from 'db/itemPanel';
import { calendar } from 'ui/calendar';
import { coreViewer } from 'ui/cores';
import { inventory } from 'ui/inventory';
import { vanity } from 'pages/vanity';

class PageItems {
	async init() {
		console.log('Explorer.init');
		if (this?._init) return await this._init;
		this._init = Promise.all([
			coreViewer.init(),
			calendar.init(),
			inventory.init()
		]);

		await this._init;
	}

	render() {
		// await this.init();
		return [
			coreViewer.render(),
			calendar.render(),
			inventory.render()
		];
	}
}

class PageVanity {
	async init() {
		// if (this?._init) return;
		
		let gamertag;
		const { pathname } = new URL(window.location);
		const pathParts = pathname.split('/');
		if (pathParts && pathParts.length > 2) gamertag = decodeURIComponent(pathParts[2]);
		
		this._init = vanity.init(gamertag);
		await this._init;
	}

	async render() {
		await this.init();
		return [
			await vanity.render()
		];
	}
}

class Router {
	constructor() {
		this.items = new PageItems();
		this.vanity = new PageVanity();
	}

	async route() {
		const url = new URL(window.location);
		const { pathname } = url;
		console.info(`[Router.route] "${this?.pathname ?? 'initial'}" -> "${pathname}"`);

		if (this?.pathname === pathname) return;
		this.pathname = pathname;

		if (pathname.startsWith('/vanity'))
		{
			if (this.page === this.vanity) return;
			this.page = this.vanity;
		}
			else if (pathname.startsWith('/play'))
		{
			if (this.page === this.items) return;
			this.page = this.items;
		}
			else
		{
			if (this.page === this.items) return;
			this.page = this.items;
		}

		await this.render();
	}

	async render() {
		console.info(`[Router.render] "${this?.pathname ?? '.'}"`)
		HTML.bind(document.querySelector('.js--main'))`
			${headerNav.render()}
			${{
				any: this.page.render(),
				placeholder: throbber.cloneNode(true)
			}}
		`;
	}
}

export const router = new Router();