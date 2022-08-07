import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

export class String extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			value: ''
		}

		this.addOutput("String", forge.type.string);

		this.addWidget("string","string",this.properties.value,"value");
		this.widgets_up = true;

		this.color = forge.nodeColor.variable;
	}

	static get title() {
		return 'String';
	}
	get title() {
		return String.title;
	}

	onExecute() {
		this.setOutputData(0, this.properties.value);
	}
}
LiteGraph.registerNodeType("variables/constant", String);

export class Vector3 extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			x: 0,
			y: 0,
			z: 0
		}

		this.addInput("x", forge.type.number);
		this.addInput("y", forge.type.number);
		this.addInput("z", forge.type.number);

		this.addWidget("number","X",this.properties.x,"x");
		this.addWidget("number","Y",this.properties.y,"y");
		this.addWidget("number","Z",this.properties.z,"z");
		this.widgets_up = true;

		this.addOutput("Vector", forge.type.vector);

		this.color = forge.nodeColor.variable;
	}

	static get title() {
		return 'Vector3';
	}
	get title() {
		return Vector3.title;
	}

	onExecute() {
		const { x, y, z } = this.properties;
		this.setOutputData(0, [x, y, z]);
	}
}
LiteGraph.registerNodeType("variables/vector3", Vector3);

export class Identifier extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.variable;
		this.properties = {
			identifier: ''
		}

		this.addOutput("Identifier", forge.type.identifier);

		this.addWidget("text", "Identifier", this.properties.identifier, { property: "identifier" });
		// this.widgets_up = true;
	}

	static get title() {
		return 'Identifier';
	}
	get title() {
		return Identifier.title;
	}

	onExecute() {
		// console.log('Identifier', this.properties.identifier)
		this.setOutputData(0, this.properties.identifier);
	}
}
LiteGraph.registerNodeType("variables/Identifier", Identifier);