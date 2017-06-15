'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'myApp.wistiaUploadItem',
]).
config(['$locationProvider', '$routeProvider', 'wistiaUploadProvider', function($locationProvider, $routeProvider, wistiaUploadProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({ redirectTo: '/view1' });
    wistiaUploadProvider.setApiPassword('e509280b5e8ea2afc3cf012370f37a1007d4944cb2889ef4ee362d98b8d5ab1c');
}]);