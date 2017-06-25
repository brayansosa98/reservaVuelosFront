(function () {
  'use strict';

  angular
    .module('app')
    .factory('loggedUserFactory', loggedUserFactory);

  loggedUserFactory.$inject = [];
  function loggedUserFactory() {
    var sharedData = {

    };

    return sharedData;

  }
})();