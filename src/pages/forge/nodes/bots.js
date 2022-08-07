import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

export class AddBot extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.properties = {
			botDifficulty: ''
		}

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Bot Difficulty", forge.type.botDifficulty);
		this.addInput("Team", forge.type.team);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Add Bot';
	}
	get title() {
		return AddBot.title;
	}

	onAction() {
		console.log(`[AddBot]`, {...this.properties});
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("bots/AddBot", AddBot);

export class BotDifficulty extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.properties = {
			botDifficulty: ''
		}

    this.addOutput("Bot Difficulty", forge.type.botDifficulty);
	}

	static get title() {
		return 'Bot Difficulty';
	}
	get title() {
		return BotDifficulty.title;
	}

	onExecute() {
	}
}
LiteGraph.registerNodeType("bots/BotDifficulty", BotDifficulty);

export class GetBotIsDifficulty extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.properties = {
			botDifficulty: ''
		}

		this.addInput("Bot Player", forge.type.player);
		this.addInput("Bot Difficulty", forge.type.botDifficulty);

    this.addOutput("Bot Is Difficulty", forge.type.boolean);
	}

	static get title() {
		return 'Get Bot Is Difficulty';
	}
	get title() {
		return GetBotIsDifficulty.title;
	}

	onExecute() {
	}
}
LiteGraph.registerNodeType("bots/GetBotIsDifficulty", GetBotIsDifficulty);

export class RemoveAllBots extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.addInput("Event", LiteGraph.ACTION);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Remove All Bots';
	}
	get title() {
		return RemoveAllBots.title;
	}

	onAction() {
		console.log(`[RemoveAllBots]`);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("bots/RemoveAllBots", RemoveAllBots);

export class RemoveSpecificBotFromMatch extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Bot Player", forge.type.player);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Remove Specific Bot From Match';
	}
	get title() {
		return RemoveSpecificBotFromMatch.title;
	}

	onAction() {
		console.log(`[RemoveSpecificBotFromMatch]`);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("bots/RemoveSpecificBotFromMatch", RemoveSpecificBotFromMatch);