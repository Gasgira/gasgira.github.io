import { HTML } from 'lib/HTML';
import { Component } from 'component';
import { emitter } from 'eventEmitter';
import { settings } from 'ui/settings';
import { about } from 'ui/about';
import { discord } from 'ui/discord';
import { modalConstructor } from 'ui/modal';

import './index.css';

class HeaderNav extends Component {
	constructor() {
		super();
		this.links = [];
		document.addEventListener('click', (e)=> {
			if (!this.state.showMenu) return;
			if (e.target.closest('.menu_wrapper')) return;
			this.setState({showMenu: false})
		});
	}

	get defaultState() {
		return {
			copyStatus: 'Share',
			showMenu: false
		};
	}

	get pathname() {
		const { pathname } = new URL(window.location);
		if (pathname) return pathname;
		return '/';
	}

	render() {
		const url = new URL(window.location);
		const { pathname } = url;

		return this.html`
			<nav class="toolbar">
			<a class="header-logo" href="/"><header>
					<div class="logo">
						<svg id="greenman" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.45 505">
							<defs>
								<style>
								</style>
							</defs>
							<g id="body">
								<polygon class="cls-1 greenman" points="0 0 0 294.58 32.18 294.58 32.18 420.83 0 420.83 0 505 225.27 505 225.27 294.58 257.45 294.58 257.45 0 0 0"/>
							</g>
							<g id="visor">
								<rect class="cls-2 greenman" x="84.17" y="42.08" width="86.64" height="42.08"/>
							</g>
							<g id="face">
								<path class="cls-3 greenman" d="M115,53.26h2.65q-3.93-6.21-13-6.2t-13,6.2h2.65q3-4.18,10.34-4.19T115,53.26Zm.49,4.83a4.24,4.24,0,0,0-1.33-3.15,4.48,4.48,0,0,0-3.23-1.29,4.4,4.4,0,0,0-3.2,1.29,4.27,4.27,0,0,0-1.31,3.15,4.52,4.52,0,0,0,4.54,4.53,4.51,4.51,0,0,0,4.53-4.53Zm-2.73,1.85a2.47,2.47,0,0,1-1.83.78,2.39,2.39,0,0,1-1.81-.77,2.58,2.58,0,0,1-.73-1.86,2.45,2.45,0,0,1,.75-1.8,2.48,2.48,0,0,1,1.82-.75,2.53,2.53,0,0,1,1.82.74,2.45,2.45,0,0,1,.75,1.81A2.55,2.55,0,0,1,112.72,59.94Zm13.71,22.21q-7.29,0-10.34-4.19h-2.65q3.93,6.21,13,6.2t13-6.2h-2.65Q133.75,82.15,126.43,82.15Zm9.77-6.24a5.11,5.11,0,0,0,2-4.08,6.27,6.27,0,0,0-.64-2.84,13.1,13.1,0,0,0-2.65-3.23,9.46,9.46,0,0,1-2-2.54,6.34,6.34,0,0,1-.5-2.62v-8h-2.69v8a8.37,8.37,0,0,0,.6,3.48,13,13,0,0,0,2.43,3.17,13.79,13.79,0,0,1,2.19,2.63,4,4,0,0,1,.5,2,3,3,0,0,1-1.19,2.45,5,5,0,0,1-3.19,1A9.09,9.09,0,0,1,126.44,74v2.52a11.22,11.22,0,0,0,4.62,1A7.76,7.76,0,0,0,136.2,75.91Zm22-22.65h2.65q-3.93-6.21-13-6.2t-13,6.2h2.65q3-4.18,10.33-4.19T158.23,53.26Zm-4.08.39A4.38,4.38,0,0,0,151,54.94a4.27,4.27,0,0,0-1.31,3.15,4.52,4.52,0,0,0,4.54,4.53,4.51,4.51,0,0,0,4.53-4.53,4.24,4.24,0,0,0-1.33-3.15A4.49,4.49,0,0,0,154.15,53.65ZM156,59.94a2.51,2.51,0,0,1-1.84.78,2.37,2.37,0,0,1-1.8-.77,2.58,2.58,0,0,1-.73-1.86,2.45,2.45,0,0,1,.75-1.8,2.58,2.58,0,0,1,3.63,0,2.42,2.42,0,0,1,.76,1.81A2.55,2.55,0,0,1,156,59.94Z"/>
							</g>
							<g id="fillet">
								<path class="cls-4 greenman" d="M237.75,39.61h7.33A22.38,22.38,0,0,0,222.79,19.8v5A14.89,14.89,0,0,1,237.75,39.61ZM19.7,257.45H12.37a22.38,22.38,0,0,0,22.29,19.81v-5A14.91,14.91,0,0,1,19.7,257.45ZM190.61,482.72v4.95a22.37,22.37,0,0,0,22.29-19.8h-7.33A14.91,14.91,0,0,1,190.61,482.72Zm4.95-207.94a14.9,14.9,0,0,1-14.95-14.85h-7.33a22.37,22.37,0,0,0,22.28,19.8ZM12.52,39.61H19.8A14.86,14.86,0,0,1,34.66,24.76v-5A22.29,22.29,0,0,0,12.52,39.61Zm0,420.83H19.8a14.86,14.86,0,0,1,14.86-14.85v-4.95A22.28,22.28,0,0,0,12.52,460.44Zm64.37,0h7.28A14.85,14.85,0,0,1,99,445.59v-4.95A22.26,22.26,0,0,0,76.89,460.44Zm145.9-185.66v5a22.38,22.38,0,0,0,22.29-19.8h-7.33A14.9,14.9,0,0,1,222.79,274.78Z"/>
							</g>
							<g id="lines">
								<path class="cls-4 greenman" d="M84.17,470.34H76.74v12.38H19.8V470.34H12.38v17.33H190.61v-4.95H84.17ZM52,428.26H44.56v12.38h-9.9v4.95H52Zm56.93,0v12.38H99v4.95h17.33V428.26Zm86.64-148.53h9.91v12.38h7.42V279.73h9.9v-5H195.56Zm-151-7.43h-9.9v4.95h9.9ZM34.66,19.8v5H222.79v-5Z"/>
							</g>
							<g id="dashes">
								<path class="cls-4 greenman" d="M12.38,123.77H19.8V91.59H12.38Zm0-42.08H19.8V49.51H12.38Zm0,84.17H19.8V133.68H12.38Zm0,42.08H19.8V175.76H12.38Zm0,42.08H19.8V217.84H12.38Zm32.18-84.16H52V133.68H44.56Zm0,42.08H52V175.76H44.56Zm0,42.08H52V217.84H44.56Zm0,42.09H52V259.93H44.56Zm0,42.08H52V302H44.56Zm0,42.08H52V344.09H44.56Zm0,42.09H52V386.18H44.56Zm64.36-42.09h7.43V344.09h-7.43Zm0,42.09h7.43V386.18h-7.43ZM237.65,123.77h7.42V91.59h-7.42Zm-64.37,84.17h7.43V175.76h-7.43Zm0,42.08h7.43V217.84h-7.43ZM237.65,49.51V81.69h7.42V49.51Zm0,158.43h7.42V175.76h-7.42Zm0-42.08h7.42V133.68h-7.42ZM205.47,460.44h7.42V428.26h-7.42ZM237.65,250h7.42V217.84h-7.42Zm-32.18,84.17h7.42V302h-7.42Zm0,42.08h7.42V344.09h-7.42Zm0,42.09h7.42V386.18h-7.42Zm-32.19-252.5h7.43V133.68h-7.43Z"/>
							</g>
						</svg>
					</div>
					<div class="title_wrapper">
						<h1>Cylix Guide</h1>
						<span>Halo Infinite API Explorer</span>
					</div>
				</header></a>
				<ul>
					${this.shareButton()}
					${this.searchButton()}
					${this.itemsButton()}
					${this.vanityButton()}
					${this.discoveryButton()}
					${this.menuButton()}
				</ul>
			</nav>
		`;
	}

