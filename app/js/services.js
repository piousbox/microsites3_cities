'use strict';

angular.module('myApp.services', []);
var myApp = angular.module('myApp');
/* Services */

myApp.value('version', '0.1');

myApp.factory('City', ['$resource', function($resource) {
    var url_base = "http://api.local:3002/api";
    var url = "http://api.local:3002/api/cities/:id.json";
    var defaults = {};
    var actions = { index: { method: 'GET', params: undefined, isArray: true, headers: undefined },
                    show:  { method: 'GET', isArray: false,
                             url: url_base + "/cities/travel-to/:cityname.json"
                           }
                  };
    return $resource(url, defaults, actions);
}]);


