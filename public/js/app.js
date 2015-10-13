'use strict';

angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'ui.router',

  'myApp.cities',
  'myApp.cities.service',
  'myApp.reports'

]).
run(['$rootScope', '$state', '$stateParams', function(
      $rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ]
).
config(['$routeProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider', function(
         $routeProvider,   $locationProvider,   $stateProvider,   $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: "partials/cities/list.html",
            resolve: {
                City: ['City', function(City) {
                    return City;
                }]
            },
            controller: ['$scope', '$state', 'City',
                function( $scope,   $state,   City) {
                    City.index({}, function(cities) {
                        $scope.cities = cities;
                    });
                }]
            
        })
        .state('about', {
            url: '/about',
            template: "<h5>About template</h5>"
        });
    
}]);
