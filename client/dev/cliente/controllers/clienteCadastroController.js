; (function (ng) {
  'use strict';

  ng.module('web-patterns')
    .controller('ClienteCadastroController', [
      '$routeParams',
      '$location',
      '$clienteService',
      'ClienteModel',
      function ClienteCadastroControllerFn($routeParams, $location, $clienteService, ClienteModel) {
        class ClienteCadastroController {
          constructor() {
            let self = this;

            self.cliente = new ClienteModel();
            self.novoCliente = true;

            if (!!$routeParams.id && $routeParams.id !== 'novo') {
              $clienteService.obterPorId({ 'id': $routeParams.id }).then(
                function (data) {
                  self.novoCliente = false;
                  self.cliente.id = data.id;
                  self.cliente.nome = data.nome;
                  self.cliente.dataNascimento = new Date(data.dataNascimento);
                });
            }

            return self;
          }

          salvar(cliente) {
            if (!ClienteModel.verificarSeValido(cliente)) {
              alert('Não é possível salvar o cliente pois seus dados não estão válidos.');
              return;
            }

            $clienteService.salvar(cliente)
              .then(function (data) {
                console.log(data);
                alert('sucesso');
                $location.url('/clientes');
              });
          }

          cancelar() {
            $location.url('/clientes');
          }
        }

        return new ClienteCadastroController();
      }
    ]);
}(window.angular));
