; (function (ng) {
  'use strict';

  ng.module('web-patterns')
    .directive('cardTotalizador', [
      function () {
        class CardTotalizador {
          constructor() {
            this.restrict = 'EA';
            this.replace = true;
            this.templateUrl = './dashboard/directives/card-totalizador/card-totalizador.html';
            this.controllerAs = 'totalizadorCtrl';
            this.bindToController = true;
            this.controller = [
              '$scope',
              function ($scope) {
                this.selecionarPedidos = function () {
                  if ($scope.totalizadorCtrl.cliqueTotalizador) {
                    $scope.totalizadorCtrl.cliqueTotalizador({ 'identificador': $scope.totalizadorCtrl.id });
                  }
                };
              }
            ];
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

        return new CardTotalizador();
      }
    ]);
}(window.angular));
