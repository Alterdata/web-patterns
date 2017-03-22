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
            template: '<cliente-cadastro-component></cliente-cadastro-component>'
          })
          .otherwise({
            redirectTo: '/dashboard'
          });
      }
    ]);
}(window.angular));
