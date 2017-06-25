(function () {
  'use strict';

  angular.module('app')
    .constant('constantMeteor', {
      methods: {
        users: {
          whoIsLogged: 'whoIsLogged',
        }
      }
    });
})();