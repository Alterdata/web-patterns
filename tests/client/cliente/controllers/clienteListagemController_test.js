'use strict';

describe('ClienteListagemController', function() {
    var _scope;
    var CONTROLLER_NAME = 'ClienteListagemController as clienteListagemCtrl';

    beforeEach(module('web-patterns'));

    beforeEach(inject(function($injector) {
      _scope = $injector.get('$rootScope').$new();
    }));
});
