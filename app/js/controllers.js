'use strict';

angular.module('myApp.controllers', []);
var myApp = angular.module('myApp');
/* Controllers */

myApp.controller('MyCtrl1', [function() {
}]);

myApp.controller('MyCtrl2', [function() {
}]);

function city_path(city) {
    return "/cities/" + city.cityname;
}

myApp.controller('CitiesIndexCtrl', ['$scope', 'City', function($scope, City) {
    City.index({}, function(cities) {
        $scope.cities = cities;
        $scope.city_path = function(city) {
            return city_path(city);
        }
    });
}]);

myApp.controller('CitiesShowCtrl', ["$scope", "$routeParams", 'City', function($scope, $routeParams, City) {
    console.log('route params', $routeParams);
    City.show({ cityname: $routeParams.cityname }, function(data) {
        $scope.city = { name: data.name };
    });
}]);
