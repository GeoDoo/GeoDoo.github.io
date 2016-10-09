(function() {
	'use strict';

	angular.module('data')
	.component('items', {
		templateUrl: 'src/data/items.template.html',
		bindings: {
			items: '<'
		}
	});


})()