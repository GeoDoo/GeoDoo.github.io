(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/data/templates/home.template.html'
  })
  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/data/templates/main-categories.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
          .then(function(categories) {
            return categories;
          });
      }]
    }
  })
  .state('items', {
    url: '/category/{categoryShortName}/items',
    templateUrl: 'src/data/templates/main-items.template.html',
    controller: 'CategoryItemsController as categoryItems',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                .then(function (itemsForCategory) {
                  return itemsForCategory;
                });
            }]
    }
  });
}

})();