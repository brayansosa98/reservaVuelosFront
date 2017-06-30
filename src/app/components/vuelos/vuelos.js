(function () {
  'use strict';

  angular
    .module('app')
    .controller('vuelosCtrl', vuelosCtrl);

  vuelosCtrl.$inject = ['factoryVuelos', '$state', 'servicioVuelos'];
  function vuelosCtrl(factoryVuelos, $state, servicioVuelos) {
    var vm = this;

    vm.vueloSelecionado = {};

    vm.reservarVuelo = reservarVuelo;

    vm.factoryVuelos = factoryVuelos;

    if (vm.factoryVuelos.listVuelos.length === 0) {
      obtenerVuelos();
    }

    function successObtener(vuelos) {
      vm.factoryVuelos.listVuelos = vuelos;
    }

    function reservarVuelo(vuelo) {
      factoryVuelos.vueloSelecionado = angular.copy(vuelo);
      $state.go('auth.reserva', { id: vuelo._id });
    }

    function obtenerVuelos() {
      servicioVuelos.obtenerVuelos().then(successObtener);
    }
  }
})();