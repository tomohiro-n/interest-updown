/// <reference path="UserEntry.ts" />
/// <reference path="InterestEntry.ts" />

interface TimeFeedEntry {
	getMessage() : string;
}

class NewEntryTimeFeedEntry implements TimeFeedEntry {
	constructor (
		private user : UserEntry,
		private interest : InterestEntry,
		private rank : number
		) {

	}

	getMessage() : string {
		return "NEW INTEREST : " + this.user.name + " ranked " + this.interest.name
			+ " at " + this.rank + "th";
	}
}

class ChangeRankFeedEntry implements TimeFeedEntry {
	constructor (
		private user : UserEntry,
		private interest : InterestEntry,
		private rank : number
		) {

	}

	getMessage() : string {
		return this.user.name + " ranked" + this.interest.name
			+ " at" + this.rank + "th";
	}
}
