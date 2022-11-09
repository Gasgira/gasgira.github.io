import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

export class OnGameStart extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

    this.addStaticOutput("Event", LiteGraph.ACTION);

		this.triggered = false;
	}

	static get title() {
		return 'On Game Start';
	}

	onStart() {
		this.triggered = false;
	}

	onStop() {
		this.triggered = false;
	}

	onExecute() {
		if (!this.triggered) this.triggerSlot(0);
		this.triggered = true;
	}
}
LiteGraph.registerNodeType("events/gameStart", OnGameStart);

export class OnGameplayStart extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			roundNumber: 1
		}
    this.addStaticOutput("Event", LiteGraph.ACTION);
    this.addStaticOutput("Round Number", forge.type.number);
		this.color = forge.nodeColor.event;

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Gameplay Start';
	}

	onTrigger() {
		this.setOutputData(1, this.properties.roundNumber);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("events/OnGameplayStart", OnGameplayStart);

export class OnObjectDamaged extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			damageAmount: 1,
			attackingObject: game.defaultPlayer
		}
		this.addStaticInput("Object", forge.type.object);

    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Attacking Object", forge.type.object);
    this.addStaticOutput("Damage Amount", forge.type.number);
		this.color = forge.nodeColor.event;

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Object Damaged';
	}

	onTrigger() {
		this.setOutputData(1, this.properties.attackingObject);
		this.setOutputData(2, this.properties.damageAmount);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("events/OnObjectDamaged", OnObjectDamaged);

export class OnObjectDestroyed extends ForgeNode {
	constructor() {
		super();
		this.addStaticInput("Object", forge.type.object);

    this.addStaticOutput("Event", LiteGraph.EVENT);
		this.color = forge.nodeColor.event;

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Object Destroyed';
	}
	get title() {
		return OnObjectDestroyed.title;
	}

	onTrigger() {
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("events/OnObjectDestroyed", OnObjectDestroyed);

export class OnObjectEnteredArea extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.addStaticInput("Area Monitor", forge.type.areaMonitor);

    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Object", forge.type.object);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Object Entered Area';
	}
	get title() {
		return OnObjectEnteredArea.title;
	}

	onTrigger() {
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("events/OnObjectEnteredArea", OnObjectEnteredArea);

export class OnObjectExitedArea extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.addStaticInput("Area Monitor", forge.type.areaMonitor);

    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Object", forge.type.object);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Object Exited Area';
	}
	get title() {
		return OnObjectExitedArea.title;
	}

	onTrigger() {
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("events/OnObjectExitedArea", OnObjectExitedArea);

export class OnObjectSpawned extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.addStaticInput("Object", forge.type.object);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Object Spawned';
	}
	get title() {
		return OnObjectSpawned.title;
	}

	onTrigger() {
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("events/OnObjectSpawned", OnObjectSpawned);

export class OnRoundEnd extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Round Number", forge.type.number);

		game.messenger.on('roundEnd', () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Round End';
	}
	get title() {
		return OnRoundEnd.title;
	}

	onTrigger() {
		this.setOutputData(1, game.state.roundNumber);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("events/OnRoundEnd", OnRoundEnd);

export class OnRoundStart extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Round Number", forge.type.number);

		game.messenger.on('roundStart', () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Round Start';
	}
	get title() {
		return OnRoundStart.title;
	}

	onTrigger() {
		this.setOutputData(1, game.state.roundNumber);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("events/OnRoundStart", OnRoundStart);

export class OnVehicleEntered extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.properties = {
			enteringPlayer: game.defaultPlayer,
			vehicle: new FOOD({ title: 'Vehicle' })
		}

    this.addStaticOutput("Event", LiteGraph.EVENT);
		this.addStaticOutput("Entering Player", forge.type.player);
		this.addStaticOutput("Vehicle", forge.type.vehicle);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Vehicle Entered';
	}
	get title() {
		return OnVehicleEntered.title;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.enteringPlayer);
		this.setOutputData(2, this.properties.vehicle);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("events/OnVehicleEntered", OnVehicleEntered);

export class OnVehicleExited extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.properties = {
			exitingPlayer: game.defaultPlayer,
			vehicle: new FOOD({ title: 'Vehicle' })
		}

    this.addStaticOutput("Event", LiteGraph.EVENT);
		this.addStaticOutput("Exiting Player", forge.type.player);
		this.addStaticOutput("Vehicle", forge.type.vehicle);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Vehicle Exited';
	}
	get title() {
		return OnVehicleExited.title;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.exitingPlayer);
		this.setOutputData(2, this.properties.vehicle);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("events/OnVehicleExited", OnVehicleExited);

export class OnVehicleHijacked extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.properties = {
			enteringPlayer: game.defaultPlayer,
			vehicle: new FOOD({ title: 'Vehicle' })
		}

    this.addStaticOutput("Event", LiteGraph.EVENT);
		this.addStaticOutput("Entering Player", forge.type.player);
		this.addStaticOutput("Vehicle", forge.type.vehicle);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Vehicle Hijacked';
	}
	get title() {
		return OnVehicleHijacked.title;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.enteringPlayer);
		this.setOutputData(2, this.properties.vehicle);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("events/OnVehicleHijacked", OnVehicleHijacked);

export class OnVehicleOverturned extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.properties = {
			evictedPlayer: game.defaultPlayer,
			vehicle: new FOOD({ title: 'Vehicle' })
		}

    this.addStaticOutput("Event", LiteGraph.EVENT);
		this.addStaticOutput("Evicted Player", forge.type.player);
		this.addStaticOutput("Vehicle", forge.type.vehicle);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Vehicle Hijacked';
	}
	get title() {
		return OnVehicleOverturned.title;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.evictedPlayer);
		this.setOutputData(2, this.properties.vehicle);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("events/OnVehicleOverturned", OnVehicleOverturned);