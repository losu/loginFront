'use strict';

angular.module('loginModule')
    .factory('loginService',
        function (Restangular) {

            var credentialsEndpoint = Restangular.all('credentials');

            return {

                getCredentials: function () {
                    return credentialsEndpoint.getList();
                },
                saveCredentials: function (newCredentials) {
                    return credentialsEndpoint.post(newCredentials).then(function () {
                        return credentialsEndpoint.getList();
                    });
                }
            }

        })