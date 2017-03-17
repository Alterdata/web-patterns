'use strict';

describe('card-totalizador', function() {
    var _scope, _compile, _element;

    beforeEach(module('web-patterns'));

    beforeEach(inject(function($injector) {
        _scope = $injector.get('$rootScope').$new();
        _compile = $injector.get('$compile');

        var _html = '<card-totalizador></card-totalizador>';

        _element = window.angular.element(_html);

        _compile(_element)(_scope);
        _scope.$digest();
    }));

    describe('init', function() {
        it('should have the directive created', function() {
            expect(_element).toBeDefined();
        });
    });
});
