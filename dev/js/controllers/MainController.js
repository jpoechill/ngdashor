// Define MainController
app.controller('MainController', ['$scope', '$routeParams', 'NgTableParams',  function MainController($scope, $routeParams, NgTableParams) {

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

      $scope.rowCollection = [
        {
          id: 001, name: 'Fix bug', timestamp: '01-01-02', customer: "Airbnb", customeremail: 'mary@airbnb.com', description: "Change-makers pathway to a better life globalization women and children challenges of our times combat malaria respond democracy human potential. ", status: "Open", employee: "Robert Engineer"
        },
        {
          id: 2, name: 'Fix bug', timestamp: '01-01-02', customer: "Airbnb", customeremail: 'mary@airbnb.com', description: "Change-makers pathway to a better life globalization women and children challenges of our times combat malaria respond democracy human potential. ", status: "Open", employee: "Robert Engineer"
        },
        {
          id: 3, name: 'Fix bug', timestamp: '01-01-02', customer: "Google", customeremail: 'mary@airbnb.com', description: "Change-makers pathway to a better life globalization women and children challenges of our times combat malaria respond democracy human potential. ", status: "Open", employee: "Robert Engineer"
        },
        {
          id: 4, name: 'Fix bug', timestamp: '01-01-02', customer: "Adobe", customeremail: 'mary@airbnb.com', description: "Change-makers pathway to a better life globalization women and children challenges of our times combat malaria respond democracy human potential. ", status: "Open", employee: "Robert Engineer"
        },
      ];


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
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };

});

app.controller("BarCtrl", function ($scope) {
  $scope.labels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
  $scope.series = ['Series A', 'Series B'];

  $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72', '#45b7cd', '#ff6384', '#ff8e72'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40]
    // [28, 48, 40, 19, 86, 27, 90]
  ];
});

app.controller("DoughnutCtrl", function ($scope) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
});

app.controller("RadarCtrl", function ($scope) {
  $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

  $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72', '#45b7cd', '#ff6384', '#ff8e72'];

  $scope.data = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];
});

app.controller("SimpleMapController", [ '$scope', function($scope) {
    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        }
    });

    var mymap = L.map('mapid').setView([39.755978, -104.993349], 18);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.satellite',
      accessToken: 'pk.eyJ1IjoianBvZWNoaWxsIiwiYSI6ImNpdjhkcGtldTAwMjMyeW9oaDl1ODE3NTUifQ.7D1d_NVv5Xhy4Yoh43bapw'
    }).addTo(mymap);

    // L.tileLayer('http://census.sparkgeo.com/{z}/{x}/{y}.png').addTo(mymap);

    // var marker = L.marker([37.8139, -122.2909]).addTo(mymap);
    //
    // var circle = L.circle([37.8139, -122.2909], {
    // color: 'red',
    // fillColor: '#f03',
    // fillOpacity: 0.5,
    // radius: 500
    // }).addTo(mymap);
    //
    // var polygon = L.polygon([
    // [37.819522, -122.300559],
    // [37.818882, -122.276269],
    // [37.805718, -122.277942],
    // [37.806070, -122.290345]
    // ]).addTo(mymap);
    //
    // marker.bindPopup("I am a marker.");
    // circle.bindPopup("I am a circle.");
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
