(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService', 'categoriesList'];
function CategoriesController(MenuDataService, categoriesList) {
  var categoriesCtrl = this;
  categoriesCtrl.categoriesList = categoriesList;
}

})();
