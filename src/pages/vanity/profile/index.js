import { Component } from 'component';
import { emitter } from 'eventEmitter';
import { HTML } from 'lib/HTML';

class Profile extends Component {
	get defaultState() {
		return {
			gamertag: '',
			search: '',
			failedSearch: '',
			status: '',
			fetching: false
		};
	}

	get gamertag() {
		return this.dashDecodeURIComponent(this.state.gamertag);
	}

	get wrongGamertags() {
		return this?._wrongGamertags ?? (this._wrongGamertags = new Set());
	}

	async init(gamertagSearch) {
		if (!gamertagSearch?.trim()) return;

		const profile = await this.requestProfile(gamertagSearch.trim());
		if (profile && profile.gamertag)
		{
			const gamertag = profile.gamertag;
			this.state = {
				...this.defaultState,
				gamertag,
				profile
			};
			this.announceProfile(profile, gamertag);
			this.render();

			return profile;
		}
	}

	render() {
		this.setUrlPathToGamertag();
		return this.html`<div class="mica_viewer vanity-profile_wrapper" id="vanity-profile-search">
			<header class="mica_header-strip">
				<button aria-label="Search" title="Search" onclick=${() => this.submitSearch()}><div class="icon-masked icon-search"></div></button>
				<input
					aria-label="Search Input"
					type="search"
					class="vanity-search_input"
					id="vanity-search"
					name="vanity-search"
					placeholder="Search Gamertag..."
					maxlength="32"
					oninput=${(e) => this.inputSearch(e?.target?.value ?? '')}
					onkeydown=${(e) => {
						if (e?.key === 'Enter') this.submitSearch();
					}}
					value=${this.state.term}
				>
				<div class="vanity-status">${this.renderStatus()}</div>
			</header>
		</div>`;
	}

	renderStatus(status) {
		return HTML.wire(this, ':status')`${status ?? this.state.status}`;
	}

	inputSearch(string) {
		if (typeof string === 'string') this.state.search = string;
	}

	async submitSearch() {
		if (this.state.fetching) return;
		if (!this.state.search || typeof this.state.search !== 'string') return;

		const search = this.state.search;
		if (search === this.state.failedSearch) return;
		console.info(`[Vanity.submitSearch]`, search);

		const response = await this.init(search);
		if (response) return;

		this.state.failedSearch = search;
	}

	announceProfile(profile, gamertag) {
		if (profile && profile?.armor && gamertag)
		{
			this.setUrlPathToGamertag();
			emitter.emit('announceProfile', {
				profile,
				gamertag
			})
		}
	}

	async requestProfile(gamertag) {
		return sampleProfile;
		try {
			if (this.state.disabled) throw new Error(`System offline. Please come back later.`);
			if (!gamertag || typeof gamertag !== 'string') throw new Error(`No gamertag "${gamertag}"`);
			if (this.wrongGamertags.has(gamertag.toLowerCase()))
			{
				this.setState({status: 'Not Found!'});
				return console.error('Repeated 404 GT', gamertag);
			}

			// throw new Error(`host https://${window.location.host}`);
			this.setState({
				fetching: true,
				status: 'Searching...'
			});
			// const response = await fetch(new URL(`/api/vanity/${gamertag}`, `https://cylix.guide`));
			const response = await fetch(new URL(`/api/vanity/profile/${gamertag}`, `https://${window.location.host}`));
			console.log('requestAppearance', response.status);
			this.state.fetching = false;
			if (response && response.ok)
			{
				// this.renderStatus('Found!');
				const json = await response.json();
				if (json && json.armor) return json;
			}

			if (!response)
			{
				this.setState({status: 'Network Error!'});
				return;
			}

			if (response.status === 404)
			{
				this.wrongGamertags.add(gamertag.toLowerCase());
				console.log('404', gamertag, this.wrongGamertags);
				this.setState({status: 'Not Found!'});
				return;
			}

			if (response.status === 405)
			{
				console.log('405', gamertag);
				this.setState({
					status: 'System Offline!',
					disabled: true
				});
				return;
			}

			if (response.status >= 500)
			{
				this.setState({status: 'Server Error!'});
				return;
			}
		} catch (error) {
			console.error(`[Vanity.requestAppearance] Fetch error`, error);
		}
		this.setState({
			fetching: false,
			status: 'Error!'
		});
	}

	setUrlPathToGamertag() {
		const gamertag = this.state.gamertag;
		if (gamertag && typeof gamertag === 'string')
		{
			history.pushState(null, null, `/vanity/${this.dashEncodeURIComponent(gamertag.trim())}`);

			this.renderStatus('');
		}
	}

	dashEncodeURIComponent(string) {
		try {
			if (!string || typeof string !== 'string') return '';
			if (!string.includes(' ')) return encodeURIComponent(string);
			return encodeURIComponent(string.replaceAll(' ', '-'));
		} catch (error) {
			return encodeURIComponent(string);
		}
	}

	dashDecodeURIComponent(string) {
		try {
			if (!string || typeof string !== 'string') return '';
			if (!string.includes('-')) return decodeURIComponent(string);
			return decodeURIComponent(string.replaceAll('-', ' '));
		} catch (error) {
			return decodeURIComponent(string);
		}
	}
}

export const profile = new Profile();

