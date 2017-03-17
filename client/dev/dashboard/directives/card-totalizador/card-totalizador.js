;
(function(ng) {
    'use strict';

    ng.module('web-patterns')
        .directive('cardTotalizador', [
            function() {
                var _controller = [
                    '$scope',
                    function($scope) {
                        this.selecionarPedidos = function() {
                            if ($scope.totalizadorCtrl.cliqueTotalizador)
                                $scope.totalizadorCtrl.cliqueTotalizador({ 'identificador': $scope.totalizadorCtrl.id });
                        }
                    }
                ];

                var _restrict = 'EA';
                var _scope = {
                    'id': '@',
                    'quantidade': '@',
                    'classePrimaria': '@',
                    'classeSecundaria': '@',
                    'cliqueTotalizador': '&',
                    'icone': '@'
                };
                var _replace = true;

                return {
                    restrict: _restrict,
                    templateUrl: './dashboard/directives/card-totalizador/card-totalizador.html',
                    controllerAs: 'totalizadorCtrl',
                    bindToController: true,
                    replace: _replace,
                    scope: _scope,
                    controller: _controller
                };
            }
        ]);
}(window.angular));