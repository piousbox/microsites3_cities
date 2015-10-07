'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', [function() {
        ;
    }])
    .controller('MyCtrl2', [function() {
        ;
    }])
    .controller('CitiesIndexCtrl', [function() {
        ;
    }])
    .controller('CitiesShowCtrl', ["$scope", "$routeParams", function($scope, $routeParams) {
        $scope.city = { name: $routeParams.name_seo };
    }])
    .controller('MyCtrl2', [function() {
        ;
    }]);
