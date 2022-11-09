import { Component } from 'component';
import { emitter } from 'eventEmitter';
import { HTML } from 'lib/HTML';
import { MobileMicaMenu } from 'ui/mica';
import { LiteGraph } from 'lib/LiteGraph';
import { game } from './nodes';
import { LearnForge } from './views/learn';
import { modalConstructor } from 'ui/modal';
import { filenameFromPath } from 'utils/paths.js';

import AUDIO from './nodes/audio';
import BOTS from './nodes/bots';
import EVENTS from './nodes/events';
import EVENTS_CUSTOM from './nodes/eventsCustom';
import EVENTS_INVENTORY from './nodes/eventsInventory';
import EVENTS_PLAYERS from './nodes/eventsPlayers';
import GAME_MODE from './nodes/gameMode';
import INVENTORY from './nodes/inventory';
import INVENTORY_EQUIPMENT from './nodes/inventoryEquipment';
import LOGIC from './nodes/logic';
import MATH from './nodes/math';
import OBJECTS from './nodes/objects';
import OBJECTS_TRANSFORMN from './nodes/objectsTransform';
import PLAYERS from './nodes/players';
import UI from './nodes/ui';
import VARIABLES_BASIC from './nodes/variablesBasic';
import DEBUG from './nodes/debug';

import 'litegraph.js/css/litegraph.css';
import './index.css';

export class Forge extends Component {
	init() {
		this.forgeNodes();

		const recoveredSession = this.recoverLastSession();

		this.graph = new LiteGraph.LGraph(recoveredSession);
		this.graphCanvas = new LiteGraph.LGraphCanvas(this.renderCanvas(), this.graph, {
			autoresize: true
		});

		this.graphCanvas.render_shadows = false;
		this.graphCanvas.default_connection_color = {
			input_off: "#555",
			input_on: "#FFF",
			output_off: "#555",
			output_on: "#FFF"
		}
		this.graphCanvas.default_connection_color_byType = {
			number: "#7F7",
			string: "#77F",
			boolean: "#F77",
			[LiteGraph.EVENT]: '#FFF'
		}
		this.graphCanvas.default_connection_color_byTypeOff  = {
			number: "#474",
			string: "#447",
			boolean: "#744",
			[LiteGraph.EVENT]: '#555'
		}

		// TODO make a setting for this
		// this.graphCanvas.render_execution_order = true;

		// this.messenger.on('loadGraphJSON', (graph) => {
		// 	this.graph.configure(graph);
		// })

		const nodeTypes = LiteGraph.registered_node_types;
		const nodes = new Map(Object.entries(nodeTypes));
		console.log(nodes);
		const node = nodes.get('audio/Play3DAudioForAllPlayers');
		console.log(node, node.title, node.inputs);

		this.learn = new LearnForge({nodes});
	}

	get defaultState() {
		return {
			// view: this.learn
		};
	}

	render() {
		return this.html`
		<div class="inventory_wrapper vanity_wrapper mica_viewer" id="forge">
			<button 
				class="hi-box"
				onclick=${() => modalConstructor.showView(this.mvarPorter.render())}
			>
				Port MVAR (experimental)
			</button>
			<header class="mica_header-strip">
				<h2>Forge Nodegraph</h2>
				${this.renderHeaderMessage()}
			</header>
			<div class="main-content" id="forge_container" onFullscreenchange=${(e) => this.fullscreenChange(e)}>
				<div
					class="graph_toolbar_container"
				>
					<ul class="control_list">
						<li>
							<button
								class="graph_start hi-box"
								onclick=${() => {
									if (this.state.graphIsLive)
									{
										this.graph.stop();
										this.setState({graphIsLive: false});
									} else {
										this.graph.start();
										this.setState({graphIsLive: true});
									}
								}}
							>
								${{html: this.state.graphIsLive ? '<div class="icon-masked icon-stop"></div><span>Stop</span>' : '<div class="icon-masked icon-play"></div><span>Start</span>'}}
							</button>
						</li>
						<li>
							<button
								class="hi-box"
								onclick=${() => this.graph.runStep()}
							>
								<div class="icon-masked icon-step"></div><span>Step</span>
							</button>
						</li>
						<li class="spacer">|</li>
						<li>
							<button
								class="hi-box"
								onclick=${() => this.saveSession()}
							>
								<div class="icon-masked icon-save"></div><span>Save</span>
							</button>
						</li>
						<li>
							<button
								class="hi-box"
								onclick=${() => modalConstructor.showView(this.renderLoadModal())}
							>
								<div class="icon-masked icon-upload"></div><span>Load</span>
							</button>
						</li>
						<li>
							<button
								class="hi-box"
								onclick=${() => this.offerDownload()}
							>
								<div class="icon-masked icon-download"></div><span>Download</span>
							</button>
						</li>
						<li>
							<button
								class="hi-box"
								onclick=${() => modalConstructor.showView(this.renderClearModal())}
							>
								<div class="icon-masked icon-trash"></div><span>Clear</span>
							</button>
						</li>
						<li class="spacer">|</li>
						<li>
							<button
								class="hi-box"
								onclick=${() => this.fullscreen()}
							>
								<div class=${`icon-masked icon-${this.state.fullscreen ? 'minimize' : 'maximize'}`}></div><span>${this.state.fullscreen ? 'Exit ' : ''}Fullscreen</span>
							</button>
						</li>
					</ul>
				</div>
				<div
					class="graph_container"
				>${this.view}</div>
			</div>
		`;
	}

