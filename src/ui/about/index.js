import { HTML } from 'lib/HTML';
import { Component } from 'component';

class About extends Component {
	constructor() {
		super();
		this.links = [];
	}
	render() {
		return this.html`
			<h2>Cylix Guide</h2>
			<p>Cylix Guide is a compendium of items and experiences found within the game Halo Infinite. As an open source project its goal is to make information about the live game accessible, and seeks to archive that information along with its changes over time.</p>
			<h2>Disclaimer</h2>
			<p>All information presented is generated from the game API (unless otherwise noted) and is subject to change. As such it may not accurately reflect future content and can not be used as an authoritative source for such.</p>
			<p>This site is not operated by nor affiliated with Microsoft and 343 Industries.</p>
			<p>This site displays content owned or licensed by Microsoft for the purpose of education and information archiving.</p>
			<p>The original assets (e.g. code) used for this website, not associated with Microsoft, are available under the ISC license. To contribute, report issues, or contact me, please visit the <a href="https://github.com/Gasgira/gasgira.github.io" target="_blank" rel="noopener noreferrer">GitHub repository</a> or <a href="https://cylix.guide/discord" target="_blank" rel="noopener noreferrer">Discord</a> for this project. All contributions must be made under the same license and terms.</p>
			<h2>Spoiler Policy</h2>
			<p>
				Items considered a spoiler appear as [REDACTED], without any associated image.
			</p>
			<p>
				Items signal to the game UI whether they should be shown to a player before they own them. This signal is turned on during events when they first become available, such as in store bundles or ritual battle passes. This signal is tracked such that if an item has ever been visible to players the spoiler status is removed. There are also cases where items are made available through special grants such as the Unicorn emblems and log-in bonuses that manually have their spoiler status removed as they are announced.
			</p>
			<p>
				To respect individual choice a user may reveal a spoiler one at a time by clicking on the “Reveal Spoiler” button in the details panel for an item, or they may click “Reveal All Spoilers” in the menu. The individual reveal is temporary, while the reveal all button saves the preference to your browser so that it will remember your choice upon your next visit.
			</p>
		`;
	}
}

export const about = new About();