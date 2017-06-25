(function () {
  'use strict';

  angular
    .module('app')
    .service('serviceUser', serviceUser);

  serviceUser.$inject = [
    'constantMeteor',
    'vbaService'
  ];
  function serviceUser(cm, vbaService) {
    this.whoIsLogged = whoIsLogged;

    function whoIsLogged() {
      return vbaService.call(cm.methods.users.whoIsLogged);
    };
  }
})();