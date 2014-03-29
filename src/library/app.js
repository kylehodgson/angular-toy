var toDontList = angular.module("toDontList", ['ngResource']);

toDontList.factory("ListItems", function($resource) {
  return {
    getItems : $resource("/items.json")
  }
});

toDontList.controller("ListCtrl", function($scope, ListItems) {
  $scope.items = ListItems.getItems.query({});
});
