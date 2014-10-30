/// <reference path="../model/UserEntry.ts" />
/// <reference path="../TmpInitialData.ts" />
/// <reference path="../model/InterestEntry.ts" />
/// <reference path="../model/TimeFeedEntry.ts" />
/// <reference path="../def/moment/moment.d.ts" />

class UserService {

	getUser() : UserEntry {
		// TODO stop using tmp data
		return TmpInitialData.firstUser;
	}

	addInterest(user: UserEntry, interestName: string) {
		var interest : InterestEntry = user.addInterest(interestName);
	}

	changeInterestRank(user : UserEntry, draggedIndex : number, droppedIndex : number) {
		var interests : Array<InterestEntry> = user.interests.splice(droppedIndex, 0, user.interests.splice(draggedIndex, 1)[0] );
		interests[0].updates.unshift(new InterestRankUpdateEntry(moment(), droppedIndex, draggedIndex));
	}

	getFriendsUpdates(user : UserEntry) : Array<string> {
		var interests : Array<InterestEntry> = [];
		user.friends.forEach((friend : UserEntry) => {
			interests = interests.concat(friend.interests.map((interest : InterestEntry) => {
				interest.user = friend;
				return interest;
			}));
		})
		interests.sort((a : InterestEntry, b : InterestEntry) => {
			return a.getLatestUpdatedTime().diff(b.getLatestUpdatedTime());
		})

		var latestInterests = interests.reverse().slice(0, 10); // TODO parameterize
		var result = [];
		latestInterests.forEach((interest) => {
			var entry : TimeFeedEntry = interest.isUpdated() ? new ChangeRankFeedEntry(interest.user, interest, interest.updates[0].toRank) :
			new NewEntryTimeFeedEntry(interest.user, interest, interest.user.interests.length);
			result.push(entry.getMessage());
		})
		return result;
	}

	dummyDataUpdates() {
		this.addInterest(TmpInitialData.friends[0], "xxx");
	}
}