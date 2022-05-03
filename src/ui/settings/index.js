import { HTML } from 'lib/HTML';
import { Component } from 'component';
import { urlParams } from 'urlParams';

import './index.css';

class Settings extends Component {
	constructor() {
		super();

		if (!localStorage) return;
		let storageTest;
		try {
			storageTest = window.localStorage;
			const testValue = '__storage_test__';
			storageTest.setItem(testValue, testValue);
			storageTest.removeItem(testValue);
		} catch (error) {
			console.warn(`[settings] localStorage not available!`);
			return;
		}

		// lets the user provide an alternate root for the db
		const dbPath = localStorage.getItem('dbPath');
		if (dbPath) this.data.set('dbPath', dbPath);

		// enabling pathCasing with normalize all paths as lower case
		const pathCasing = localStorage.getItem('pathCasing');
		// console.error('pathc', pathCasing, pathCasing === 'false')
		if (!pathCasing || pathCasing === 'true') {
			this.data.set('pathCasing', true);
		} else {
			this.data.set('pathCasing', false);
		}

		const appScale = localStorage.getItem('userAppScale');
		if (appScale) {
			this.setAppScale(appScale);
		}
		
		const textScale = localStorage.getItem('userTextScale');
		if (appScale) {
			this.setTextScale(textScale);
		}
		
		const showSpoilers = localStorage.getItem('revealHidden');
		if (showSpoilers) {
			this.data.set('revealHidden', true);
		} 
	}

	render() {
		return this.html`
			<div class="settings_wrapper">
				<section>
					<header>Accessibility</header>
					<div class="option_wrapper">
						<label for="appScale">Interface Scale: ${this.appScale}</label>
						<input class="show-value" type="range" id="appScale" name="appScale" value=${this.appScale} min="0.5" max="2" step="0.05"
							onchange=${(e) => this.setAppScale(parseFloat(e?.target?.value ?? 1))}
						>
					</div>
					<div class="option_wrapper">
						<label for="textScale">Text Scale: ${this.textScale}</label>
						<input class="show-value" type="range" id="textScale" name="textScale" value=${this.textScale} min="0.5" max="2" step="0.05"
							onchange=${(e) => this.setTextScale(parseFloat(e?.target?.value ?? 1))}
						>
					</div>
				</section>
				${this.data.has('revealHidden') ? HTML.wire(this, ':unspoiler')`
					<button
						class="hi-box"
						onclick=${() => {
							if (this.data.has('revealHidden'))
							{
								console.warn('[settings] Removing spoilers setting');
								this.data.delete('revealHidden');
								localStorage.removeItem('revealHidden');
								this.render();
							}
						}}
					>Hide Spoilers</button>
				` : ''}
				<section>
					<header>Inventory</header>
					<div class="option_wrapper">
						<label for="pageSize">Page Size: ${this.pageSize}</label>
						<input class="show-value" type="number" id="pageSize" name="pageSize" value=${this.pageSize} min="10" max="1000" step="1"
							onchange=${(e) => this.setPageSize(parseInt(e?.target?.value ?? 100))}
						>
					</div>
				</section>
				${this.advanced()}
				<button
					class="hi-box"
					onclick=${() => this.reset()}
				>Reset Settings</button>
				<aside>Note: you will lose any saved favorite items upon reset!</aside>
			</div>
		`;
	}

	advanced() {
		if (window?.location?.hostname === 'cylix.guide') return;
		return HTML.wire(this, ':advanced')`
			<section>
				<header>Advanced</header>
				<span>Do not modify advanced settings unless you know why to.</span><br>
				<label for="dbPath">dbPath:</label>
				<input type="text" id="dbPath" name="dbPath" minlength="0" maxlength="8" size="10"
					onchange=${(e) => this.setDbPath(e.target.value)}
					placeholder=${this.data.get('dbPath') ?? 'db'}
				>
				<br>
				<label for="pathCasing">Normalize paths to lowercase:</label>
				<input type="checkbox" id="pathCasing" name="pathCasing"
					onchange=${(e) => this.setPathCasing(e.target.checked)}
					checked=${this.data.get('pathCasing') === true}
				>
			</section>
		`;
	}

	get data() {
		return this._data ?? (this._data = new Map());
	}

	setRootProperty(key, value) {
		const root = document.documentElement;
		root.style.setProperty(`--${key}`, `${value}`);
	}

	get appScale() {
		return localStorage.getItem('userAppScale') ?? 1;
	}

	setAppScale(value = 1) {
		const float = parseFloat(value ?? 1);
		console.info(`[skimmer] settings -> appScale "${float}"`);
		localStorage.setItem('userAppScale', float);

		this.setRootProperty('app-size', `${float}rem`);
		this.render();
	}

	get textScale() {
		return localStorage.getItem('userTextScale') ?? 1;
	}

	setTextScale(value = 1) {
		const float = parseFloat(value ?? 1);
		console.info(`[skimmer] settings -> textScale "${float}"`);
		localStorage.setItem('userTextScale', float);

		this.setRootProperty('app-font-size', `${float}rem`);
		this.render();
	}

	get pageSize() {
		return localStorage.getItem('userPageSize') ?? 100;
	}

	setPageSize(value = 100) {
		let int = parseInt(value ?? 100);
		if (int > 1000) int = 1000;
		if (int < 10) int = 10;
		console.info(`[skimmer] settings -> pageSize "${int}"`);
		localStorage.setItem('userPageSize', int);

		this.render();
	}

	setDbPath(path) {
		if (path && typeof path === 'string') {
			localStorage.setItem('dbPath', `${path}`);
			console.info(`[skimmer][settings] Set dbPath to custom value! Refresh the page to take full effect.`, localStorage.getItem('dbPath'));
		}
	}

	setPathCasing(value) {
		if (value) {
			localStorage.setItem('pathCasing', true);
		} else {
			localStorage.setItem('pathCasing', false);
		}
		
		console.info(`[skimmer][settings] Set normalize path casing! Refresh the page to take full effect.`, localStorage.getItem('pathCasing'));

	}

	reset() {
		this.data.clear();
		localStorage.clear();
		console.warn(`[skimmer][settings] Cleared settings. Refresh the page to take full effect.`, this.data);
		this.render();
	}

	showSpoilers() {
		localStorage.setItem('revealHidden', true);
		if (localStorage.getItem('revealHidden'))
		{
			console.log(`[settings.showSpoilers] set "revealHidden"`);
		}
		urlParams.setSecionSetting('spoilers', 'true');
		window.location.reload();
	}
}

export const settings = new Settings();