import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

export class PushSplashToPlayer extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			duration: 0
		}
		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Player", forge.type.object);
		this.addStaticInput("Duration In Seconds", forge.type.number);
		this.addStaticInput("Message", forge.type.uiMessage);

    this.addStaticOutput("Event", LiteGraph.EVENT);

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
		this.addStaticInput("Message Template", forge.type.uiMessageTemplate);
		this.addStaticInput("String 1", forge.type.string);
		this.addStaticInput("String 2", forge.type.string);
		this.addStaticInput("Player", forge.type.object);

    this.addStaticOutput("Message", forge.type.uiMessage);

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