
angular.module('myApp.reports', ['ui.router']).
    config(['$stateProvider', '$urlRouterProvider', function(
             $stateProvider,   $urlRouterProvider) {

        $stateProvider.
            state('reports', {
                url: '/reports',
                template: 'Reports template.',
                views: {
                    '@': {
                        template: "<h5>Home template</h5>"
                    },
                    'ui-reports@': {
                        template: "<h5>All reports</h5>",
                        controller: ['$scope', 'City', '$stateParams', function($scope, City, $stateParams) {
                            $scope.report = { name: 'Some report name' };
                        }]
                    }
                },
            });

    }]);