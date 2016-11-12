// Define MapController
app.controller("MapController", ['$scope', '$http', "$interval", 'myService', function($scope, $http, $interval, myService) {
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
        url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
        options: {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        }
      },
    markers: {}
  });

  myService.sayHello("Bird is the word..!");

  var greenIcon = L.icon({
    iconUrl: 'leaf-green.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

  // Fetch .JSON data
  var fetchData = function () {
    $http.get('data/json/mapping.json')
    .then(function(res){
      $scope.data = res.data;
      doCreateMarkers();

      return "Blue";
      // updateCreateMenu();
    }).catch(function(error){
      console.log("Error " + error);
    });
  }

  // fetchData through service
  // discern if csv, or json
  // take return and do something

  // Initial query
  var myStuff = $http.get('data/json/mapping.json')
  .then(function(res){
    return "Blue";
    // updateCreateMenu();
  }).catch(function(error){
    console.log("Error " + error);
  });

  myStuff.then(function(response) {
    console.log(response);
  })
  // console.log(myStuff);

  fetchData();
  // fetchData().then(function () {
  //     console.log("Hello");
  // });


  // Query datafile
  var intervalPromise = $interval(fetchData, 3000, 0);

  // Cancel query on page change
  $scope.$on('$destroy', function () { $interval.cancel(intervalPromise); });

  // Create and place markers
  var doCreateMarkers = function () {
    $scope.data.filter(function(data) {
      $scope.markers[data.shortname] = {
        title: data.name,
        lat: data.coords[0],
        lng: data.coords[1],
        icon: greenIcon,
        message: data.name +"<br><span style='font-size: 12px; font-weight: 600;'>" + data.employees + " Employees</span>",
      };
    });
  }
}]);
