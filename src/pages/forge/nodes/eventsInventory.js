import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

const nodeColor = forge.nodeColor.event;

export class OnEquipmentPickup extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer,
			equipment: new FOOD()
		}
    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Acquiring Player", forge.type.player);
    this.addStaticOutput("Equipment Type", forge.type.equipmentType);
    this.addStaticOutput("Equipment Position", forge.type.position);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Equipment Pickup';
	}
	get title() {
		return OnEquipmentPickup.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.equipment.equipmentType);
		this.setOutputData(3, this.properties.equipment.position);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsInventory/OnEquipmentPickup", OnEquipmentPickup);

export class OnEquipmentUsed extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer,
			equipment: new FOOD()
		}
    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Activating Player", forge.type.player);
    this.addStaticOutput("Equipment Type", forge.type.equipmentType);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Equipment Used';
	}
	get title() {
		return OnEquipmentUsed.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.equipment.equipmentType);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsInventory/OnEquipmentUsed", OnEquipmentUsed);

export class OnGrenadePickup extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer,
			equipment: new FOOD()
		}
    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Player", forge.type.player);
    this.addStaticOutput("Grenade Type", forge.type.equipmentType);
    this.addStaticOutput("Grenade Position", forge.type.position);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Grenade Pickup';
	}
	get title() {
		return OnGrenadePickup.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.equipment.equipmentType);
		this.setOutputData(3, this.properties.equipment.position);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsInventory/OnGrenadePickup", OnGrenadePickup);

export class OnGrenadeThrow extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer,
			equipment: new FOOD()
		}
    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Player", forge.type.player);
    this.addStaticOutput("Grenade Type", forge.type.equipmentType);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Grenade Throw';
	}
	get title() {
		return OnGrenadeThrow.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.equipment.equipmentType);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsInventory/OnGrenadeThrow", OnGrenadeThrow);

export class OnWeaponAdded extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer,
			weapon: new FOOD()
		}
    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Acquiring Player", forge.type.player);
    this.addStaticOutput("Weapon", forge.type.object);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Weapon Added';
	}
	get title() {
		return OnWeaponAdded.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.weapon);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsInventory/OnWeaponAdded", OnWeaponAdded);

export class OnWeaponDropped extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer,
			weapon: new FOOD()
		}
    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Player", forge.type.player);
    this.addStaticOutput("Weapon", forge.type.object);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Weapon Dropped';
	}
	get title() {
		return OnWeaponDropped.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.weapon);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsInventory/OnWeaponDropped", OnWeaponDropped);

export class OnWeaponLowAmmo extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer,
			weapon: new FOOD()
		}
    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Player", forge.type.player);
    this.addStaticOutput("Weapon", forge.type.object);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Weapon Low Ammo';
	}
	get title() {
		return OnWeaponLowAmmo.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.weapon);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsInventory/OnWeaponLowAmmo", OnWeaponLowAmmo);

export class OnWeaponNoAmmo extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer,
			weapon: new FOOD()
		}
    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Player", forge.type.player);
    this.addStaticOutput("Weapon", forge.type.object);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Weapon No Ammo';
	}
	get title() {
		return OnWeaponNoAmmo.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.weapon);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsInventory/OnWeaponNoAmmo", OnWeaponNoAmmo);

export class OnWeaponPickup extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer,
			weapon: new FOOD()
		}
    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Acquiring Player", forge.type.player);
    this.addStaticOutput("Weapon", forge.type.object);
    this.addStaticOutput("Weapon Position", forge.type.position);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Weapon Pickup';
	}
	get title() {
		return OnWeaponPickup.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.weapon);
		this.setOutputData(3, this.properties.weapon.position);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsInventory/OnWeaponPickup", OnWeaponPickup);

export class OnWeaponRefillPickup extends ForgeNode {
	constructor() {
		super();
		this.properties = {
			player: game.defaultPlayer,
			weapon: new FOOD()
		}
    this.addStaticOutput("Event", LiteGraph.EVENT);
    this.addStaticOutput("Acquiring Player", forge.type.player);
    this.addStaticOutput("Weapon", forge.type.object);
    this.addStaticOutput("Weapon Position", forge.type.position);
    this.addStaticOutput("Is Fully Picked Up", forge.type.boolean);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Weapon Refill Pickup';
	}
	get title() {
		return OnWeaponRefillPickup.title;
	}

	get color() {
		return nodeColor;
	}

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.weapon);
		this.setOutputData(3, this.properties.weapon.position);
		this.setOutputData(4, !this.properties.weapon.isAlive);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsInventory/OnWeaponRefillPickup", OnWeaponRefillPickup);