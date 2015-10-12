
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
                templateUrl: 'js/contacts/cities.list.html'
            });
    }]);