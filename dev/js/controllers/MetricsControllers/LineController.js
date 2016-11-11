// Define LineCtrl
app.controller("LineCtrl", ['$scope', '$http', function ($scope, $http) {
  // Get csv
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

  function convertToJSON(CSV) {
    // capture both arays
    var arr1 = CSV[0];
    var arr2 = CSV[1];

    // create new object
    var newObj = {};

    // map first array object names with second array object items
    for (var i=0; i < arr1.length; i ++) {
      // check if new object name exists
      var thisObjectTitle = arr1[i].split("/")[0];

      // add to existing property if already exists
      // otherwise create new property
      if (newObj.hasOwnProperty(thisObjectTitle)) {
        newObj[thisObjectTitle].push(arr2[i]);
        console.log("Object name exists");
      } else {
        newObj[thisObjectTitle] = [arr2[i]];
      }
    }

    // complete
    return [newObj];
  }

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
