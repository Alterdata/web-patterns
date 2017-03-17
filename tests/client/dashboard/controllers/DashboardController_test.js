'use strict';

describe('DashboardController', function() {
    let _scope;
    const CONTROLLER_NAME = 'DashboardController as ctrl';

    beforeEach(module('web-patterns'));

    beforeEach(inject(function($injector) {
      _scope = $injector.get('$rootScope').$new();
    }));
});
