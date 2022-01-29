import { Component } from 'component';
import { db, Item } from 'db';
import { HTML } from 'lib/HTML';
import { inventory } from 'ui/inventory';

import './index.css';

class CoreViewer extends Component {
	constructor() {
		super();
		
		this.armorCores = [];
		this.weaponCores = [];
		this.vehicleCores = [];
	}
	async init() {
		inventory.coreList.forEach(core => {
			if (core?.ItemType === 'ArmorCore') this.armorCores.push(new Core(core?.ItemPath));
			if (core?.ItemType === 'WeaponCore') this.weaponCores.push(new Core(core?.ItemPath));
			if (core?.ItemType === 'VehicleCore') this.vehicleCores.push(new Core(core?.ItemPath));
		});
		this.showArmorCores();
		this.showCore(this.armorCores?.[0]);
		this.render();
	}

	get defaultState() {
		return {
			coreType: this.armorCores
		};
	}

	render() {
		return this.html`
			<div class ="core-viewer_wrapper">
				<nav class ="core-viewer_nav"><ul>
					<li><button class=${`core-tab${this.state?.coreType === this.armorCores ? ' active' : ''}`} onclick=${() => this.showArmorCores()}>Armor</button></li>
					<li><button class=${`core-tab${this.state?.coreType === this.weaponCores ? ' active' : ''}`} onclick=${() => this.showWeaponCores()}>Weapons</button></li>
					<li><button class=${`core-tab${this.state?.coreType === this.vehicleCores ? ' active' : ''}`} onclick=${() => this.showVehicleCores()}>Vehicles</button></li>
				</ul></nav>
				<nav class ="cores-list_nav"><ul>
					${this.coreList()}
				</ul></nav>
				${this.state?.core?.render() ?? 'Choose a core'}
			</div>
		`;
	}
  
	coreList() {
		return HTML.wire(this, ':list')`
			${this.state.coreType.map(core => HTML.wire(core, ':nav')`<li><button
				onclick=${() => this.showCore(core)}
				class=${this.state?.core === core ? 'active' : null}
			>${core.name}</button></li>`)}
		`;
	}

	async showCore(core) {
		if (!core) return;
		this.setState({core});
	}

	showArmorCores() {
		// console.info(`[skimmer] showArmorCores`);
		this.state.coreType = this.armorCores;
		this.armorCores.forEach(async core => {
			await core.init();
			this.coreList();
		});
	}

	showWeaponCores() {
		console.info(`[skimmer] showWeaponCores`);
		this.state.coreType = this.weaponCores;
		this.weaponCores.forEach(async core => {
			await core.init();
			this.coreList();
		});
		// this.setState({coreType: this.weaponCores})
	}

	showVehicleCores() {
		console.info(`[skimmer] showVehicleCores`);
		this.state.coreType = this.vehicleCores;
		this.vehicleCores.forEach(async core => {
			await core.init();
			this.coreList();
		});
	}
}

export const coreViewer = new CoreViewer();

class Core extends Component {
	constructor(corePath) {
		super();
		this.corePath = corePath;

		this.sockets = [];
	}

	get name() {
		return this?.item?.data?.CommonData?.Title ?? '...';
	}

	async init() {
		if (this.core) return;
		this.core = {};
		this.core = await new Item(this.corePath).init();
		this.item = await new Item(this.core.data?.Themes?.DefaultOptionPath).init();

		const item = this.item.data;

		for (const socketName in item) {
			if (item[socketName]?.OptionPaths?.length)
			{
				const OptionPaths = item[socketName]?.OptionPaths;
				this.sockets.push(new Socket({OptionPaths, socketName}));
			} else if (socketName === 'Helmets' && item[socketName]?.Options?.length) {
				const attachmentPaths = new Set();
				const OptionPaths = item[socketName]?.Options.map(option => {
					option?.HelmetAttachments?.OptionPaths.forEach(path => attachmentPaths.add(path));
					return option.HelmetPath;
				});

				const socket = new Socket({OptionPaths, socketName});
				this.sockets.push(socket);
				this.state.socket = socket;

				this.sockets.push(new Socket({
					OptionPaths: [...attachmentPaths],
					socketName: 'HelmetAttachments'
				}));
			}
		}
		this.render();

		return this;
	}

	async render() {
		if (!this.core) await this.init();
		return this.html`
			<div
				class ="core_wrapper"
			>
				<ul class="core-socket-list">
					<li class="core-socket-title">${this?.item?.data?.CommonData?.Title ?? 'Core!'}</li>
					${this.sockets.map(socket => HTML.wire(socket)`
						<li><button
							onclick=${() => this.showSocket(socket)}
							class=${this.state?.socket === socket ? 'active' : null}
						><span>${socket.socketName}</span></button></li>
					`)}
				</ul>
				${this.state?.socket?.render() ?? ''}
				${{html: this.state?.socket ? '' : '<div class="core-socket-placeholder">CHOOSE A SOCKET</div>'}}
			</div>
		`
	}

	showSocket(socket) {
		if (this.state?.socket === socket) {
			this.setState({socket: undefined});
			return;
		}
		this.setState({socket});
	}
}

class Socket extends Component {
	constructor({
		OptionPaths,
		socketName
	}) {
		super();

		this.OptionPaths = OptionPaths;
		this.socketName = socketName;

		this.items = this.OptionPaths.map(path => new Item(path))

		// return this.render();
	}

	render() {
		return this.html`
			<div
				class ="core-sockets_wrapper"
			>
			${this?.socketName ?? 'Socket'} // ${this?.items?.length ?? '#'}
				<ul
					class="socket-items"
				>
					${this.items.map(item => HTML.wire()`<li>${item.renderIcon('core')}</li>`)}
				</ul>
			</div>
		`;
	}
}