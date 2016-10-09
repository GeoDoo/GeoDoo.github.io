(function () {
'use strict';

angular.module('data')
.controller('CategoryItemsController', CategoryItemsController);

// 'item' is injected through state's resolve
CategoryItemsController.$inject = ['items']
function CategoryItemsController(items) {
  var categoryItems = this;
  console.log(items)
  categoryItems.category = items.category.name;
  categoryItems.menuItems = items.menu_items;
}

})();