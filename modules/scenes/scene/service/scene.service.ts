import {Injectable} from '@angular/core';

import {Scene} from '../interface/scene.interface';
import {SCENES} from '../../mock/mock-scene';

@Injectable()

export class SceneService{
    
    private _scene:Scene
    
    constructor(private name:String){
        this._scene = SCENES.find(function(scene){return scene.name === name;});
    }
    
    //Return the only scene that match the name
    get scene():Scene{
        return this._scene;
    }
    
    set scene(scene:Scene){
        this._scene = scene;
    }
    
}