import { Component } from 'component';

class Privacy extends Component {
	render() {
		return this.html`
			<div class="discord_wrapper">
				<section>
					<header>Privacy</header>
					<p>Cylix Guide does not collect information from visitors unless explicitly submitted, e.g. through a form or searching a gamertag. Any information submitted is not shared outside of the data processors referred to in this policy, and is only used by Cylix Guide for purposes described in the submission form.</p><br/>
					<p>If you provided personally identifiable information and would like it to be deleted please <a href="mailto:info@cylix.guide">contact me</a>.</p><br/>
					<p>Requests to cylix.guide are processed by <a href="https://developers.cloudflare.com/fundamentals/get-started/cloudflare-cookies/" target="_blank" rel="noopener noreferrer">Cloudflare</a> and <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement#github-pages" target="_blank" rel="noopener noreferrer">GitHub</a>. Please refer to their privacy policies for any information they might collect.</p><br/>
				</section>
			</div>
		`;
	}
}

export const privacy = new Privacy();