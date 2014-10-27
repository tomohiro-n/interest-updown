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
	.controller('MainCtrl', [
		'$scope', MainCtrl
	])
;
