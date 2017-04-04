


class MainGame {

    game : Phaser.Game;

    constructor() {
        this.game = new Phaser.Game (1280, 600, Phaser.AUTO, "", { preload: this.preload, create: this.create, update: this.update });
    }

    preload() {
        this.game.load.spritesheet("Button", "./Assets/GUI/Button.png", 416, 416);
    }

    create() {
        var button = this.game.add.button(this.game.world.centerX - 208, 200, "Button", this.actionOnClick, this, 2, 1, 0);
        
    }

    update() {

    }

    actionOnClick() {

    }

}

window.onload = () => {

    var game = new MainGame();

};