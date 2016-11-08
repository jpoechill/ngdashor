// Define MainController
app.controller('MainController', ['$scope', '$routeParams', 'NgTableParams', '$http', function MainController($scope, $routeParams, NgTableParams, $http) {

      var firstnames = ['Laurent', 'Blandine', 'Olivier', 'Max'];
      var lastnames = ['Renard', 'Faivre', 'Frere', 'Eponge'];
      var dates = ['1987-05-21', '1987-04-25', '1955-08-27', '1966-06-06'];
      var id = 1;

      $scope.reloadRoute = function() {
         $route.reload();
      }

      // $scope.$on("$routeChangeSuccess", function($currentRoute, $previousRoute) {
      //     $scope.customs.prodoc = $scope.routeParams.prodoc;
      // });

      $http.get('data/data.json')
      .then(function(res){
        console.log("Hello");
        $scope.rowCollection = res.data;
        console.log($scope.data);
      }).catch(function(error){
        console.log("Error " + error);
      });

      $scope.showStatus = function (status) {
        if (status == "Open") {
          return true;
        }
      }
      //
      // $scope.rowCollection = [
      //   {
      //     id: 1, name: 'Fix bug', timestamp: '01-01-16', customer: "Airbnb", customeremail: 'mary@airbnb.com', description: "Change-makers pathway to a better life globalization women and children challenges of our times combat malaria respond democracy human potential. ", status: "Open", employee: "Robert Engineer"
      //   },
      //   {
      //     id: 2, name: 'Fix bug', timestamp: '01-01-16', customer: "Airbnb", customeremail: 'mary@airbnb.com', description: "Change-makers pathway to a better life globalization women and children challenges of our times combat malaria respond democracy human potential. ", status: "Open", employee: "Robert Engineer"
      //   },
      //   {
      //     id: 3, name: 'Fix bug', timestamp: '01-01-16', customer: "Google", customeremail: 'mary@airbnb.com', description: "Change-makers pathway to a better life globalization women and children challenges of our times combat malaria respond democracy human potential. ", status: "Closed", employee: "Robert Engineer"
      //   },
      //   {
      //     id: 4, name: 'Fix bug', timestamp: '01-01-16', customer: "Adobe", customeremail: 'mary@airbnb.com', description: "Change-makers pathway to a better life globalization women and children challenges of our times combat malaria respond democracy human potential. ", status: "Closed", employee: "Robert Engineer"
      //   },
      //   {
      //     id: 4, name: 'Fix bug', timestamp: '01-01-16', customer: "Microsoft", customeremail: 'mary@airbnb.com', description: "Change-makers pathway to a better life globalization women and children challenges of our times combat malaria respond democracy human potential. ", status: "Closed", employee: "Robert Engineer"
      //   }
      // ];


      $scope.getters={
          firstName: function (value) {
              //this will sort by the length of the first name string
              return value.firstName.length;
          }
      }

      function generateRandomItem(id) {

          var firstname = firstnames[Math.floor(Math.random() * 3)];
          var lastname = lastnames[Math.floor(Math.random() * 3)];
          var birthdate = dates[Math.floor(Math.random() * 3)];
          var balance = Math.floor(Math.random() * 2000);

          return {
              id: id,
              firstName: firstname,
              lastName: lastname,
              birthDate: new Date(birthdate),
              balance: balance
          }
      }

      //add to the real data holder
      $scope.addRandomItem = function addRandomItem() {
          $scope.rowCollection.push(generateRandomItem(id));
          id++;
      };

      //remove to the real data holder
      $scope.removeItem = function removeItem(row) {
          var index = $scope.rowCollection.indexOf(row);
          if (index !== -1) {
              $scope.rowCollection.splice(index, 1);
          }
      }

  var init = function () {

  };

  init();
}]);

