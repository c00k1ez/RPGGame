


class MainGame {

    private game : Phaser.Game;

    private background : Phaser.TileSprite;

    private button : Phaser.Button;

    private HEIGHT = 600;
    private WIDTH = 1280;

    constructor() {
        this.game = new Phaser.Game (this.WIDTH, this.HEIGHT, Phaser.AUTO, "", { preload: this.preload, create: this.create, update: this.update });
    }

    preload() {
        this.game.load.spritesheet("Button", "./Assets/GUI/Button.png", 400, 400);
        this.game.load.image("Background", "./Assets/GUI/Background/back_stage.gif");
        this.game.load.image("Backstage", "./Assets/GUI/Backstage/grass.png");
    }

    create() {
        this.background = this.game.add.tileSprite(0, 0, 1280, 600, "Background");
        this.button = this.game.add.button(this.game.world.centerX - 208, 300, "Button", onClickEvent, this, 2, 1, 0 );
    }

   

    update() {

    }
}

function onClickEvent() {
        this.game.add.image(0, 0, "Backstage");
        this.game.add.image(this.Backstage.WIDTH, 0, "Backstage");
        this.button.visible = false;
        this.background.visible = false;
    }

window.onload = () => {

    var game = new MainGame();

};