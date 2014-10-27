/// <reference path="def/angular/angular.d.ts" />
/// <reference path="InterestEntry.ts" />

class MainCtrl {
	constructor (
		private $scope
		) {

		$scope.interests = [
			new InterestEntry("sample", []),
			new InterestEntry("sample2", []),
			new InterestEntry("sample3", [])
		];

		$scope.addEntry = (name : string) => {
			var entry : InterestEntry;
			entry = new InterestEntry(name, []);
			$scope.interests.push(entry);
		};
	}
}