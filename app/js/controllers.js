'use strict';

var controllers = angular.module('controllers', ['ngCookies']);

controllers.controller('loginCtrl', ['$scope', '$location', '$cookies', '$http',
    function($scope, $location, $cookies, $http){

        var validUsernames = ['user', 'manager', 'admin', 'developer', 'tester'],
            isUsernameValid = function(username){
                for (var i = 0; i < validUsernames.length; i++) {
                    if (validUsernames[i] === username) {
                        return true;
                    }
                }
                return false;
            },
            updateAuthenticationRecord = function(username, success) {

                $http({
                    method: 'POST',
                    url: '/api/new-attempt',
                    data: {
                        username: username,
                        success: success
                    }
                }).then(
                    function successCallback(response) {
                    },
                    function errorCallback() {
                    });
            }

        $scope.submit = function(){

            var success = isUsernameValid($scope.username);

            updateAuthenticationRecord($scope.username, success);

            if(success) {
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
