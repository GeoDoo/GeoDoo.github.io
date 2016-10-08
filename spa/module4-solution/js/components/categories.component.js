(function() {
	'use strict';

	angular.module('data')
	.component('categories', {
  		templateUrl: 'categories.html',
  		controller: CategoriesComponentController,
		  bindings: {
		    categories: '<'
	  	}
	});

	function CategoriesComponentController() {
		var $ctrl = this;

		$ctrl.categoriesList = $ctrl.categories;
	}


})()