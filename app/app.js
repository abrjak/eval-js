var app = angular.module('eval', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.
    when('/login', {
        templateUrl: 'app/views/login.template.html',
        controller: 'LoginController' 
    }).
    when('/home', {
        templateUrl: 'app/views/home.template.html',
        controller: 'HomeController'
    }).
    otherwise({
        redirectTo: '/login'
    });
});