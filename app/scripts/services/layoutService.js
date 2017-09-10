'use strict';
angular.module('sportsBookApp').factory('layoutService', function($http) {
	var layoutFactory = {};

	treeFactory.getTreesData = function() {
		return $http.get('data/layout.json');
	}

	return treeFactory;
});
