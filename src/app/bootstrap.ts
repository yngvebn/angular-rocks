import { bootstrap, provide, Provider } from 'angular2/angular2'

import {App} from './app';

import * as Test from './myInjectable';

var universalInjectables = [];
var APP_INJECTABLES = [];


class Providers{
	t:any;
	constructor(t:any){
		this.t = t;
	}
	
	in(where:any): Provider[]{
		var arr:Provider[] = [];
		for(var key in where){
			if(where[key].constructor === this.t.constructor && where[key] !== this.t){
				arr.push(provide(this.t, { useClass: where[key], multi: true }));
			}
		}
		return arr;
	}
	
	static for(type: any): Providers{
		return new Providers(type);
	} 
}


APP_INJECTABLES = APP_INJECTABLES.concat(Providers.for(Test.IMyInjectable).in(Test));

bootstrap(App, [universalInjectables, APP_INJECTABLES]);

function install(t:any){
	
}
