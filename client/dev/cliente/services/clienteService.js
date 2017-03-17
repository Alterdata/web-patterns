; (function (ng) {
    'use strict';

    ng.module('web-patterns')
        .service('$clienteService', [
            '$clienteResource',
            function ClienteServiceFn($clienteResource) {
                class ClienteService {
                    constructor() { }

                    salvar(cliente) {
                        if (cliente.id)
                            return this.atualizar(cliente)
                        else
                            return this.adicionar(cliente);
                    }

                    atualizar(cliente) {
                        return $clienteResource.atualizar({ 'id': cliente.id }, cliente).$promise;
                    }

                    adicionar(cliente) {
                        return $clienteResource.adicionar(cliente).$promise;
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