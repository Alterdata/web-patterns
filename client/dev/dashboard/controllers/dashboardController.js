;(function(ng) {
    'use strict';

    ng.module('web-patterns')
        .controller('DashboardController', [
            function DashboardControllerFn() {
                class DashboardController {
                    constructor() {
                        return this;
                    }
                    
                    exibirMensagem(identificador) {
                        alert(identificador);
                    }
                }

                return new DashboardController();
            }
        ]);
}(window.angular));