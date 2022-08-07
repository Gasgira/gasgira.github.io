import { LiteGraph } from 'lib/LiteGraph';
import { EventEmitter } from 'eventEmitter';
import { Component } from 'component';

export const forge = {
	type: {
		audioZoneEffect: 'audioZoneEffect',
		areaMonitor: 'areaMonitor',
		boolean: 'boolean',
		botDifficulty: 'botDifficulty',
		deathContext: 'deathContext',
		equipment: 'equipment',
		equipmentType: 'equipmentType',
		grenadeType: 'grenadeType',
		number: 'number',
		percent: 'number',
		identifier: 'identifier',
		player: 'object',
		players: 'array',
		position: 'vec3',
		object: 'object',
		objects: 'array',
		string: 'string',
		team: 'team',
		uiMessage: 'message',
		uiMessageTemplate: 'messageTemplate',
		vector: 'vec3',
		vehicle: 'object',
		vehicleType: 'vehicleType',
		weapon: 'weapon',
		weaponType: 'weaponType',
		weaponConfiguration: 'weaponConfiguration',
		weaponAdditionMethod: 'weaponAdditionMethod'
	},
	nodeColor: {
		event: '#c2dfe3',
		logic: '#fcfcfc',
		math: '#ebcfb2',
		object: '#d7dae5',
		variable: '#d4a0a7',
		gameMode: '#8bae9e',
		inventory: '#d4d6e3'
	},
	weaponTypes: new Map([]),
	equipmentTypes: new Map([
		['customEquipmentA', 'Custom Equipment A']
	]),
	vehicleTypes: new Map([])
}

export class FOOD {
	constructor(properties) {
		this.properties = {};
		if (properties) this.properties = {...properties}
	}

	get isPlayer() {
		return false;
	}

	get isAlive() {
		return true;
	}

	get title() {
		return this?.properties?.title ?? 'Object Reference';
	}

	get position() {
		return this._position ??= [0, 0, 0];
	}
	get rotation() {
		return this._rotation ??= [0, 0, 0];
	}
	get transform() {
		return {
			position: this.position,
			rotation: this.rotation
		};
	}

	get equipmentType() {
		return '';
	}

	get team() {
		return 0;
	}

	toJSON() {
		return {
			title: this.title
		}
	}

	toString() {
		return `${this.title}`;
	}
}

export class Player extends FOOD {
	constructor(name) {
		super();
		this.properties.title = name || 'Player';

		this._crouching = false;
		this._weapons = [];
		this._equipment = undefined;
	}

	get isPlayer() {
		return true;
	}

	crouch() {
		console.log(`[Player.crouch]`, this);
		this._crouching = !this._crouching;
	}
	get isCrouching() {
		return this?._crouching ?? false;
	}

	toJSON() {
		return `[PLAYER] ${this.title}`;
	}

	toString() {
		return this.toJSON();
	}

	get equippedWeapon() {
		return this._weapons?.[0];
	}

	get unEquippedWeapon() {
		return this._weapons?.[1];
	}
}

export class Weapon extends FOOD {
	constructor(type) {
		super();

		if (type) this._type = type;
	}

	get isWeapon() {
		return true;
	}

	get type() {
		return this?._type ?? 'Unarmed';
	}

	get base() {
		return this?._configuration ?? 'Unarmed';
	}

	get configuration() {
		return this?._configuration ?? 'Unarmed';
	}

	get maximumMagazineCapacity() {
		return 36;
	}

	get magazineRounds() {
		return 18;
	}
}

export class Equipment extends FOOD {
	constructor(type) {
		super();

		if (type) this._type = type;
	}

	get isEquipment() {
		return true;
	}

	get type() {
		return this?._type ?? 'Unarmed';
	}

	get charges() {
		return 3;
	}
}

class Game {
	get defaultState() {
		return  {
			players: [new Player('Player0')],
			roundNumber: 1,
			roundTimeLimit: 600,
			maxRounds: 1,
			scoreLimit: 50
		};
	}

	get state() {
		return this._state ??= { ...this.defaultState };
	}

