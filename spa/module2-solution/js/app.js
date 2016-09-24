(function() {
'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyShoppingController', ToBuyShoppingController)
	.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	function ToBuyShoppingController(ShoppingListCheckOffService) {
		var toBuyList = this;
	}

	function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
		var alreadyBoughtList = this;
	}

	function ShoppingListCheckOffService() {
		
	}

})()