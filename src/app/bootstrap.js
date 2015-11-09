var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var app_1 = require('./app');
var universalInjectables = [
    router_1.ROUTER_DIRECTIVES,
    router_1.ROUTER_PROVIDERS,
    router_1.RouteConfig,
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
];
angular2_1.bootstrap(app_1.App, [universalInjectables]);
