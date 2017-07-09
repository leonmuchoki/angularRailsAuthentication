angular.module('angularRailsAuthentication')
  .controller('NavCtrl', ['$scope', 'Auth', function($scope, Auth) {
  	$scope.signedIn = Auth.isAuthenticated;

  	$scope.$on('devise:new-registration', function(e, user) {
  		$scope.user = user;
  		console.log('user' + user);
  		console.log(user.email);
  		$scope.registersucess = "success";
  	});
  }]);