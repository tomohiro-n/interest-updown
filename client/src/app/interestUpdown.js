'use strict';

angular.module('interestUpdown', ['ngResource', 'ngRoute', 'ngDragDrop'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/main/main.html',
				controller: 'MainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
	.service('UserService', UserService)
	.controller('MainCtrl', [
		'$scope', 'UserService', MainCtrl
	])
;
