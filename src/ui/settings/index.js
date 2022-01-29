import { HTML } from 'lib/HTML';
import { Component } from 'component';

class Settings extends Component {
	constructor() {
		super();

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
		// console.error('pathv', this.data.get('pathCasing'))
	}

	render() {
		return this.html`
			<span>These are advanced settings. Do not modify them unless you know why to.</span>
			<button onclick=${() => this.reset()}>Reset Settings</button>
			<label for="dbPath">dbPath:</label>
			<input type="text" id="dbPath" name="dbPath" required minlength="0" maxlength="8" size="10"
				onchange=${(e) => this.setDbPath(e.target.value)}
				placeholder=${this.data.get('dbPath') ?? 'db'}
			>
			<br>
			<label for="pathCasing">Normalize paths to lowercase:</label>
			<input type="checkbox" id="pathCasing" name="pathCasing"
				onchange=${(e) => this.setPathCasing(e.target.checked)}
				checked=${this.data.get('pathCasing') === true}
			>
		`;
	}

	get data() {
		return this._data ?? (this._data = new Map());
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
}

export const settings = new Settings();