import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

export class SubtractVectors extends ForgeNode {
	constructor() {
		super();
		this.addInput("Operand A", forge.type.vector);
		this.addInput("Operand B", forge.type.vector);

		this.addOutput("Result", forge.type.vector);

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