import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';


@Component({
  selector: 'home',
  moduleId : module.id,
  templateUrl: '../home.html',
  directives: [ROUTER_DIRECTIVES]
})
  
export class HomeComponent extends Phaser.State{
  
  constructor(private router : Router){
    super();
  }
  
  startGame(){
    this.router.navigate(['/loader']);
  }
}
