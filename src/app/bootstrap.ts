import { bootstrap, provide, Provider } from 'angular2/angular2'

import {App} from './app';
import {Providers} from './providers';

import * as Test from './myInjectable';

var universalInjectables = [];
var APP_INJECTABLES = [];

APP_INJECTABLES = APP_INJECTABLES.concat(Providers.for(Test.IMyInjectable).in(Test));

bootstrap(App, [universalInjectables, APP_INJECTABLES]);