	reset() {
		console.log(`[Game] reset`);
		this._state = { ...this.defaultState };
		this.messenger.clearAll();
		this.customEvents.clearAll();
		this.customEventsGlobal.clearAll();
	}

	get messenger() {
		return this._messenger ??= new EventEmitter();
	}

	get customEvents() {
		return this._customEvents ??= new EventEmitter();
	}

	get customEventsGlobal() {
		return this._customEventsGlobal ??= new EventEmitter();
	}

	get roundStartDate() {
		return this.state.roundStartDate ??= new Date();
	}

	get roundEndDate() {
		return this.state.roundEndDate ??= new Date(new Date(this.roundStartDate).setSeconds(this.roundStartDate.getSeconds() + this.state.roundTimeLimit));
	}

	get roundSecondsElapsed() {
		const start = this.roundStartDate;
		return (new Date() - start) / 1000;
	}

	get roundSecondsRemaining() {
		return this.state.roundTimeLimit - this.roundSecondsElapsed;
	}

	setRemainingTime(seconds) {
		if (seconds < 0) return;
		const now = new Date();
		const newEndDate = new Date(new Date(now).setSeconds(now.getSeconds() + seconds));
		this.state.roundEndDate = newEndDate;
		return this.state.roundEndDate;
	}

	setScoreToWin(score) {
		if (!score) return;
		this.state.scoreLimit = parseInt(score);
	}

	getTeamPointsTotal(team) {
		return 0;
	}

	getTeamPointsRound(team) {
		return 0;
	}

	get defaultPlayer() {
		return this.state.players[0] ?? new Player();
	}

	get randomPlayer() {
		// TODO rng
		return this.state.players[0] ?? new Player();
	}

	addPlayer() {
		const length = this.state.players.length;
		if (length < 32)
		{
			this.state.players.push(new Player(`Player${length-1}`));
		}
	}

	removePlayer(player) {
		// TODO
	}

	getPlayerPointsTotal(player) {
		return 0;
	}

	getPlayerPointsRound(player) {
		return 0;
	}

	getPersonalScoreTotal(player) {
		return 0;
	}

	getPersonalScoreRound(player) {
		return 0;
	}

	get pointsToWin() {
		return 1;
	}

	get roundNumber() {
		return this.state.roundNumber;
	}

	get maxRounds() {
		return this.state.maxRounds;
	}

	endRound({
		endGame,
		condition,
		winner
	}) {
		if (endGame)
		{
			this.messenger.emit('gameEnd', condition, winner);
			return;
		}
		this.messenger.emit('roundEnd', this.state.roundNumber);
		this.state.roundNumber = this.state.roundNumber + 1;
		this.messenger.emit('roundstart', this.state.roundNumber);
	}

	toJSON() {
		return this.state;
	}

	toString() {
		return JSON.stringify(this.toJSON());
	}
}
export const game = new Game();

export class ForgeNode {
	static get shape() {
		return LiteGraph.BOX_SHAPE;
	}

	get color() {
		return this._color ?? 'red';
	}
	set color(color) {
		if (color && typeof color === 'string') this._color = color;
	}

	toString() {
		return this.title ?? 'Node';
	}

	toJSON() {
		return this.title ?? 'Node';
	}
}

class Logger extends Component {
	get logs() {
		return this._logs ??= new Array();
	}

	clear() {
		this._logs ??= new Array();
	}

	submit({ level, message, caller }) {
		this.logs.push({
			date: new Date().toISOString(),
			level,
			message: `${message}`,
			caller: `${caller}`
		})
	}

	log(caller, message) {
		if (typeof caller === 'undefined' || typeof message === 'undefined') return;
		this.submit({
			level: 5,
			caller,
			message
		});
	}

	warn(caller, message) {
		if (typeof caller === 'undefined' || typeof message === 'undefined') return;
		this.submit({
			level: 4,
			caller,
			message
		});
	}

	error(caller, message) {
		if (typeof caller === 'undefined' || typeof message === 'undefined') return;
		this.submit({
			level: 3,
			caller,
			message
		});
	}
}

export const logger = new Logger();