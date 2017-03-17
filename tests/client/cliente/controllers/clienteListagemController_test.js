'use strict';

describe('ClienteListagemController', function () {
  let _scope;
  const CONTROLLER_NAME = 'ClienteListagemController as clienteListagemCtrl';

  beforeEach(module('web-patterns'));

  beforeEach(inject(function ($injector) {
    _scope = $injector.get('$rootScope').$new();
  }));
});
