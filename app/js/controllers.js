'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('loginCtrl', ['$scope', '$location',
    function($scope, $location){

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
                $location.path('logged-in');
            }
        }

    }]);

controllers.controller('loggedInCtrl', [
    function(){

    }]);
