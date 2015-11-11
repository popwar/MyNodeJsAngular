'use strict';

var myapp = angular.module('myapp', ['ngRoute', 'angularUtils.directives.dirPagination']);

myapp.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/galary', {
		templateUrl: 'partials/galary.html'
	}).when('/ceramic', {
		templateUrl: 'partials/ceramic.html'
	});

	$locationProvider.html5Mode(true);
});

myapp.controller('MyController', ['$scope', 'galaryService', function($scope, galaryService) {
	$scope.currentPage = 1;
	$scope.pageSize = 2;

	galaryService.getGalarys().then(function(d) {
		$scope.galarylist = d;
	});
}]).controller('HeaderController', ['$scope', 'categoryService', function($scope, categoryService) {
	categoryService.getCategory().then(function(d) {
		$scope.categorylist = d;
	});
}]).controller('CeramicController', ['$scope', 'categoryService', function($scope, categoryService) {
	categoryService.getCategory().then(function(d) {
		for (var i = 0; i < d.length; i++) {
			if (d[i].name === "Ceramic Tiles") {
				$scope.products = d[i].products;
			}
		}
		$scope.categorylist = d;
	});

}]).controller('PageController', ['$scope', function($scope) {
	$scope.pageChangeHandler = function(num) {
		console.log('going to page ' + num);
	};
}]);

myapp.service('galaryService', function($http) {
	this.getGalarys = function() {
		// $http returns a promise, which has a then function, which also returns a promise
		//return promise
		return $http.get('http://localhost:3002/getGalary').then(function(response) {
			// The then function here is an opportunity to modify the response
			console.log(response);
			// The return value gets picked up by the then in the controller.
			return response.data;
		});
	}
}).service('categoryService', function($http) {
	this.getCategory = function() {
		// $http returns a promise, which has a then function, which also returns a promise
		//return promise
		return $http.get('http://localhost:3002/getCategory').then(function(response) {
			// The then function here is an opportunity to modify the response
			console.log(response);
			// The return value gets picked up by the then in the controller.
			return response.data;
		});
	}
});