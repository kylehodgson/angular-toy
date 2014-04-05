var app = angular.module('contactList', []);

var PhoneNumber = function () {
  return {
    restrict: "E",
    scope: {
      type: "@"
    },
    template: '<div>{{type}} number:  <br />     ' +
              '     (<input type="text" size="3" ' + 
              '             ng-model="area">)    ' +
              '      <input type="text" size="3" ' +   
              '             ng-model="exchange">-' +
              '      <input type="text" size="4" ' + 
              '             ng-model="number">   ' +
              '</div>'
  }
};

var ContactForm = function() {
  return {
    restrict: "E",
    scope: {
      done: "&"
    }, 
    template: 'First name: 				                 <br /> ' +
	          	'<input ng-model="first"> 	         <br /> ' +
          		'Last name: 					               <br /> ' +
          		'<input ng-model="last"> 	           <br /> ' +
          		'<phone-number type="mobile"></phone-number>' + 
          		'<phone-number type="work"></phone-number>  ' +
          		'<button ng-click="done(                    ' +
          		'{first: first, last: last})">Save</button> '
  }
};

var ContactController = function($scope) {
  $scope.saveContact = function(first, last) {
    console.log(
      "Saving contact for " + first + " " + last);
  }
};

app.controller("contactController", ContactController);
app.directive("phoneNumber",PhoneNumber);
app.directive("contactForm",ContactForm);
