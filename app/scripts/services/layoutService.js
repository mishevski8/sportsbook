'use strict';
angular.module('sportsBookApp').factory('layoutService', function($http) {
	var layoutFactory = {};

	layoutFactory.getLayoutData = function() {
		return $http.get('data/layout.json');
	}

	return layoutFactory;
});
