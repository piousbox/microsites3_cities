'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});

  $routeProvider.when('/cities', {templateUrl: 'partials/cities/index.html', controller: 'CitiesIndexCtrl'});
  $routeProvider.when('/cities/:cityname', {templateUrl: 'partials/cities/show.html', controller: 'CitiesShowCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});

  $locationProvider.html5Mode(true);
}]);
