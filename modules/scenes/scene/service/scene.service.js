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
var mock_scene_1 = require('../../mock/mock-scene');
var SceneService = (function () {
    function SceneService(name) {
        this.name = name;
        this._scene = mock_scene_1.SCENES.find(function (scene) { return scene.name === name; });
    }
    Object.defineProperty(SceneService.prototype, "scene", {
        //Return the only scene that match the name
        get: function () {
            return this._scene;
        },
        set: function (scene) {
            this._scene = scene;
        },
        enumerable: true,
        configurable: true
    });
    SceneService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [String])
    ], SceneService);
    return SceneService;
}());
exports.SceneService = SceneService;
//# sourceMappingURL=scene.service.js.map