(function() {
	'use strict';

	angular.module('data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http'];
	function MenuDataService($http) {
		var menu = this;
		menu.categories = [];
		menu.itemsForCategory = null;

		menu.getAllCategories = function() {
			$http.get('https://davids-restaurant.herokuapp.com/categories.json')
			.then(function(response) {
				menu.categories = response.data;
				console.log(response.data);
			});
			return menu.categories;
		};

		menu.getItemsForCategory = function(categoryShortName) {
			$http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
			.then(function(response) {
				menu.itemsForCategory = response.data;
				console.log(response.data)
			})
		};
	}

})()