/// <reference path="InterestEntry.ts" />

class UserEntry {
	constructor (
		private name : string,
		private initialInterests? : Array<InterestEntry>
		) {
		this.interests = initialInterests ? initialInterests : [];
	}

	interests : Array<InterestEntry>;

	addInterest(name : string) {
		this.interests.push(new InterestEntry(name, []));
	}
}