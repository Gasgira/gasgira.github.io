import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

export class ObjectReference extends ForgeNode {
	constructor() {
		super();
		this._value = new FOOD();
    this.addStaticOutput("Object", forge.type.object);
		this.addProperty("value", `${JSON.stringify(this._value)}`);

		this.color = forge.nodeColor.variable;
	}

	static get title() {
		return 'Object Reference';
	}
	get title() {
		return ObjectReference.title;
	}

	onExecute() {
	}
}
LiteGraph.registerNodeType("objects/get", ObjectReference);

export class GetObjectsInPrefab extends ForgeNode {
	constructor() {
		super();
		this.addStaticInput("Object", forge.type.object);
    this.addStaticOutput("Objects", forge.type.objects);

		this.color = forge.nodeColor.object;
	}

	static get title() {
		return 'Get Objects In Prefab';
	}
	get title() {
		return GetObjectsInPrefab.title;
	}

	onExecute() {
	}
}
LiteGraph.registerNodeType("objects/getInPrefab", GetObjectsInPrefab);