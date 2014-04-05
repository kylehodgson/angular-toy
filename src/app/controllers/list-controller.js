Acme = typeof Acme === "undefined"? {} : Acme;

Acme.ListCtrl = function($scope, ListItems) {
  $scope.items = ListItems.getItems();
  
  $scope.addItem = function(title,description) {
    $scope.items.push({title: title, description: description});
  }
};
