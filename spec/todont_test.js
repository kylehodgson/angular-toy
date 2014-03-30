describe('ToDontList',function() {
  
  it('Should have a working unit test suite',function() {
    expect(Acme.ListItems).not.toBe(null);
  });
  
  it("can return items", function() {
    var result = Acme.ListItems().getItems();
    expect(result[0].title).toBe("Item one!");
  })
});
