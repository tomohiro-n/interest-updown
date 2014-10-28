/// <reference path="InterestEntry.ts" />

class UserEntry {
	constructor (
		private name : string,
		private initialInterests? : Array<InterestEntry>
		) {
		this.interests = initialInterests ? initialInterests : [];
		this.friends = [];
	}

	interests : Array<InterestEntry>;
	friends : Array<UserEntry>;

	addInterest(name : string) {
		this.interests.push(new InterestEntry(name, []));
	}

	addFriends(friends : Array<UserEntry>) {
		this.friends = this.friends.concat(friends);
	}
}