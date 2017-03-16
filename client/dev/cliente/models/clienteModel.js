;(function(ng) {
  'use strict';

  ng.module('web-patterns')
    .factory('ClienteModel', [
      function ClienteModel() {
        class ClienteModel {
          constructor() {
            this.nome = '';
            this.dataNascimento = null;
          }

          verificarSeValido() {
            return !!this.nome && !!this.dataNascimento;
          }
        }

        return ClienteModel;
      }
    ]);
}(window.angular));