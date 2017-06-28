(function () {
  'use strict';

  angular
    .module('app')
    .controller('reservaCtrl', reservaCtrl);

  reservaCtrl.$inject = ['factoryVuelos'];
  function reservaCtrl(factoryVuelos) {
    var vm = this;
    
  }
})();