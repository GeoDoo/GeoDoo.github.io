(function() {
	'use strict';

	angular.module('data')
	.component('categories', Categories);

	Categories.$inject = ['MenuDataService'];
	function Categories(MenuDataService) {
		var categories = this;

		categories = MenuDataService.getAllCategories();
	}

})()