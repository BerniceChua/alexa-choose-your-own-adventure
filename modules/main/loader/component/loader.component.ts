/// <reference path='../../../../phaser/phaser.d.ts' />

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { RouteComponent } from '../../routes/component/route.component';

@Component({
  template : '',
  directives : [ROUTER_DIRECTIVES]
})

export class LoaderComponent extends Phaser.State{
  
  public game:Phaser.Game;
  
  constructor(private router : Router){
    super();
  }
  
  preload(){
    this.game.load.image('Logo', 'modules/main/loader/assets/boot.jpg');
  }
  
  create(){
    var bootLogo:Phaser.Image;
    //Logo is half the size of the screen
    bootLogo = this.game.add.image(this.game.width*0.5, this.game.height*0.5, 'Logo');
    //Logo is in the middle of the screen
    bootLogo.anchor.set(0.5,0.5);
    
    console.log(this.game);
    setTimeout(()=>{
      this.game.state.start('Scene', true, false, 'Welcome');
    }, 2000);
    
  }
 
}

