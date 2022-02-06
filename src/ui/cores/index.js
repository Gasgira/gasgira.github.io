import { Component } from 'component';
import { db, Item } from 'db';
import { HTML } from 'lib/HTML';
import { inventory } from 'ui/inventory';
import { urlParams } from 'urlParams';

import './index.css';

class CoreViewer extends Component {
	constructor() {
		super();

		this.coreTypes = new Map([
			['ArmorCore', []],
			['WeaponCore', []],
			['VehicleCore', []]
		]);
		
		// this.armorCores = [];
		// this.weaponCores = [];
		// this.vehicleCores = [];

		this.cores = [];
	}
	async init() {
		inventory.coreList.forEach(item => {
			const core = new Core(item?.ItemPath);
			this.cores.push(core);
			// if (item?.ItemType === 'ArmorCore') this.armorCores.push(core);
			// if (item?.ItemType === 'WeaponCore') this.weaponCores.push(core);
			// if (item?.ItemType === 'VehicleCore') this.vehicleCores.push(core);
			const type = item?.ItemType;
			if (type && typeof type === 'string' && this.coreTypes.has(type))
			{
				this.coreTypes.get(type).push(core);
			}
		});

		const paramCoreType = urlParams.getSecionSetting('coreType');
		if (paramCoreType && this.coreTypes.has(paramCoreType))
		{
			this.showCoreType(paramCoreType, true)
			// console.log('ct init', paramCoreType);
			const coreName = urlParams.getSecionSetting('coreName');
			if (coreName)
			{
				// console.log('ct corename', coreName);
				await this.initAllCores();
				this.showCoreByName(coreName)
			};
		} else {
			this.showCoreType('ArmorCore', true);
			this.showCore(this.state?.coreType?.[0], true);
		}
		this.render();

		// this.initAllCores()
		// 	.then(() => emitter.emit('CoreViewer.initAllCores'));
	}

	get defaultState() {
		return {
		};
	}

	async initAllCores() {
		// this.cores.forEach(core => core.init());
		for (const core of this.cores)
		{
			await core.init()
		}
	}

	render() {
		return this.html`
			<div class ="core-viewer_wrapper mica_viewer">
				<nav class ="core-viewer_nav"><ul>
					<li><button class=${`core-tab${this.state?.coreTypeName === 'ArmorCore' ? ' active' : ''}`} onclick=${() => this.showCoreType('ArmorCore')}>Armor</button></li>
					<li><button class=${`core-tab${this.state?.coreTypeName === 'WeaponCore' ? ' active' : ''}`} onclick=${() => this.showCoreType('WeaponCore')}>Weapons</button></li>
					<li><button class=${`core-tab${this.state?.coreTypeName === 'VehicleCore' ? ' active' : ''}`} onclick=${() => this.showCoreType('VehicleCore')}>Vehicles</button></li>
				</ul></nav>
				<nav class ="cores-list_nav"><ul>
					${this.coreList()}
				</ul></nav>
				${this.state?.core?.render() ?? ''}
				${{html: this.state?.core ? '' : '<div class="core-placeholder">Loading cores...</div>'}}
			</div>
		`;
	}
  
	coreList() {
		return HTML.wire(this, ':coreList')`
			${this.state.coreType.map(core => HTML.wire(core, ':nav')`<li><button
				onclick=${() => this.showCore(core)}
				class=${this.state?.core === core ? 'active' : null}
			>${core.name}</button></li>`)}
		`;
	}

	showCore(core, skipParam = false) {
		if (!core) return;
		this.setState({core});

		if (!skipParam)
		{
			urlParams.setSecionSetting('coreType', this.state?.coreTypeName ?? 'unk');
			urlParams.setSecionSetting('coreName', core?.name ?? 'unk');
		}
		// console.warn('c', urlParams.getSecionSetting('coreName'))
	}

	showCoreByName(coreName) {
		if (!coreName || typeof coreName !== 'string' || !this.state.coreType) return;
		for (const core of this.state.coreType)
		{
			if (core && core.name && core.name === coreName)
			{
				this.setState({core});
				break;
			}
		}
	}

	showCoreType(type, skipParam = false) {
		if (!type || !this.coreTypes.has(type)) return;
		const coreType = this.coreTypes.get(type);
		this.state.coreType = coreType;
		this.state.coreTypeName = type;
		coreType.forEach(async core => {
			await core.init();
			this.coreList();
		});

		// if (!skipParam) urlParams.setSecionSetting('coreType', type);
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

		const paramSocketName = urlParams.getSecionSetting('coreSocket');

		for (const socketName in item) {
			let socket;
			if (item[socketName]?.OptionPaths?.length)
			{
				const OptionPaths = item[socketName]?.OptionPaths;
				socket = new Socket({OptionPaths, socketName});
				this.sockets.push(socket);
			} else if (socketName === 'Helmets' && item[socketName]?.Options?.length) {
				const attachmentPaths = new Set();
				const OptionPaths = item[socketName]?.Options.map(option => {
					option?.HelmetAttachments?.OptionPaths.forEach(path => attachmentPaths.add(path));
					return option.HelmetPath;
				});

				socket = new Socket({OptionPaths, socketName});
				this.sockets.push(socket);
				if (!paramSocketName) this.state.socket = socket;

				if (attachmentPaths.size)
				{
					const attachmentSocket = new Socket({
						OptionPaths: [...attachmentPaths],
						socketName: 'HelmetAttachments'
					});
					this.sockets.push(attachmentSocket);
					if (paramSocketName && paramSocketName === 'HelmetAttachments') this.state.socket = attachmentSocket;
				}
			}

			if (paramSocketName && socketName === paramSocketName) this.state.socket = socket;
		}
		this.render();

		return this;
	}

	async render() {
		if (!this.core) await this.init();
		return this.html`
			<div
				class ="core_wrapper mica_main-content"
			>
				<ul class="core-socket-list mica_nav-list">
					<li class="core-socket-title">${this?.item?.data?.CommonData?.Title ?? 'Core!'}</li>
					${this.sockets.map(socket => HTML.wire(socket)`
						<li><button
							onclick=${() => this.showSocket(socket)}
							class=${this.state?.socket === socket ? 'active' : null}
						><span>${socket.name}</span></button></li>
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
		urlParams.setSecionSetting('coreSocket', socket.socketName ?? 'unk');
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
			${this.name ?? 'Socket'} // ${this?.items?.length ?? '#'}
				<ul
					class="socket-items"
				>
					${this.items.map(item => HTML.wire()`<li>${item.renderIcon('core')}</li>`)}
				</ul>
			</div>
		`;
	}

	get name() {
		return db.getItemType(this?.socketName);
	}
}