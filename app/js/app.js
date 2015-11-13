'use strict';

var loginApp = angular.module('loginApp', [
    'ngRoute',
    'controllers'
]);

loginApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'loginCtrl'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }]);