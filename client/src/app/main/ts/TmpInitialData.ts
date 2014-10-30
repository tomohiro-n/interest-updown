/// <reference path="model/UserEntry.ts" />
/// <reference path="model/InterestEntry.ts" />

class TmpInitialData {
	static firstUser : UserEntry = new UserEntry("me",
		[
			new InterestEntry("sample1", []),
			new InterestEntry("sample2", []),
			new InterestEntry("sample3", []),
			new InterestEntry("sample4", [])
		]);
	static friends : Array<UserEntry> = [
		new UserEntry("friend1", [
			new InterestEntry("friendOneInterest1", []),
			new InterestEntry("friendOneInterest2", []),
			new InterestEntry("friendOneInterest3", []),
			new InterestEntry("friendOneInterest4", [])
		]),
		new UserEntry("friend2", [
			new InterestEntry("friendTwoInterest1", []),
			new InterestEntry("friendTwoInterest2", []),
			new InterestEntry("friendTwoInterest3", []),
			new InterestEntry("friendTwoInterest4", [])
		])
		];
}

TmpInitialData.firstUser.addFriends(TmpInitialData.friends);