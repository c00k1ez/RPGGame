var MainGame = (function () {
    function MainGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: this.preload, create: this.create, update: this.update });
    }
    MainGame.prototype.preload = function () {
    };
    MainGame.prototype.create = function () {
    };
    MainGame.prototype.update = function () {
    };
    return MainGame;
}());
window.onload = function () {
    var foo = new GUI();
    foo.prin();
    var game = new MainGame();
};
