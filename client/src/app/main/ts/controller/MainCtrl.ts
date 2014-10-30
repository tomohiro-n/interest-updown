/// <reference path="../def/angular/angular.d.ts" />
/// <reference path="../def/jquery/jquery.d.ts" />
/// <reference path="../def/jqueryui/jqueryui.d.ts" />
/// <reference path="../model/InterestEntry.ts" />
/// <reference path="../service/UserService.ts" />

class MainCtrl {
	constructor (
		private $scope,
		private $timeout: ng.ITimeoutService,
		private userService : UserService
		) {

		$scope.draggedIndex = 0;

		$scope.user = userService.getUser();

		$scope.addEntry = (name : string) => {
			userService.addInterest($scope.user, name);
		};

		$scope.getUserUpdates = () => {
			return userService.getFriendsUpdates($scope.user);
		}

		$scope.sortableOptions = {

			start(e, ui) {
				$scope.draggedIndex = ui.item.index();
			},

			stop(e, ui) {
				var droppedIndex = ui.item.index();
				userService.changeInterestRank($scope.user, $scope.draggedIndex, droppedIndex);
			}
		}

		$timeout(userService.dummyDataUpdates.bind(userService), 5000);

	}
}
