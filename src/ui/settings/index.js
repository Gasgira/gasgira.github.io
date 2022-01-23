import { HTML } from 'lib/HTML';
import { Component } from 'component';

class Settings extends Component {
	constructor() {
		super();

		const dbPath = localStorage.getItem('dbPath');
		if (dbPath) this.data.set('dbPath', dbPath);
	}

	render() {
		return this.html`
			<button onclick=${() => this.reset()}>Reset Settings</button>
			<label for="dbPath">dbPath:</label>

			<input type="text" id="dbPath" name="dbPath" required minlength="0" maxlength="8" size="10"
				onchange=${(e) => this.setDbPath(e.target.value)}
				placeholder=${this.data.get('dbPath') ?? ''}
			>
		`;
	}

	get data() {
		return this._data ?? (this._data = new Map());
	}

	setDbPath(path) {
		if (path && typeof path === 'string') {
			localStorage.setItem('dbPath', `${path}`);
			console.info(`[halosets] Set dbPath to custom value! Refresh the page to take full effect.`, localStorage.getItem('dbPath'));
		}
	}

	reset() {
		this.data.clear();
		localStorage.clear();
		console.warn(`[halosets] Cleared settings. Refresh the page to take full effect.`);
		this.render();
	}
}

export const settings = new Settings();