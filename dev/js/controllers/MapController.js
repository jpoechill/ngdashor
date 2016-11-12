// Define MapController
app.controller("MapController", ['$scope', '$http', "$interval", function($scope, $http, $interval) {
  // Setup
  angular.extend($scope, {
    defaults: {
        scrollWheelZoom: false,
        zoomControl:false
      },
    center: {
        lat: 39.833,
        lng: -90.583,
        zoom: 4
      },
    tiles: {
        url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        options: {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        }
      },
    markers: {}
  });

  // Fetch .JSON data
  var fetchData = function () {
    $http.get('data/json/mapping.json')
    .then(function(res){
      $scope.data = res.data;
      doCreateMarkers();
      // updateCreateMenu();
    }).catch(function(error){
      console.log("Error " + error);
    });
  }

  // Query datafile
  $interval(fetchData(), 3000, 0);

  // Create and place markers
  var doCreateMarkers = function () {
    $scope.data.filter(function(data) {
         $scope.markers[data.shortname] = {
             title: data.name,
             lat: data.coords[0],
             lng: data.coords[1],
             message: data.name +"<br><span style='font-size: 12px; font-weight: 600;'>" + data.employees + " Employees</span>",
         };
      });
    }
}]);
