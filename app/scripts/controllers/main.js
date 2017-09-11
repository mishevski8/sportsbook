'use strict';

angular.module('sportsBookApp').controller('MainCtrl', function(treeService) {
	var vm = this;

	treeService.getTreesData().then(function(response) {
		console.log(response.data.data);
		vm.items = response.data.data;
	}).catch(function(error) {
		console.log(error);
	});

});
