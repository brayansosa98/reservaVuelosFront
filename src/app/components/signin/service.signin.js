(function () {
  'use strict';

  angular
    .module('app')
    .service('serviceSignin', serviceSignin);

  serviceSignin.$inject = [
    'vbaService',
    '$q'
  ];

  function serviceSignin(vbaService, $q) {
    this.login = login;

    function login(user) {
      var promise = vbaService.get().loginWithPassword(user.username, user.password);
      return $q.when(promise);
    };
  }
})();