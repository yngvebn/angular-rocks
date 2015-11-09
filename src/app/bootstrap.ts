import { bootstrap, bind } from 'angular2/angular2';
import {Router, RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import {App} from './app';

var universalInjectables = [
	ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    RouteConfig, 
    bind(LocationStrategy).toClass(HashLocationStrategy)
];

bootstrap(App, [universalInjectables]);