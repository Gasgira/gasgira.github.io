import { HTML } from 'lib/HTML';
import { Component } from 'component';
import { settings } from 'ui/settings';

import './index.css';

class ModalConstructor extends Component {
	get modals() {
		return this?._modals ?? (this._modals = new Set());
	}

	showView(view) {
		const modal = new Modal(view);
		this.modals.add(modal);
		this.render();
		document.body.style.overflow = 'hidden';
	}

	closeView(modal) {
		// console.log('close', this)
		if (this.modals.has(modal)) this.modals.delete(modal);
		// console.log('close', this.modals)
		this.render();
		document.body.style.overflow = 'auto';
	}

	render() {
		if (!this.modals.size) return HTML.bind(document.querySelector('.js--modals'))``;
		return HTML.bind(document.querySelector('.js--modals'))`
			<div class="modals_wrapper">${[...this.modals.values()].map(modal => modal.render())}</div>
		`;
	}
}

export const modalConstructor = new ModalConstructor();

class Modal extends Component {
	constructor(view) {
		super();
		this.view = view;
	}

	render() {
		return this.html`
			<div class="modal_clickout" onclick=${() => modalConstructor.closeView(this)}></div>
			<div class="modal_wrapper"><div class="modal_content">${this?.view ?? '...'}</div></div>
		`;
	}
}