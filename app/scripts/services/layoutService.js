'use strict';
angular.module('sportsBookApp').factory('layoutService', function($http) {
	var layoutFactory = {};

	layoutFactory.getTreesData = function() {
		return $http.get('data/layout.json');
	}

	return treeFactory;
});
