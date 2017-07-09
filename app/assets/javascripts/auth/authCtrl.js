angular.module('angularRailsAuthentication')
  .controller('AuthCtrl', ['$scope','$state','Auth', function($scope, $state, Auth) {
  	$scope.register = function() {
  	
  		Auth.register($scope.user).then(function() {
  			//succcess
  			$state.go('home');

  		}, function(error) {
  			console.log('ERR->' + error);
  			$state.go('welcome');
  		});
  	};

  	$scope.login = function() {
  		Auth.login($scope.user).then(function() {
  			$state.go('home');
  		});
  	};
  }]);