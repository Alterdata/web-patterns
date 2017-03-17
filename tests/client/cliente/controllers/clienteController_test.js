'use strict';

describe('ClienteCadastroController', function () {
  let _scope;
  const CONTROLLER_NAME = 'ClienteCadastroController as clienteCadastroctrl';

  beforeEach(module('web-patterns'));

  beforeEach(inject(function ($injector) {
    _scope = $injector.get('$rootScope').$new();
  }));
});
