;
(function(ng) {
    'use strict';

    ng.module('web-patterns')
        .config([
            '$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/clientes', {
                        templateUrl: 'cliente/templates/cliente-listagem.html',
                        controller: 'ClienteListagemController',
                        controllerAs: 'clienteListagemCtrl'
                    })
                    .when('/clientes/:id', {
                        templateUrl: 'cliente/templates/cliente-cadastro.html',
                        controller: 'ClienteCadastroController',
                        controllerAs: 'clienteCadastroCtrl'
                    })
                    .otherwise({
                        redirectTo: '/clientes'
                    });
            }
        ]);
}(window.angular));