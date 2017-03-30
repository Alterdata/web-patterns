; (function (ng) {
  'use strict';

  ng.module('web-patterns')
    .controller('ClienteListagemController', [
      '$location',
      '$clienteService',
      function ClienteListagemControllerFn($location, $clienteService) {
        class ClienteListagemController {
          constructor() {
            let self = this;

            $clienteService.obterTodos().then(
              data => {
                this.clientes = data;
              }
            );

            return self;
          }

          novoCliente() {
            $location.url('/clientes/novo');
          }

          exibirCliente(cliente) {
            $location.url(`/clientes/${cliente.id}`);
          }

          removerCliente(cliente) {
            $clienteService.remover({ 'id': cliente.id });
          }
        }

        return new ClienteListagemController();
      }
    ]);
}(window.angular));
