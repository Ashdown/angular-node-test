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
            },
            updateAuthenticationRecord = function(success) {
                //make json request
            }

        $scope.submit = function(){

            var success = isUsernameValid($scope.username);

            if(success) {
                $cookies.put('loggedin', true);
                $location.path('logged-in');
            }

            updateAuthenticationRecord(success);
        }

    }]);

controllers.controller('loggedInCtrl', ['$scope', '$location', '$cookies',
    function($scope, $location, $cookies){
        $scope.logout = function(){
            $cookies.remove('loggedin');
            $location.path('login');
        }

    }]);
