// Define DataController
app.controller('DataController', ['$scope', '$http', function ($scope, $http) {
  $scope.displayedCollection = [];
  $scope.itemsByPage = 2;

  $http.get('data/json/issues.json')
  .then(function(res){
    $scope.rowCollection = res.data;
    $scope.displayedCollection = res.data;
  }).catch(function(error){
    console.log("Error " + error);
  });

  $scope.showStatus = function (status) {
    if (status == "Open") {
      return true;
    }
  }
}]);
