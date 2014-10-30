/// <reference path="def/moment/moment.d.ts" />
/// <reference path="InterestRankUpdateEntry.ts" />
/// <reference path="UserEntry.ts" />

class InterestEntry {
	constructor(
		private theName : string,
		private links : Array<string>
	) {
		this.name = theName;
		this.registered = moment();
		this.updates = [];
	}

	name : string;
	registered : Moment;
	updates : Array<InterestRankUpdateEntry>;
	user : UserEntry; // Sometimes we extend the class to have a user for better usability

	getRegistered() : string {
		return moment(this.registered).fromNow();
	}

	getLatestUpdatedTime() : Moment {
		return this.updates[0] ? this.updates[0].time : this.registered;
	}

	isUpdated() : boolean {
		return this.updates.length != 0;
	}
}