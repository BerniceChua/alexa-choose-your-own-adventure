import {Component} from '@angular/core';
import {SceneService} from '../service/scene.service';
import {Scene} from '../interface/scene.interface';
import {SceneAnimation} from '../animations/scene.animation';

@Component({
    template : '',
    providers : [SceneService]
})

export class SceneComponent extends Phaser.State {
    
    public scene:Scene;
    private service:SceneService;
    private animation:SceneAnimation;
    private questions:string[];
    
    init(name:String){
        this.service = new SceneService(name);
        this.animation = new SceneAnimation;
        this.scene = this.service.scene;
    }
    
    preload(){
        this.game.load.image('SceneBackground', 'modules/scenes/scene/assets/'+this.scene.name+'SceneBackground.jpg');
    }
    
    create(){
        this.setBackground();
        this.setMainTitle();
    }
    
    //Set the background of the scene
    setBackground(){
        let sceneBackground:Phaser.Image = this.game.add.image(this.game.width*0.5, this.game.height*0.5, 'SceneBackground');
        sceneBackground.anchor.set(0.5,0.5);
    }
    
    //Set the title of the scene
    setMainTitle(){
        let mainTitle:Phaser.Text = this.game.add.text(this.game.world.centerX, 250, this.scene.name, {fill:'white', fontSize:60});
        mainTitle.anchor.set(0.5,0.5);  
        
        mainTitle.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);
        mainTitle.alpha = 0.1;
        this.animation.mainTitle(this.game, mainTitle);
 
    }    
    
    
    changeState(name:String){
        this.game.state.start('Scene', true, false, name);
    }
    
    

    
    
}