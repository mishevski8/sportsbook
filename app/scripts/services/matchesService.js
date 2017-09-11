'use strict';
angular.module('sportsBookApp').factory('matchesService', function($http) {
	var matchesFactory = {};

	matchesFactory.getMatchesData = function(id) {
		return $http.get('data/matches/league_' + id + '.json');
	}

	return matchesFactory;
});
