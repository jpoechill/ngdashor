// Define LineCtrl
app.controller("OpenIssuesController", function ($scope, $http) {
  $http.get('data/json/keymetrics.json')
  .then(function(res){
    $scope.issues = res.data[0].openissues;
  }).catch(function(error){
    console.log("Error " + error);
  });
});
