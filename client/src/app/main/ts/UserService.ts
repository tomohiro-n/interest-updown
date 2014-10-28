/// <reference path="UserEntry.ts" />
/// <reference path="TmpInitialData.ts" />
/// <reference path="InterestEntry.ts" />

class UserService {

	getUser() : UserEntry {
		return TmpInitialData.firstUser;
	}

	addInterest(user: UserEntry, interestName: string) {
		user.addInterest(interestName);
	}

	changeInterestRank(user : UserEntry, draggedIndex : number, droppedIndex : number) {
		user.interests.splice(droppedIndex, 0, user.interests.splice(draggedIndex, 1)[0] );
	}
}