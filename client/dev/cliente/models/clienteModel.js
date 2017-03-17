; (function (ng) {
    'use strict';

    ng.module('web-patterns')
        .factory('ClienteModel', [
            function ClienteModelFn() {
                class ClienteModel {
                    constructor() {
                        this.id = '';
                        this.nome = '';
                        this.dataNascimento = new Date();
                    }

                    verificarSeValido() {
                        return !!this.nome && !!this.dataNascimento;
                    }
                }

                return ClienteModel;
            }
        ]);
}(window.angular));