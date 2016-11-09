// Define LineCtrl
app.controller("LineCtrl", function ($scope) {
  $scope.labels = ["May", "June", "July", "August", "September", "October", "November"];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40]
  ];

  // $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72', '#45b7cd', '#ff6384', '#ff8e72'];

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
});
