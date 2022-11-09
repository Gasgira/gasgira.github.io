import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

const nodeColor = forge.nodeColor.variable;

export class Number extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			value: 0
		}

		this.addStaticOutput("", forge.type.number);

		this.addWidget("number","",this.properties.value,"value");
		this.widgets_up = true;
	}

	static get title() {
		return 'Number';
	}
	get title() {
		return Number.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		this.setOutputData(0, this.properties.value);
	}
}
LiteGraph.registerNodeType("variables/Number", Number);

export class String extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			value: ''
		}

		this.addStaticOutput("String", forge.type.string);

		this.addWidget("string","string",this.properties.value,"value");
		this.widgets_up = true;
	}

	static get title() {
		return 'String';
	}
	get title() {
		return String.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		this.setOutputData(0, this.properties.value);
	}
}
LiteGraph.registerNodeType("variables/String", String);

export class Vector3 extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			x: 0,
			y: 0,
			z: 0
		}

		this.addStaticInput("x", forge.type.number);
		this.addStaticInput("y", forge.type.number);
		this.addInput("z", forge.type.number);

		this.addWidget("number","X",this.properties.x,"x");
		this.addWidget("number","Y",this.properties.y,"y");
		this.addWidget("number","Z",this.properties.z,"z");
		this.widgets_up = true;

		this.addStaticOutput("Vector", forge.type.vector);
	}

	static get title() {
		return 'Vector3';
	}
	get title() {
		return Vector3.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const { x, y, z } = this.properties;
		this.setOutputData(0, [x, y, z]);
	}
}
LiteGraph.registerNodeType("variables/Vector3", Vector3);

export class Identifier extends ForgeNode {
	constructor() {
		super();
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

	get color() {
		return nodeColor;
	}

	onExecute() {
		// console.log('Identifier', this.properties.identifier)
		this.setOutputData(0, this.properties.identifier);
	}
}
LiteGraph.registerNodeType("variables/Identifier", Identifier);