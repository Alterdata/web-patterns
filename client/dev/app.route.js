; (function (ng) {
  'use strict';

  ng.module('web-patterns')
    .config([
      '$routeProvider',
      function ($routeProvider) {
        $routeProvider
          .when('/dashboard', {
            templateUrl: 'dashboard/templates/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboardCtrl'
          })
          .when('/clientes', {
            templateUrl: 'cliente/templates/cliente-listagem.html',
            controller: 'ClienteListagemController',
            controllerAs: 'clienteListagemCtrl'
          })
          .when('/clientes/:id', {
            templateUrl: './cliente/templates/cliente-cadastro.html',
            controller: 'ClienteCadastroController',
            controllerAs: 'clienteCadastroCtrl'
          })
          .otherwise({
            redirectTo: '/dashboard'
          });
      }
    ]);
}(window.angular));
