import { EventEmitter } from 'eventEmitter';
import { emitter } from 'eventEmitter';
import { HTML } from 'lib/HTML';

/**
 * @module Component
 */

/**
 * Stateful class basis to be extended
 *
 * @export
 * @class Component
 */
export class Component {
	/**
	 * Called to initialize state, overridden by child classes
	 *
	 * @readonly
	 * @memberof Component
	 * @example returns {
	 * 	color: 'blue',
	 * 	content: `<span style=${{color: this.state.color}}>Hello</span>`
	 * }
	 */
	get defaultState() {
		return {};
	}

	/**
	 * Return object's state or calls `defaultState` to initialize it.
	 *
	 * @memberof Component
	 * @example `${this.state.color}`
	 */
	get state() {
		return this._state ??= this.defaultState;
	}

	/**
	 * Setting bypasses `setState()` to set state directly
	 *
	 * @param {object} value - state to set
	 * @memberof Component
	 * @example this.state.color = 'red';
	 */
	set state(value) {
		Object.defineProperty(this, '_state', {configurable: true, value: value});
		// this.states.push({...this.state});
	}

	/**
	 * Sets a property in the object's state and then calls the class's
	 *  `render()` funtion
	 *
	 * @param {*} state the property to set
	 * @param {boolean} render optional, defaults to `true`, pass `false`
	 *  to skip `render()`
	 * @example
	 * this.setState({
	 * 	color: 'red',
	 * 	content: `<span style=${{color: this.state.color}}>I'm ${this.state.color}</span>`
	 * });
	 *
	 * this.setState(prevState => {
	 * 	return {
	 * 		...prevState,
	 * 		color = 'red'
	 * 	}
	 * });
	 */
	setState(state, ...args) {
		const newState = typeof state === 'function'
			? state.call(this, this.state, ...args)
			: state;
		this.state = {
			...this.state,
			...newState
		};
		if (!args.render || args.render !== false) this.render();
		return this;
		// const target = this.state;
		// const source = typeof state === 'function' ? state.call(this, target) : state;
		// for (const key in source) target[key] = source[key];
		// if (render !== false) this.render();
		// return this;
	}

	// _states = [{...this.state}]

	// get states() {
	// 	return this._states;
	// }

	// popState() {
	// 	this.states.pop();
	// 	this.state = this.states[this.states.length - 1] || this.defaultState;
	// 	this.render();
	// }

	/**
	 * Called by this.setState() or manually to render state changes.
	 *
	 * @memberof Component
	 * @example return `${this.state.content}`
	 */
	render() {}

	#html;
	get html() {
		return this.#html ??= HTML.wire(this);
	}

	#messenger;
	get messenger() {
		return this.#messenger ??= new EventEmitter();
	}

	adoptState(component) {
		if(!component instanceof Component) throw new Error('Target state must be of a Component.');
		// this._state = component._state;
		// delete this.state;
		// Object.defineProperty(this, 'state', { get function() {
		// 	return component.state;
		// } })
	}

	// Global listener management system wip, unused

	get globalListeners() {
		return this._globalListeners ??= new Map();
	}

	globalListen(id, func, once) {
		try {
			const eventNames = Array.isArray(id) ? id : [id];
			for(const eventName of eventNames) {
				if(typeof eventName !== 'string' && typeof eventName !== 'symbol') {
					throw new Error(`[Component][EventEmitter] eventName must be a string. Type: "${typeof eventName}"`);
				}
				// if(this.globalListeners.has(func)) throw new Error('Already listening!');
				if(once) {
					emitter.once(eventName, func);
				} else {
					emitter.on(eventName, func);
				}
				let listeners = this.globalListeners.get(eventName);
				if(!listeners) this.globalListeners.set(eventName, listeners = new Set());
				listeners.add(func);
			}
		} catch (error) {
			console.error('[globalListen]', this, error);
		}
	}

	globalListenOnce(id, func) {
		this.globalListen(id, func, true);
	}

	destroyGlobalListeners() {
		try {
			const listeners = [...this.globalListeners.entries()];
			if(!listeners || !listeners.length) return;
			for(const listener of listeners) emitter.off(...listener);
		} catch (error) {
			console.warn('Could not clean up listeners!', this, error);
		}
	}

	get onDestroy() {
		return this._onDestroy ??= new Set();
	}

	destroy() {
		// this.destroyGlobalListeners();
		for(const func of [...this.onDestroy]) {
			try {
				func();
			} catch (error) {
				console.warn('Sloppy destroy!');
			}
		}
	}
}