	get view() {
		return this.state.view?.render?.() ?? this.renderCanvas();
	}

	get mvarPorter() {
		return this._mvarPorter ??= new MvarPorting();
	}

	renderCanvas() {
		if (this?._canvas) return this._canvas;
		return (this._canvas = HTML.wire(this, ':canvas')`
			<canvas
				id="forge-canvas"
				class="forge-canvas"
				width=${window.innerWidth}
				height=${window.innerHeight - 128}
			></canvas>
		`);
	}

	getSavedNodegraph() {
		if (!window?.localStorage) return;
		const lastSession = localStorage.getItem('forge_autobak');
		if (lastSession) return lastSession;
	}

	renderLoadModal() {
		const saved = this.getSavedNodegraph();
		return HTML.wire(this, ':loadModal')`
			<div class="forge_load-modal">
				<div>
					<span>Saved Nodegraph</span>
					<span>${saved?.date ?? '...'}</span>
					<button
						class="hi-box"
						onclick=${() => {
							const graph = this.recoverLastSession();
							if (graph) this.configureGraph(graph);
						}}
					>
						Load
					</button>
					<button
						class="hi-box"
						onclick=${() => localStorage.removeItem('forge_autobak')}
					>
						Clear
					</button>
				</div>
				<div>
					<span>---</span><br/>
					<label for="file-nodegraph">nodegraph.json file to load:</label><br/>
					<input
						type="file"
						id="file-nodegraph"
						onchange=${(e) => this.loadFromFile(e)}
					/>
				</div>
			</div>
		`;
	}

	loadFromFile(userFile) {
		try {
			console.log('loadFromFile')
			const file = userFile.target.files[0];
			if (!file) throw new Error('No File!');

			const reader = new FileReader();
			reader.onload = (e) => {
				const res = e.target.result;
				if (res)
				{
					const json = JSON.parse(res);
					this.configureGraph(json);
				}
			}
			reader.readAsText(file);
		} catch (error) {
			this.setState({message: error?.message ?? 'loadMvar Error!'});
		}
	}

	configureGraph(json) {
		if (json) this.graph.configure(json);
	}

	renderClearModal() {
		return HTML.wire(this, ':clearModal')`
			<div class="forge_clear-modal">
				<h2>You will lose any unsaved data. Continue?</h2>
				<button
					class="hi-box"
					onclick=${() => this.graph.clear()}
				>Clear</button>
			</div>
		`;
	}

	renderHelpModal() {
		return HTML.wire(this, ':helpModal')`
			<div class="forge_help-modal">
				<h2>Help</h2>
			</div>
		`;
	}

	renderHeaderMessage() {
		return HTML.wire(this, ':headerMessage')`
			<div class="header-message">
				<span>${this.state.actionMessage ?? ''}</span>
			</div>
		`;
	}

	get messageQueue() {
		return this._messageQueue ??= new Array();
	}

