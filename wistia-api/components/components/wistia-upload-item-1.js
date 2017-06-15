angular.module('myApp.wistiaUploadItem', ['blueimp.fileupload']).component('wistiaUploadItem', {
    templateUrl: './html/upload.html',
    controller: function() {
        var ctrl = this;
        ctrl.config = {
            'API_URL': 'https://upload.wistia.com/',
            'BFU_ELEMENT': '#fileupload',
            'BFU_OPTIONS': {
                maxNumberOfFiles: 5,
                maxFileSize: (90 * 1000000),
                acceptFileTypes: /(\.|\/)(avi|mov|qt|mp?g|mp4|wmv|divx)$/i,
                formData: {
                    'api_password': 'e509280b5e8ea2afc3cf012370f37a1007d4944cb2889ef4ee362d98b8d5ab1c'
                }
            }
        }
        this.$onInit = function() {
            ctrl.config.BFU_OPTIONS.formData.api_password = ctrl.config.api_password;
            ctrl.data = {
                action: ctrl.config.API_URL,
                options: ctrl.config.BFU_OPTIONS
            };
            $(ctrl.config.BFU_ELEMENT).fileupload(ctrl.config.BFU_OPTIONS);
        };
    },
    bindings: {
        config: '='
    }
}).filter('trust', function($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}).controller('UploadCtrl', function($timeout) {
    // $timeout(function() {
    //     $(APP.BFU_ELEMENT).fileupload(APP.BFU_OPTIONS);
    // }, 0);
});