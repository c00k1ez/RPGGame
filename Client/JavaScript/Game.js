var MainGame = (function () {
    function MainGame() {
        this.HEIGHT = 600;
        this.WIDTH = 1280;
        this.game = new Phaser.Game(this.WIDTH, this.HEIGHT, Phaser.AUTO, "", { preload: this.preload, create: this.create, update: this.update });
    }
    MainGame.prototype.preload = function () {
        this.game.load.spritesheet("Button", "./Assets/GUI/Button.png", 400, 400);
        this.game.load.image("Background", "./Assets/GUI/Background/back_stage.gif");
        this.game.load.image("Backstage", "./Assets/GUI/Backstage/grass.png");
    };
    MainGame.prototype.create = function () {
        this.background = this.game.add.tileSprite(0, 0, 1280, 600, "Background");
        this.button = this.game.add.button(this.game.world.centerX - 208, 300, "Button", onClickEvent, this, 2, 1, 0);
    };
    MainGame.prototype.update = function () {
    };
    return MainGame;
}());
function onClickEvent() {
    this.game.add.image(0, 0, "Backstage");
    this.game.add.image(this.Backstage.WIDTH, 0, "Backstage");
    this.button.visible = false;
    this.background.visible = false;
}
window.onload = function () {
    var game = new MainGame();
};