	showActionMessage(message) {
		if (message && typeof message === 'string')
		{
			if (this.messageQueue.length || this.state.actionMessage) return this.messageQueue.push(message);
			this.displayActionMessage(message);
		}
	}

	displayActionMessage(message) {
		if (!message || typeof message !== 'string') return;
		this.setState({ actionMessage: message });
		this.actionMessageTimeout = setTimeout(() => {
			if (this.messageQueue.length)
			{
				const nextMessage = this.messageQueue.shift();
				console.log('nextMessage', nextMessage)
				this.displayActionMessage(nextMessage);
			} else {
				this.setState({ actionMessage: '' });
			}
		}, 5000);
	}

	async fullscreen() {
		try {
			if (document.fullscreenElement) document.exitFullscreen();
			const el = document.querySelector('#forge_container');
			if (!el) return;

			await el.requestFullscreen();
			this.setState({fullscreen: true});
		} catch (error) {
			
		}
	}

	fullscreenChange() {
		const canvas = this.renderCanvas();
		const fullscreenElement = document.fullscreenElement;
		if (fullscreenElement)
		{
			canvas.width = fullscreenElement.clientWidth;
			canvas.height = fullscreenElement.clientHeight;
			return this.setState({fullscreen: true});
		}
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight - 128;
		this.setState({fullscreen: false});
	}

	forgeNodes() {
		// LiteGraph.LINK_COLOR = 'red';
	}

	offerDownload() {
		try {
			const string = JSON.stringify(this.graph.serialize());

			const date = new Date();
			const dateString = `${date.toLocaleDateString('se-SE')}`;
			const timeStamp = `${date.toLocaleTimeString('se-SE').replaceAll(':', '-')}`;
			const dateTimeStamp = `${dateString}T${timeStamp}`;

			const blob = new Blob([string]);
			const url = URL.createObjectURL(blob);

			const el = document.createElement('a');
			el.setAttribute('href', url);
			el.setAttribute('download', `cylix-nodegraph_${encodeURIComponent(dateTimeStamp)}.json`);
			el.style.display = 'none';
			document.body.appendChild(el);
			el.click();
			document.body.removeChild(el);
			setTimeout(() => URL.revokeObjectURL(url), 60000 );
		} catch (error) {
			console.error(`[forge.offerDownload]`, error);
		}
	}

	get titleMaxLength() {
		return 32;
	}

	get session() {
		return this._session ??= {
			created: new Date().toISOString(),
			date: new Date().toISOString(),
			title: 'untitled',
			// nodegraph: this.graph.serialize()
		}
	}
	set session(bak) {
		try {
			const session = {
				created: new Date().toISOString(),
				date: new Date().toISOString(),
				title: 'untitled'
			}

			if (bak.created && Date.parse(bak.created)) session.created = bak.created;
			if (bak.date && Date.parse(bak.date)) session.date = bak.date;
			if (bak.title && typeof bak.title === 'string') session.title = bak.title.substring(0, this.titleMaxLength);
			// if (bak.nodegraph && Array.isArray(bak.nodegraph?.nodes)) session.nodegraph = bak.nodegraph;
			// if (!session.nodegraph && this.graph) session.nodegraph = this.graph.serialize();
		} catch (error) {
			console.error(`[forge.setSession]`, error);
		}
	}

	recoverLastSession() {
		try {
			if (!window?.localStorage) return;
			const lastSession = localStorage.getItem('forge_autobak');
			if (lastSession) 
			{
				const session = JSON.parse(lastSession);
				console.log(`[forge.recoverLastSession] loading automatic backup from`, session.date);
				this.showActionMessage('Recovering graph...');
				if (Array.isArray(session?.nodegraph?.nodes) && session?.nodegraph?.nodes?.length)
				{
					this.session = session;
					return session.nodegraph;
				}
			}
		} catch (error) {
			console.error(`[forge.recoverLastSession]`, error);
			this.showActionMessage('Recovery failed!');
		}
	}

	saveSession() {
		try {
			const nodegraph = this.graph.serialize();
			localStorage.setItem('forge_autobak', JSON.stringify({
				...this.session,
				nodegraph
			}));
			console.log(`[forge.saveSession] Saved "${this.session.title}" with "${nodegraph?.nodes?.length}" nodes!`);
			this.showActionMessage('Saved!');
		} catch (error) {
			console.error(`[forge.saveSession]`, error);
			this.showActionMessage('Save failed!');
		}
	}

