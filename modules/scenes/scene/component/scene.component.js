"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var scene_service_1 = require('../service/scene.service');
var scene_animation_1 = require('../animations/scene.animation');
var SceneComponent = (function (_super) {
    __extends(SceneComponent, _super);
    function SceneComponent() {
        _super.apply(this, arguments);
    }
    SceneComponent.prototype.init = function (name) {
        this.service = new scene_service_1.SceneService(name);
        this.animation = new scene_animation_1.SceneAnimation;
        this.scene = this.service.scene;
    };
    SceneComponent.prototype.preload = function () {
        this.game.load.image('SceneBackground', 'modules/scenes/scene/assets/' + this.scene.name + 'SceneBackground.jpg');
    };
    SceneComponent.prototype.create = function () {
        this.setBackground();
        this.setMainTitle();
    };
    //Set the background of the scene
    SceneComponent.prototype.setBackground = function () {
        var sceneBackground = this.game.add.image(this.game.width * 0.5, this.game.height * 0.5, 'SceneBackground');
        sceneBackground.anchor.set(0.5, 0.5);
    };
    //Set the title of the scene
    SceneComponent.prototype.setMainTitle = function () {
        var mainTitle = this.game.add.text(this.game.world.centerX, 250, this.scene.name, { fill: 'white', fontSize: 60 });
        mainTitle.anchor.set(0.5, 0.5);
        mainTitle.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);
        mainTitle.alpha = 0.1;
        this.animation.mainTitle(this.game, mainTitle);
    };
    SceneComponent.prototype.changeState = function (name) {
        this.game.state.start('Scene', true, false, name);
    };
    SceneComponent = __decorate([
        core_1.Component({
            template: '',
            providers: [scene_service_1.SceneService]
        }), 
        __metadata('design:paramtypes', [])
    ], SceneComponent);
    return SceneComponent;
}(Phaser.State));
exports.SceneComponent = SceneComponent;
//# sourceMappingURL=scene.component.js.map