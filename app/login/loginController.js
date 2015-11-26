'use strict';

angular.module('loginModule', [])
    .controller('loginController',
        function loginController($scope, loginService) {

            $scope.hi = "siema";

            $scope.inputCredentials = {
                username: '',
                password: ''
            }

            $scope.credentials = null;

            loginService.getCredentials().then(function (data) {
                $scope.credentials = data;
            });

            $scope.save = function (inputCredentials) {
                loginService.saveCredentials(inputCredentials).then(function (data) {
                    $scope.credentials = data;
                })
            }

        })