// Routes file
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html",
        controller : "MainController"
    })
    .when("/employees", {
        templateUrl : "views/employees.html",
        controller : "SimpleMapController"
    })
    .when("/keymetrics", {
        templateUrl : "views/keymetrics.html",
        controller : "LineCtrl"
    })
    .when("/dataview", {
        templateUrl : "views/dataview.html",
        controller : "MainController"
    });

    // use the HTML5 History API
    // $locationProvider.html5Mode(true);
});
