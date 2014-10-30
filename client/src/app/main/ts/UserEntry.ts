/// <reference path="InterestEntry.ts" />

class UserEntry {
	constructor (
		private theName : string,
		private initialInterests? : Array<InterestEntry>
		) {
		this.name = theName;
		this.interests = initialInterests ? initialInterests : [];
		this.friends = [];
	}

	name : string;
	interests : Array<InterestEntry>;
	friends : Array<UserEntry>;

	addInterest(name : string) : InterestEntry {
		var interest = new InterestEntry(name, []);
		this.interests.push(interest);
		return interest;
	}

	addFriends(friends : Array<UserEntry>) {
		this.friends = this.friends.concat(friends);
	}
}