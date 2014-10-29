// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    'baseUrl': '',
    'paths': {
        'jquery': 'bower_components/jquery/jquery',
        'angular': 'bower_components/angular/angular',
        'ngRoute': 'bower_components/angular-route/angular-route',
        'bootstrap': 'bower_components/sass-bootstrap/dist/js/bootstrap',
        'es6-promise': 'bower_components/es6-promise/promise',
        'text': 'bower_components/requirejs-text/text',
        'views': 'views'
    },
    'shim': {
        'bootstrap': {
            'deps': ['jquery']
        },
        'angular': {
            'deps': ['jquery'],
            'exports': 'angular'
        },
        'ngRoute': {
            'deps': ['angular']
        },
        'app': {
            'deps': [
                'angular',
                'bootstrap',
                'es6-promise'
            ]
        }
    }
});

//include the requirejs text plugin
requirejs(['text'], function() {
    'use strict';

    requirejs(['app'], function() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['Investments']);
        });
    });
});