(function () {
  'use strict';

  angular
    .module('app')
    .controller('bucarVuelosCtrl', bucarVuelosCtrl);

  bucarVuelosCtrl.$inject = [
    'servicioVuelos'
  ];
  function bucarVuelosCtrl(servicioVuelos) {
    var vm = this;

    vm.buscar = {};
    vm.consultarVuelos = consultarVuelos;

    obtenerCiudades();

    function successObtenerCiudades(ciudades) {
      vm.ciudadesOrigen = ciudades;
      vm.ciudadesDestino = ciudades;
    }

    function obtenerCiudades() {
      servicioVuelos.obtenerCiudades().then(successObtenerCiudades)
    }

    function consultarVuelos() {
      console.log(vm.buscar);
    }
  }
})();