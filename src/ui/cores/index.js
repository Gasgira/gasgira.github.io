import { Component } from 'component';
import { db } from 'db';
import { Item, placeholderItem } from 'db/item';
import { emitter } from 'eventEmitter';
import { HTML } from 'lib/HTML';
import { urlParams } from 'urlParams';
import { MobileMicaMenu } from 'ui/mica';

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

		emitter.on('showSocket', () => this.updateParams());
	}

	async init() {
		if (this?._init) return;
		this._init = true;

		// HACK: MK 7 ID statically first
		const armor = new Set(['017-001-olympus-c13d0b38', ...db.getItemIDsByType('ArmorCore')])
			.forEach(id => {
				const core = new Core(id);
				this.cores.push(core);
				this.coreTypes.get('ArmorCore').push(core);
			});

		db.getItemIDsByType('WeaponCore')
			.forEach(id => {
				const core = new Core(id);
				this.cores.push(core);
				this.coreTypes.get('WeaponCore').push(core);
			});

		db.getItemIDsByType('VehicleCore')
			.forEach(id => {
				const core = new Core(id);
				this.cores.push(core);
				this.coreTypes.get('VehicleCore').push(core);
			});

		const paramCoreType = urlParams.getSecionSetting('coreType', { dash: true });
		if (paramCoreType && this.coreTypes.has(paramCoreType))
		{
			this.showCoreType(paramCoreType, true)
			// console.log('ct init', paramCoreType);
			const coreName = urlParams.getSecionSetting('coreName', { dash: true });
			if (coreName) this.showCoreByName(coreName);
		} else {
			this.showCoreType('ArmorCore', true);
			this.showCore(this.state?.coreType?.[0], true);
		}

		this.render();
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

	async render() {
		this.init();
		return this.html`
			<div id="cores" class ="core-viewer_wrapper mica_viewer">
				<nav class ="core-viewer_nav"><ul>
					<li>
						<button
							class=${`core-tab${this.state?.coreTypeName === 'ArmorCore' ? ' active' : ''}`}
							onclick=${() => this.showCoreType('ArmorCore')}
						>Armor</button>
					</li>
					<li>
						<button
							class=${`core-tab${this.state?.coreTypeName === 'WeaponCore' ? ' active' : ''}`}
							onclick=${() => this.showCoreType('WeaponCore')}
						>Weapons</button>
					</li>
					<li>
						<button
							class=${`core-tab${this.state?.coreTypeName === 'VehicleCore' ? ' active' : ''}`}
							onclick=${() => this.showCoreType('VehicleCore')}
						>Vehicles</button>
					</li>
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

	updateParams() {
		urlParams.setSecionSetting('coreType', this.state?.coreTypeName ?? 'unk', { dash: true });
		urlParams.setSecionSetting('coreName', this.state?.core?.name ?? 'unk', { dash: true });
		if (this.state?.core?.state?.socket)
		{
			urlParams.setSecionSetting('coreSocket', this.state?.core?.state?.socket?.socketName ?? 'unk', { dash: true });
		} else {
			urlParams.deleteSecionSetting('coreSocket');
		}
	}

	showCore(core, skipParam = false) {
		if (!core) return;
		this.setState({core});

		if (!skipParam)
		{
			this.updateParams();
		}
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
		this.coreList();
	}
}

export const coreViewer = new CoreViewer();

class Core extends Component {
	constructor(id) {
		super();
		this.id = id;
		this.meta = db.getItemManifestByID(id);

		this.sockets = [];
	}

	get name() {
		return this?.meta?.title ?? '...';
	}

	async init() {
		// console.log('initCore', this.name)
		if (this.core) return;
		this.core = {};
		this.core = await new Item({ id: this.id }).init();
		this.item = await new Item(this.core.data?.Themes?.DefaultOptionPath).init();

		const item = this.item.data;

		const paramSocketName = urlParams.getSecionSetting('coreSocket', { dash: true });

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
			if (!this.state.socket && socketName.includes('Coating')) this.state.socket = socket;
		}

		this.mobileMicaMenu = new MobileMicaMenu(`MobileMicaMenu-${this.name}`, 'Sockets');
		emitter.on(`MobileMicaMenu-${this.name}`, () => {
			this.setState({mobileMenu: !this.state.mobileMenu});
			if (this.state.mobileMenu) history.pushState({}, `Halosets`, ``);
		});
		emitter.on('popstate', () => {
			if (this.state.mobileMenu) this.setState({mobileMenu: false});
		});

		this.render();

		return this;
	}

	get defaultState() {
		return {
			mobileMenu: false
		};
	}

	async render() {
		// console.log('renderCore', this.name)
		if (!this.core) await this.init();
		return this.html`
			<div
				class ="core_wrapper mica_main-content"
			>
				<ul class=${`core-socket-list mica_nav-list ${this.state.mobileMenu ? 'show-mobile' : 'hide-mobile'}`}>
					<li class="core-socket-title">${this?.item?.data?.CommonData?.Title ?? 'Loading core...'}</li>
					${this.sockets.map(socket => HTML.wire(socket)`
						<li><button
							onclick=${() => this.showSocket(socket)}
							class=${this.state?.socket === socket ? 'active' : null}
						><span>${socket.name}</span></button></li>
					`)}
				</ul>
				<div class="mica_content">${this.state?.socket?.render() ?? ''}</div>
				${{html: this.state?.socket ? '' : '<div class="core-socket-placeholder">CHOOSE A SOCKET</div>'}}
				<div class=${`mica_mobile-menu_container ${this.state.mobileMenu ? 'show-mobile' : 'hide-mobile'}`}>${this?.mobileMicaMenu?.render() ?? ''}</div>
			</div>
		`
	}

	showSocket(socket) {
		this.state.mobileMenu = false;
		if (this.state?.socket === socket) {
			// this.setState({socket: undefined});
			// emitter.emit('showSocket');
			this.render();
			this.scrollIntoView();
			return;
		}
		this.setState({socket});
		emitter.emit('showSocket');
		this.scrollIntoView();
	}

	scrollIntoView() {
		const el = document.querySelector(`#cores`);
		if (el)
		{
			el.scrollIntoView();
			history.replaceState({}, `Cylix`, `#cores`);
		}
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
		// console.log('renderSocket', this.socketName)
		return this.html`
			<div
				class ="core-sockets_wrapper mica_content"
			>
			${this.name?.replace('Atch.', 'Attachments') ?? 'Socket'} // ${this?.items?.length ?? '#'}
				<ul
					class="socket-items"
				>
					${this.items.map(item => HTML.wire()`<li>${{
						any: item.renderIcon('core'),
						placeholder: placeholderItem.cloneNode(true)
					}}</li>`)}
				</ul>
			</div>
		`;
	}

	get name() {
		return db.getItemType(this?.socketName);
	}
}