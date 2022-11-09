import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

const nodeColor = forge.nodeColor.logic;

export class BooleanLogic extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Operand A", forge.type.boolean);
		this.addStaticInput("Operand B", forge.type.boolean);

    this.addStaticOutput("And", forge.type.boolean);
    this.addStaticOutput("Or", forge.type.boolean);
	}

	static get title() {
		return 'Boolean Logic';
	}
	get title() {
		return BooleanLogic.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const a = this.getInputData(0);
		const b = this.getInputData(1);

		this.setOutputData(0, a === b);
		this.setOutputData(1, a !== b);
	}
}
LiteGraph.registerNodeType("logic/BooleanLogic", BooleanLogic);

export class Branch extends ForgeNode {
	constructor() {
		super();
		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Condition", forge.type.boolean);

    this.addStaticOutput("True", LiteGraph.EVENT);
    this.addStaticOutput("False", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'Branch';
	}
	get title() {
		return Branch.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const condition = this.getInputData(1);
		// console.debug(`[Branch] condition: "${condition}"`);
		if (condition)
		{
			this.triggerSlot(0);
		} else {
			this.triggerSlot(1);
		}
	}
}
LiteGraph.registerNodeType("logic/Branch", Branch);

export class Compare extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Operand A", forge.type.number);
		this.addStaticInput("Operand B", forge.type.number);

    this.addStaticOutput("A == B", forge.type.boolean);
    this.addStaticOutput("A > B", forge.type.boolean);
    this.addStaticOutput("A < B", forge.type.boolean);
	}

	static get title() {
		return 'Compare';
	}
	get title() {
		return Compare.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const a = parseFloat(this.getInputData(0) ?? 0);
		const b = parseFloat(this.getInputData(1) ?? 0);

		this.setOutputData(0, a === b);
		this.setOutputData(1, a > b);
		this.setOutputData(2, a < b);
	}
}
LiteGraph.registerNodeType("logic/Compare", Compare);

export class ForEachObject extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Objects", forge.type.objects);

    this.addStaticOutput("On Completion", LiteGraph.EVENT);
    this.addStaticOutput("Execute Per Object", LiteGraph.EVENT);
    this.addStaticOutput("Current Object", forge.type.object);
    this.addStaticOutput("Current Iteration", forge.type.number);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'For Each Object';
	}
	get title() {
		return ForEachObject.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// console.log('onAction');
		const objects = this.getInputData(1);
		if (objects && Array.isArray(objects))
		{
			objects.forEach((object, index) => {
				this.setOutputData(2, object);
				this.setOutputData(3, index);
				this.triggerSlot(1);
			});
			this.triggerSlot(0);
		}
	}
}
LiteGraph.registerNodeType("logic/ForEachObject", ForEachObject);

export class ForEachPlayer extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Objects", forge.type.objects);

    this.addStaticOutput("On Completion", LiteGraph.EVENT);
    this.addStaticOutput("Execute Per Player", LiteGraph.EVENT);
    this.addStaticOutput("Current Player", forge.type.player);
    this.addStaticOutput("Current Iteration", forge.type.number);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'For Each Player';
	}
	get title() {
		return ForEachPlayer.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// console.log('onAction');
		const objects = this.getInputData(1);
		if (objects && Array.isArray(objects))
		{
			const players = objects.filter(object => object.isPlayer);
			players.forEach((player, index) => {
				this.setOutputData(2, player);
				this.setOutputData(3, index);
				this.triggerSlot(1);
			});
			this.triggerSlot(0);
		}
	}
}
LiteGraph.registerNodeType("logic/ForEachPlayer", ForEachPlayer);

export class ForNIterations extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Iterations", forge.type.number);

    this.addStaticOutput("On Completion", LiteGraph.EVENT);
    this.addStaticOutput("Execute Iteration", LiteGraph.EVENT);
    this.addStaticOutput("Current Iteration", forge.type.number);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'For N Iterations';
	}
	get title() {
		return ForNIterations.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		const iterations = parseInt(this.getInputData(1) ?? 0);
		if (!iterations) return;

		for (let index = 0; index < iterations; index++) {
			this.setOutputData(2, index);
			this.triggerSlot(1);
		}
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("logic/ForNIterations", ForNIterations);

export class GetIsForgeMode extends ForgeNode {
	constructor() {
		super();

    this.addStaticOutput("Is Forge Mode", forge.type.boolean);
	}

	static get title() {
		return 'Get Is Forge Mode';
	}
	get title() {
		return GetIsForgeMode.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		this.setOutputData(0, false);
	}
}
LiteGraph.registerNodeType("logic/GetIsForgeMode", GetIsForgeMode);

export class WaitForNSeconds extends ForgeNode {
	constructor() {
		super();

		this.addProperty("seconds", 0);

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Seconds", forge.type.number);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Wait For N Seconds';
	}
	get title() {
		return WaitForNSeconds.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		if (this.isInputConnected(1)) {
			this.properties.seconds = this.getInputData(1);
		}
		const seconds = parseFloat(this.properties.seconds ?? 0.1) * 1000;
		setTimeout(() => {
			this.triggerSlot(0);
		}, seconds);
	}
}
LiteGraph.registerNodeType("logic/WaitForNSeconds", WaitForNSeconds);