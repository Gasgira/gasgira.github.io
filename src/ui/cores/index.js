import { Component } from 'component';
import { db } from 'db';
import { Item, placeholderItem } from 'db/item';
import { emitter } from 'eventEmitter';
import { HTML } from 'lib/HTML';
import { urlParams } from 'urlParams';
import { MobileMicaMenu } from 'ui/mica';
import { filenameFromPath } from 'utils/paths.js';
import { settings } from 'ui/settings';

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
		}

		if (!this.state.core)
		{
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
		urlParams.setSecionSetting('coreName', this.state?.core?.urlName ?? 'unk', { dash: true });
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
			if (core && core.urlName && core.urlName === coreName)
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

	get urlName() {
		return this.meta.title.replace(/[^-\w]+/g, '');
	}

	get name() {
		return this._title ??= (db.getItemTitleById(this.id) ?? '...');
		// return this?.meta?.title ?? '...';
	}

	async init() {
		// console.log('initCore', this.name)
		if (this.core) return;
		this.core = {};
		this.core = await new Item({ id: this.id }).init();
		this.item = await new Item({ path: this.core.data?.Themes?.DefaultOptionPath }).init();

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
					<li class="core-socket-title">${this?.item?.name ?? 'Loading core...'}</li>
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

		// this.items = this.OptionPaths.map(path => new Item({ path }));
		this.items = [];
		this.itemIDs = this.OptionPaths.map(path => filenameFromPath(path));
		this.init();

		// return this.render();
		emitter.on('Inventory.setSort', () => this.sortItemIDs());
	}

	render() {
		// console.log('renderSocket', this.socketName)
		return this.html`
			<div
				class ="core-sockets_wrapper mica_content"
			>
				<span class="mica_content-title">${this.name?.replace('Atch.', 'Attachments') ?? 'Socket'} // ${this?.OptionPaths?.length ?? '#'}</span>
				${this.renderPageControls('upper')}
				<ul
					class="socket-items"
				>
					${this.items.map(item => HTML.wire()`<li>${{
						any: item.renderIcon('core'),
						placeholder: placeholderItem.cloneNode(true)
					}}</li>`)}
				</ul>
				${this.renderPageControls('lower')}
			</div>
		`;
	}

	get name() {
		return db.getItemType(this?.socketName);
	}

	get defaultState() {
		return {
			page: 0
		};
	}

	init() {
		this.getCurrentItemPage();
	}

	set itemIDs(unsortedArray) {
		const unsortedSet = new Set([...unsortedArray]);
		if (!unsortedSet || !unsortedSet.size) return (this._itemIDs = unsortedSet);
		this._unsortedItemIDs = unsortedSet;
		const userSort = settings.getSetting('userSort') ?? 'default';
		let sorted = this._unsortedItemIDs;
		switch (userSort) {
			case 'unsorted':
				console.log('Sort: unsorted');
				return (this._itemIDs = unsortedSet);
				break;
			case 'dateAdded':
				console.log('Sort: dateAdded');
				sorted = new Set([...unsortedSet].sort((a, b) => {
					const aMeta = db.getItemManifestByID(a);
					const bMeta = db.getItemManifestByID(b);
					return (new Date(bMeta.added) - new Date(aMeta.added))
				}));
				break;
			case 'dateModified':
				console.log('Sort: dateModified');
				sorted = new Set([...unsortedSet].sort((a, b) => {
					const aMeta = db.getItemManifestByID(a);
					const bMeta = db.getItemManifestByID(b);
					return (new Date(bMeta.touched) - new Date(aMeta.touched))
				}));
				break;
			case 'dateVisible':
				console.log('Sort: dateVisible');
				sorted = new Set([...unsortedSet].sort((a, b) => {
					const aMeta = db.getItemManifestByID(a);
					const bMeta = db.getItemManifestByID(b);
					return (new Date(bMeta?.visible ?? new Date('2021-11-10')) - new Date(aMeta?.visible ?? new Date('2021-11-10')))
				}));
				break;
			case 'popularity':
				console.log('Sort: popularity');
				sorted = new Set([...unsortedSet].sort((a, b) => {
					const aMeta = db.getItemManifestByID(a);
					const bMeta = db.getItemManifestByID(b);

					const aPop = parseFloat(aMeta?.community?.stats?.cur ?? 0);
					const bPop = parseFloat(bMeta?.community?.stats?.cur ?? 0);
					return (bPop - aPop);
				}));
				break;
			case 'popularityDelta':
				console.log('Sort: popularityDelta');
				sorted = new Set([...unsortedSet].sort((a, b) => {
					const aMeta = db.getItemManifestByID(a);
					const bMeta = db.getItemManifestByID(b);

					const aPop = Math.abs(parseFloat(aMeta?.community?.stats?.delta ?? 0));
					const bPop = Math.abs(parseFloat(bMeta?.community?.stats?.delta ?? 0));
					return (bPop - aPop);
				}));
				break;
			case 'alphanumeric':
				console.log('Sort: alphanumeric');
			default:
				console.warn('Sort: default');
				sorted = new Set([...unsortedSet].sort((a, b) => {
					const aMeta = db.getItemManifestByID(a);
					const bMeta = db.getItemManifestByID(b);
					if (!aMeta || !bMeta) return 0;
					return (aMeta.title.localeCompare(bMeta.title, 'en', { ignorePunctuation: true }))
				}));
		}

		console.warn('sorted cores!', sorted)
		return (this._itemIDs = sorted);
	}

	get itemIDs() {
		return (this._itemIDs ??= new Set());
	}

	sortItemIDs() {
		// TODO this is really bad
		if (this.items.length)
		{
			this.items = [];
			this.itemIDs = this.itemIDs;
			this.init();
			this.render();
		}
	}

	getCurrentItemPage() {
		return (this.items = [...this.currentPageIDs].map(id => new Item({ id })));
	}

	nextPage() {
		if (this.pageNumber === this.pages-1) return;
		this.state.page = this.pageNumber + 1;
		this.getCurrentItemPage();
		this.render();
		this.scrollIntoView();
	}

	previousPage() {
		if (this.pageNumber === 0) return;
		this.state.page = this.pageNumber - 1;
		this.getCurrentItemPage();
		this.render();
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

	get pageLength() {
		return inventory?.pageSize ?? 100;
	}

	get pages() {
		return Math.ceil(this.itemIDs.size / this.pageLength);
	}

	get pageNumber() {
		return this.state?.page ?? 0;
	}

	get currentPageIDs() {
		return new Set([...this.itemIDs].slice((this.pageNumber * this.pageLength), (this.pageNumber * this.pageLength) + this.pageLength));
	}

	renderPageControls(id = 'upper') {
		if (this.pages < 2) return '';
		return HTML.wire(this, `:${id}`)`
			<div class="page-controls_wrapper">
				<button
					onclick=${() => this.previousPage()}
					disabled=${this.pageNumber === 0}
				><div class=${`icon-masked icon-arrow-left`}></div>Prev</button>
				<span>${this.pageNumber+1} of ${this.pages}</span>
				<button
					onclick=${() => this.nextPage()}
					disabled=${this.pageNumber + 1 === this.pages}
				>Next<div class=${`icon-masked icon-arrow-right`}></div></button>
			</div>
		`;
	}
}