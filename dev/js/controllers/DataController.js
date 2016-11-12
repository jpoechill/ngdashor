// Define DataController
app.controller('DataController', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
  $scope.rowCollection = [];
  $scope.displayedCollection = [].concat($scope.rowCollection);
  $scope.itemsByPage = 2;

  function fetchData () {
    $http.get('data/json/issues.json')
    .then(function(res){
      // Update without refresh data-table
      Array.prototype.splice.apply($scope.rowCollection, [0, $scope.rowCollection.length].concat(res.data));
    }).catch(function(error){
      console.log("Error " + error);
    });
  }

  // Initial query
  fetchData();

  // Query datafile
  var intervalPromise = $interval(fetchData, 5000, 0);

  // Cancel query on page change
  $scope.$on('$destroy', function () { $interval.cancel(intervalPromise); });

  $scope.showStatus = function (status) {
    if (status == "Open") {
      return true;
    }
  }
}]);
