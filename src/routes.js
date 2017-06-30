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
    .state('auth.vuelos', {
      url: '/vuelos',
      templateUrl: 'app/components/vuelos/vuelos.html',
      controller: 'vuelosCtrl as vmVuelos',
    })
    .state('auth.reserva', {
      url: '/reserva/:id',
      templateUrl: 'app/components/vuelos/vuelos.reserva.html',
      controller: 'reservaCtrl as vmReserva',
    })
    .state('auth.misreservas', {
      url: '/misReservas',
      templateUrl: 'app/components/vuelos/vuelos.misreservas.html',
      controller: 'misReseCtrl as vmReser',
    })
    ;
}
