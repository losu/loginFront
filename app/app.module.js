(function () {
    'use strict';

    var App = angular.module('App', [
        'restangular',
        'appStates',
        'loginModule'
    ])
        .config(function (RestangularProvider) {

            var baseUrl = "http://loginbackend-losu.rhcloud.com/";
            RestangularProvider.setBaseUrl(baseUrl);
        });
})();