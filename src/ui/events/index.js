import { Component } from 'component';
import { HTML } from 'lib/HTML';
import { db } from 'db';

import './index.css';

class Calendar extends Component {
	async init() {
		const calendarPath = 'Calendars/Seasons/SeasonCalendar.json';
		this.data = await db.getJSON(calendarPath);

		this.rewardTrackPaths = new Set();

		this.data?.Seasons?.forEach(season => {
			if (season.OperationTrackPath) this.rewardTrackPaths.add(`${season.OperationTrackPath}`);
		});
		this.data?.Events?.forEach(ritual => {
			if (ritual.RewardTrackPath) this.rewardTrackPaths.add(`${ritual.RewardTrackPath}`);
		});

		this.rewardTracks = [...this.rewardTrackPaths.values()].map(path => new RewardTrack(path))
	}
}

class RewardTrack extends Component {
	constructor(path) {
		super();
		this.path = path;
	}

	async init() {
		this.data = await db.getJSON(this.path);
	}

	render() {
		return this.html`
			<div class="reward-track_wrapper">
				
			</div>
		`;
	}
}