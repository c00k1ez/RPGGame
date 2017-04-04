var GUI = (function () {
    function GUI(foo) {
        foo.game.add.text(10, 10, "123", { font: "50px arial" });
    }
    GUI.mth = function (foo) {
        foo.game.add.text(10, 10, "123", { font: "50px arial" });
    };
    return GUI;
}());
