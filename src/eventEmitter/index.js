/**
 * @module EventEmitter
 */

/**
 * Stores listener callbacks and executes them when a string matching event is emitted
 *
 * @export
 * @class EventEmitter
 * @see Based on code by Saul van der Walt https://github.com/SaulDoesCode
 */
export class EventEmitter {
	constructor() {
		this.listeners = new Map();
	}

	/**
	 * Repeatable event
	 *
	 * @param {string} eventName
	 * @param {*} func
	 * @param {boolean} [once=false] option, prefer calling `EventEmitter.once()`
	 * @chainable
	 * @memberof EventEmitter
	 */
	on(eventNames, func, once = false) {
		eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
		for(const eventName of eventNames) {
			if(typeof eventName !== 'string' && typeof eventName !== 'symbol') {
				throw new Error(`[EventEmitter] eventName must be a string. Type: "${typeof eventName}"`);
			}
			let listeners = this.listeners.get(eventName);
			if(!listeners) this.listeners.set(eventName, listeners = new Set());
			func.once = once;
			listeners.add(func);
		}
		return this;
	}

	// TODO onAny()

	// TODO offAny()

	/**
	 * Event is called once, then the listener is removed after event is emitted
	 *
	 * @param {string} eventName
	 * @param {*} func
	 * @chainable
	 * @memberof EventEmitter
	 */
	once(eventName, func) {
		this.on(eventName, func, true);
		return this;
	}

	/**
	 * Remove a callback from a listener
	 *
	 * @param {string} eventName
	 * @param {*} func
	 * @chainable
	 * @memberof EventEmitter
	 */
	off(eventName, func) {
		const list = this.listeners.get(eventName);
		if(!list) return;
		const funcs = Array.isArray(func) ? func : [func];
		for(const listener of funcs) list.delete(listener);
		if(!list.size) this.listeners.delete(eventName);
		return this;
	}

	clear(eventName) {
		if(this.listeners.has(eventName)) this.listeners.delete(eventName);
		return this;
	}

	/**
	 *
	 *
	 * @param {string} eventName
	 * @param {*} data passed to listener
	 * @returns {Promise}
	 * @memberof EventEmitter
	 */
	async emit(eventName, ...data) {
		if(!this.listeners.has(eventName)) return;
		const listeners = [...this.listeners.get(eventName)];
		await Promise.all(listeners.map(async listener => {
			await listener(...data);
			if(listener.once) this.off(eventName, listener);
			return;
		}));
		return this;
	}
}

/**
 * Eventbus that can be imported to any module for shared events
 *
 * @export
 * @class EventEmitter
 */
export const emitter = new EventEmitter();