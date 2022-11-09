import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

export class DebugGame extends ForgeNode {
	constructor() {
		super();
		this.properties = () => game.toString();

		this.color = forge.nodeColor.variable;
	}

	static get title() {
		return '[DEBUG] Game';
	}
	get title() {
		return DebugGame.title;
	}
	static get desc() {
		return `DEBUG ONLY: Observe the value of an output during test`
	}

	onStart() {
		game.messenger.emit('gameStart');
	}

	onStop() {
		game.reset();
	}
}
LiteGraph.registerNodeType("debug/game", DebugGame);

export class Watch extends ForgeNode {
	constructor() {
		super();
		this.addStaticInput("", 0, { label: "" });
		this.value = 0;

		this.color = forge.nodeColor.variable;
	}

	static get title() {
		return '[DEBUG] Watch';
	}
	get title() {
		return Watch.title;
	}
	static get desc() {
		return `DEBUG ONLY: Observe the value of an output during test`
	}

	onExecute() {
		if (this.inputs[0]) {
			this.value = this.getInputData(0);
			// console.debug(`[Watch]`, this.value);
		}
	}

	toString(object) {
		// console.log(`[Watch.toString] obj`, object);
		if (object == null) {
			return "null";
		} else if (object.constructor === Number) {
				return object.toFixed(3);
		} else if (object.constructor === Array) {
			var str = "[";
			for (var i = 0; i < object.length; ++i) {
					str += this.toString(object[i]) + (i + 1 != object.length ? "," : "");
			}
			str += "]";
			return str;
		} else {
			return `${object}`;
		}
	}

	onDrawBackground(ctx) {
		this.inputs[0].label = this.toString(this.value);
	}
}
LiteGraph.registerNodeType("debug/watch", Watch);