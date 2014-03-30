Acme = typeof Acme === "undefined"? {} : Acme;

Acme.ListCtrl = function($scope, ListItems) {
  $scope.items = ListItems.getItems();
  this.loaded = Q.fcall(function() {});
};
