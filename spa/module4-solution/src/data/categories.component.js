(function() {
	'use strict';

	angular.module('data')
	.component('categoriesList', {
		templateUrl: 'data/templates/categories.template.html',
	  	bindings: {
	    	categories: '<'
	  	}
	});

})()