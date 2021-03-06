(function () {
  'use strict';

  angular
    .module('app')
    .controller('signinCtrl', signinCtrl);

  signinCtrl.$inject = [
    'serviceSignin',
    '$state',
    'loggedUserFactory',
    'serviceUser'
  ];
  function signinCtrl(
    serviceSignin,
    $state,
    loggedUserFactory,
    serviceUser) {
    var vm = this;

    vm.user = {
      username: "brayan_sosa23151@elpoli.edu.co",
      password: "0in2mw"
    };

    function successLogin() {
      serviceUser.whoIsLogged().then(function (loggedUser) {
          $state.go('auth.vuelos');
        // if (loggedUser.user && loggedUser.status === 1) {
        // } else if (loggedUser.status === 2) {
        //   console.error('ERROR', 'USUARIO_INACTIVO');
        // }
      });
    }

    function signin() {
      serviceSignin.login(vm.user).then(successLogin)
    }

    vm.signin = signin;
  }
})();