import { HTML, throbber } from 'lib/HTML';
import { emitter } from 'eventEmitter';
import { headerNav } from 'ui/nav';
import { calendar } from 'ui/calendar';
import { coreViewer } from 'ui/cores';
import { inventory } from 'ui/inventory';
import { vanity } from 'pages/vanity';
import { armorHall } from 'pages/vanity/customization';
import { profile } from 'pages/vanity/Profile';
import { urlParams } from 'urlParams';
import { VANITY_BETA } from 'environment';
// import { Forge } from 'pages/forge';

class PageItems {
	// async init() {
	// 	try {
	// 		console.log('Explorer.init');
	// 		if (this?._init) return await this._init;
	// 		this._init = Promise.all([
	// 			coreViewer.init(),
	// 			calendar.init(),
	// 			inventory.init()
	// 		]);
	
	// 		await this._init;
	// 	} catch (error) {
	// 		console.error(`[PageItems.init]`, error);
	// 	}
	// }

	render() {
		try {
			return [
				coreViewer.render(),
				calendar.render(),
				inventory.render()
			];
		} catch (error) {
			console.error(`[PageItems.render]`, error);
		}
	}
}

class PageVanity {
	async init() {
		try {
			// if (this?._init) return;

			let gamertag;
			const { pathname } = new URL(window.location);
			const pathParts = pathname.split('/');
			if (pathParts && pathParts.length > 2) gamertag = decodeURIComponent(pathParts[2]);

			this._init = profile.init(gamertag);
			await this._init;
		} catch (error) {
			console.error(`[PageVanity.init]`, error);
		}
	}

	async render() {
		try {
			await this.init();

			if (VANITY_BETA)
			{
				return [
					await profile.render(),
					await armorHall.render(),
					await vanity.render()
				];
			}

			return [
				await profile.render(),
				await vanity.render()
			];
		} catch (error) {
			console.error(`[PageVanity.render]`, error);
		}
	}
}

class PageForge {
	async init() {
		if (this.forge) return;
		const { Forge } = await import('pages/forge');
		this._Forge = Forge;
		this.forge = new Forge();
		this.forge.init();
	}

	async render() {
		try {
			await this.init();
			return [
				this.forge.render()
			];
		} catch (error) {
			console.error(`[PageForge.render]`, error);
		}
	}
}

class Router {
	constructor() {
		this.items = new PageItems();
		this.vanity = new PageVanity();
		this.forge = new PageForge();
	}

	async route() {
		try {
			const url = new URL(window.location);
			const { pathname } = url;

			if (this?.pathname === pathname) return;
			console.info(`[Router.route] "${this?.pathname ?? 'initial'}" -> "${pathname}"`);
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
				else if (pathname.startsWith('/forge'))
			{
				if (this.page === this.forge) return;
				this.page = this.forge;
			}
				else
			{
				if (this.page === this.items) return;
				this.page = this.items;
			}

			await this.render();
		} catch (error) {
			console.error(`[Router.route]`, error);
		}
	}

	async render() {
		try {
			console.info(`[Router.render] "${this?.pathname ?? '.'}"`)
			HTML.bind(document.querySelector('.js--main'))`
				${headerNav.render()}
				${{
					any: this.page.render(),
					placeholder: throbber.cloneNode(true)
				}}
			`;
		} catch (error) {
			console.error(`[Router.render]`, error);
		}
	}
}

export const router = new Router();