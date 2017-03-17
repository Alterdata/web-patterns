'use strict';

describe('ClienteService', function () {
  let _clienteService;

  beforeEach(module('web-patterns'));

  beforeEach(inject(function ($injector) {
    _clienteService = $injector.get('$clienteService');
  }));

  describe('exemplo de função', function () {
    it('teste de comparação', function () {
      expect(true).toBe(true);
    });
  });
});