	saveSessionAutobak() {

	}
}

export const forge = new Forge();

class MvarPorting extends Component {
	render() {
		return this.html`
			<div>
				<H2>Port MVAR</H2>
				<div>
					<label for="file-mvar">Unpacked map.mvar.xml file to load:</label><br/>
					<input
						type="file"
						id="file-mvar"
						onchange=${(e) => this.loadMvar(e)}
					/>
				</div>
				<span>Filename: ${this.state.filename || '...'}</span><br/>
				<span>Map ID: [${this.state.originalMapName}] ${this.state.mapID || '...'}</span><br/>
				<span>Objects: ${this.state.foodCount}</span>
				<br/><br/>
				<div class="mvar-id-controls">
					<label for="select_map">Select Map ID:</label>
					<select
						name="select_map"
						id="select_map"
						onchange=${(e) => this.changeMapID(e.target.value)}
					>
						<option value="">Unchanged</option>
						${() => [...this.mapIDs].map(([id, name]) => {
							const selected = this.state?.newMapID === id ? true : false;
							if (selected) return `<option value=${id} selected>${name}</option>`
							return `<option value=${id}>${name}</option>`
						})}
					</select>
					<br/>
					<label for="mvar-id">Custom Map ID:</label>
					<input
						type="text"
						id="mvar-id"
						onchange=${(e) => this.changeMapID(e.target.value)}
						placeholder=${this.state.newMapID}
					>
				</div>
				<br/><br/>
				<div class="mvar-offsets">
					<span>Offsets</span>
					<details>
						<summary>Help?</summary>
						<p>Offsets are added per axis to all objects in the mvar. A value of 20 for the Z offset will move the entire map up 20 units along the Z axis. To determine your desired offsets you may want to duplicate an item on the map, move it to the desired location, and subtract the old axis values from the new axis values.</p>
					</details>
					<div class="offset">
						<label for="mvar-offset-x">X:</label>
						<input
							type="number"
							id="mvar-offset-x"
							step="0.000001"
							onchange=${(e) => this.changeOffset('x', e.target.value)}
						>
					</div>
					<div class="offset">
						<label for="mvar-offset-y">Y:</label>
						<input
							type="number"
							id="mvar-offset-y"
							step="0.000001"
							onchange=${(e) => this.changeOffset('y', e.target.value)}
						>
					</div>
					<div class="offset">
						<label for="mvar-offset-z">Z:</label>
						<input
							type="number"
							id="mvar-offset-z"
							step="0.000001"
							onchange=${(e) => this.changeOffset('z', e.target.value)}
						>
					</div>
				</div>
				<button
					class="hi-box"
					onclick=${() => this.processMvar()}
				><div class="icon-masked icon-download"></div><span>Process</span></button>
				<br/>
				<span>${this.state.message}</span>
			</div>
		`;
	}

	get defaultState() {
		return {
			message: '',
			xml: '',
			mapID: '',
			newMapID: '',
			originalMapName: '',
			foodCount: 0,
			offset: {
				x: 0,
				y: 0,
				z: 0
			},
			filename: ''
		};
	}

	loadMvar(e) {
		try {
			console.log('loadmvar')
			const file = e.target.files[0];
			if (!file) throw new Error('No File!');
			this.setState({ filename: filenameFromPath(file.name) })

			const reader = new FileReader();
			reader.onload = (e) => {
				const res = e.target.result;
				this.readMvar(res);
			}
			reader.readAsText(file);
		} catch (error) {
			this.setState({message: error?.message ?? 'loadMvar Error!'});
		}
	}

	readMvar(text) {
		try {
			if (!text || typeof text !== 'string') throw new Error('Invalid text!');

			const parser = new DOMParser();
			const xml = parser.parseFromString(text, 'application/xml');
			console.log(xml);
			const mapID = xml.querySelector('struct struct struct int32').textContent;
			const originalMapName = this.mapIDs.has(mapID) ? this.mapIDs.get(mapID) : 'UNK';
			console.log(mapID, originalMapName);

			const foodPropertyList = xml.querySelector(`struct list[id='3']`);
			const foodCount = foodPropertyList?.childNodes?.length ?? 0;

			this.state.xml = text;
			this.state.mvar = xml;
			this.setState({ mapID, originalMapName, foodCount });
		} catch (error) {
			this.setState({message: error?.message ?? 'readMvar Error!'});
		}
	}

