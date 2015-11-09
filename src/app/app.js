var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var all_1 = require('./components/all');
var App = (function () {
    function App() {
        this.items = ['Hello', 'World'];
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            templateUrl: 'app/app.tpl.html',
            styleUrls: ['app/app.css'],
            directives: [angular2_1.NgFor, router_1.RouterOutlet, router_1.RouterLink]
        }),
        router_1.RouteConfig([
            { path: '/', as: 'Home', component: all_1.Home },
            { path: '/Page', as: 'Page', component: all_1.Page }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
