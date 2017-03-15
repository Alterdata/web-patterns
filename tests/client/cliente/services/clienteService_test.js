'use strict';

describe('clienteService', function () {
  var _clienteService;

  beforeEach(module('web-patterns'));

  beforeEach(inject(function ($injector) {
    _clienteService = $injector.get('clienteService');
  }));
});
