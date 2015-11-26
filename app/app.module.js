(function () {
    'use strict';

    var App = angular.module('App', [
        'restangular',
        'appStates',
        'loginModule'
    ])
        .config(function (RestangularProvider) {

            var baseUrl = "http://localhost:8888/";
            RestangularProvider.setBaseUrl(baseUrl);
        });
})();