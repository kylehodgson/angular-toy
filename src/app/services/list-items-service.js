Acme = typeof Acme === "undefined"? {} : Acme;

Acme.ListItems = function() {
  return {
    getItems : function() {
      return [
          {
      		title: "Item one!", 
      		description: "Item one is really cool. But do not do it."
      	},
          {
      		title: "Item two!", 
      		description: "Item two is really cool, though not as cool as one. But also do not do it."
      	}
      ]
      
    }
  }
};