app.controller("LineCtrl", function ($scope) {

  $scope.labels = ["May", "June", "July", "August", "September", "October", "November"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40]
    // [28, 48, 40, 19, 86, 27, 90]
  ];

  $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72', '#45b7cd', '#ff6384', '#ff8e72'];

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

app.controller("BarCtrl", function ($scope) {
  $scope.labels = ["May", "June", "July", "August", "September", "October", "November"];
  $scope.series = ['Series A', 'Series B'];

  $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72', '#45b7cd', '#ff6384', '#ff8e72'];

  $scope.data = [
    [2, 9, 8, 3, 8, 4, 9]
    // [28, 48, 40, 19, 86, 27, 90]
  ];
});

app.controller("DoughnutCtrl", function ($scope) {
  $scope.labels = ["Opened Issues", "Closed Issues", "All Issues"];
  $scope.data = [12, 8];
});

app.controller("RadarCtrl", function ($scope) {
  $scope.labels =["Designing", "Coding", "Cycling"];

  $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72', '#45b7cd', '#ff6384', '#ff8e72'];

  $scope.data = [
    [4, 20, 16],
    // [14, 11, 10, 40]
  ];
});

app.controller("SimpleMapController", [ '$scope', function($scope) {
    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        }
    });

    var mymap = L.map('mapid').setView([37.8033, -122.2711], 16);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.satellite',
      accessToken: 'pk.eyJ1IjoianBvZWNoaWxsIiwiYSI6ImNpdjhkcGtldTAwMjMyeW9oaDl1ODE3NTUifQ.7D1d_NVv5Xhy4Yoh43bapw'
    }).addTo(mymap);

    // L.tileLayer('http://census.sparkgeo.com/{z}/{x}/{y}.png').addTo(mymap);

    var marker = L.marker([37.8033, -122.2711]).addTo(mymap);
    //
    var circle = L.circle([37.8033, -122.2711], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 90
    }).addTo(mymap).bindPopup("14 Employees here.").openPopup();

    var marker = L.marker([37.8033, -122.2761]).addTo(mymap);

    var circle2 = L.circle([37.8033, -122.2761], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 80
    }).addTo(mymap).bindPopup("8 Employees here.");

    var circle3 = L.circle([37.8053, -122.2731], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 60
    }).addTo(mymap).bindPopup("10 Employees here.");
    //
    // var polygon = L.polygon([
    // [37.819522, -122.300559],
    // [37.818882, -122.276269],
    // [37.805718, -122.277942],
    // [37.806070, -122.290345]
    // ]).addTo(mymap);
    //
    // marker.bindPopup("I am a marker.");

    // polygon.bindPopup("I am a ploygon.");
    //
    // var popup = L.popup();
    //
    // function onMapClick(e) {
    //     popup
    //         .setLatLng(e.latlng)
    //         .setContent("You clicked the map at " + e.latlng.toString())
    //         .openOn(mymap);
    // }
    //
    // mymap.on('click', onMapClick);

    var info = L.control();

    info.onAdd = function (map) {
      this._div = L.DomUtil.create('div', 'info');
      this.update();
      return this._div;
    };

    info.update = function (props) {
      // this._div.innerHTML = '<h4>Employees by location</h4>' +  (props ?
      //   '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
      //   : 'Hover over a site');
      this._div.innerHTML = '<h4>Employees by location</h4>' +
        "Location 1: 10 Employees <br />" +
        "Location 2: 10 Employees <br />" +
        "Location 3: 10 Employees <br />";
    };

    info.addTo(mymap);

    function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
    }

    // var legend = L.control({position: 'bottomright'});
    //
    // legend.onAdd = function (map) {
    //
    //     var div = L.DomUtil.create('div', 'info legend'),
    //         grades = [0, 10, 20, 50, 100, 200, 500, 1000],
    //         labels = [];
    //
    //     // loop through our density intervals and generate a label with a colored square for each interval
    //     for (var i = 0; i < grades.length; i++) {
    //         div.innerHTML +=
    //             '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
    //             grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    //     }
    //
    //     return div;
    // };
    //
    // legend.addTo(mymap);


    var geojsonFeature = {
      "type": "Feature",
      "properties": {
          "name": "Coors Field",
          "amenity": "Baseball Stadium",
          "popupContent": "This is where the Rockies play!"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [-104.99404, 39.75621]
      }
    };

    L.geoJSON(geojsonFeature).addTo(mymap);
}]);
