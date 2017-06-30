(function () {
  'use strict';

  angular
    .module('app')
    .service('servicioVuelos', servicioVuelos);

  servicioVuelos.$inject = [
    'vbaService'
  ];
  function servicioVuelos(vbaService) {
    this.obtenerCiudades = obtenerCiudades;
    this.obtenerVuelos = obtenerVuelos;
    this.obtenerVueloDetalles = obtenerVueloDetalles;
    this.buscarVuelosFiltro = buscarVuelosFiltro;
    this.crearReserva = crearReserva;
    this.obtenerReservas = obtenerReservas;
    this.cancelarReserva = cancelarReserva;
    ////////////////

    function obtenerCiudades() {
      return vbaService.call('obtenerCiudades');
    }

    function obtenerVuelos() {
      return vbaService.call('obtenerVuelos');
    }

    function obtenerVueloDetalles(data) {
      return vbaService.call('obtenerVueloDetalles', data);
    }

    function buscarVuelosFiltro(data) {
      return vbaService.call('buscarVuelosFiltro', data);
    }

    function crearReserva(data) {
      return vbaService.call('crearReserva', data);
    }

    function obtenerReservas(data) {
      return vbaService.call('obtenerReservas', data);
    }

    function cancelarReserva(idReserva) {
      return vbaService.call('cancelarReserva', idReserva);
    }
  }
})();