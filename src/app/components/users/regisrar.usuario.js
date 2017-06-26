(function () {
  'use strict';

  angular
    .module('app')
    .controller('regUsuCtrl', regUsuCtrl);

  regUsuCtrl.$inject = [
    'serviceUser',
    '$state'
  ];
  function regUsuCtrl(
    serviceUser,
    $state) {
    var vm = this;
    vm.user = {};

    this.registrar = registrar;

    tiposDocumento();

    ////////////////

    function tiposDocumento() {
      serviceUser.obtenerTiposDocumento().then(successTipos);
    }

    function successTipos(tipos) {
      vm.tiposDocumento = angular.copy(tipos);
    }

    function sucessRegistro() {
      alert("usuario registrado");
      $state.go("signin");
    }

    function registrar() {
      var user = {
        email: vm.user.email,
        username: vm.user.documento + "",
        password: vm.user.clave,
        profile: {
          id_tipodoc: vm.user.tipoDocumento,
          documento: vm.user.documento + "",
          primerNombre: vm.user.primernombre,
          segundoNombre: vm.user.segundonombre,
          primerApellido: vm.user.primerapellido,
          segundoApellido: vm.user.segundoapellido,
        }
      }
      serviceUser.registrarUsuario(user).then(sucessRegistro, function () {
        alert("error");
      });
    }
  }
})();