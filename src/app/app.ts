import { Component, NgFor} from 'angular2/angular2';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.tpl.html',
	styleUrls: ['app/app.css'],
	directives: [NgFor]
})
export class App{
	items: any = ['Hello', 'World'];
	constructor(){

	}
}