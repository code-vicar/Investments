define([
        'views/index',
        'ngRoute',
        'models/index'
    ],
    function(
        routes) {

        'use strict';

        var app = angular.module('Investments', [
            'ngRoute',
            'investments.models'
        ]);

        app.config(['$routeProvider',
            function($routeProvider) {
                var i;
                for (i = 0; i < routes.length; i++) {
                    $routeProvider.when(routes[i].url, routes[i]);
                }

                $routeProvider.otherwise('/');
            }
        ]);

        return app;
    });