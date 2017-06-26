angular
  .module('app', [
    'ui.router',
    'ngMaterial',
    'virtualbeamsAsteroid'
  ])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  })

  .config([
  'vbaConfigProvider',
  function (vbaConfigProvider) {
    //virtual beams asteroid
    vbaConfigProvider.host("127.0.0.1:3000");
    vbaConfigProvider.logError(true);
    vbaConfigProvider.log(true);
    vbaConfigProvider.loginRequiredInCalls(true);
    vbaConfigProvider.loginRequiredInSubscribes(true);
    vbaConfigProvider.stopSubscriptionsOnLogout(true);
  }
])


;