import { forge, game, FOOD, ForgeNode } from './index.js';
import { LiteGraph } from 'lib/LiteGraph';

export class EveryNSeconds extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.properties = {
			seconds: 2,
			initialDelay: 10
		}

    this.addInput("Seconds", forge.type.number);
		this.addInput("Initial Delay", forge.type.number);

		this.addOutput("Event", LiteGraph.EVENT);

		this.time = 0;
		this.lastInterval = 1;
		this.triggered = false;
		this.delayAwaited = this.properties.initialDelay > 0 ? false : true;
	}

	static get title() {
		return 'Every N Seconds';
	}
	get title() {
		return EveryNSeconds.title;
	}

	onExecute() {
		LiteGraph.allow_multi_output_for_events = false;
		console.warn('events', LiteGraph.allow_multi_output_for_events)
		const deltaTime = this.graph.elapsed_time;
		const trigger = this.time == 0;

		const interval = this.getInputData(0) ?? this.properties.seconds;
		const initialDelay = this.getInputData(1) ?? this.properties.initialDelay;

		this.time += deltaTime;
		this.lastInterval = interval;

		if (!this.delayAwaited)
		{
			if (this.time < initialDelay) return;
			this.delayAwaited = true;
		}

		if (!trigger && (this.time < this.lastInterval || isNaN(this.lastInterval)))
		{
			return;
		}

		this.triggered = true;
		this.time = this.time % this.lastInterval;
		this.onTrigger();
	}

	onStart() {
		this.time = 0;
	}

	onTrigger() {
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsCustom/EveryNSeconds", EveryNSeconds);

export class OnCustomEquipmentUsed extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.properties = {
			player: game.defaultPlayer,
			equipmentType: forge.equipmentTypes.get('customEquipmentA')
		}

    this.addOutput("Event", LiteGraph.EVENT);
		this.addOutput("Activating Player", forge.type.player);
		this.addOutput("Equipment Type", forge.type.equipmentType);

		this.triggerButton = this.addWidget("button", "[DEBUG] Trigger", undefined, () => this.onTrigger());

		this.mode = LiteGraph.ON_TRIGGER;
	}

	static get title() {
		return 'On Custom Equipment Used';
	}
	// get title() {
	// 	return OnCustomEquipmentUsed.title;
	// }

	onTrigger() {
		this.setOutputData(1, this.properties.player);
		this.setOutputData(2, this.properties.equipmentType);
		this.triggerSlot(0, true);
	}
}
LiteGraph.registerNodeType("eventsCustom/OnCustomEquipmentUsed", OnCustomEquipmentUsed);

export class OnCustomEvent extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.properties = {
			identifier: '',
			customEvent: undefined
		}

		this.addInput("Identifier", forge.type.identifier);

    this.addOutput("Event", LiteGraph.EVENT);
		this.addOutput("Object", forge.type.object);
		this.addOutput("Number", forge.type.number);
		this.addOutput("Object List", forge.type.objects);
	}

	static get title() {
		return 'On Custom Event';
	}
	get title() {
		return OnCustomEvent.title;
	}

	onExecute() {
		const identifier = this.getInputData(0) ?? this.properties.identifier;
		if (identifier) {
			if (identifier !== this._identifier)
			{
				// console.log('new id event', identifier);
				if (this._customEvent)
				{
					// console.log('clearing old event', this._identifier);
					game.customEvents.off(this._identifier, this._customEvent);
				}

				this._identifier = identifier;
				this._customEvent = (event) => {
					// console.log(`[OnCustomEvent]`, event);
					this.onTrigger(event);
				}
				game.customEvents.on(this._identifier, this._customEvent);
			}
		} else if (this._customEvent) {
			// console.log('disconnected, clearing old event', this._identifier);
			game.customEvents.off(this._identifier, this._customEvent);
			this._customEvent = undefined;
			this._identifier = undefined;
		}
	}

	onTrigger(event) {
		this.setOutputData(1, event?.object);
		this.setOutputData(2, event?.number);
		this.setOutputData(3, event?.objectList);
		this.triggerSlot(0);
	}
}
LiteGraph.registerNodeType("eventsCustom/OnCustomEvent", OnCustomEvent);

export class TriggerCustomEvent extends ForgeNode {
	constructor() {
		super();
		this.color = forge.nodeColor.event;

		this.properties = {
			identifier: ''
		}

		this.addInput("Event", LiteGraph.ACTION);
		this.addInput("Identifier", forge.type.identifier);
		this.addInput("Object", forge.type.object);
		this.addInput("Number", forge.type.number);
		this.addInput("Object List", forge.type.objects);

    this.addOutput("Event", LiteGraph.EVENT);

		this.mode = LiteGraph.ON_EVENT;
	}

	static get title() {
		return 'Trigger Custom Event';
	}
	get title() {
		return TriggerCustomEvent.title;
	}

	onAction() {
		const identifier = this.getInputData(1) ?? this.properties.identifier;
		// console.log('TriggerCustomEvent', identifier);
		if (identifier)
		{
			const event = {};

			const object = this.getInputData(2);
			if (object) event.object = object;

			const number = this.getInputData(3);
			if (number) event.number = number;

			const objectList = this.getInputData(4);
			if (objectList) event.objectList = objectList;

			game.customEvents.emit(identifier, event);
			// console.log(`Trigger Custom Event`, event);
			this.triggerSlot(0);
		}
	}
}
LiteGraph.registerNodeType("eventsCustom/TriggerCustomEvent", TriggerCustomEvent);