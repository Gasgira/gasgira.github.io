import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

export class SubtractVectors extends ForgeNode {
	constructor() {
		super();
		this.addStaticInput("Operand A", forge.type.vector);
		this.addStaticInput("Operand B", forge.type.vector);

		this.addStaticOutput("Result", forge.type.vector);

		this.color = forge.nodeColor.variable;
	}

	static get title() {
		return 'Subtract Vectors';
	}
	get title() {
		return SubtractVectors.title;
	}

	onExecute() {
	}
}
LiteGraph.registerNodeType("math/subtractVectors", SubtractVectors);