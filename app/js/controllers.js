'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('loginCtrl', ['$scope', '$location',
    function($scope, $location){

        $scope.submit = function(){
            $location.path('logged-in');
        }

    }]);

controllers.controller('loggedInCtrl', [
    function(){

    }]);
