'use strict';

var controllers = angular.module('controllers', ['ngCookies']);

controllers.controller('loginCtrl', ['$scope', '$location', '$cookies',
    function($scope, $location, $cookies){

        var validUsernames = ['user', 'manager', 'admin', 'developer', 'tester'],
            isUsernameValid = function(username){
                for (var i = 0; i < validUsernames.length; i++) {
                    if (validUsernames[i] === username) {
                        return true;
                    }
                }
                return false;
            }

        $scope.submit = function(){
            if(isUsernameValid($scope.username)) {
                $cookies.put('loggedin', true);
                $location.path('logged-in');
            }
        }

    }]);

controllers.controller('loggedInCtrl', ['$scope', '$location', '$cookies',
    function($scope, $location, $cookies){
        $scope.logout = function(){
            $cookies.remove('loggedin');
            $location.path('login');
        }

    }]);
