import { provide, Provider } from 'angular2/angular2';

export class Providers{
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