import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

const nodeColor = forge.nodeColor.event;

export class OnPlayerCrouch extends ForgeNode {
	constructor() {
		super();
		this._hasTriggered = false;
		this.properties = {
			player: game.defaultPlayer
		}
    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Player", forge.type.player);
    this.addStaticOutput("Is Crouching", forge.type.boolean);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => {
			const player = game.defaultPlayer;
			player.crouch();
			this.onTrigger(player);
		});

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Player Crouch';
	}
	get title() {
		return OnPlayerCrouch.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger(player) {
		this.setOutputData(1, player);
		this.setOutputData(2, player.isCrouching);
		this.triggerSlot(0);
	}

	// onPropertyChanged(name, value) {
	// 	// console.log(name, value);
	// 	if (name === 'isCrouched' && typeof value === 'boolean')
	// 	{
	// 		if (!this._hasTriggered && !value) return this._hasTriggered = true;
	// 		this.onTrigger();
	// 	}
	// }
}
LiteGraph.registerNodeType("eventsPlayers/crouch", OnPlayerCrouch);

export class OnPlayerExited extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer
		}
    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Player", forge.type.player);
    this.addStaticOutput("Team", forge.type.team);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Player Exited';
	}
	get title() {
		return OnPlayerExited.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.player.team);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsPlayers/OnPlayerExited", OnPlayerExited);

export class OnPlayerJoined extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer
		}
    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Player", forge.type.player);
    this.addStaticOutput("Joined In Progress", forge.type.boolean);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
		// TODO respond to game messages
	}

	static get title() {
		return 'On Player Joined';
	}
	get title() {
		return OnPlayerJoined.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, false);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsPlayers/OnPlayerJoined", OnPlayerJoined);

export class OnPlayerKilled extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			killedPlayer: game.defaultPlayer,
			killingPlayer: game.defaultPlayer
		}
    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Killed Player", forge.type.player);
    this.addStaticOutput("Killing Player", forge.type.boolean);
    this.addStaticOutput("Death Context", forge.type.deathContext);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Player Killed';
	}
	get title() {
		return OnPlayerKilled.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.player);
		this.setOutputData(3, '');
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsPlayers/OnPlayerKilled", OnPlayerKilled);

export class OnPlayerMark extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer,
			mark: new FOOD()
		}
		this.properties.mark.targetList = [];

    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Player", forge.type.player);
    this.addStaticOutput("Callout Position", forge.type.position);
    this.addStaticOutput("Target List", forge.type.objects);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Player Mark';
	}
	get title() {
		return OnPlayerMark.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.mark.position);
		this.setOutputData(3, this.properties.mark.targetList);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsPlayers/OnPlayerMark", OnPlayerMark);

export class OnPlayerSpawned extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer
		}

    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Player", forge.type.player);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Player Spawned';
	}
	get title() {
		return OnPlayerSpawned.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsPlayers/OnPlayerSpawned", OnPlayerSpawned);

export class OnPlayerTeamChange extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer
		}

    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Player", forge.type.player);
    this.addStaticOutput("Old Team", forge.type.team);
    this.addStaticOutput("New Team", forge.type.team);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Player Team Change';
	}
	get title() {
		return OnPlayerTeamChange.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.player.team);
		this.setOutputData(3, this.properties.player.team);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsPlayers/OnPlayerTeamChange", OnPlayerTeamChange);

export class WasAssistedKill extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Death Context", forge.type.deathContext);

    this.addStaticOutput("Was Assisted Kill", forge.type.boolean);
    this.addStaticOutput("Assisting Players", forge.type.players);
	}

	static get title() {
		return 'Was Assisted Kill';
	}
	get title() {
		return WasAssistedKill.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const deathContext = this.getInputData(0);
		if (!deathContext) return;

		this.setOutputData(0, Array.isArray(deathContext?.assistants) && deathContext.assistants.length ? true : false);
		this.setOutputData(1, deathContext?.assistants ?? []);
	}
}
LiteGraph.registerNodeType("eventsPlayers/WasAssistedKill", WasAssistedKill);

export class WasGrenadeKill extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Death Context", forge.type.deathContext);

    this.addStaticOutput("Was Grenade Kill", forge.type.boolean);
	}

	static get title() {
		return 'Was Grenade Kill';
	}
	get title() {
		return WasGrenadeKill.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const deathContext = this.getInputData(0);
		if (!deathContext) return;

		this.setOutputData(0, false);
	}
}
LiteGraph.registerNodeType("eventsPlayers/WasGrenadeKill", WasGrenadeKill);

