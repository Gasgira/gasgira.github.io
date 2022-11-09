import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

export class GetObjectPosition extends ForgeNode {
	constructor() {
		super();
		this.addStaticInput("Object", forge.type.object);
    this.addStaticOutput("Position", forge.type.vector);

		this.color = forge.nodeColor.object;
	}

	static get title() {
		return 'Get Object Position';
	}
	get title() {
		return GetObjectPosition.title;
	}

	onExecute() {
	}
}
LiteGraph.registerNodeType("objectTransforms/getPos", GetObjectPosition);

export class SetObjectPosition extends ForgeNode {
	constructor() {
		super();
		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Object", forge.type.object);
    this.addStaticInput("Position", forge.type.vector);
    this.addStaticInput("Is Relative", forge.type.boolean);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.color = forge.nodeColor.object;

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'Set Object Position';
	}
	get title() {
		return SetObjectPosition.title;
	}

	onExecute() {
	}
}
LiteGraph.registerNodeType("objectTransforms/setPos", SetObjectPosition);