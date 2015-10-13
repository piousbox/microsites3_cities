
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
            state('cities.show', {
                url: '/travel-to/:cityname',
                views: {
                    // '': {
                    //     templateurl: 'js/cities/show.html'
                    // },
                    'cities_show': {
                        templateUrl: 'js/cities/show.html',
                        controller: ['$scope', 'City', '$stateParams', function($scope, City, $stateParams) {
                            City.show({ cityname: $stateParams.cityname }, function(data) {
                                $scope.city = data;
                            });
                        }]
                    }
                },
                templateUrl: 'js/cities/show.html'
            });
    }]);