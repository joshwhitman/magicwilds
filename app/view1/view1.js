'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function($scope, $http) {
	$http.get("comics.json").then(function(resposes) {$scope.comics = response.data.comics;});
	$scope.id = comics.id;
}]);