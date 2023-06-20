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
			fetching: false,
			rateLimit: false
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
				profile,
				rateLimit: this.state.rateLimit
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
				<button
					aria-label="Search"
					title="Search"
					onclick=${() => this.submitSearch()}
					disabled=${this.state.rateLimit || this.state.fetching}
				>
					<div class="icon-masked icon-search"></div>
				</button>
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

	async controlsRateLimit() {
		this.state.rateLimit = true;
		// this.render();
		setTimeout(() => {
			this.state.rateLimit = false;
			this.render();
		}, 3000);
	}

	inputSearch(string) {
		if (typeof string === 'string') this.state.search = string;
	}

	async submitSearch() {
		if (this.state.fetching || this.state.rateLimit) return;
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
		// return sampleProfile;
		try {
			if (this.state.rateLimit) return;
			this.controlsRateLimit();
			// return;

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

			if (response.status === 429)
			{
				console.log('429', gamertag);
				this.setState({
					status: 'Please send less requests.'
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