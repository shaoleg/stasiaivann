"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
require("angular");
require("angular-cookies");
require("angular-utf8-base64");
var ngJwtAuthServiceProvider_1 = require("./provider/ngJwtAuthServiceProvider");
var ngJwtAuthInterceptor_1 = require("./interceptor/ngJwtAuthInterceptor");
__export(require("./provider/ngJwtAuthServiceProvider"));
__export(require("./service/ngJwtAuthService"));
__export(require("./interceptor/ngJwtAuthInterceptor"));
angular.module('ngJwtAuth', ['utf8-base64', 'ngCookies'])
    .provider('ngJwtAuthService', ngJwtAuthServiceProvider_1.NgJwtAuthServiceProvider)
    .service('ngJwtAuthInterceptor', ngJwtAuthInterceptor_1.NgJwtAuthInterceptor)
    .config(['$httpProvider', '$injector', function ($httpProvider) {
        $httpProvider.interceptors.push('ngJwtAuthInterceptor');
    }]);

//# sourceMappingURL=ngJwtAuth.js.map
