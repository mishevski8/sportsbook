'use strict';

angular.module('sportsBookApp').controller('MainCtrl', function(treeService, ngProgressFactory) {
	var vm = this;
	vm.progressbar = ngProgressFactory.createInstance();
	vm.progressbar.setColor('#ff0000');
	vm.isLoading = true;
	vm.progressbar.start();
	treeService.getTreesData().then(function(response) {
		vm.progressbar.complete();
		vm.isLoading = false;
		vm.items = response.data.data;
	}).catch(function(error) {
		vm.progressbar.reset();
		console.log(error);
	});

});
