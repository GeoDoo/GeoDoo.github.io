(function() {
	'use strict';

	angular.module('data')
	.component('categories', {
		templateUrl: 'data/templates/categories.template.html',
	  	bindings: {
	    	categories: '<'
	  	}
	});

})()