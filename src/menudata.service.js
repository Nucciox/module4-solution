(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http', '$stateParams']
function MenuDataService($http, $stateParams) {
  var service = this;
  var categoryShortName = $stateParams.categoryShortName;

    // The MenuDataService should have 2 methods:

    // getAllCategories - this method should return a promise which is a result of
    // using the $http service, using the following REST API endpoint:
    // https://davids-restaurant.herokuapp.com/categories.json

  service.getAllCategories = function(){
    var categoriesPromise = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    })
    .then(
      function success(response) {
        console.log(response.data);
        return response.data;
      },
      function error(response) {
        console.log(response);
      });
      return categoriesPromise;
  };

    // getItemsForCategory(categoryShortName) - this method should return a promise
    // which is a result of using the $http service, using the following REST API
    // endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=,
    // where, before the call to the server, your code should append whatever
    // categoryShortName value was passed in as an argument into the
    // getItemsForCategory method.

    service.getItemsForCategory = function(categoryShortName){
      var itemsPromise = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
      })
      .then(
        function success(response) {
          console.log(response.data);
          return response.data;
        },
        function error(response) {
          console.log(response);
        });
        return itemsPromise;
    };

  }

})();