	changeOffset(component, value) {
		console.log(`[MvarPorter.changeOffset] "${component}", "${value}"`);
		this.state.offset[component] = parseFloat(value);
	}

	changeMapID(string) {
		console.log(`[MvarPorter.changeMapID] "${string}"`);
		if (string) return this.setState({ newMapID: `${string}`});
		this.setState({ newMapID: ''});
	}

	processMvar() {
		try {
			console.log(`[MvarPorter.processMvar]`, JSON.stringify(this.state.offset), JSON.stringify(this.state.mapID));

			if (!this.state.xml) throw new Error('No .mvar loaded!');
			this.setState({message: 'Parsing XML...'});

			const parser = new DOMParser();
			const mvar = parser.parseFromString(this.state.xml, 'application/xml');

			const foodPropertyList = mvar.querySelector(`struct list[id='3']`);
			// console.log(foodPropertyList);
			this.setState({message: 'Processing FOODs...'});

			foodPropertyList.childNodes.forEach(food => {
				try {
					if (food.nodeName === 'struct')
					{
						// console.log(food);
						const position = food.querySelector(`struct[id='3']`);
						if (position)
						{
							const foodXComponent = position.querySelector(`float[id='0']`);
							const foodYComponent = position.querySelector(`float[id='1']`);
							const foodZComponent = position.querySelector(`float[id='2']`);

							const foodXValue = parseFloat(foodXComponent.textContent);
							const foodYValue = parseFloat(foodYComponent.textContent);
							const foodZValue = parseFloat(foodZComponent.textContent);

							foodXComponent.textContent = `${foodXValue + (this.state.offset.x / 10)}`;
							foodYComponent.textContent = `${foodYValue + (this.state.offset.y / 10)}`;
							foodZComponent.textContent = `${foodZValue + (this.state.offset.z / 10)}`;
						}
					}
				} catch (error) {
					console.warn(`[MvarPorter.processMvar] bad food!`, error);
				}
			});

			if (this.state.newMapID) {
				const mapID = mvar.querySelector('struct struct struct int32');
				mapID.textContent = this.state.newMapID;
			}

			const serializer = new XMLSerializer();
			const string = serializer.serializeToString(mvar);
			this.setState({message: 'Processed, now offering mvar file!'});
			this.offerDownload(string);
		} catch (error) {
			this.setState({message: error?.message ?? 'processMvar Error!'});
		}
	}

	offerDownload(string) {
		try {
			const date = new Date();
			const dateString = `${date.toLocaleDateString('se-SE')}`;
			const timeStamp = `${date.toLocaleTimeString('se-SE').replaceAll(':', '-')}`;
			const dateTimeStamp = `${dateString}T${timeStamp}`;

			const blob = new Blob([string]);
			const url = URL.createObjectURL(blob);

			const el = document.createElement('a');
			el.setAttribute('href', url);
			el.setAttribute('download', `${this.state.filename || 'map'}_${encodeURIComponent(dateTimeStamp)}.xml`);
			el.style.display = 'none';
			document.body.appendChild(el);
			el.click();
			document.body.removeChild(el);
			setTimeout(() => URL.revokeObjectURL(url), 60000 );
		} catch (error) {
			console.error(`[MvarPorter.offerDownload]`, error);
		}
	}

	get mapIDs() {
		return this._mapIDs ??= new Map([
			["1804860316", "Arid"],
			["-747133697", "Ecliptic"],
			["1437677928", "Institute"],
			["88891201", "Mires"],
			["2123870979", "Seafloor"],
			["426470249", "Void"],
			["-1598071734", "Aquarius"],
			["-1449092339", "Behemoth"],
			["847557134", "Breaker"],
			["-1044063363", "Catalyst"],
			["-340635692", "Fragmentation"],
			["-2109972058", "High Power"],
			["-738424322", "Launch Site"],
			["1253388187", "Live Fire"],
			["-687782121", "Recharge"]
	]);
	}
}