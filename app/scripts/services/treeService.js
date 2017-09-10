'use strict';
angular.module('sportsBookApp').factory('treeService', function($http) {
	var treeFactory = {};

	treeFactory.getTreesData = function() {
		return $http.get('data/tree.json');
	}

	return treeFactory;
});
