;
(function(ng) {
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
                        var self = this;

                        self.cliente = new ClienteModel();
                        self.novoCliente = true;

                        if ($routeParams.id && $routeParams.id != 'novo') {
                            debugger;
                            $clienteService.obterPorId({ 'id': $routeParams.id }).then(
                                function(data) {
                                    self.novoCliente = false;
                                    self.cliente.id = data.id;
                                    self.cliente.nome = data.nome;
                                    self.cliente.dataNascimento = new Date(data.dataNascimento);
                                });
                        }

                        return self;
                    }

                    salvar(cliente) {
                        debugger;
                        $clienteService.salvar(cliente)
                            .then(function(data) {
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