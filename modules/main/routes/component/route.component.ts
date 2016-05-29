import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { HomeComponent } from '../../../home/home/component/home.component';
import { LoaderComponent } from '../../loader/component/loader.component';
import { SceneComponent } from '../../../scenes/scene/component/scene.component';

@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})

//Routes for Angular
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/loader', component: LoaderComponent},
  {path: '/scene', component: LoaderComponent}
])
  
export class RouteComponent implements OnInit{
  
  private game:Phaser.Game;

  constructor(private router : Router){
    this.game = new Phaser.Game('100%', '100%', Phaser.AUTO, 'starter');
    this.initStates();
    this.setScale;
  }
  
  ngOnInit() {
    this.router.navigate(['/loader']);
    this.game.state.start('Loader');
  }
  
  //States for Phaser
  initStates(){
    this.game.state.add('Loader', LoaderComponent);
    this.game.state.add('Scene', SceneComponent);
  }

  setScale(){
    this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
  }

}
