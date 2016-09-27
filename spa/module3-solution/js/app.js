(function() {
	'use script';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItems);

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var list = this;
		list.searchTerm = '';
		list.foundItems = [];

		list.getResults = function(searchTerm) {
			if (list.searchTerm === '') {
				return;
			}
			MenuSearchService.getMatchedMenuItems(searchTerm, function(data) {
				list.found = data;
			});
		};

		list.removeItem = function(index) {
			list.found.splice(index, 1);
		};
	}

	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http) {
		var service = this;
		service.getMatchedMenuItems = function(searchTerm, callback) {
			$http({
				method: 'GET',
  				url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
			})
			.then(function successCallback(response) {
			    // process result and only keep items that match
			    var foundItems = [];
			    for (var i = 0; i < response.data.menu_items.length; i++) {
			    	if (response.data.menu_items[i].name.indexOf(searchTerm) > -1) {
			    		foundItems.push(response.data.menu_items[i].name);
			    	}
			    }
			    callback(foundItems);
			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			});
		};
	}

	function FoundItems() {
		var ddo = {
			templateUrl: 'templates/found-item.html'
		};

		return ddo;
	}

})()