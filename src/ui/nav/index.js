import { HTML } from 'lib/HTML';
import { Component } from 'component';
import { settings } from 'ui/settings';
import { about } from 'ui/about';
import { modalConstructor } from 'ui/modal';

import './index.css';

class HeaderNav extends Component {
	constructor() {
		super();
		this.links = [];
	}
	render() {
		return this.html`
			<nav class="toolbar">
				<a href="#">Skimmer</a>
				<ul>
					<li><button class="settings" onclick=${() => modalConstructor.showView(settings.render())}>${window?.location?.hostname === 'gasgira.github.io' ? '' : 'Settings'}</button></li>
					<li><button onclick=${() => modalConstructor.showView(about.render())}>Disclaimer</button></li>
				</ul>
			</nav>
		`;
	}
}

export const headerNav = new HeaderNav();