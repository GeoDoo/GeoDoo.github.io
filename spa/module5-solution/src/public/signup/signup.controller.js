(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

// MenuItemsController.$inject = [''];
function SignupController() {
  var $ctrl = this;
  
  signupCtrl.submit = function () {
    reg.completed = true;
  };
}

})();