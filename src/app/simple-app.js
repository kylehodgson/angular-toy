Acme = typeof Acme === "undefined"? {} : Acme;

Acme.toDontList = angular.module("toDontList", []);
Acme.toDontList.factory("ListItems",Acme.ListItems);
Acme.toDontList.controller("ListCtrl", Acme.ListCtrl);