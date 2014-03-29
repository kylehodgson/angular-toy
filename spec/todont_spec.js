describe('toDontList app', function() {

  browser.ignoreSynchronization = true;
  browser.get('http://localhost:8000/');

  it('should have a working functional test suite', function() {
    var greeting = element(by.id('greeting'));
    expect(greeting.getText()).toEqual('Do Not Do List');
  });
  it('should be displaying starter items', function() {
    var firstItemName = element(by.repeater('item in items').row(0).column('title'));
    expect(firstItemName.getText()).toEqual("Item one!");
  });
});

