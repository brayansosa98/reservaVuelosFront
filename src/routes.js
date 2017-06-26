angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('signin', {
      url: '/signin',
      templateUrl: 'app/components/signin/signin.html',
      controller: 'signinCtrl as vmSignin'
    })

    .state('home', {
      url: '/',
      templateUrl: 'app/components/home/home.html',
      controller: 'homeCtrl as HomeCtrlVm'
    })

    .state('registrar', {
      url: '/registrarusuario',
      templateUrl: 'app/components/users/registrar.usuario.html',
      controller: 'regUsuCtrl as vmRegUsu'
    })

    .state('auth', {
      abstract: true,
      url: '',
      templateUrl: 'app/components/auth/auth.html',
      controller: '',
    })

    .state('auth.home', {
      url: '/home',
      templateUrl: 'app/components/home/home.signin.html',
      controller: '',
    })
    ;
}
