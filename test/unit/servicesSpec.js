'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  // beforeEach(module('myApp.services'));
  beforeEach(module('myApp'));

  var $controller, PathHelper;

  beforeEach(inject(function(_$controller_, _PathHelper_) {
    $controller = _$controller_;
    PathHelper = _PathHelper_;
  }));

  describe('something', function() {
    it('does', function() {
      expect(true).toEqual(true);
    });
  });

  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.0.1');
    }));
  });

  describe('PathHelper', function() {
    it('city_path', inject(function(PathHelper) {
      expect(PathHelper.city_path({cityname:'xxcitynamexx'})).toEqual("/cities/xxcitynamexx");
    }));
    it('city_report_path', inject(function(PathHelper) {
      expect(PathHelper.city_report_path({cityname:'xxcitynamexx'},{name_seo:'xxReportxx'})).toEqual("/cities/xxcitynamexx/reports/xxReportxx");
    }));
  });

});
