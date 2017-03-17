'use strict';

describe('card-totalizador', function() {
    let _scope, _compile, _element;

    beforeEach(module('web-patterns'));

    beforeEach(inject(function($injector) {
        _scope = $injector.get('$rootScope').$new();
        _compile = $injector.get('$compile');

        let _html = '<card-totalizador></card-totalizador>';

        _element = window.angular.element(_html);

        _compile(_element)(_scope);
        _scope.$digest();
    }));
});
