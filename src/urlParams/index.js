import { Component } from 'component';

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

	setSecionSetting(name, value) {
		try {
			if (typeof name !== 'string' || typeof value !== 'string') return;
			const currentSetting = this.getSecionSetting(name);
			if (currentSetting && currentSetting === value) return;
			this.params.set(encodeURIComponent(name), encodeURIComponent(value));
			console.log(`params`, this.params.toString());
			history.replaceState({}, `Skimmer`, `?${this.params.toString()}`);
		} catch (error) {
			console.error(`[skimmer] setSecionSetting`, error);
		}
	}

	getSecionSetting(name) {
		try {
			if (typeof name !== 'string') return;
			const encodedName = encodeURIComponent(name);
			if (this.params.has(encodedName)) return decodeURIComponent(this.params.get(encodedName));
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