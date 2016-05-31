export class SceneAnimation{
    mainTitle(game:Phaser.Game, title:Phaser.Text){
        game.add.tween(title).to({alpha : 1}, 1000, 'Linear', true);
        setTimeout(()=>{
            game.add.tween(title).to({alpha : 0}, 1000, 'Linear', true);
        },3000);
    }
}