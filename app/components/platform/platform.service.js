(function(angular, Office) {
    'use strict';

    angular.module('word-to-markdown.platform', [])
        .service('platform', PlatformService);

    /**
     * @class PlatformService
     * @constructor
     */
    function PlatformService() {
    }

    /**
     * @returns {boolean}
     */
    PlatformService.prototype.isRunningInBrowser = function() {
        return !this.isRunningInOffice();
    };

    /**
     * @returns {boolean}
     */
    PlatformService.prototype.isRunningInOffice = function() {
        var hasContext = typeof Office.context !== 'undefined';

        return hasContext && typeof Office.context.document !== 'undefined';
    };
})(window.angular, window.Office);
