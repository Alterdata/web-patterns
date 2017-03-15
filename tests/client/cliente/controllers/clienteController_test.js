'use strict';

describe('clienteController', function () {
  var _scope;
  var CONTROLLER_NAME = 'clienteController as ctrl';

  beforeEach(module('web-patterns'));

  beforeEach(inject(function ($injector) {
    _scope = $injector.get('$rootScope').$new();
  }));
});
