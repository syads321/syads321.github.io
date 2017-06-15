'use strict';

describe('myApp.wistia upload item module', function() {
    beforeEach(module('myApp.wistiaUploadItem'));
    var element;
    var scope;
    var locscope
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<wistia-upload-item></wistia-upload-item>');
        element = $compile(element)(scope);

        // scope.outside = '1.5';
        scope.$apply();

    }));

    it('should render the input file', function() {
        var inputfile = element.find('[type="file"]');
        expect(inputfile.length).toBe(1);

    });
});