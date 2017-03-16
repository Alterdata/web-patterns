;
(function(ng) {
    'use strict';

    ng.module('web-patterns')
        .config([
            '$locationProvider',
            function($locationProvider) {
                $locationProvider.html5Mode(true);
                $locationProvider.hashPrefix('');
            }
        ]);
}(window.angular));