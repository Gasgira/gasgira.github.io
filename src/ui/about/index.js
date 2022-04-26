import { HTML } from 'lib/HTML';
import { Component } from 'component';

class About extends Component {
	constructor() {
		super();
		this.links = [];
	}
	render() {
		return this.html`
		<p>
			<span>Cylix Guide is a compendium of items found within the game Halo Infinite.</span><br><br>
			<span>All information presented is generated from the game API (unless otherwise noted) and is subject to change. As such it may not accurately reflect future content and can not be used as an authoritative source.</span><br/><br/>
			<span>This site is not operated by nor affiliated with Microsoft and 343 Industries.</span><br><br>
			<span>This site displays content owned or licensed by Microsoft for the purpose of education and information archiving.</span><br><br/><br/>
			<span>The original assets (e.g. code) used for this website, not associated with Microsoft, are available under the ISC license. To contribute, report issues, or contact me, please visit the <a href="https://github.com/Gasgira/gasgira.github.io" target="_blank" rel="noopener noreferrer">GitHub repository</a> for this project. All contributions must be made under the same license and terms.</span><br/><br/>
		</p>
		<p>ISC License</p><br/>

		<p>Copyright (c) 2022 Kwatzy</p><br/>

		<p>Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.</p><br/>

<p>THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.</p>
		`;
	}
}

export const about = new About();