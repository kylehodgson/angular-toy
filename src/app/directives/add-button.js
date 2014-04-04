Acme = typeof Acme === "undefined"? {} : Acme;

Acme.AddButton = function() {
  return {
    restrict: "A",
    template: "<button id='addItem' ng-click='addItem()'>Add Item</button>"
  }
};