// Define LineCtrl
app.controller("OpenIssuesController", function ($scope, $http, $interval) {
  function fetchData () {
    $http.get('data/json/keymetrics.json')
    .then(function(res){
      $scope.issues = res.data[0].openissues;
    }).catch(function(error){
      console.log("Error " + error);
    });
  }

  fetchData();

  // Query datafile
  $interval(fetchData, 3000, 0);

});
