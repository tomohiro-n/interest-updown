/// <reference path="def/moment/moment.d.ts" />

class InterestEntry {
	constructor(
		private name : string,
		private links : Array<string>
	) {
		this.registered = moment();
		this.updated = moment();
	}

	registered : Moment;
	updated : Moment;

	getRegistered() : string {
		return moment(this.registered).fromNow();
	}
}