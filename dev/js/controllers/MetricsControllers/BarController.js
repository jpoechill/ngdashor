// Define BarCtrl
app.controller("BarCtrl", function ($scope, $http) {
  function retrieveAndUpdateItems() {
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

  retrieveAndUpdateItems();
});
