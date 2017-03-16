; (function (ng) {
  'use strict';

  ng.module('web-patterns')
    .service('$clienteService', [
      '$clienteResource',
      function ClienteServiceFn($clienteResource) {
        class ClienteService {
          constructor() {
          }

          atualizar(cliente) {
            return $clienteResource.atualizar(cliente.id, { clienteContrato: cliente }).$promise;
          }

          adicionar(cliente) {
            return $clienteResource.adicionar({ clienteContrato: cliente }).$promise;
          }

          obterTodos() {
            return $clienteResource.obterTodos().$promise;
          }

          obterPorId(id) {
            return $clienteResource.obterPorId(id).$promise;
          }

          remover(cliente) {
            return $clienteResource.remover(cliente.id).$promise;
          }
        }

        return new ClienteService();
      }
    ]);
}(window.angular));
