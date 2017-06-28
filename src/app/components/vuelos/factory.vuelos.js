(function () {
  'use strict';

  angular
    .module('app')
    .factory('factoryVuelos', factoryVuelos);

  factoryVuelos.$inject = [];
  function factoryVuelos() {
    var sharedData = {
      vueloSelecionado: {}
    };

    return sharedData;
  }
})();