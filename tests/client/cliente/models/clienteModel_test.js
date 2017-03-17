'use strict';

describe('ClienteModel', function () {
  let _clienteModel;

  beforeEach(module('web-patterns'));

  beforeEach(inject(function ($injector) {
    _clienteModel = $injector.get('ClienteModel');
  }));
});
