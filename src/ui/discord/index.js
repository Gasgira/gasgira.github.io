import { HTML } from 'lib/HTML';
import { Component } from 'component';
import { urlParams } from 'urlParams';

import './index.css';

class Discord extends Component {
	constructor() {
		super();

		if (localStorage)
		{
			const storeWebhookID = localStorage.getItem('user.storeWebhookID');
			if (storeWebhookID) this.storeWebhookID = storeWebhookID;

			const capstoneWebhookID = localStorage.getItem('user.capstoneWebhookID');
			if (capstoneWebhookID) this.capstoneWebhookID = capstoneWebhookID;

			const newsWebhookID = localStorage.getItem('user.newsWebhookID');
			if (newsWebhookID) this.newsWebhookID = newsWebhookID;
		}
	}

	render() {
		return this.html`
			<div class="discord_wrapper">
				<section>
					<header><h2>Discord</h2></header>
					<p>To contribute to the project, report issues, or just talk about Halo and its API you are welcome to <a href="https://cylix.guide/discord" target="_blank">join our Discord community.</a></p>
					<br/>
					<article>
						<h2>Bot</h2>
						<p><a href="https://cylix.guide/discord/bot" target="_blank">Click here</a> to add the Discord bot to your server!</p>
						<ul>
							<li>/item "search term" "type?" "spoilers?"</li>
							<li>/vanity "gamertag"</li>
						</ul>
					</article>
					<br/>
					<article>
						<h2>Webhooks</h2>
						<p>Cylix Guide offers a Discord webhook service which can post daily Halo Infinite updates to your community. If you operate a Discord server and would like this service, please read <a href="https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks" target="_blank" rel="noopener noreferrer">Discord's page on webhooks</a> and submit your webhook below. You may provide the same webhook for each, or choose to create separate channels.</p><br/>
						<p>Updates will be sent following the in-game reset time.</p><br/>
						<p>If your server has an active webhook and you would like to stop receiving  updates, you must remove the webhook from your Discord server integrations.</p><br/>
						<p>Note: alternatively there is a followable channel in the <a href="https://cylix.guide/discord" target="_blank">Cylix discord</a> if you are not able to add the webhook directly. An additional followable announcement channel is also available on the discord for calling out trending and official recommended forge maps.</p><br/>
						${this.renderStatus()}
						<br/><br/>

						<div class="option_wrapper">
							<label for="webhook-store">Store (daily): </label>
							<input class="show-value" type="text" id="webhook-store" name="webhook-store"
								onchange=${(e) => this.inputStore(e?.target?.value)}
								disabled=${this?.storeWebhookID}
								placeholder="https://discord.com/api/webhooks/..."
							>
						</div>
						<button
							class="hi-box"
							onclick=${() => this.submitStore()}
							disabled=${this?.storeWebhookID}
						>Submit</button>
						<span title=${this?.storeWebhookID ?? '...'}>${this?.storeWebhookID ? `You have registered a store webhook with the ID: ${this.storeWebhookID.substring(0, 9)}...` : ''}</span>
						<br/>
						<br/>

						<div class="option_wrapper">
							<label for="webhook-capstone">Capstone (weekly): </label>
							<input class="show-value" type="text" id="webhook-capstone" name="webhook-capstone"
								onchange=${(e) => this.inputCapstone(e?.target?.value)}
								disabled=${this?.capstoneWebhookID}
								placeholder="https://discord.com/api/webhooks/..."
							>
						</div>
						<button
							class="hi-box"
							onclick=${() => this.submitCapstone()}
							disabled=${this?.capstoneWebhookID}
						>Submit</button>
						<span title=${this?.capstoneWebhookID ?? '...'}>${this?.capstoneWebhookID ? `You have registered a capstone webhook with the ID: ${this.capstoneWebhookID.substring(0, 9)}...` : ''}</span>
					</article>
					<br/>
					<img src="/bot.jpg">
					<img src="/storebot.jpg">
				</section>
			</div>
		`;
	}

	renderStatus() {
		return HTML.wire(this, ':status')`
			<span class="discord-status">${this.state?.status ? `Response: ${this.state.status}` : '...'}</span>
		`;
	}

	inputStore(string) {
		try {
			if (!string || typeof string !== 'string' || !string.startsWith('https://discord.com/api/webhooks/'))
			{
				this.setState({status: 'Invalid store input!'});
				throw new Error('Invalid URL');
			}
			const url = new URL(string);

			this.inputStoreURL = url.toString();
	
			console.log('url', url);
		} catch (error) {
			console.error('[Discord.webhook] Error processing input URL', error);
			this.inputStoreURL = undefined;
		}
	}

	async submitStore() {
		if (!this.inputStoreURL || typeof this.inputStoreURL !== 'string' || !this.inputStoreURL.startsWith('https://discord.com/api/webhooks/'))
		{
			this.setState({status: 'Invalid store webhook'});
			return;
		}

		await this.registerWebhook('store', this.inputStoreURL);
	}

	inputCapstone(string) {
		try {
			if (!string || typeof string !== 'string' || !string.startsWith('https://discord.com/api/webhooks/'))
			{
				this.setState({status: 'Invalid capstone input!'});
				throw new Error('Invalid URL');
			}
			const url = new URL(string);

			this.inputCapstoneURL = url.toString();
	
			console.log('url', url);
		} catch (error) {
			console.error('[Discord.webhook] Error processing input URL', error);
			this.inputCapstoneURL = undefined;
		}
	}

	async submitCapstone() {
		if (!this.inputCapstoneURL || typeof this.inputCapstoneURL !== 'string' || !this.inputCapstoneURL.startsWith('https://discord.com/api/webhooks/'))
		{
			this.setState({status: 'Invalid capstone webhook'});
			return;
		}

		await this.registerWebhook('capstone', this.inputCapstoneURL);
	}

	async registerWebhook(audience, webhook) {
		if (!webhook || typeof webhook !== 'string' || !webhook.startsWith('https://discord.com/api/webhooks/'))
		{
			this.setState({status: 'Invalid webhook!'});
			return;
		}
		if (!audience || typeof audience !== 'string')
		{
			this.setState({status: 'Invalid audience!'});
			return;
		}
		console.log('submit', webhook);
		this.setState({status: 'pending'});

		const body = JSON.stringify({webhook});

		const response = await fetch(new URL(`/api/webhooks/${audience}`, `https://${window.location.host}`), {
			method: 'POST',
			body
		});

		if (response)
		{
			console.log(`[Discord.webhook] response "${response.status}"`);
			if (!response.ok)
			{
				this.setState({status: `Bad response ${response.status ?? '???'} for "${audience}"`});
				return;
			}

			if (response.status === 200)
			{
				this.setState({status: `Not accepted, this webhook is already registered for "${audience}"!`});
				return;
			}

			if (response.status === 201)
			{
				const json = await response.json();
				if (json && json.id)
				{
					const id = json.id;
					this.setState({status: `Accepted webhook ID "${id}" for "${audience}"`});
					if (localStorage) localStorage.setItem(`user.${audience}WebhookID`, `${id}`);
					return;
				}
			}
		}
		
		this.setState({status: `No response for "${audience}"`});
	}
}

export const discord = new Discord();