export class WasMeleeKill extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Death Context", forge.type.deathContext);

    this.addStaticOutput("Was Melee Kill", forge.type.boolean);
    this.addStaticOutput("Was Backsmack", forge.type.boolean);
	}

	static get title() {
		return 'Was Melee Kill';
	}
	get title() {
		return WasMeleeKill.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const deathContext = this.getInputData(0);
		if (!deathContext) return;

		this.setOutputData(0, false);
		this.setOutputData(1, false);
	}
}
LiteGraph.registerNodeType("eventsPlayers/WasMeleeKill", WasMeleeKill);

export class WasWeaponKill extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Death Context", forge.type.deathContext);

    this.addStaticOutput("Was Weapon Kill", forge.type.boolean);
    this.addStaticOutput("Was Headshot", forge.type.boolean);
	}

	static get title() {
		return 'Was Weapon Kill';
	}
	get title() {
		return WasWeaponKill.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const deathContext = this.getInputData(0);
		if (!deathContext) return;

		this.setOutputData(0, false);
		this.setOutputData(1, false);
	}
}
LiteGraph.registerNodeType("eventsPlayers/WasWeaponKill", WasWeaponKill);

export class WasWithGrenadeType extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Death Context", forge.type.deathContext);
		this.addStaticInput("Grenade Type", forge.type.grenadeType);

    this.addStaticOutput("Was With Grenade Type", forge.type.boolean);
	}

	static get title() {
		return 'Was With Grenade Type';
	}
	get title() {
		return WasWithGrenadeType.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const deathContext = this.getInputData(0);
		if (!deathContext) return;

		this.setOutputData(0, false);
	}
}
LiteGraph.registerNodeType("eventsPlayers/WasWithGrenadeType", WasWithGrenadeType);

export class WasWithSpecificVehicle extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Death Context", forge.type.deathContext);
		this.addStaticInput("Vehicle", forge.type.object);

    this.addStaticOutput("Was With Specific Vehicle", forge.type.boolean);
	}

	static get title() {
		return 'Was With Specific Vehicle';
	}
	get title() {
		return WasWithSpecificVehicle.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const deathContext = this.getInputData(0);
		if (!deathContext) return;

		this.setOutputData(0, false);
	}
}
LiteGraph.registerNodeType("eventsPlayers/WasWithSpecificVehicle", WasWithSpecificVehicle);

export class WasWithSpecificWeapon extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Death Context", forge.type.deathContext);
		this.addStaticInput("Weapon", forge.type.object);

    this.addStaticOutput("Was With Specific Weapon", forge.type.boolean);
	}

	static get title() {
		return 'Was With Specific Weapon';
	}
	get title() {
		return WasWithSpecificWeapon.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const deathContext = this.getInputData(0);
		if (!deathContext) return;

		this.setOutputData(0, false);
	}
}
LiteGraph.registerNodeType("eventsPlayers/WasWithSpecificWeapon", WasWithSpecificWeapon);

export class WasWithVehicleType extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Death Context", forge.type.deathContext);
		this.addStaticInput("Vehicle Type", forge.type.vehicleType);

    this.addStaticOutput("Was With Vehicle Type", forge.type.boolean);
	}

	static get title() {
		return 'Was With Vehicle Type';
	}
	get title() {
		return WasWithVehicleType.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const deathContext = this.getInputData(0);
		if (!deathContext) return;

		this.setOutputData(0, false);
	}
}
LiteGraph.registerNodeType("eventsPlayers/WasWithVehicleType", WasWithVehicleType);

export class WasWithWeaponType extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Death Context", forge.type.deathContext);
		this.addStaticInput("Weapon Type", forge.type.weaponType);

    this.addStaticOutput("Was With Weapon Type", forge.type.boolean);
	}

	static get title() {
		return 'Was With Weapon Type';
	}
	get title() {
		return WasWithWeaponType.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const deathContext = this.getInputData(0);
		if (!deathContext) return;

		this.setOutputData(0, false);
	}
}
LiteGraph.registerNodeType("eventsPlayers/WasWithWeaponType", WasWithWeaponType);