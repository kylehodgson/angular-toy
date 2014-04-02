Acme = typeof Acme === "undefined"? {} : Acme;

Acme.ListItems = function() {
  return {
    getItems : function() {
      return [{title: "Item one!", 
               description: "Great item."},
              {title: "Item two!", 
               description: "Also good!!"}];  }}};
