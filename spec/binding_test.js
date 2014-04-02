var duckFactory = duckCtor(_, angular, Q);
var Container = duckFactory.Container;
var DuckDOM = duckFactory.DOM;
var injector = angular.injector(["ng", "toDontList"]);

describe("Main page",function() {
  it("can show items not to do", function() {
    var container = new Container(
      injector, null, {baseUrl: "/base/src", textPluginPath: "lib/text"});
    var done = false;
    runs(function() {
      container.mvc("ListCtrl", "index.html").then(function(mvc) {
        var dom = new DuckDOM(mvc.view, mvc.scope);
        var listItems = dom.element("ul#list > li");
        expect(listItems.length).toBe(2);
        done = true;
      });
    });
    waitsFor(function() {
      return done;
    });
  });  
})
