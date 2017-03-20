; (function (ng) {
  'use strict';

  ng.module('web-patterns')
    .controller('DashboardController', [
      function DashboardControllerFn() {
        class DashboardController {
          constructor() {
            let self = this;
            return self;
          }

          exibirMensagem(identificador) {
            alert(identificador);
          }
        }

        return new DashboardController();
      }
    ]);
}(window.angular));
