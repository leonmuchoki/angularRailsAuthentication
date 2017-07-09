angular.module('angularRailsAuthentication', ['ui.router', 'templates', 'Devise'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  	$stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'home/_welcome.html'
      })
  	  .state('home', {
  	  	url: '/home',
  	  	templateUrl: 'home/_home.html',
  	  	controller: 'MainCtrl'
  	  })
  	  .state('register', {
  	  	url: '/register',
  	  	templateUrl: 'auth/_register.html',
        controller: 'AuthCtrl'
  	  });

  	  $urlRouterProvider.otherwise('/welcome');
  }]);