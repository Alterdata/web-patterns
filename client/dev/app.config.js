;
(function(ng) {
    'use strict';

    ng.module('web-patterns')
        .config([
            '$locationProvider',
            function($locationProvider) {
                $locationProvider.hashPrefix('');
                //$locationProvider.html5Mode(true);
            }
        ]);
}(window.angular));