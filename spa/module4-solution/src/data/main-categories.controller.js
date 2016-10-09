(function () {
'use strict';

angular.module('data')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['categories'];
function CategoriesListController(categories) {
  var categoriesList = this;
  categoriesList.categories = categories;
}

})();