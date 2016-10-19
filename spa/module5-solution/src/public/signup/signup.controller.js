(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

// MenuItemsController.$inject = [''];
function SignupController() {
  var signupCtrl = this;

  signupCtrl.submit = function () {
    signupCtrl.completed = true;
  };
}

})();