import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

const nodeColor = forge.nodeColor.inventory;

export class AdjustPlayerEquipmentCharges extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Player", forge.type.player);
		this.addStaticInput("Charge Count", forge.type.number);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Adjust Player Equipment Charges';
	}
	get title() {
		return AdjustPlayerEquipmentCharges.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventoryEquipment/AdjustPlayerEquipmentCharges", AdjustPlayerEquipmentCharges);

export class AdjustPlayerGrenades extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Player", forge.type.player);
		this.addStaticInput("Grenade Type", forge.type.grenadeType);
		this.addStaticInput("Grenade Count", forge.type.number);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Adjust Player Grenades';
	}
	get title() {
		return AdjustPlayerGrenades.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventoryEquipment/AdjustPlayerGrenades", AdjustPlayerGrenades);

export class AreSameEquipmentType extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Equipment A", forge.type.equipment);
		this.addStaticInput("Equipment B", forge.type.equipment);

    this.addStaticOutput("Are Same Equipment Type", forge.type.boolean);
	}

	static get title() {
		return 'Are Same Equipment Type';
	}
	get title() {
		return AreSameEquipmentType.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		// TODO
		this.setOutputData(0, false);
	}
}
LiteGraph.registerNodeType("inventory/AreSameEquipmentType", AreSameEquipmentType);

export class EmptyPlayerEquipment extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Player", forge.type.player);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Empty Player Equipment';
	}
	get title() {
		return EmptyPlayerEquipment.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventoryEquipment/EmptyPlayerEquipment", EmptyPlayerEquipment);

export class EmptyPlayerGrenades extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Event", LiteGraph.ACTION);
		this.addStaticInput("Player", forge.type.player);

    this.addStaticOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Empty Player Grenades';
	}
	get title() {
		return EmptyPlayerGrenades.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventoryEquipment/EmptyPlayerGrenades", EmptyPlayerGrenades);

export class GetEquipmentType extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Equipment", forge.type.equipment);

    this.addStaticOutput("Equipment Type", forge.type.equipmentType);
    this.addStaticOutput("Is Powerup", forge.type.boolean);
	}

	static get title() {
		return 'Get Equipment Type';
	}
	get title() {
		return GetEquipmentType.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const equipment = this.getInputData(0); 
		if (!equipment || !equipment.isEquipment) return;

		this.setOutputData(0, equipment.type);
		this.setOutputData(1, equipment.isPowerup);
	}
}
LiteGraph.registerNodeType("inventoryEquipment/GetEquipmentType", GetEquipmentType);

export class GetIsHoldingAnyEquipment extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Player", forge.type.player);

    this.addStaticOutput("Is Holding Any Equipment", forge.type.boolean);
    this.addStaticOutput("Is Holding Powerup", forge.type.boolean);
    this.addStaticOutput("Equipment Type", forge.type.equipmentType);
	}

	static get title() {
		return 'Get Is Holding Any Equipment';
	}
	get title() {
		return GetIsHoldingAnyEquipment.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const player = this.getInputData(0); 
		if (!player) return;

		this.setOutputData(0, player.equipment ? true : false);
		this.setOutputData(1, player?.equipment?.isPowerup);
		this.setOutputData(2, player?.equipment?.type);
	}
}
LiteGraph.registerNodeType("inventoryEquipment/GetIsHoldingAnyEquipment", GetIsHoldingAnyEquipment);

export class GetIsHoldingEquipmentType extends ForgeNode {
	constructor() {
		super();

		this.addStaticInput("Player", forge.type.player);
		this.addStaticInput("Equipment Type", forge.type.equipmentType);

    this.addStaticOutput("Is Holding Equipment Type", forge.type.boolean);
	}

	static get title() {
		return 'Get Is Holding Equipment Type';
	}
	get title() {
		return GetIsHoldingEquipmentType.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const player = this.getInputData(0); 
		if (!player) return;
		const equipmentType = this.getInputData(1) ?? '';

		this.setOutputData(0, player.equipment && player.equipment.type === equipmentType ? true : false);
	}
}
LiteGraph.registerNodeType("inventoryEquipment/GetIsHoldingEquipmentType", GetIsHoldingEquipmentType);

// export class GetLoadoutGrenadeCount extends ForgeNode {
// 	constructor() {
// 		super();

// 		this.addStaticInput("Player", forge.type.player);
// 		this.addStaticInput("Equipment Type", forge.type.equipmentType);

//     this.addStaticOutput("Is Holding Equipment Type", forge.type.boolean);
// 	}

// 	static get title() {
// 		return 'Get Is Holding Equipment Type';
// 	}
// 	get title() {
// 		return GetIsHoldingEquipmentType.title;
// 	}

// 	get color() {
// 		return nodeColor;
// 	}

// 	onExecute() {
// 		const player = this.getInputData(0); 
// 		if (!player) return;
// 		const equipmentType = this.getInputData(1) ?? '';

// 		this.setOutputData(0, player.equipment && player.equipment.type === equipmentType ? true : false);
// 	}
// }
// LiteGraph.registerNodeType("inventoryEquipment/GetIsHoldingEquipmentType", GetIsHoldingEquipmentType);