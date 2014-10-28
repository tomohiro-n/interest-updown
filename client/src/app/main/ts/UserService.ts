/// <reference path="UserEntry.ts" />
/// <reference path="TmpInitialData.ts" />

class UserService {

	getUser() : UserEntry {
		return TmpInitialData.firstUser;
	}

	addInterest(user: UserEntry, interestName: string) {
		user.addInterest(interestName);
	}
}