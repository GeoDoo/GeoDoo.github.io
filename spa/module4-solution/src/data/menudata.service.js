(function() {
	'use strict';

	angular.module('data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http'];
	function MenuDataService($http) {
		var menu = this;

		menu.getAllCategories = function() {
			var categories = $http.get('https://davids-restaurant.herokuapp.com/categories.json')
			.then(function(response) {
				return response.data;
			});
			console.log(categories)
			return categories;
		};

		menu.getItemsForCategory = function(categoryShortName) {
			var categoryItems = $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
			.then(function(response) {
				return response.data;
			});
			return categoryItems;
		};
	}

})()