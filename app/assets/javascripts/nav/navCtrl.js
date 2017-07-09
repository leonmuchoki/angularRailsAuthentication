angular.module('angularRailsAuthentication')
  .controller('NavCtrl', ['$scope', 'Auth', function($scope, Auth) {
  	$scope.signedIn = Auth.isAuthenticated;
  	$scope.logout = Auth.logout;

  	$scope.$on('devise:new-registration', function(e, user) {
  		$scope.user = user;
  		$scope.success = {
  			"status": "You have registered successfully."
  		};
  		console.log($scope.success.status);
  		console.log("devise:new-registration" + $scope.user);
  	});

  	$scope.$on('devise:login', function(e, user) {
  	  $scope.user = user;
  	  $scope.success = {
  			"status": "You have Signed In successfully."
  		};
  	  console.log($scope.success.status);
  	});

  	$scope.$on('devise:logout', function(e, user) {
  		$scope.user = {};
  		$scope.success = "You have logout successfully";
  		console.log($scope.success);
  	});
  }]);