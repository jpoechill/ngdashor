// Define SimpleMapController
app.controller("MapController", ['$scope', function($scope) {
  angular.extend($scope, {
      defaults: {
          scrollWheelZoom: false
      }
  });

  // Open map39.833; -98.583
  var mymap = L.map('mapid').setView([39.833, -98.583], 4);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoianBvZWNoaWxsIiwiYSI6ImNpdjhkcGtldTAwMjMyeW9oaDl1ODE3NTUifQ.7D1d_NVv5Xhy4Yoh43bapw'
  }).addTo(mymap);

  // Marker and circle 1
//   var circle = L.circle([37.8033, -122.2711], {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.5,
//   radius: 90
// }).addTo(mymap).bindPopup("<p style='font-size: 100px'>10</p>");

  // Marker and circle 247.6062° N, 122.3321° W‎47.608013	DMS Lat‎: ‎47° 36' 28.8468'' N

  var marker = L.marker([40.7608, -111.8910]).addTo(mymap).bindPopup("Salt Lake City, UT <br><span style='font-size: 12px; font-weight: 600;'>14 Employees</span>");
  var marker = L.marker([37.8033, -122.2711]).addTo(mymap).bindPopup("Oakland, CA <br><span style='font-size: 12px; font-weight: 600;'>10 Employees</span>");
  var marker = L.marker([37.7739, -122.4312]).addTo(mymap).bindPopup("San Francsico, CA <br><span style='font-size: 12px; font-weight: 600;'>10 Employees</span>");
  var marker = L.marker([40.7128, -74.0059]).addTo(mymap).bindPopup("New York, NY <br><span style='font-size: 12px; font-weight: 600;'>10 Employees</span>");
  var marker = L.marker([30.2672, -97.7431]).addTo(mymap).bindPopup("Austin, TX <br><span style='font-size: 12px; font-weight: 600;'>10 Employees</span>");
  var marker = L.marker([47.608, -122.3351]).addTo(mymap).bindPopup("Seattle, WA <br><span style='font-size: 12px; font-weight: 600;'>10 Employees</span>");
  // var circle2 = L.circle([37.8033, -122.2761], {
  // color: 'red',
  // fillColor: '#f03',
  // fillOpacity: 0.5,
  // radius: 80
  // }).addTo(mymap).bindPopup("8 Employees here.");

  // Marker and circle 1
  // var circle3 = L.circle([37.8053, -122.2731], {
  // color: 'red',
  // fillColor: '#f03',
  // fillOpacity: 0.5,
  // radius: 60
  // }).addTo(mymap).bindPopup("10 Employees here.");



  var info = L.control();

  info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
  };

  info.update = function (props) {
    console.log(this._div);
    // this._div.width('100');
    this._div.innerHTML =
    // '<h4>Employee Map</h4>' +
      "Oakland <span class='pull-right' style='font-weight: bold;'>10 </span><br />" +
      "Salt Lake City <span class='pull-right' style='font-weight: bold;'>12 </span><br />" +
      "San Francisco <span class='pull-right' style='font-weight: bold;'>14 </span><br />" +
      "Seattle <span class='pull-right' style='font-weight: bold;'>16 </span><br />" +
      "Austin <span class='pull-right' style='font-weight: bold;'>18 </span><br />" +
      "New York <span class='pull-right' style='font-weight: bold;'>20 </span><br />";
  };

  info.addTo(mymap);
}]);
