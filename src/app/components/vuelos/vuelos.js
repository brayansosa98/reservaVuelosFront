(function () {
  'use strict';

  angular
    .module('app')
    .controller('vuelosCtrl', vuelosCtrl);

  vuelosCtrl.$inject = ['factoryVuelos', '$state'];
  function vuelosCtrl(factoryVuelos, $state) {
    var vm = this;

    vm.vueloSelecionado

    function reservarVuelo() {
      factoryVuelos.vueloSelecionado = vm.vueloSelecionado;
      $state.go('reservas');
    }
  }
})();