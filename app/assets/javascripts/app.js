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
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function() {
            $state.go('home');
          })
        }]
  	  })
      .state('login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function() {
            $state.go('home');
          })
        }]
      });

  	  $urlRouterProvider.otherwise('/welcome');
  }]);