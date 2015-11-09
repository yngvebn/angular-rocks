import { Component, View, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink } from 'angular2/router';
import { Home, Page } from './components/all';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.tpl.html',
	styleUrls: ['app/app.css'],
	directives: [NgFor, RouterOutlet, RouterLink]
})
@RouteConfig([
    { path: '/', as: 'Home', component: Home },
    { path: '/Page', as: 'Page', component: Page }
])
export class App{
	items: any = ['Hello', 'World'];
	constructor(){

	}
}