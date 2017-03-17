;
(function(ng) {
    'use strict';

    ng.module('web-patterns')
        .controller('DashboardController', [
            function DashboardController() {
                class DashboardController {
                    constructor() {
                        return this;
                    }
                    exibirMensagem(identificador) {
                        debugger;
                        alert(identificador);
                    }
                };
                return new DashboardController();
            }
        ]);
}(window.angular));