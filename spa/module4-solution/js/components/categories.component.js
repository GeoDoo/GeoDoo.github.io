(function() {
	'use strict';

	angular.module('data')
	.component('categories', {
  		templateUrl: 'templates/categories.html',
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