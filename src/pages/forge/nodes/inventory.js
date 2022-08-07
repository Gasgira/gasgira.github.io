import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

const nodeColor = forge.nodeColor.inventory;

export class AddPlayerAmmoEquipped extends ForgeNode {
	constructor() {
		super();

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Player", forge.type.player);
		this.addInput("Refill Percent", forge.type.percent);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Add Player Ammo - Equipped';
	}
	get title() {
		return AddPlayerAmmoEquipped.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		const percent = this.getInputData(1) ?? this?.properties?.percent ?? 0;
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventory/AddPlayerAmmoEquipped", AddPlayerAmmoEquipped);

export class AddPlayerAmmoUnequipped extends ForgeNode {
	constructor() {
		super();

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Player", forge.type.player);
		this.addInput("Refill Percent", forge.type.percent);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Add Player Ammo - Unequipped';
	}
	get title() {
		return AddPlayerAmmoUnequipped.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		const percent = this.getInputData(1) ?? this?.properties?.percent ?? 0;
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventory/AddPlayerAmmoUnequipped", AddPlayerAmmoUnequipped);

export class AreSameWeaponType extends ForgeNode {
	constructor() {
		super();

		this.addInput("Weapon A", forge.type.weapon);
		this.addInput("Weapon B", forge.type.weapon);

    this.addOutput("Are Same Base Weapon Type", forge.type.boolean);
    this.addOutput("Are Same Weapon Type", forge.type.boolean);
	}

	static get title() {
		return 'Are Same Weapon Type';
	}
	get title() {
		return AreSameWeaponType.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		// TODO
		this.setOutputData(0, false);
		this.setOutputData(1, false);
	}
}
LiteGraph.registerNodeType("inventory/AreSameWeaponType", AreSameWeaponType);

export class DropSpecificWeapon extends ForgeNode {
	constructor() {
		super();

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Player", forge.type.player);
		this.addInput("Weapon", forge.type.weapon);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Drop Specific Weapon';
	}
	get title() {
		return DropSpecificWeapon.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventory/DropSpecificWeapon", DropSpecificWeapon);

export class DropWeaponOfType extends ForgeNode {
	constructor() {
		super();

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Player", forge.type.player);
		this.addInput("Weapon Type", forge.type.weaponType);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Drop Weapon of Type';
	}
	get title() {
		return DropWeaponOfType.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventory/DropWeaponOfType", DropWeaponOfType);

export class EmptyPlayerAmmo extends ForgeNode {
	constructor() {
		super();

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Player", forge.type.player);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Empty Player Ammo';
	}
	get title() {
		return EmptyPlayerAmmo.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventory/EmptyPlayerAmmo", EmptyPlayerAmmo);

export class GetIsHoldingSpecificWeapon extends ForgeNode {
	constructor() {
		super();

		this.addInput("Player", forge.type.player);
		this.addInput("Weapon", forge.type.weapon);

    this.addOutput("Is Holding Specific Weapon", forge.type.boolean);
	}

	static get title() {
		return 'Get Is Holding Specific Weapon';
	}
	get title() {
		return GetIsHoldingSpecificWeapon.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		// TODO
		this.setOutputData(0, false);
	}
}
LiteGraph.registerNodeType("inventory/GetIsHoldingSpecificWeapon", GetIsHoldingSpecificWeapon);

export class GetIsHoldingWeaponType extends ForgeNode {
	constructor() {
		super();

		this.addInput("Player", forge.type.player);
		this.addInput("Weapon Type", forge.type.weaponType);

    this.addOutput("Is Holding Weapon Type", forge.type.boolean);
	}

	static get title() {
		return 'Get Is Holding Weapon Type';
	}
	get title() {
		return GetIsHoldingWeaponType.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		// TODO
		this.setOutputData(0, false);
	}
}
LiteGraph.registerNodeType("inventory/GetIsHoldingWeaponType", GetIsHoldingWeaponType);

export class GetPlayerWeapons extends ForgeNode {
	constructor() {
		super();

		this.addInput("Player", forge.type.player);

    this.addOutput("Equipped Weapon", forge.type.weapon);
    this.addOutput("Unequipped Weapon", forge.type.weapon);
	}

	static get title() {
		return 'Get Player Weapons';
	}
	get title() {
		return GetPlayerWeapons.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const player = this.getInputData(0); 
		if (!player || !player.isPlayer) return;

		this.setOutputData(0, player.equippedWeapon);
		this.setOutputData(1, player.unEquippedWeapon);
	}
}
LiteGraph.registerNodeType("inventory/GetPlayerWeapons", GetPlayerWeapons);

export class GetWeaponMagazineCapacity extends ForgeNode {
	constructor() {
		super();

		this.addInput("Weapon", forge.type.weapon);

    this.addOutput("Maximum Rounds", forge.type.weapon);
	}

	static get title() {
		return 'Get Weapon Magazine Capacity';
	}
	get title() {
		return GetWeaponMagazineCapacity.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const weapon = this.getInputData(0); 
		if (!weapon || !player.isWeapon) return;

		this.setOutputData(0, weapon.maximumMagazineCapacity);
	}
}
LiteGraph.registerNodeType("inventory/GetWeaponMagazineCapacity", GetWeaponMagazineCapacity);

export class GetWeaponMagazineRounds extends ForgeNode {
	constructor() {
		super();

		this.addInput("Weapon", forge.type.weapon);

    this.addOutput("Rounds", forge.type.weapon);
	}

	static get title() {
		return 'Get Weapon Magazine Rounds';
	}
	get title() {
		return GetWeaponMagazineRounds.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const weapon = this.getInputData(0); 
		if (!weapon || !player.isWeapon) return;

		this.setOutputData(0, weapon.magazineRounds);
	}
}
LiteGraph.registerNodeType("inventory/GetWeaponMagazineRounds", GetWeaponMagazineRounds);

export class GetWeaponType extends ForgeNode {
	constructor() {
		super();

		this.addInput("Weapon", forge.type.weapon);

    this.addOutput("Weapon Type", forge.type.weaponType);
    this.addOutput("Base Weapon", forge.type.weapon);
    this.addOutput("Configuration", forge.type.weaponConfiguration);
	}

	static get title() {
		return 'Get Weapon Type';
	}
	get title() {
		return GetWeaponType.title;
	}

	get color() {
		return nodeColor;
	}

	onExecute() {
		const weapon = this.getInputData(0); 
		if (!weapon || !player.isWeapon) return;

		this.setOutputData(0, weapon.type);
		this.setOutputData(1, weapon.base);
		this.setOutputData(2, weapon.configuration);
	}
}
LiteGraph.registerNodeType("inventory/GetWeaponType", GetWeaponType);

export class GivePlayerNewWeapon extends ForgeNode {
	constructor() {
		super();

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Player", forge.type.player);
		this.addInput("Weapon Type", forge.type.weaponType);
		this.addInput("Weapon Addition Method", forge.type.weaponAdditionMethod);
		this.addInput("Wait Until Completion", forge.type.boolean);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Give Player New Weapon';
	}
	get title() {
		return GivePlayerNewWeapon.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventory/GivePlayerNewWeapon", GivePlayerNewWeapon);

export class GivePlayerSpecificWeapon extends ForgeNode {
	constructor() {
		super();

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Player", forge.type.player);
		this.addInput("Weapon", forge.type.weapon);
		this.addInput("Weapon Addition Method", forge.type.weaponAdditionMethod);
		this.addInput("Wait Until Completion", forge.type.boolean);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Give Player Specific Weapon';
	}
	get title() {
		return GivePlayerSpecificWeapon.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventory/GivePlayerSpecificWeapon", GivePlayerSpecificWeapon);

export class RefillPlayerAmmo extends ForgeNode {
	constructor() {
		super();

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Player", forge.type.player);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Refill Player Ammo';
	}
	get title() {
		return RefillPlayerAmmo.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventory/RefillPlayerAmmo", RefillPlayerAmmo);

export class SetPlayerWeaponLowered extends ForgeNode {
	constructor() {
		super();

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Player", forge.type.player);
		this.addInput("Enabled", forge.type.boolean);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Set Player Weapon Lowered';
	}
	get title() {
		return SetPlayerWeaponLowered.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventory/SetPlayerWeaponLowered", SetPlayerWeaponLowered);

export class SetWeaponMagazineAmmo extends ForgeNode {
	constructor() {
		super();

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Weapon", forge.type.weapon);
		this.addInput("Rounds", forge.type.number);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Set Weapon Magazine Ammo';
	}
	get title() {
		return SetWeaponMagazineAmmo.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventory/SetWeaponMagazineAmmo", SetWeaponMagazineAmmo);

export class SetWeaponReserveAmmo extends ForgeNode {
	constructor() {
		super();

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Weapon", forge.type.weapon);
		this.addInput("Percent", forge.type.percent);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Set Weapon Reserve Ammo';
	}
	get title() {
		return SetWeaponReserveAmmo.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventory/SetWeaponReserveAmmo", SetWeaponReserveAmmo);

export class SetWeaponTotalRounds extends ForgeNode {
	constructor() {
		super();

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Weapon", forge.type.weapon);
		this.addInput("Rounds", forge.type.number);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Set Weapon Total Rounds';
	}
	get title() {
		return SetWeaponTotalRounds.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventory/SetWeaponTotalRounds", SetWeaponTotalRounds);

export class SwitchToFirstWeaponOfType extends ForgeNode {
	constructor() {
		super();

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Player", forge.type.player);
		this.addInput("Weapon Type", forge.type.weaponType);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Switch To First Weapon Of Type';
	}
	get title() {
		return SwitchToFirstWeaponOfType.title;
	}

	get color() {
		return nodeColor;
	}

	onAction() {
		// TODO
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("inventory/SwitchToFirstWeaponOfType", SwitchToFirstWeaponOfType);