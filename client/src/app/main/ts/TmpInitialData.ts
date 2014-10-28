/// <reference path="UserEntry.ts" />
/// <reference path="InterestEntry.ts" />

class TmpInitialData {
	static firstUser = new UserEntry("me",
		[
			new InterestEntry("sample1", []),
			new InterestEntry("sample2", []),
			new InterestEntry("sample3", []),
			new InterestEntry("sample4", [])
		])
}