// Define BarCtrl
app.controller("BarCtrl", function ($scope, $http, $interval) {
  function fetchData() {
    $http.get('data/csv/reportedissues.csv')
    .then(function(response){
      // read parsed CSV
      var myParsedCSV = parseCSV(response.data);
      var newJSON = convertToJSON(myParsedCSV);

      // attach result to scope
      $scope.labels = newJSON[0].labels;
      $scope.data = newJSON[0].data;
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
});
