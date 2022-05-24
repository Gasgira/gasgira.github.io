import { Component } from 'component';
import { dashEncodeURIComponent, dashDecodeURIComponent } from 'utils/strings.js';

class Params extends Component {
	constructor() {
		super();
		const url = new URL(window?.location ?? '');
		this.params = new URLSearchParams(url?.search ?? '');
		// console.log(`params`, this.params.toString());
		// for (conast [key, value] of params)
		// {
		// 	console.log(`[skimmer] params key: "${key}", value: "${value}"`);
		// 	this.store.set(`${key}`, `${value}`);
		// }
		// console.log(`[skimmer] store`, this.store);
	}

	// get store() {
	// 	return this?._map ?? (this._map = new Map());
	// }

	setSectionVisibility(name, bool) {
		if (typeof name !== 'string' || typeof bool !== 'boolean') return;
		if (this.params.has(name) && !bool) this.params.delete(name);
		if (bool) this.params.set(name, true)
	}

	getSecionVisibility(name) {
		if (typeof name !== 'string') return;
		if (this.params.has(name)) return true;
		return false;
	}

	setSecionSetting(name, value, {
		dash = false
	} = {}) {
		try {
			if (typeof name !== 'string' || typeof value !== 'string') return;
			const currentSetting = this.getSecionSetting(name, { dash });

			if (currentSetting && currentSetting === value) return;

			const encodedName = dash ? dashEncodeURIComponent(name) : encodeURIComponent(name);
			const encodedValue = dash ? dashEncodeURIComponent(value) : encodeURIComponent(value);
			this.params.set(encodedName, encodedValue);
			// console.log(`params`, this.params.toString());
			history.replaceState({}, `Skimmer`, `?${this.params.toString()}`);
		} catch (error) {
			console.error(`[skimmer] setSecionSetting`, error);
		}
	}

	getSecionSetting(name, {
		dash = false
	} = {}) {
		try {
			if (typeof name !== 'string') return;
			const encodedName = dash ? dashEncodeURIComponent(name) : encodeURIComponent(name);
			if (this.params.has(encodedName))
			{
				const value = this.params.get(encodedName);
				return dash ? dashDecodeURIComponent(value) : decodeURIComponent(value);
			}
			return false;
		} catch (error) {
			console.error(`[skimmer] getSecionSetting`, error);
		}
	}

	deleteSecionSetting(name) {
		try {
			if (typeof name !== 'string') return;
			const encodedName = encodeURIComponent(name);
			if (this.params.has(encodedName))
			{
				this.params.delete(name);
				history.replaceState({}, `Skimmer`, `?${this.params.toString()}`);
			}
		} catch (error) {
			console.error(`[skimmer] deleteSecionSetting`, error);
		}
	}
}

export const urlParams = new Params();