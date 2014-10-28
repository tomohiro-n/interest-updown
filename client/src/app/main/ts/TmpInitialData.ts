/// <reference path="UserEntry.ts" />
/// <reference path="InterestEntry.ts" />

class TmpInitialData {
	static firstUser = new UserEntry("tomo",
		[
			new InterestEntry("sample1", []),
			new InterestEntry("sample2", [])
		])
}