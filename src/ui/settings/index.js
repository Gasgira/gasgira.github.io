import { HTML } from 'lib/HTML';
import { Component } from 'component';
import { urlParams } from 'urlParams';
import { emitter } from 'eventEmitter';
import { i18n } from 'ui/i18n';

import './index.css';

class Settings extends Component {
	constructor() {
		super();

		if (!window?.localStorage) return;

		try {
			const storedSettings = localStorage.getItem('user_settings');
			if (storedSettings)
			{
				const settings = JSON.parse(storedSettings);
				if (settings.date) console.log(`[Settings] loaded settings created "${new Date(settings.dateCreated).toLocaleString()}", updated "${new Date(settings.dateCreated).toLocaleString()}"`);
				if (settings.data && Array.isArray(settings.data))
				{
					settings.data = new Map(settings.data);
				} else {
					settings.data = new Map();
				}

				this._settings = settings;

				if (settings.data.has('countryCode')) this.setLanguage(settings.data.get('countryCode'));
				if (settings.data.has('appScale')) this.setAppScale(settings.data.get('appScale'));
				if (settings.data.has('textScale')) this.setTextScale(settings.data.get('textScale'));
				if (settings.data.has('revealHidden')) this.revealHidden();
				if (settings.data.has('userSort')) this.setSort(settings.data.get('userSort'));
			} else {
				let storageTest;
				try {
					storageTest = window.localStorage;
					const testValue = '__storage_test__';
					storageTest.setItem(testValue, testValue);
					storageTest.removeItem(testValue);
				} catch (error) {
					console.warn(`[Settings.constructor] localStorage not available!`);
					this.disabled = true;
					return;
				}
			}
		} catch (error) {
			console.error(`[Settings.constructor]`, error);
		}

		if (!this._settings) this._settings = {
			dateCreated: new Date().toISOString(),
			data: new Map()
		}

		if (!this.data.has('countryCode'))
		{
			try {
				const countryCode = navigator.languages && navigator.languages.length
				? navigator.languages[0]
				: navigator.language;
				console.info(`[settings.i18n] init "${countryCode}"`);
				if (i18n.countryCodes.has(countryCode)) this.setLanguage(countryCode);
			} catch (error) {
				console.error(`[settings.i18n] init`, error);
			}
		}

		// TODO delete next major push
		const appScale = localStorage.getItem('userAppScale');
		if (appScale) {
			localStorage.removeItem('userAppScale');
		}
		const textScale = localStorage.getItem('userTextScale');
		if (textScale) {
			localStorage.removeItem('userTextScale');
		}
		const showSpoilers = localStorage.getItem('revealHidden');
		if (showSpoilers) {
			localStorage.removeItem('revealHidden');
		}
	}

	render() {
		if (!window?.localStorage)
		{
			return 'Your browser does not support localstorage, settings are not available.';
		}
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
					<div class="option_wrapper">
						<label for="set-language">Language: ${this.countryCode ?? '(Default)'}</label>
						<select class="set-language" id="set-language" name="set-language" value=${this.countryCode}
							onchange=${(e) => {
								this.setLanguage(e.target.value);
								this.render();
							}}
						>
							<option value="">Default</option>
							${[...i18n.countryCodes].map(countryCode => `<option value="${countryCode}"${this.countryCode === countryCode ? ' selected' : ''}>${countryCode}</option>`)}
						</select
					</div>
				</section>
				${this.data.has('revealHidden') ? HTML.wire(this, ':unspoiler')`
					<button
						class="hi-box"
						onclick=${() => {
							if (this.data.has('revealHidden'))
							{
								console.warn('[settings] Removing spoilers setting');
								this.clearSetting('revealHidden');
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
				<button
					class="hi-box"
					onclick=${() => this.reset()}
				>Reset Settings</button>
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
		return this._settings.data;
	}

	save() {
		try {
			const string = JSON.stringify({
				...this._settings,
				date: new Date().toISOString(),
				data: Array.from(this.data)
			});

			if (string) localStorage.setItem('user_settings', string);
		} catch (error) {
			console.error(`[Settings.save]`, error);
		}
	}

	getSetting(settingName) {
		if (this.data.has(settingName)) return this.data.get(settingName);
	}

	setSetting(settingName, value) {
		if (this.data.has(settingName))
		{
			const settingValue = this.data.get(settingName);
			if (settingValue === value) return;
		}
		this.data.set(settingName, value);
		this.save();
	}

	clearSetting(settingName) {
		this.data.delete(settingName);
		this.save();
	}

	setRootProperty(key, value) {
		const root = document.documentElement;
		root.style.setProperty(`--${key}`, `${value}`);
	}

	revealHidden() {
		this.setSetting('revealHidden', true);
	}

	get countryCode() {
		return this.getSetting('countryCode');
	}
	get isTranslated() {
		return this.getSetting('countryCode') ? true : false;
	}

	setLanguage(countryCode) {
		console.info(`[Settings.setLanguage]`, countryCode);
		if (!countryCode && this.data.has('countryCode'))
		{
			this.data.delete('countryCode');
			this.save();
			return;
		}

		if (countryCode && i18n.countryCodes.has(countryCode))
		{
			this.setSetting('countryCode', countryCode);
			emitter.emit(`Settings.setLanguage`, countryCode);
		}
	}

	get appScale() {
		return this.getSetting('appScale') ?? 1;
	}

	setAppScale(value = 1) {
		const float = parseFloat(value ?? 1);
		console.info(`[skimmer] settings -> appScale "${float}"`);
		this.setSetting('appScale', float);

		this.setRootProperty('app-size', `${float}rem`);
		this.render();
	}

	get textScale() {
		return this.getSetting('textScale') ?? 1;
	}

	setTextScale(value = 1) {
		const float = parseFloat(value ?? 1);
		console.info(`[skimmer] settings -> textScale "${float}"`);
		this.setSetting('textScale', float);

		this.setRootProperty('app-font-size', `${float}rem`);
		this.render();
	}

	get pageSize() {
		return this.getSetting('pageSize') ?? 100;
	}

	setPageSize(value = 100) {
		let int = parseInt(value ?? 100);
		if (int > 1000) int = 1000;
		if (int < 10) int = 10;
		console.info(`[Settings] pageSize "${int}"`);
		this.setSetting('pageSize', int);

		this.render();
	}

	setSort(value = 'alphanumeric') {
		console.info(`[Settings] setSort "${value}"`);
		this.setSetting('userSort', value);
	}

	setSortOrder(value = false) {
		console.info(`[Settings] setSortOrder "${value}"`);
		this.setSetting('userSortOrder', value ? true : false);
	}

	reset() {
		this.data.clear();
		// localStorage.clear();
		localStorage.removeItem('user_settings');
		console.warn(`[Settings] Cleared settings. Refresh the page to take full effect.`, this.data);
		this.render();
	}

	showSpoilers() {
		this.setSetting('revealHidden', true);
		// urlParams.setSecionSetting('spoilers', 'true');
		window.location.reload();
	}
}

export const settings = new Settings();