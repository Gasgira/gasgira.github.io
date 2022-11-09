import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

const nodeColor = forge.nodeColor.gameMode;

export class AdjustPersonalScore extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Player", forge.type.player);
		this.addStaticInput("Score Adjustment", forge.type.number);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Adjust Personal Score';
	}
	get title() {
		return AdjustPersonalScore.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("gameMode/AdjustPersonalScore", AdjustPersonalScore);

export class AdjustTeamPoints extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Team", forge.type.team);
		this.addStaticInput("Score Adjustment", forge.type.number);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Adjust Team Points';
	}
	get title() {
		return AdjustTeamPoints.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("gameMode/AdjustTeamPoints", AdjustTeamPoints);

export class EndRound extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("End Game", forge.type.boolean);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'End Round';
	}
	get title() {
		return EndRound.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		const endGame = this.getInputData(1) ?? this?.properties?.endGame ?? false;
		game.endRound({
			endGame
		});
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("gameMode/EndRound", EndRound);

export class EndRoundAllLose extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("End Game", forge.type.boolean);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'End Round - All Lose';
	}
	get title() {
		return EndRoundAllLose.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		const endGame = this.getInputData(1) ?? this?.properties?.endGame ?? false;
		game.endRound({
			endGame,
			winner: 'allLose'
		});
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("gameMode/EndRoundAllLose", EndRoundAllLose);

export class EndRoundAllTie extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("End Game", forge.type.boolean);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'End Round - All Tie';
	}
	get title() {
		return EndRoundAllTie.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		const endGame = this.getInputData(1) ?? this?.properties?.endGame ?? false;
		game.endRound({
			endGame,
			winner: 'allTie'
		});
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("gameMode/EndRoundAllTie", EndRoundAllTie);

export class EndRoundWinningPlayer extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Player", forge.type.player);
		this.addStaticInput("End Game", forge.type.boolean);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'End Round - Winning Player';
	}
	get title() {
		return EndRoundWinningPlayer.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		const endGame = this.getInputData(2) ?? this?.properties?.endGame ?? false;
		game.endRound({
			endGame,
			winner: this.getInputData(1)
		});
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("gameMode/EndRoundWinningPlayer", EndRoundWinningPlayer);

export class EndRoundWinningTeam extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Team", forge.type.team);
		this.addStaticInput("End Game", forge.type.boolean);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'End Round - Winning Team';
	}
	get title() {
		return EndRoundWinningTeam.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		const endGame = this.getInputData(2) ?? this?.properties?.endGame ?? false;
		game.endRound({
			endGame,
			winner: this.getInputData(1)
		});
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("gameMode/EndRoundWinningTeam", EndRoundWinningTeam);

export class GetCurrentRound extends ForgeNode {
	constructor() {
		super();

    this.addStaticOutput("Current Round", forge.type.number);
	}

	static get title() {
		return 'Get Current Round';
	}
	get title() {
		return GetCurrentRound.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		this.setOutputData(0, game.roundNumber);
	}
}
LiteGraph.registerNodeType("gameMode/GetCurrentRound", GetCurrentRound);

export class GetMaxRounds extends ForgeNode {
	constructor() {
		super();

    this.addStaticOutput("Current Round", forge.type.number);
	}

	static get title() {
		return 'Get Max Rounds';
	}
	get title() {
		return GetMaxRounds.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		this.setOutputData(0, game.maxRounds);
	}
}
LiteGraph.registerNodeType("gameMode/GetMaxRounds", GetMaxRounds);

export class GetPersonalScore extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Player", forge.type.player);

    this.addStaticOutput("Total Score", forge.type.number);
    this.addStaticOutput("Round Score", forge.type.number);
	}

	static get title() {
		return 'Get Personal Score';
	}
	get title() {
		return GetPersonalScore.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const player = this.getInputData(0);
		if (!player) return;

		this.setOutputData(0, game.getPersonalScoreTotal(player));
		this.setOutputData(1, game.getPersonalScoreRound(player));
	}
}
LiteGraph.registerNodeType("gameMode/GetPersonalScore", GetPersonalScore);

export class GetPlayerPoints extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Player", forge.type.player);

    this.addStaticOutput("Total Score", forge.type.number);
    this.addStaticOutput("Round Score", forge.type.number);
	}

	static get title() {
		return 'Get Player Points';
	}
	get title() {
		return GetPlayerPoints.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const player = this.getInputData(0);
		if (!player) return;

		this.setOutputData(0, game.getPlayerPointsTotal(player));
		this.setOutputData(1, game.getPlayerPointsRound(player));
	}
}
LiteGraph.registerNodeType("gameMode/GetPlayerPoints", GetPlayerPoints);

export class GetPointsToWin extends ForgeNode {
	constructor() {
		super();

    this.addStaticOutput("Score To Win", forge.type.number);
	}

	static get title() {
		return 'Get Points To Win';
	}
	get title() {
		return GetPointsToWin.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		this.setOutputData(0, game.pointsToWin);
	}
}
LiteGraph.registerNodeType("gameMode/GetPointsToWin", GetPointsToWin);

export class GetRoundTime extends ForgeNode {
	constructor() {
		super();

    this.addStaticOutput("Seconds Remaining", forge.type.number);
	}

	static get title() {
		return 'Get Round Time';
	}
	get title() {
		return GetRoundTime.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		this.setOutputData(0, game.roundSecondsRemaining);
	}
}
LiteGraph.registerNodeType("gameMode/GetRoundTime", GetRoundTime);

export class GetTeamPoints extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Team", forge.type.team);

    this.addStaticOutput("Total Score", forge.type.number);
    this.addStaticOutput("Round Score", forge.type.number);
	}

	static get title() {
		return 'Get Team Points';
	}
	get title() {
		return GetTeamPoints.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const team = this.getInputData(0);
		if (!team) return;

		this.setOutputData(0, game.getTeamPointsTotal(team));
		this.setOutputData(1, game.getTeamPointsRound(team));
	}
}
LiteGraph.registerNodeType("gameMode/GetTeamPoints", GetTeamPoints);

export class SetPointsToWin extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Score To Win", forge.type.number);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Set Points To Win';
	}
	get title() {
		return SetPointsToWin.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		const scoreToWin = this.getInputData(1);
		if (!scoreToWin) return;

		game.setScoreToWin(scoreToWin);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("gameMode/SetPointsToWin", SetPointsToWin);

export class SetRoundTime extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Seconds Remaining", forge.type.number);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Set Round Time';
	}
	get title() {
		return SetRoundTime.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		const secondsRemaining = this.getInputData(1);
		if (!secondsRemaining) return;

		game.setRemainingTime(secondsRemaining);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("gameMode/SetRoundTime", SetRoundTime);