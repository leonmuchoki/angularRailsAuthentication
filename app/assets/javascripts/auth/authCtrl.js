angular.module('angularRailsAuthentication')
  .controller('AuthCtrl', ['$scope','$state','Auth', function($scope, $state, Auth) {
  	$scope.register = function() {
  	
  		Auth.register($scope.user).then(function() {
  			//succcess
  			console.log('success register');
  			$state.go('home');

  		}, function(error) {
  			console.log('ERR->' + error.message);
  			$state.go('register');
  		});
  	};
  }]);