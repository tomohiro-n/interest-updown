/// <reference path="def/angular/angular.d.ts" />
/// <reference path="InterestEntry.ts" />
/// <reference path="UserService.ts" />

class MainCtrl {
	constructor (
		private $scope,
		private userService : UserService
		) {

		$scope.user = userService.getUser();

		$scope.addEntry = (name : string) => {
			userService.addInterest($scope.user, name);
		};
	}
}