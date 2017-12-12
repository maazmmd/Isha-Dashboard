// app.js
var myApp = angular.module('myApp', [
    'myApp.hcamp',
    'myApp.dataCollection',
    'myApp.location',
    'myApp.performance',
    'myApp.dataAnalysis',
    'ui.router.state',
    'ui.router'
]);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'html/login.html'
        })

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'html/dashboard.html' 
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('reports', {
           url: '/reports',
            templateUrl: 'html/reports.html'     
        });   
});