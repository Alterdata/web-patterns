; (function (ng) {
  'use strict';

  ng.module('web-patterns')
    .factory('$clienteResource', [
      '$resource',
      function ClienteResource($resource) {
        const _url = 'https://private-a1421-webpatterns.apiary-mock.com/clientes/:id';

        const _params = {
          id: '@id'
        };

        const _method = {
          atualizar: {
            method: 'PUT',
            isArray: false
          },
          adicionar: {
            method: 'POST',
            isArray: false
          },
          obterTodos: {
            method: 'GET',
            isArray: true
          },
          obterPorId: {
            method: 'GET',
            isArray: false
          },
          remover: {
            method: 'DELETE',
            isArray: false
          }
        };

        return $resource(_url, _params, _method);
      }
    ]);
}(window.angular));
