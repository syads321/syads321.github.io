(function(module) {
    try {
        module = angular.module('app');
    } catch (e) {
        module = angular.module('app', []);
    }
    module.run(['$templateCache', function($templateCache) {
        $templateCache.put('templates/repositories.html',
            '<div class="container core-padding-vrt">\n' +
            '    <form id="fileupload" action="{{ $ctrl.data.action | trust }}" method="POST" enctype="multipart/form-data" ng-controller="UploadCtrl" data-file-upload="$ctrl.data.options" ng-class="{\'fileupload-processing\': processing() || loadingFiles}">\n' +
            '        <div class="row">\n' +
            '            <div class="col-lg-12 col-md-12 mid">\n' +
            '                <div class="btn-group btn-group-lg pull-right" role="group" aria-label="Large button group">\n' +
            '                    <label type="button" class="btn btn-default" ng-disabled="disabled">Add Files..\n' +
            '                        <input type="file" name="files[]" multiple ng-disabled="disabled" class="invisible">\n' +
            '                    </label>\n' +
            '                    <button type="button" class="btn btn-default" ng-click="submit()">Start upload</button>\n' +
            '                    <button type="button" class="btn btn-default" ng-click="cancel()">Cancel upload</button> </div>\n' +
            '            </div>\n' +
            '            <hr class="invisible" style="margin-bottom:0px">\n' +
            '            <div class="col-xs-12" ng-class="{invisible: !active()}">\n' +
            '                <div class="progress progress-striped active flat" file-upload-progress="progress()">\n' +
            '                    <div class="progress-bar progress-bar-success" ng-style="{width: num + \'%\'}"></div>\n' +
            '                </div>\n' +
            '                <div class="progress-extended">&nbsp;</div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="row files">\n' +
            '            <div class="col-lg-4 col-md-2 col-xs-12" ng-repeat="file in queue" ng-class="{\'processing\': file.$processing()}">\n' +
            '\n' +
            '                <div class="thumbnail">\n' +
            '                    <div ng-switch on="!!file.thumbnailUrl">\n' +
            '                        <div class="preview flat" ng-switch-when="true">\n' +
            '                            <a ng-href="{{file.url}}" title="{{file.name}}" download="{{file.name}}"><img ng-src="{{file.thumbnailUrl}}" alt=""></a>\n' +
            '                        </div>\n' +
            '                        <div class="preview flat" ng-switch-default file-upload-preview="file"></div>\n' +
            '                    </div>\n' +
            '                    <div class="caption">\n' +
            '                        <h3>{{file.name}} <small>({{file.size | formatFileSize}})</small></h3>\n' +
            '                        <div class="progress progress-striped active fade flat" data-ng-class="{pending: \'in\'}[file.$state()]" data-file-upload-progress="file.$progress()">\n' +
            '                            <div class="progress-bar progress-bar-success" data-ng-style="{width: num + \'%\'}"></div>\n' +
            '                        </div>\n' +
            '                        <p>\n' +
            '                            <button type="button" class="btn btn-primary start" ng-click="file.$submit()" ng-hide="!file.$submit || options.autoUpload" ng-disabled="file.$state() == \'pending\' || file.$state() == \'rejected\'">\n' +
            '              <i class="glyphicon glyphicon-upload"></i>\n' +
            '              <span>Start</span>\n' +
            '            </button>\n' +
            '                            <button type="button" class="btn btn-warning cancel" ng-click="file.$cancel()" ng-hide="!file.$cancel">\n' +
            '              <i class="glyphicon glyphicon-ban-circle"></i>\n' +
            '              <span>Cancel</span>\n' +
            '            </button>\n' +
            '                        </p>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </form>\n' +
            '</div>');
    }]);
})();