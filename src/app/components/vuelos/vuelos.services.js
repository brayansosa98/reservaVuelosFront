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

    ////////////////

    function obtenerCiudades() {
      return vbaService.call('obtenerCiudades');
    }
  }
})();