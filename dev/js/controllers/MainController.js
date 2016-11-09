// Define MainController
app.controller('MainController', ['$scope', '$routeParams', '$http', function MainController($scope, $routeParams, NgTableParams, $http) {
  $scope.reloadRoute = function() {
     $route.reload();
  }

  var init = function () {

  };

  init();
}]);
