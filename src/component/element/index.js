import { Component } from 'client/component';

export class ComponentElement extends Component {
	constructor(...args) {
		super(...args);
		this.created(...args);

		return this.render();
	}

	created() {}

	render() {
		return this.html`${{text: 'Undefined ComponentElement'}}`;
	}
}