// Routes file
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html",
        controller : "MainController"
    })
    .when("/employees", {
        templateUrl : "views/map.html",
        controller : "MapController"
    })
    .when("/keymetrics", {
        templateUrl : "views/keymetrics.html",
        controller : "LineCtrl"
    })
    .when("/dataview", {
        templateUrl : "views/dataview.html",
        controller : "DataController"
    });

    // use the HTML5 History API
    // $locationProvider.html5Mode(true);
});
