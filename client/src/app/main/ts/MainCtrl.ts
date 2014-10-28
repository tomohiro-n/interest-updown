/// <reference path="def/angular/angular.d.ts" />
/// <reference path="def/jquery/jquery.d.ts" />
/// <reference path="def/jqueryui/jqueryui.d.ts" />
/// <reference path="InterestEntry.ts" />
/// <reference path="UserService.ts" />

class MainCtrl {
	constructor (
		private $scope,
		private userService : UserService
		) {

		$scope.draggedIndex = 0;

		$scope.user = userService.getUser();

		$scope.addEntry = (name : string) => {
			userService.addInterest($scope.user, name);
		};

		$scope.sortableOptions = {
			stop : (e, ui) => {
				console.log($scope.user.interests.map((entry) => {
					return entry.name;
				}));
				// TODO we should call a service for API call
			}
		}
	}
}