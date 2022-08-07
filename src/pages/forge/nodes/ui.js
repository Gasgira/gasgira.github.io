import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

export class PushSplashToPlayer extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			duration: 0
		}
		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Player", forge.type.object);
		this.addInput("Duration In Seconds", forge.type.number);
		this.addInput("Message", forge.type.uiMessage);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_TRIGGER;

		this.color = forge.nodeColor.object;
	}

	static get title() {
		return 'Push Splash To Player';
	}
	get title() {
		return PushSplashToPlayer.title;
	}

	onExecute() {
	}
}
LiteGraph.registerNodeType("ui/event", PushSplashToPlayer);

export class CreateUiMessage extends ForgeNode {
	constructor() {
		super();
		this.addInput("Message Template", forge.type.uiMessageTemplate);
		this.addInput("String 1", forge.type.string);
		this.addInput("String 2", forge.type.string);
		this.addInput("Player", forge.type.object);

    this.addOutput("Message", forge.type.uiMessage);

		this.color = forge.nodeColor.object;
	}

	static get title() {
		return 'Create UI Message';
	}
	get title() {
		return CreateUiMessage.title;
	}

	onExecute() {
	}
}
LiteGraph.registerNodeType("ui/create", CreateUiMessage);