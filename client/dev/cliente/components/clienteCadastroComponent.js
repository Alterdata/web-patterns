; (function (ng) {
  'use strict';

  ng.module('web-patterns')
    .component('clienteCadastroComponent', {
      templateUrl: 'cliente/templates/cliente-cadastro.html',
      controller: 'ClienteCadastroController',
      controllerAs: 'clienteCadastroCtrl'
    });
}(window.angular));
