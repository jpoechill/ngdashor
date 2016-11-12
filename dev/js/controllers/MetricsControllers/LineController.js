// Define LineCtrl
app.controller("LineCtrl", ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
  // Get csv
  function fetchData () {
    $http.get('data/csv/linedata.csv')
    .then(function(response){
      // read parsed CSV
      var myParsedCSV = parseCSV(response.data);

      // Complete JSON formatting
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

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
      ]
    }
  };
}]);
