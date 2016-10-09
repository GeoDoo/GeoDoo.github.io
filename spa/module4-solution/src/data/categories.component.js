(function() {
	'use strict';

	angular.module('data')
	.component('categoriesList', {
		templateUrl: 'src/data/templates/categories.template.html',
	  	bindings: {
	    	categories: '<'
	  	}
	});

})()