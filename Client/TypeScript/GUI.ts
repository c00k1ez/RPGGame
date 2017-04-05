
 class GUI {

    gameLink : {game : Phaser.Game};

    constructor(gameLink : {game : Phaser.Game}) {
        this.gameLink = gameLink;
    }


    public preload() {
        this.gameLink.game.load.spritesheet("Button", "./Assets/GUI/Button.png", 416, 416);
    }

    public getGUI() {
        this.gameLink.game.add.button(this.gameLink.game.world.centerX - 208, 200, "Button", this.actionOnClick, this, 2, 1, 0);
    }

    private actionOnClick() {

    }

}
