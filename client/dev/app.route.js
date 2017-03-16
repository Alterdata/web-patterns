; (function (ng) {
  'use strict';

  ng.module('web-patterns')
    .config([
      '$routeProvider',
      function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'cliente/templates/cliente-listagem.html',
            controller: 'ClienteListagemController',
            controllerAs: 'clienteListagemCtrl'
          })
          .when('/cadastro', {
            templateUrl: 'cliente/templates/cliente-cadastro.html',
            controller: 'ClienteCadastroController',
            controllerAs: 'clienteCadastroCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));
