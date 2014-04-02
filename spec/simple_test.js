describe('ToDontList',function() {
  it("Should be namespaced",function() {
    expect(Acme.toDontList).not.toBe(null);
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
    expect(scope.items.length).toEqual(1);
  });
});