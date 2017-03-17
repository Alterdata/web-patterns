; (function (ng) {
    'use strict';

    ng.module('web-patterns')
        .directive('cardTotalizador', [
            function () {
                var ctrl = [
                    '$scope',
                    function ($scope) {
                        this.selecionarPedidos = function () {
                            if ($scope.totalizadorCtrl.cliqueTotalizador) {
                                $scope.totalizadorCtrl.cliqueTotalizador({ 'identificador': $scope.totalizadorCtrl.id });
                            }
                        };
                    }
                ];

                class CardTotalizador {
                    constructor(controller) {
                        this.restrict = 'EA';
                        this.replace = true;
                        this.templateUrl = './dashboard/directives/card-totalizador/card-totalizador.html';
                        this.controllerAs = 'totalizadorCtrl';
                        this.bindToController = true;
                        this.controller = controller;
                        this.scope = {
                            'id': '@',
                            'quantidade': '@',
                            'classePrimaria': '@',
                            'classeSecundaria': '@',
                            'cliqueTotalizador': '&',
                            'icone': '@',
                            'descricao': '@'
                        };
                    }
                }

                return new CardTotalizador(ctrl);
            }
        ]);
}(window.angular));