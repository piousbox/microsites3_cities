
angular.module('myApp.cities', ['ui.router']).
    config(['$stateProvider', '$urlRouterProvider', function(
             $stateProvider,   $urlRouterProvider) {

        $stateProvider.
            state('cities', {
                url: '/cities',
                views: {
                    '': {
                        templateUrl: '/partials/cities/cities.html',
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
                    }
                }
            }).
            state('cities.city', {
                url: '/travel-to/:cityname',
                parent: 'cities',
                views: {
                    '': {
                        templateUrl: '/partials/cities/city.html',
                        resolve: {
                            City: ['City', function(City) {
                                return City;
                            }]
                        },
                        controller: ['$scope', '$stateParams', 'City', function($scope, $stateParams, City) {
                            City.show({ cityname: $stateParams.cityname }, function(data) {
                                $scope.city = data
                            });
                        }]
                    }
                }
            });
    }]);