(function () {
'use strict';

angular.module('data')
.controller('CategoryItemsController', CategoryItemsController);

// 'items' is injected through state's resolve
CategoryItemsController.$inject = ['items']
function CategoryItemsController(items) {
  var categoryItems = this;
  categoryItems.category = items.category.name;
  categoryItems.menuItems = items.menu_items;
}

})();