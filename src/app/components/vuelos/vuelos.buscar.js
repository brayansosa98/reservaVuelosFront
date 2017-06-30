(function () {
  'use strict';

  angular
    .module('app')
    .controller('bucarVuelosCtrl', bucarVuelosCtrl);

  bucarVuelosCtrl.$inject = [
    'servicioVuelos',
    'factoryVuelos',
    '$state'
  ];
  function bucarVuelosCtrl(servicioVuelos, factoryVuelos, $state) {
    var vm = this;

    vm.buscar = {};
    vm.consultarVuelos = consultarVuelos;
    vm.cancelarFiltro = cancelarFiltro;

    obtenerCiudades();

    function successObtenerCiudades(ciudades) {
      vm.ciudadesOrigen = ciudades;
      vm.ciudadesDestino = ciudades;
    }

    function cancelarFiltro() {
      vm.buscar = {};
      servicioVuelos.obtenerVuelos().then(successConsultar);

    }

    function successConsultar(vuelos) {
      factoryVuelos.listVuelos = vuelos;
      $state.go("auth.vuelos");
    }

    function obtenerCiudades() {
      servicioVuelos.obtenerCiudades().then(successObtenerCiudades)
    }

    function consultarVuelos() {
      var data = {
        origen: vm.buscar.ciudadOrigen,
        destino: vm.buscar.ciudadDestino,
      }

      if (vm.buscar.fecha) {
        var dateObj = new Date(vm.buscar.fecha);
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        if (day < 10) {
          day = '0' + day
        }
        if (month < 10) {
          month = '0' + month
        }
        data.fecha = day + "/" + month + "/" + year;
      }
      if (data.origen === data.destino) {
        alert("Debe seleccionar dos ciudades diferetes");
      } else {
        servicioVuelos.buscarVuelosFiltro(data).then(successConsultar)
      }
    }
  }
})();