const sampleProfile = {
	"gamertag": "Mr Kwatz",
	"date": "2022-05-16T01:36:02.994Z",
	"spartan": {
		"emblem": "104-001-343other-adre-5d4ea595",
		"stance": "101-000-menu-stance-o-7ba7d54b",
		"serviceTag": "WEW",
		"backdrop": "103-000-ui-background-e2953b89",
		"aiModel": "302-100-teardrop-0f17439a",
		"aiColor": "301-100-base-pink-5d69226a"
	},
	"armor": {
		"core": "017-001-olympus-c13d0b38",
		"theme": "007-001-olympus-c13d0b38",
		"coating": "002-001-olympus-59e31f7d",
		"helmet": "005-001-olympus-c13d0b38",
		"helmetAttachment": "004-001-olympus-c2d72600",
		"visor": "012-001-938c6f4d",
		"leftShoulderPad": "008-001-olympus-c13d0b38",
		"rightShoulderPad": "009-001-olympus-2fdbcbdb",
		"gloves": "003-001-olympus-c13d0b38",
		"kneepads": "006-001-olympus-8e7c9dff",
		"chestAttachment": "001-001-olympus-79bee247",
		"wristAttachment": "011-001-olympus-f7e6ca39",
		"hipAttachment": "010-001-olympus-707a6bd4",
		"emblem": "013-001-5d4ea595",
		"armorFX": "",
		"mythicFX": ""
	},
	"weapons": [
		{
			"core": "209-200-olympus-aa30213b",
			"theme": "207-200-olympus-aa30213b",
			"coating": "203-200-olympus-ae4c775f",
			"emblem": "205-201-2944109d",
			"deathFX": "",
			"charm": "",
			"model": "210-000-critpoint-shr-863d30c7"
		},
		{
			"core": "209-201-olympus-aa30213b",
			"theme": "207-201-olympus-aa30213b",
			"coating": "203-201-olympus-e05832c9",
			"emblem": "",
			"deathFX": "",
			"charm": "",
			"model": ""
		},
		{
			"core": "209-202-olympus-aa30213b",
			"theme": "207-202-olympus-aa30213b",
			"coating": "203-202-olympus-de53760e",
			"emblem": "205-201-5d4ea595",
			"deathFX": "",
			"charm": "",
			"model": "210-000-type-2p-flash-4a71df84"
		},
		{
			"core": "209-203-olympus-aa30213b",
			"theme": "207-203-olympus-aa30213b",
			"coating": "203-203-olympus-75e62d67",
			"emblem": "205-201-d8562af4",
			"deathFX": "",
			"charm": "",
			"model": ""
		},
		{
			"core": "209-204-olympus-aa30213b",
			"theme": "207-204-olympus-aa30213b",
			"coating": "203-204-olympus-75e62d67",
			"emblem": "205-201-8fc29cd6",
			"deathFX": "204-000-judgement-pho-c4b97b4d",
			"charm": "",
			"model": ""
		},
		{
			"core": "209-205-olympus-aa30213b",
			"theme": "207-205-olympus-aa30213b",
			"coating": "203-205-olympus-4639abfe",
			"emblem": "205-201-8fc29cd6",
			"deathFX": "",
			"charm": "",
			"model": ""
		},
		{
			"core": "209-206-olympus-aa30213b",
			"theme": "207-206-olympus-aa30213b",
			"coating": "203-206-olympus-75e62d67",
			"emblem": "",
			"deathFX": "",
			"charm": "",
			"model": ""
		},
		{
			"core": "209-207-olympus-aa30213b",
			"theme": "207-207-olympus-aa30213b",
			"coating": "203-207-olympus-aa30213b",
			"emblem": "205-201-5d4ea595",
			"deathFX": "",
			"charm": "",
			"model": ""
		}
	],
	"vehicles": [
		{
			"core": "409-300-olympus-aa30213b",
			"theme": "408-300-olympus-aa30213b",
			"coating": "404-300-olympus-aacf68b1",
			"emblem": "405-305-0fe4e1a4",
			"model": ""
		},
		{
			"core": "409-301-olympus-aa30213b",
			"theme": "408-301-olympus-aa30213b",
			"coating": "404-301-olympus-75e62d67",
			"emblem": "405-305-8fc29cd6",
			"model": ""
		},
		{
			"core": "409-302-olympus-aa30213b",
			"theme": "408-302-olympus-aa30213b",
			"coating": "404-302-olympus-75e62d67",
			"emblem": "405-305-7de386a8",
			"model": ""
		},
		{
			"core": "409-303-olympus-aa30213b",
			"theme": "408-303-olympus-aa30213b",
			"coating": "404-303-olympus-aacf68b1",
			"emblem": "405-305-8fc29cd6",
			"model": ""
		},
		{
			"core": "409-304-olympus-e8b8a8b3",
			"theme": "408-304-olympus-aa30213b",
			"coating": "404-304-olympus-aacf68b1",
			"emblem": "405-305-0fe4e1a4",
			"model": ""
		},
		{
			"core": "409-305-olympus-90c5035c",
			"theme": "408-305-olympus-aa30213b",
			"coating": "404-305-olympus-75e62d67",
			"emblem": "",
			"model": ""
		},
		{
			"core": "409-306-olympus-174b9a04",
			"theme": "408-306-olympus-aa30213b",
			"coating": "404-306-olympus-986adcb9",
			"emblem": "405-305-0fe4e1a4",
			"model": ""
		}
	],
	"enlistedDate": "2021-11-15T19:18:43.373Z"
}