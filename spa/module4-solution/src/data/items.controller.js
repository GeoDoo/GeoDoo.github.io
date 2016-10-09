(function () {
'use strict';

angular.module('data')
.controller('CategoryItemsController', CategoryItemsController);

// 'item' is injected through state's resolve
CategoryItemsController.$inject = ['items']
function CategoryItemsController(item) {
  var categoryItems = this;
  categoryItems.name = items.name;
  // itemDetail.quantity = items.quantity;
  // itemDetail.description = items.description;
}

})();