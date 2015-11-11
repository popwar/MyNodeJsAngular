'use strict';

var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

myApp.controller('MyController', ['$scope', function($scope) {
  $scope.currentPage = 1;
  $scope.pageSize = 4;
  $scope.galarylist = [{
    "title": "WOODEN TILES",
    "description": "150*600",
    "photo": {
      "location": "images/galary/5.jpg"
    }
  }, {
    "title": "TILES",
    "description": "PORCELAIN",
    "photo": {
      "location": "images/galary/9.jpg"
    }
  }, {
    "title": "BAMBOO FLOORING",
    "description": "NATURAL COLOR",
    "photo": {
      "location": "images/galary/6.jpg"
    }
  }, {
    "title": "BAMBOO FLOORING",
    "description": "NATURAL COLOR",
    "photo": {
      "location": "images/galary/6.jpg"
    }
  }, {
    "title": "BAMBOO FLOORING",
    "description": "NATURAL COLOR",
    "photo": {
      "location": "images/galary/6.jpg"
    }
  }, {
    "title": "BAMBOO FLOORING",
    "description": "NATURAL COLOR",
    "photo": {
      "location": "images/galary/6.jpg"
    }
  }, {
    "title": "BAMBOO FLOORING",
    "description": "NATURAL COLOR",
    "photo": {
      "location": "images/galary/6.jpg"
    }
  }, {
    "title": "BAMBOO FLOORING",
    "description": "NATURAL COLOR",
    "photo": {
      "location": "images/galary/6.jpg"
    }
  }, {
    "title": "TILES",
    "description": "NATURAL COLOR",
    "photo": {
      "location": "images/galary/6.jpg"
    }
  }];
}]).controller('OtherController', ['$scope', function($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}]);