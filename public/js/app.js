'use strict';

angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'ui.router',

  'myApp.cities',
  'myApp.cities.service',
  'myApp.reports'

  // 'myApp.filters',
  // 'myApp.services',
  // 'myApp.cities',
  // 'myApp.directives',
  // 'myApp.controllers'

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
            template: "Welcome home ui router"
        })
        .state('about', {
            url: '/about',
            template: "About template for real."
        })
    
}]);
