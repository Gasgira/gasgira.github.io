import { HTML } from 'lib/HTML';
import { Component } from 'component';
import { urlParams } from 'urlParams';

import './index.css';

class Discord extends Component {
	constructor() {
		super();

		const webhook = localStorage.getItem('user.discordWebhook');
		if (webhook) this.webhookID = webhook;
	}

	render() {
		const testParam = urlParams.getSecionSetting('discord');
		if (!testParam) return 'Daily store update bot coming soon...'
		return this.html`
			<div class="discord_wrapper">
				<section>
					<header>Discord</header>
					<p>Cylix Guide offers a Discord webhook service which can post daily Halo Infinite store updates to your community. If you operate a Discord server and would like this service, please read <a href="https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks" target="_blank" rel="noopener noreferrer">Discord's page on webhooks</a> and submit your webhook below.</p><br/>
					<p>Updates will be sent near 10 AM Pacific, following the store reset.</p><br/>
					<p>If your server has an active webhook and you would like to stop recieving updates, you must remove the webhook from your Discord server integrations.</p><br/>
					<div class="option_wrapper">
						<label for="webhook">Webhook URL: </label>
						<input class="show-value" type="text" id="webhook" name="webhook"
							onchange=${(e) => this.input(e?.target?.value)}
							disabled=${this?.webhookID}
						>
					</div>
					<button
						onclick=${() => this.submit()}
						disabled=${this?.webhookID}
					>Submit</button>
					${this.renderStatus()}
					<br/>
					<span title=${this?.webhookID ?? '...'}>${this?.webhookID ? `You have registered a webhook with the ID: ${this.webhookID.substring(0, 9)}...` : ''}</span>
					<br/>
					<img src="/discord.jpg">
				</section>
			</div>
		`;
	}

	renderStatus() {
		return HTML.wire(this, ':status')`
			<span class="discord-status">${this.state?.status ? `Response: ${this.state.status}` : '...'}</span>
		`;
	}

	input(string) {
		try {
			if (!string || typeof string !== 'string' || !string.startsWith('https://discord.com/api/webhooks/'))
			{
				this.setState({status: 'Invalid input!'});
				throw new Error('Invalid URL');
			}
			const url = new URL(string);

			this.inputURL = url.toString();
	
			console.log('url', url);
		} catch (error) {
			console.error('[Discord.webhook] Error processing input URL', error);
			this.inputURL = undefined;
		}
	}

	async submit() {
		if (!this.inputURL || typeof this.inputURL !== 'string' || !this.inputURL.startsWith('https://discord.com/api/webhooks/'))
		{
			this.setState({status: 'Invalid submission!'});
			return;
		}
		console.log('submit', this.inputURL);
		this.setState({status: 'pending'});

		const body = JSON.stringify({webhook: this.inputURL});

		const response = await fetch('https://cylix.guide/api/webhooks/discord', {
			method: 'POST',
			// mode: 'no-cors',
			headers: {
				'x-cylix-auth': '77f146a1-05cd-440d-acdb-7ac96958a354'
			},
			body
		});

		if (response)
		{
			console.log(`[Discord.webhook] response "${response.status}"`);
			if (!response.ok)
			{
				this.setState({status: `Bad response ${response.status ?? '???'}`});
				return;
			}

			const json = await response.json();
			if (json && json.id)
			{
				this.setState({status: `Accepted webhook ID ${json.id}`});
				return;
			}
		}
		
		this.setState({status: 'No response!'});
	}
}

export const discord = new Discord();