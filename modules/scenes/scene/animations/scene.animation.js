"use strict";
var SceneAnimation = (function () {
    function SceneAnimation() {
    }
    SceneAnimation.prototype.mainTitle = function (game, title) {
        game.add.tween(title).to({ alpha: 1 }, 1000, 'Linear', true);
        setTimeout(function () {
            game.add.tween(title).to({ alpha: 0 }, 1000, 'Linear', true);
        }, 3000);
    };
    return SceneAnimation;
}());
exports.SceneAnimation = SceneAnimation;
//# sourceMappingURL=scene.animation.js.map