; (function (ng) {
  'use strict';

  ng.module('web-patterns')
    .controller('ClienteListagemController', [
      '$clienteService',
      function ClienteListagemController($clienteService) {
        class ClienteListagemController {
          constructor() {
            var self = this;

            $clienteService.obterTodos().then(
              function(data) {
                self.clientes = data;
              }
            );

            return self;
          }
        }

        return new ClienteListagemController();
      }
    ]);
}(window.angular));
