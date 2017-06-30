(function () {
  'use strict';

  angular
    .module('app')
    .controller('reservaCtrl', reservaCtrl);

  reservaCtrl.$inject = ['factoryVuelos', 'serviceUser', 'servicioVuelos', '$state'];
  function reservaCtrl(factoryVuelos, serviceUser, servicioVuelos, $state) {
    var vm = this;

    vm.guardarReserva = guardarReserva;

    function successVueloDetalle(data) {
      vm.vuelos_detalle = data.vuelos_detalle;
      vm.vuelo = data.vuelo;
    }

    serviceUser.whoIsLogged().then(function (loggedUser) {
      vm.usuario = loggedUser.user;
      servicioVuelos.obtenerVueloDetalles({ id_vuelo: $state.params.id }).then(successVueloDetalle)
    });

    function successGuardar() {
      alert("reseva(s) creadas");
      $state.go("auth.go");
    }

    function guardarReserva() {
      for (var i = 0; i < vm.informacion.numero; i++) {
        let data = {
          id_usuario: vm.usuario._id,
          id_vuelo_detalle: vm.vuelo.clase,
          id_vuelo: $state.params.id,
        };
        
        servicioVuelos.crearReserva(data).then(successGuardar);
      }
    }

  }
})();