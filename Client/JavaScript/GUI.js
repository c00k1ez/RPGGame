var GUI = (function () {
    function GUI(gameLink) {
        this.gameLink = gameLink;
    }
    GUI.prototype.preload = function () {
        this.gameLink.game.load.spritesheet("Button", "./Assets/GUI/Button.png", 416, 416);
    };
    GUI.prototype.getGUI = function () {
        this.gameLink.game.add.button(this.gameLink.game.world.centerX - 208, 200, "Button", this.actionOnClick, this, 2, 1, 0);
    };
    GUI.prototype.actionOnClick = function () {
    };
    return GUI;
}());
