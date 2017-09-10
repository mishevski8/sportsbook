'use strict';

angular.module('sportsBookApp').controller('AboutCtrl', function() {
	var vm = this;

	layoutService.getTreesData().then(function(response) {
		console.log(response.data.data);
		vm.items = response.data.data;
	}).catch(function(error) {
		console.log(error);
	});
});
