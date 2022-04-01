import { Component } from 'component';

const updateDate = new Date('2022-03-30T18:10:31.072Z');
class Privacy extends Component {
	render() {
		return this.html`
			<div class="discord_wrapper">
				<section>
					<header>Privacy</header>
					<span>Updated: ${updateDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
					<p>Cylix Guide does not collect information from visitors unless explicitly submitted, e.g. through a form or searching a gamertag. Any private information submitted is not shared outside of the data processors referred to in this policy, and is only used by Cylix Guide for purposes described in the submission form. Public information such as your spartan customization may be used to display anonymized statistics, e.g. item popularity.</p><br/>
					<p>If you provided personally identifiable information and would like it to be deleted please <a href="mailto:info@cylix.guide">contact me</a>.</p><br/>
					<p>Requests to cylix.guide are processed by <a href="https://developers.cloudflare.com/fundamentals/get-started/cloudflare-cookies/" target="_blank" rel="noopener noreferrer">Cloudflare</a> and <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement#github-pages" target="_blank" rel="noopener noreferrer">GitHub</a>. Please refer to their privacy policies for any information they might collect.</p><br/>
				</section>
			</div>
		`;
	}
}

export const privacy = new Privacy();