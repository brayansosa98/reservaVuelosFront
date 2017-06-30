(function () {
  'use strict';

  angular
    .module('app')
    .controller('misReseCtrl', misReseCtrl);

  misReseCtrl.$inject = ['servicioVuelos', 'serviceUser'];
  function misReseCtrl(servicioVuelos, serviceUser) {
    var vm = this;
    vm.cancelarReserva = cancelarReserva;

    function successMisReser(reser) {
      vm.reser = reser;
    }

    serviceUser.whoIsLogged().then(function (loggedUser) {
      vm.usuario = loggedUser.user;
      servicioVuelos.obtenerReservas({ idUsuario: vm.usuario._id }).then(successMisReser);
    });

    function successCancelarReserva() {
      alert("reserva cancelada");
    }

    function cancelarReserva(id) {
      servicioVuelos.cancelarReserva(id).then(successCancelarReserva)
    }
  }
})();