'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'ui.router',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider', function(
         $routeProvider,   $locationProvider,   $stateProvider,   $urlRouterProvider) {

    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});

    $routeProvider.when('/cities', {templateUrl: 'partials/cities/index.html', controller: 'CitiesIndexCtrl'});
    $routeProvider.when('/cities/:cityname', {templateUrl: 'partials/cities/show.html', controller: 'CitiesShowCtrl'});
    $routeProvider.otherwise({redirectTo: '/view1'});
    
    $locationProvider.html5Mode(true);
    
    /**
     *  ui.router
     */
    //
    // For any unmatched url, redirect to /state1
    // $urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "partials/state1.html"
        })
        .state('state1.list', {
            url: "/list",
            templateUrl: "partials/state1.list.html",
            controller: function($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "partials/state2.html"
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "partials/state2.list.html",
            controller: function($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
            }
        })
        .state('index', {
            url: "",
            views: {
                "viewA": { template: "index.viewA" },
                "viewB": { template: "index.viewB" }
            }
        })
        .state('route1', {
            url: "/route1",
            views: {
                "viewA": { template: "route1.viewA" },
                "viewB": { template: "route2.viewB" }
            }
        })
        .state('route2', {
            url: "/route2",
            views: {
                "viewA": { template: "route2.viewA" },
                "viewB": { template: "route2.viewB" }
            }
        });
    
}]);
