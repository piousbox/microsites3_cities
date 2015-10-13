
angular.module('myApp.cities', ['ui.router']).
    config(['$stateProvider', '$urlRouterProvider', function(
             $stateProvider,   $urlRouterProvider) {

        $stateProvider.
            state('cities', {
                abstract: true,
                url: '/cities',
                templateUrl: 'js/cities/cities.html',
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
            }).
            state('cities.list', {
                url: '',
                templateUrl: 'js/cities/index.html'
            }).
            state('cities.city', {
                abstract: true,
                url: '/travel-to/:cityname',
                templateUrl: 'js/cities/show.html',
                resolve: {
                },
                controller: [function(){ 
                }]
            }). 
            state('cities.city.show', {
                url: '',
                views: {
                    '': {
                        templateUrl: 'js/cities/show.html',
                        controller: ['$scope', 'City', '$stateParams', function($scope, City, $stateParams) {
                            City.show({ cityname: $stateParams.cityname }, function(data) {
                                $scope.city = data;
                            });
                        }]
                    },
                    '2-city-show': {
                        templateUrl: 'js/cities/show.html',
                        controller: ['$scope', 'City', '$stateParams', function($scope, City, $stateParams) {
                            City.show({ cityname: $stateParams.cityname }, function(data) {
                                $scope.city = data;
                            });
                        }]
                    },
                    'reports-show': {
                        template: 'this is reports-show 222'
                    }
                }
            }).
            state('cities.city.report', {
                url: 'reports/show/:name_seo',
                views: {
                    'reports-show': {
                        templateUrl: 'js/reports/show.html',
                        controller: [function() {
                        }]
                    }
                }
            });
    }]);