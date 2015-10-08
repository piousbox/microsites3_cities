'use strict';

// angular.module('myApp.services', []);
/* Services */

angular.module('myApp.services', []).
  value('version', '0.1');

// myApp.value('version', '0.1');

var myApp = angular.module('myApp');

myApp.factory('City', ['$resource', function($resource) {
    var url_base = "http://api.travel-guide.mobi/api";
    var url = "http://api.travel-guide.mobi/api/cities/:id.json";
    var defaults = {};
    var actions = { index: { method: 'GET', params: undefined, isArray: true, headers: undefined },
                    show:  { method: 'GET', isArray: false,
                             url: url_base + "/cities/travel-to/:cityname.json"
                           }
                  };
    return $resource(url, defaults, actions);
}]);


