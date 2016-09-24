(function() {
'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyShoppingController', ToBuyShoppingController)
	.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService) {
		var toBuyList = this;

		toBuyList.items = ShoppingListCheckOffService.items;
	}

	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
		var alreadyBoughtList = this;
	}

	function ShoppingListCheckOffService() {
		var service = this;
		
		service.items = [
			{ name: '10 cookies' },
			{ name: '1 bicycle' },
			{ name: '10 tomatoes' },
			{ name: '100 lollipops' }
		];

		service.itemBought = function (index) {
			console.log(index);
		};
	}

})()