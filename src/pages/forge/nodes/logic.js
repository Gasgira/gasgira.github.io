import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

export class ForEachPlayer extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.logic;

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Objects", forge.type.objects);

    this.addOutput("On Completion", LiteGraph.EVENT);
    this.addOutput("Execute Per Player", LiteGraph.EVENT);
    this.addOutput("Current Player", forge.type.player);
    this.addOutput("Current Iteration", forge.type.number);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'For Each Player';
	}
	get title() {
		return ForEachPlayer.title;
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
LiteGraph.registerNodeType("logic/players", ForEachPlayer);

export class Branch extends ForgeNode {
	constructor() {
		super();
		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Condition", forge.type.boolean);

    this.addOutput("True", LiteGraph.EVENT);
    this.addOutput("False", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_TRIGGER;

		this.color = forge.nodeColor.logic;
	}

	static get title() {
		return 'Branch';
	}
	get title() {
		return Branch.title;
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
LiteGraph.registerNodeType("logic/basic", Branch);