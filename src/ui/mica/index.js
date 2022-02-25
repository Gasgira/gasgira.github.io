import { Component } from 'component';
import { emitter } from 'eventEmitter';

export class MobileMicaMenu extends Component {
	constructor(eventString, title = 'Menu') {
		super();
		if (!eventString || typeof eventString !== 'string') throw new Error(`[MobileMicaMenu] eventString`);
		if (!title || typeof title !== 'string') throw new Error(`[MobileMicaMenu] title`);
		this.eventString = eventString;
		this.title = title;
	}

	toggle() {
		emitter.emit(`${this.eventString}`);
	}

	render() {
		return this.html`
			<button
				class="mica_mobile-menu_button"
				onclick=${() => this.toggle()}
				title=${this.title}
			>${this.title}<span class="icon-masked icon-menu"></span></button>
		`;
	}
}