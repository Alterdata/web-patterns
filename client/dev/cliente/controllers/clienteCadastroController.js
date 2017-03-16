; (function (ng) {
  'use strict';

  ng.module('web-patterns')
    .controller('ClienteCadastroController', [
      '$clienteService',
      'ClienteModel',
      function ClienteCadastroControllerFn($clienteService, ClienteModel) {
        class ClienteCadastroController {
          constructor() {
            var self = this;

            $clienteService.obterTodos().then(
              function (data) {
                self.clientes = data;
              });

            self.cliente = new ClienteModel();
            self.cliente.name = 'Juca';
            self.cliente.birthDate = new Date(1984, 3, 26);

            return self;
          }

          salvar(cliente) {
            $clienteService.salvar(cliente);
          }

          carregarTodos() {
            $clienteService.obterTodos();
          }
        }

        return new ClienteCadastroController();
      }
    ]);
}(window.angular));
