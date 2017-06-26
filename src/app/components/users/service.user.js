(function () {
  'use strict';

  angular
    .module('app')
    .service('serviceUser', serviceUser);

  serviceUser.$inject = [
    'vbaService'
  ];
  function serviceUser(vbaService) {
    this.whoIsLogged = whoIsLogged;
    this.obtenerTiposDocumento = obtenerTiposDocumento;
    this.registrarUsuario = registrarUsuario;

    function whoIsLogged() {
      return vbaService.call('usuarioLogeado');
    }

    function obtenerTiposDocumento() {
      return vbaService.call('obtenerTipos');
    }

    function registrarUsuario(usuario) {
      return vbaService.call('crearUsuario', usuario);
    }
  }
})();