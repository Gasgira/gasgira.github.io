import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

const nodeColor = forge.nodeColor.inventory;

export class AdjustPlayerEquipmentCharges extends ForgeNode {
	constructor() {
		super();

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Player", forge.type.player);
		this.addInput("Charge Count", forge.type.number);

    this.addOutput("Event", LiteGraph.EVENT);

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

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Player", forge.type.player);
		this.addInput("Grenade Type", forge.type.grenadeType);
		this.addInput("Grenade Count", forge.type.number);

    this.addOutput("Event", LiteGraph.EVENT);

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

		this.addInput("Equipment A", forge.type.equipment);
		this.addInput("Equipment B", forge.type.equipment);

    this.addOutput("Are Same Equipment Type", forge.type.boolean);
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

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Player", forge.type.player);

    this.addOutput("Event", LiteGraph.EVENT);

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