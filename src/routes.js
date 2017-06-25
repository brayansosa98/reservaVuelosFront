angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/signin',
      templateUrl: 'app/components/signin/signin.html',
      controller: 'signinCtrl as vmSignin'
    })

    .state('auth', {
      abstract: true,
      url: '',
      templateUrl: 'app/components/auth/auth.html',
      controller: '',
    })

    .state('auth.home', {
      url: '/',
      templateUrl: 'app/components/home/home.html',
      controller: 'homeCtrl as HomeCtrlVm'
    })
    ;
}
