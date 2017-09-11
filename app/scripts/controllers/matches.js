'use strict';

angular.module('sportsBookApp').controller('MatchesCtrl', function(layoutService, $filter, $stateParams, ngProgressFactory, matchesService, moment) {
	var vm = this;
	var leagueId = $stateParams.leagueId;
	vm.leagueName = $stateParams.leagueName;
	vm.odds = [];
	vm.errorMessage = false;
	vm.progressbar = ngProgressFactory.createInstance();
	vm.progressbar.setColor('#ff0000');
	vm.isLoading = true;

	layoutService.getLayoutData().then(function(response) {
		vm.oddsLayout = response.data.data;
		vm.oddsLayout = $filter('orderBy')(vm.oddsLayout, 'priority');
		angular.forEach(vm.oddsLayout, function(item) {
			angular.forEach(item.odds, function(type) {
				type.index = item.index;
				vm.odds.push(type);
			});
		});
	}).catch(function(error) {
		console.log(error);
	});
	vm.progressbar.start();
	matchesService.getMatchesData(leagueId).then(function(response) {
		vm.progressbar.complete();
		vm.isLoading = false;
		vm.matches = response.data.data;


		for (var i = 0; i < vm.matches.length; i++) {
			var match = vm.matches[i];
			var matchOdds = match.odds;
			match.coeficients = [];

			for (var j = 0; j < vm.odds.length; j++) {
				var odd = vm.odds[j];
				var oddKey = odd.index;
				var oddId = odd.id;

				if (matchOdds.hasOwnProperty(oddKey)) {

					var matchOddsOddKeys = matchOdds[oddKey];

					var isFound = false;

					for (var k = 0; k < matchOddsOddKeys.length; k++) {
						var mk = matchOddsOddKeys[k];
						if (mk.name == oddId) {
							match.coeficients.push({
								id: j,
								text: mk.value
							});
							isFound = true;
							break;
						}
					}

					if (!isFound) {
						match.coeficients.push({
							id: j,
							text: "-"
						});
					}

				} else {
					match.coeficients.push({
						id: j,
						text: "-"
					});
				}
			}
		}

	}).catch(function(error) {
		vm.progressbar.reset();
		vm.errorMessage = true;
	});

	vm.toFormat = function(date) {
		return moment(date).format('MM-DD HH:mm');
	};

});
