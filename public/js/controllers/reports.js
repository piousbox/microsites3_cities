
angular.module('myApp.reports', ['ui.router']).
    config(['$stateProvider', '$urlRouterProvider', function(
             $stateProvider,   $urlRouterProvider) {

        $stateProvider.
            state('reports', {
                url: '/reports',
                views: {
                    'reports-show': {
                        template: "<h2>All reports</h2>",
                        controller: ['$scope', 'City', '$stateParams', function($scope, City, $stateParams) {
                            $scope.report = { name: 'Some report name' };
                        }]
                    }
                },
            });

    }]);