	handleMenuMouseEvent(e) {
		const { target, currentTarget, relatedTarget } = e;
		// console.log(relatedTarget, currentTarget)
		if (
			e.type === 'mouseover'
			&& currentTarget instanceof HTMLElement
			&& relatedTarget instanceof Node
			&& target instanceof Node
			&& currentTarget.contains(target)
		)
		{
			console.log('open', e.type);
			this.state.showMenu = true;
			return currentTarget.setAttribute("open", "")
		}
		currentTarget.removeAttribute("open");
		this.state.hideMenu = false;
		console.log('close', e.type);
	}

	menuButton2() {
		console.log(this.state.showMenu)
		return HTML.wire(this, ':menu')`
			<li>
				<details class="menu_wrapper"
					onMouseOver=${(e) => this.handleMenuMouseEvent(e)}
					onMouseLeave=${(e) => this.handleMenuMouseEvent(e)}
					onToggle=${(e) => console.log('tog', e)}
				>
					<summary
						aria-label="Menu"
						title="Additional Options"
						class="icon-masked icon-menu"
					>
					</summary>
					<div class="menu_list_wrapper">
						<ul class="menu_list">
							<li>${this.spoilersButton()}</li>
							<li>${this.discordButton()}</li>
							<li>${this.settingsButton()}</li>
							<li>${this.forgeButton()}</li>
							<li>${this.aboutButton()}</li>
						</ul>
					</div>
				</details>
			</li>
		`;
	}

	menuButton() {
		if (!this.state.showMenu)
		{
			return HTML.wire(this, ':menu')`
				<li>
					<div class="menu_wrapper">
						<button
							aria-label="Menu"
							title="Additional Options"
							onclick=${() => this.setState({showMenu: !this.state.showMenu})}
						>
							<div class="icon-masked icon-menu"></div>
						</button>
					</div>
				</li>
			`;
		}
		return HTML.wire(this, ':menu')`
			<li>
				<div class="menu_wrapper">
					<button
						aria-label="Menu"
						title="Additional Options"
						onclick=${() => this.setState({showMenu: !this.state.showMenu})}
					>
						<div class="icon-masked icon-close"></div>
					</button>
					<div
						class="menu_list_wrapper"
					>
						<ul
							class="menu_list"
						>
							<li>${this.spoilersButton()}</li>
							<li>${this.discordButton()}</li>
							<li>${this.settingsButton()}</li>
							<li>${this.aboutButton()}</li>
						</ul>
					</div>
				</div>
			</li>
		`;
	}

