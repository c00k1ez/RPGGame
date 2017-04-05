var MainGame = (function () {
    function MainGame() {
        this.game = new Phaser.Game(1280, 600, Phaser.AUTO, "", { preload: this.preload, create: this.create, update: this.update });
    }
    MainGame.prototype.preload = function () {
        this.game.load.spritesheet("Button", "./Assets/GUI/Button.png", 416, 416);
    };
    MainGame.prototype.create = function () {
        var button = this.game.add.button(this.game.world.centerX - 208, 300, "Button", this.actionOnClick, this, 2, 1, 0);
    };
    MainGame.prototype.update = function () {
    };
    MainGame.prototype.actionOnClick = function () {
    };
    return MainGame;
}());
window.onload = function () {
    var game = new MainGame();
};
