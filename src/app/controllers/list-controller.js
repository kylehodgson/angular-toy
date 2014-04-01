Acme = typeof Acme === "undefined"? {} : Acme;

Acme.ListCtrl = function($scope, ListItems) {
  $scope.items = ListItems.getItems();
  $scope.randomString = "Birdie";

  $scope.changeData = function() {
  	console.log("I was fired");
  	$scope.randomString = "Num Num";
  };
};
