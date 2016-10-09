(function() {
	'use strict';

	angular.module('data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http'];
	function MenuDataService($http) {
		var menu = this;

		menu.getAllCategories = function() {
			return $http.get('https://davids-restaurant.herokuapp.com/categories.json')
			.then(function(response) {
				return response.data;
			});
		};

		menu.getItemsForCategory = function(categoryShortName) {
			return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
			.then(function(response) {
				return response.data;
			});
		};
	}

})()