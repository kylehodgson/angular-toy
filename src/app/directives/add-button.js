Acme = typeof Acme === "undefined"? {} : Acme;

Acme.AddButton = function() {
  return {
    restrict: "E",
    scope: {
      done: "&"
      },
    template: '<div>' +
              '<br />title' + 
              '<input id="newtitle" ng-model="title"> ' +
              '<br />description                      ' +
              '<input id="newdescription" type="text" ' + 
              '  ng-model="description"></input>      ' +
              '<button id="addItem"                   ' +
              '  ng-click="done(                      ' +
              '   {title:title,                       ' +
              '    description:description})">        ' +
              'Add Item</button></div>                '
  }
};