
class MainGame {

    game : Phaser.Game;

    constructor() {
        this.game = new Phaser.Game (800, 600, Phaser.AUTO, "", { preload: this.preload, create: this.create, update: this.update });
    }

    preload() {

    }

    create() {

    }

    update() {

    }

}

window.onload = () => {

    var foo = new GUI();
    foo.print();
    var game = new MainGame();

};