	shareButton() {
		if (!this.pathname.startsWith('/vanity')) return '';
		return HTML.wire(this, ':share')`
			<li>
				<button
					aria-label="Copy shareable link"
					title="Share"
					onclick=${() => {
						if (!navigator.clipboard) return this.setState({copyStatus: 'Browser Error!'});
						navigator.clipboard.writeText(`${window?.location ?? 'https://cylix.guide/'}`)
							.then(success => {
								this.setState({copyStatus: 'Copied!'});
								setTimeout(() => {
									this.setState({copyStatus: 'Share'});
								}, 2000);
							}, error => {
								console.error('Copy share link', error);
								this.setState({copyStatus: 'Error!'});
								setTimeout(() => {
									this.setState({copyStatus: 'Share'});
								}, 2000);
							})
					}}
				>
					<span class="icon-masked icon-share"></span> ${this.state?.copyStatus ?? 'Share'}
				</button>
			</li>
		`;
	}

	vanityButton() {
		if (this.pathname.startsWith('/vanity')) return '';
		return HTML.wire(this, ':vanity')`
			<li><button
				aria-label="Vanity"
				title="Spartan Customization"
				onclick=${() => {
					history.pushState(null, null, '/vanity/');
					const popStateEvent = new PopStateEvent('popstate', null);
					dispatchEvent(popStateEvent);
				}}
			>
				Vanity
			</button></li>
		`;
	}

	itemsButton() {
		if (this.pathname === '/' || this.pathname.startsWith('/item/')) return '';
		return HTML.wire(this, ':items')`
			<li><button
				aria-label="Items"
				title="Items Database"
				onclick=${() => {
					history.pushState(null, null, '/');
					const popStateEvent = new PopStateEvent('popstate', null);
					dispatchEvent(popStateEvent);
				}}
			>
				Items
			</button></li>
		`;
	}

	searchButton() {
		if (this.pathname === '/')
		{
			return HTML.wire(this, ':search')`
				<li><button aria-label="Search" title="Search" onclick=${() => emitter.emit('nav-search')}><div class="icon-masked icon-search"></div></button></li>
			`;
		}
	}

	discoveryButton() {
		if (this.pathname.startsWith('/discovery')) return '';
		return HTML.wire(this, ':vanity')`
			<li><button
				aria-label="Discovery"
				title="User Generated Content"
				onclick=${() => {
					history.pushState(null, null, '/discovery/');
					const popStateEvent = new PopStateEvent('popstate', null);
					dispatchEvent(popStateEvent);
				}}
			>
				Community
			</button></li>
		`;
	}

	forgeButton() {
		// return '';
		if (this.pathname.startsWith('/forge')) return '';
		return HTML.wire(this, ':forge')`
			<button
				aria-label="Forge"
				title="Forge Tools"
				onclick=${() => {
					this.setState({showMenu: false});
					history.pushState(null, null, '/forge/');
					const popStateEvent = new PopStateEvent('popstate', null);
					dispatchEvent(popStateEvent);
				}}
			>
				<span>Forge</span><div class="icon-masked icon-forge"></div>
			</button>
		`;
	}

	// class="featured"
	spoilersButton() {
		if (settings.data.has('revealHidden')) return;
		return HTML.wire(this, ':spoilers')`
			<button
				aria-label="Show spoilers?"
				title="Reveal Spoilers"
				onclick=${() => {
					settings.showSpoilers();
				}}
			>
				<span>Reveal All Spoilers</span><div class="icon-masked icon-eye"></div>
			</button>
		`;
	}

	aboutButton() {
		return HTML.wire(this, ':about')`
			<button
				aria-label="About"
				title="About"
				onclick=${() => {
					this.setState({showMenu: false});
					modalConstructor.showView(about.render())
				}}
				onconnected=${(e) => e?.target.focus()}
			>
				<span>About</span><div class="icon-masked icon-quote"></div>
			</button>
		`;
	}

	discordButton() {
		return HTML.wire(this, ':discord')`
			<button
				aria-label="Discord"
				title="Discord"
				onclick=${() => {
					this.setState({showMenu: false});
					modalConstructor.showView(discord.render())
				}}
			>
				<span>Discord & Bots</span><div class="icon-masked icon-discord"></div>
			</button>
		`;
	}

	settingsButton() {
		return HTML.wire(this, ':settings')`
			<button
				aria-label="Settings"
				title="Settings"
				onclick=${() => {
					this.setState({showMenu: false});
					modalConstructor.showView(settings.render())
				}}
				autofocus
			>
				<span>Settings</span><div class="icon-masked icon-settings"></div>
			</button>
		`;
	}
}

export const headerNav = new HeaderNav();