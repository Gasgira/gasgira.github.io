const CANVAS_WIDTH = 512;
const CANVAS_HEIGHT = 1024;

class Compositor {
	constructor() {
		this.drawSceneDepth = false;

		this.renderCount = 0;
		this.scratchCanvas = new OffscreenCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
		this.bufferCanvas = new OffscreenCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
		this.sceneDepthCanvas = new OffscreenCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
		this.defaultState();
	}

	defaultState() {
		this.orderedLayers = new Array(this.orderedLayersCount);
		this.unorderedLayers = new Array();
	}

	get orderedLayersCount() {
		return 13;
	}

	setCanvas(canvas) {
		console.log(`[Compositor.setCanvas]`, canvas);
		if (canvas) this.canvas = canvas;
		this.test();
	}

	async initProfile(profile) {
		if (!profile || !profile?.armor?.core)
		{
			console.warn(`[Compositor.initProfile] Invalid profile`, profile);
			return;
		}

		console.log(`[Compositor.initProfile]`, profile?.gamertag ?? profile?.name ?? 'Unnamed Profile');
		// this.defaultState();
	}

	async render() {
		if (!this.canvas)
		{
			console.warn(`[Compositor.render] No canvas!`);
			return;
		}
		
		if (this._isRendering)
		{
			console.warn(`[Compositor.render] Render blocking`)
			return;
		}
		this._isRendering = true;

		console.log(`[Compositor.render]`, ++this.renderCount);

		// Main output canvas
		const canvas = this.canvas;
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		// Temporary compositing steps
		const buffer = this.bufferCanvas;
		const ctxBuffer = buffer.getContext('2d');
		ctxBuffer.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		// All layer depths added to this canvas
		const sceneDepth = this.sceneDepthCanvas;
		const ctxSceneDepth = sceneDepth.getContext('2d');
		ctxSceneDepth.globalCompositeOperation = 'source-over';
		ctxSceneDepth.fillStyle = '#000000';
		ctxSceneDepth.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		// ctx.fillStyle = 'green';
		// ctx.fillRect(10, 10, 100, 100);

		ctx.save();
		ctxBuffer.save();

		this.renderIsInvalid = false;
		this.orderedLayers.forEach((layer, index) => {
			try {
				// if (this.renderIsInvalid) throw new Error(`Cancelling invalid render`);
				ctx.restore();
				ctxBuffer.restore();

				if (!layer.useDepth && layer.color)
				{
					ctx.globalCompositeOperation = 'source-over';
					ctx.drawImage(layer.color, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
				} else if (layer.color && layer.depth) {
					// ctxScratch.drawImage(layer.color, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
					// ctx.drawImage(canvasScratch, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	
					// Raster mask of the new layer to composite
					// Alpha clipped to the new layer color
					// White is where to draw the new layer pixels
					// Black is multiplied to the scene color to blend the new layer colors
					const mask = this.depthComposite({
						insertColor: layer.color,
						insertDepth: layer.depth,
						sceneDepth
					});
	
					if (mask)
					{
						ctxBuffer.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
						// ctxBuffer.globalCompositeOperation = 'source-over';
						// ctxBuffer.drawImage(layer.color, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

						// Draw the mask into the buffer
						ctxBuffer.globalCompositeOperation = 'source-over';
						ctxBuffer.drawImage(mask, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

						// Invert the mask
						ctxBuffer.globalCompositeOperation = 'difference';
						ctxBuffer.fillStyle = '#FFFFFF';
						ctxBuffer.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

						// Clip the mask to the layer
						ctxBuffer.globalCompositeOperation = 'destination-in';
						ctxBuffer.drawImage(layer.color, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
						
						ctxBuffer.globalCompositeOperation = 'multiply';
						ctxBuffer.drawImage(canvas, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
						// ctxBuffer.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

						// Make parts of scene color where the new color overlaps black
						ctx.globalCompositeOperation = 'source-in';
						ctx.drawImage(buffer, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

						// Scene color now has black inserted where the new layer color
						// will be drawn, only where there there was sceneColor before
						
						// Reset the buffer to draw the new layer color
						ctxBuffer.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

						// Draw the new color into the buffer, with the old color
						ctxBuffer.globalCompositeOperation = 'source-over';
						// Drawing this additional new color behind the old reduces aliasing
						ctxBuffer.drawImage(layer.color, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
						ctxBuffer.drawImage(canvas, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
						ctxBuffer.drawImage(layer.color, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

						// Make the depth-clipped parts of the new color black
						ctxBuffer.globalCompositeOperation = 'multiply';
						ctxBuffer.drawImage(mask, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

						// Blend the new color into the scene color
						ctx.globalCompositeOperation = 'lighten';
						ctx.drawImage(buffer, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
					}
				}
				
				if (layer.depth)
				{
					ctxSceneDepth.globalCompositeOperation = 'lighten';
					ctxSceneDepth.drawImage(layer.depth, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
				}
			} catch (error) {
				console.warn(`[Compositor.render] orderedLayers index "${index}"`, error);
			}
		});

		if (this.drawSceneDepth)
		{
			ctx.globalCompositeOperation = 'source-over';
			ctx.drawImage(sceneDepth, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		}

		ctx.restore();
		ctxBuffer.restore();
		this._isRendering = false;
	}
	/*
	 * depthComposite implementation based on a post by /u/Agumander
	 * https://old.reddit.com/r/gamedev/comments/35v3lw/zbuffering_in_html5_canvas_without_iterating_over/
	 */
	depthComposite({
		insertColor,
		insertDepth,
		sceneDepth
	}) {
		if (!sceneDepth) return;

		const canvasScratch = this.scratchCanvas;
		const ctxScratch = canvasScratch.getContext('2d');

		ctxScratch.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		// Set up scracth canvas with current scene depth to composite with.
		// SceneDepth could be the current state of the the render,
		// or a subset, eg only the core
		ctxScratch.globalCompositeOperation = 'source-over';
		// ctxScratch.drawImage(insertColor, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		// ctxScratch.globalCompositeOperation = 'source-in';
		ctxScratch.drawImage(sceneDepth, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		
		// Add the new depth to the sceneDepth
		ctxScratch.globalCompositeOperation = 'lighten';
		ctxScratch.drawImage(insertDepth, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		
		// Darken depth-clipped areas and brighten unclipped areas
		ctxScratch.globalCompositeOperation = 'difference';
		ctxScratch.drawImage(sceneDepth, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		// Floor the values to create a pure black/white mask
		ctxScratch.globalCompositeOperation = 'color-dodge';
		ctxScratch.fillStyle = '#FFFFFF';
		ctxScratch.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		// Invert
		// ctxScratch.globalCompositeOperation='difference';
		// ctxScratch.fillStyle='white';
		// ctxScratch.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		
		// Clip the mask to the layer color
		ctxScratch.globalCompositeOperation = 'destination-in';
		ctxScratch.drawImage(insertColor, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		ctxScratch.restore();

		return canvasScratch;
	}

	submitLayer({
		index = -1,
		color,
		depth,
		useDepth = true
	} = {}) {
		console.log(`[Compositor.submitLayer] index "${index}"`);
		if (index >= 0 && index < this.orderedLayersCount)
		{
			this.renderIsInvalid = true;
			return this.orderedLayers[parseInt(index)] = {
				color,
				depth,
				useDepth
			}
		}

		return this.unorderedLayers.push({
			color,
			depth,
			useDepth
		})
	}

	async requestImageLayer({
		item,
		coating,
		hasDepth = true
	} = {}) {
		const assetPrefix = '/7/vanity/';

		if (!hasDepth)
		{
			const colorRequest = await this.loadImg(`${assetPrefix}${item}/${coating ?? item}.png`);
			return {
				color: colorRequest
			}
		}

		const [color, depth] = await Promise.all([
			this.loadImg(`${assetPrefix}${item}/${coating ?? item}.png`),
			this.loadImg(`${assetPrefix}${item}/depth.png`)
		]);

		return {
			color,
			depth
		}
	}

	async loadImg(path) {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = () => resolve(img);
			img.onerror  = e => {
				console.error(`[Compositor.loadImg]`, e);
				resolve();
			};
			img.src = path;
		})
	}

	async test() {
		const coatingID = '002-001-olympus-c0122ae6';

		const promises = [];

		// Core
		promises.push(this.requestImageLayer({
			item: '017-001-olympus-c13d0b38',
			coating: coatingID
		})
			.then(result => {
				this.submitLayer({
					index: 1,
					...result,
					useDepth: false
				});
				this.render();
			})
		);

			
		// Helmet
		promises.push(this.requestImageLayer({
			item: '005-001-olympus-c13d0b38',
			coating: coatingID
		})
			.then(result => {
				this.submitLayer({
					index: 2,
					...result,
					useDepth: false
				});
				this.render();
			})
		);

		// Shoulder, Right
		promises.push(this.requestImageLayer({
			item: '009-001-olympus-c13d0b38',
			coating: coatingID
		})
			.then(result => {
				this.submitLayer({
					index: 5,
					...result
				});
				this.render();
			})
		);

		// Shoulder, Left
		promises.push(this.requestImageLayer({
			item: '008-001-olympus-c13d0b38',
			coating: coatingID
		})
			.then(result => {
				this.submitLayer({
					index: 6,
					...result
				});
				this.render();
			})
		);

		Promise.all(promises)
			.then(() => {
				console.log('done loading')
				this.render();
			})

		// const assetPrefix = '/7/vanity/'

		// // const core = {
		// // 	color: await this.loadImg(`${assetPrefix}${coreID}/${coatingID}.png`),
		// // 	depth: await this.loadImg(`${assetPrefix}${coreID}/depth.png`)
		// // }

		// const shoulder = {
		// 	color: await this.loadImg(`${assetPrefix}${shoulderID}/${coatingID}.png`),
		// 	depth: await this.loadImg(`${assetPrefix}${shoulderID}/depth.png`)
		// }

		// console.log('images', shoulder.color);

		// // this.submitLayer({
		// // 	index: 0,
		// // 	...core
		// // });

		// this.submitLayer({
		// 	index: 5,
		// 	...shoulder
		// });

		await this.render();
	}
}

export const compositor = new Compositor();