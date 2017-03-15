'use strict';

describe('clienteModel', function() {
  var _clienteModel;

  beforeEach(module('web-patterns'));

  beforeEach(inject(function($injector) {
    _clienteModel = $injector.get('clienteModel');
  }));
});
