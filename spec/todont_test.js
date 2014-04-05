describe('ToDontList',function() {
    var duckFactory = duckCtor(_, angular, Q);
    var Container = duckFactory.Container;
    var DuckDOM = duckFactory.DOM;
    var injector = angular.injector(["ng", "toDontList"]);

  it('Should have a working unit test suite',function() {
    expect(Acme.ListItems).not.toBeNull();
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
  
  it("can show items not to do", function() {
    var container = new Container(
      injector, null, {baseUrl: "/base/src", textPluginPath: "lib/text"});
    var done = false;
    runs(function() {
      container.mvc("ListCtrl", "index.html").then(function(mvc) {
        var dom = new DuckDOM(mvc.view, mvc.scope);
        var listItems = dom.element("ul#list > li");
        expect(listItems.length).toBe(2);
        var itemOneTitle = angular.element("span", listItems[0]);
        expect(itemOneTitle.text()).toBe("Item one!");
        expect(angular.element("p", listItems[0]).text()).toBe("Great item.");
        expect(angular.element("span", listItems[1]).text()).toBe("Item two!");
        expect(angular.element("p", listItems[1]).text()).toBe("Also good!!");
        done = true;
      });
    });
    waitsFor(function() {
      return done;
    });
  });

  it("can emulate user interactions", function() {
    var container = new Container(
      injector, null, {baseUrl: "/base/src", 
                       textPluginPath: "lib/text"});
    var done = false;
    runs(function() {
        container.mvc("ListCtrl", "index.html")
          .then(function(mvc) {
            var dom = new DuckDOM(mvc.view, mvc.scope);

            var addButton = dom.element("#addItem");
            dom.element("#newtitle")
              .text("test value");
            dom.element("#newdescription")
              .text("test description");      
            dom.interactWith(addButton);
        
            expect(dom.element("ul#list > li").length)
              .toBe(3);

            done = true;
      });
    });
    waitsFor(function() {
      return done;
    });
  });
});
