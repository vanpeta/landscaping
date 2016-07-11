(function () {
  "use strict";

  angular
  .module("landscaping")
  .controller('contactController', contactController);

  contactController.$inject = ["$http"];

  function contactController($http) {
    var vm = this

    vm.contact = {};
    vm.sendForm = sendForm;


    function sendForm () {
      console.log (vm.contact)
      $http({method: 'POST',
        url: "",
        data: vm.contact
      })
      .then(function(res) {
        vm.user = res.data;
      })
    }
  }

})()
