; (function (ng) {
  'use strict';

  ng.module('web-patterns')
    .factory('ClienteModel', [
      function ClienteModelFn() {
        class ClienteModel {
          constructor() {
            let self = this;

            self.id = undefined;
            self.nome = '';
            self.__dataNascimento = undefined;

            return self;
          }

          static verificarSeValido(cliente) {
            return !!cliente.nome && !!cliente.dataNascimento;
          }

          get dataNascimento() {
            return this.__dataNascimento;
          }

          set dataNascimento(dataNascimento) {
            this.__dataNascimento = dataNascimento;
          }
        }

        return ClienteModel;
      }
    ]);
}(window.angular));
