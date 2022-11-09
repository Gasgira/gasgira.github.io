import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

export class GetAllPlayers extends ForgeNode {
	constructor() {
		super();
    this.addStaticOutput("Players", forge.type.players);

		this.color = forge.nodeColor.object;
	}

	static get title() {
		return 'Get All Players';
	}
	get title() {
		return GetAllPlayers.title;
	}

	onExecute() {
		this.setOutputData(0, game.state.players);
	}
}
LiteGraph.registerNodeType("players/getAll", GetAllPlayers);

export class GetRandomPlayer extends ForgeNode {
	constructor() {
		super();
    this.addStaticOutput("player", forge.type.player);

		this.color = forge.nodeColor.object;
	}

	static get title() {
		return 'Get Random Player';
	}
	get title() {
		return GetRandomPlayer.title;
	}

	onExecute() {
		this.setOutputData(0, game.randomPlayer);
	}

	// setValue(value) {
	// 	this.setProperty('value', value);
	// }
}
LiteGraph.registerNodeType("players/getRandom", GetRandomPlayer);