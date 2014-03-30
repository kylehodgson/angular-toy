describe('ToDontList',function() {
  
  it('Should have a working unit test suite',function() {
    expect(Acme.ListItems).not.toBe(null);
  });
  
  it("can return items", function() {
    var result = Acme.ListItems().getItems();
    expect(result[0].title).toBe("Item one!");
  });
  
  it("updates scope with items", function() {
    var scope = {};
    var mockItemsService = {
      getItems: function() {
        return [{ title: "Test item"}];
      }
    };
    new Acme.ListCtrl(scope, mockItemsService);
    expect(scope.items[0].title).toEqual("Test item");
  });
  
  it("Duck has been included", function() {
    var Container = duckCtor(_, angular, Q).Container;
    var injector = angular.injector(["ng", "toDontList"]);
    var container = new Container(injector, null);
    runs(function() {
      container.mvc("ListCtrl", "src/index.html", {$scope: {}}).then(function(mvc) {
        console.log(mvc);
      });
    });
  });

  
});
