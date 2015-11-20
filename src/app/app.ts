import { Component, NgFor} from 'angular2/angular2';
import {IMyInjectable} from './myInjectable';

	@Component({
	selector: 'my-app',
	templateUrl: './app.tpl.html',
	styleUrls: ['./app.css', '/css/main.css'],
	directives: [NgFor]
})
export class App{
	items: any = [];
	text: string;
	constructor(textServices: IMyInjectable){
		this.populateText(textServices);
	}
	
	populateText(services: any){
		services.forEach(element => {
			this.items.push(element.getText());
		});
	}
}