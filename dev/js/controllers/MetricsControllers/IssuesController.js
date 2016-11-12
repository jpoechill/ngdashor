// Define LineCtrl
app.controller("OpenIssuesController", ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
  function fetchData () {
    $http.get('data/json/keymetrics.json')
    .then(function(res){
      $scope.issues = res.data[0].openissues;
    }).catch(function(error){
      console.log("Error " + error);
    });
  }

  // Initial query
  fetchData();

  // Query datafile
  var intervalPromise = $interval(fetchData, 3000, 0);

  // Cancel query on page change
  $scope.$on('$destroy', function () { $interval.cancel(intervalPromise); });
}]);
