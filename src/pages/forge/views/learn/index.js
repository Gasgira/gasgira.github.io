import { Component } from 'component';
import { HTML } from 'lib/HTML';

export class LearnForge extends Component {
	constructor({ nodes }) {
		super();
		console.log(`learn`, nodes);
		this.nodes = nodes;

		this.nodes.forEach((node, type) => {
			const category = node.category;
			const title = node.title;

			if (this.nodeCategories.has(category))
			{
				this.nodeCategories.get(category).add(node);
			} else {
				this.nodeCategories.set(category, new Set());
			}
		})
	}

	render() {
		return this.html`
			<div>
				hello ${this.nodeCategories.size}
			</div>
		`;
	}

	get nodeCategories() {
		return this._nodeCategories ??= new Map();
	}
}