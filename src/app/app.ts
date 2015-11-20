import { Component, NgFor} from 'angular2/angular2';

@Component({
	selector: 'my-app',
	templateUrl: './app.tpl.html',
	styleUrls: ['./app.css', '/css/main.css'],
	directives: [NgFor]
})
export class App{
	items: any = ['Hello', 'World'];
	constructor(){

	}
}