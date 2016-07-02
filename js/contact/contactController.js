(function () {
  "use strict";

  angular
  .module("landscaping")
  .controller('contactController', contactController);

  contactController.$inject = ["$http"];

  function contactController($http) {
    var vm = $(this)

    vm.contact = {};

    function sendForm () {

    }
  }

})()
