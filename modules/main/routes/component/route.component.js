"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var home_component_1 = require('../../../home/home/component/home.component');
var loader_component_1 = require('../../loader/component/loader.component');
var scene_component_1 = require('../../../scenes/scene/component/scene.component');
var RouteComponent = (function () {
    function RouteComponent(router) {
        this.router = router;
        this.game = new Phaser.Game('100%', '100%', Phaser.AUTO, 'starter');
        this.initStates();
        this.setScale;
    }
    RouteComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/loader']);
        this.game.state.start('Loader');
    };
    //States for Phaser
    RouteComponent.prototype.initStates = function () {
        this.game.state.add('Loader', loader_component_1.LoaderComponent);
        this.game.state.add('Scene', scene_component_1.SceneComponent);
    };
    RouteComponent.prototype.setScale = function () {
        this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
    };
    RouteComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<router-outlet></router-outlet>',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '/home', component: home_component_1.HomeComponent },
            { path: '/loader', component: loader_component_1.LoaderComponent },
            { path: '/scene', component: loader_component_1.LoaderComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], RouteComponent);
    return RouteComponent;
}());
exports.RouteComponent = RouteComponent;
//# sourceMappingURL=route.component.js.map