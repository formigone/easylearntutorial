const Phaser = require('phaser');
const animMM = require('../anim/mm');

/** @type {Phaser.Game} */
let player = null;
const states = animMM.states;
const anim = animMM.anim;
const facingRight = true;

function init(game, x, y, texture){
    let player = game.add.sprite(x, y, texture);

    player.animations.add(states.standingRight, anim.standingRight.frames, anim.standingRight.rate, anim.standingRight.loop, false);
    player.animations.add(states.runningRight, anim.runningRight.frames, anim.runningRight.rate, anim.runningRight.loop, false);
    player.animations.add(states.jumpingRight, anim.jumpingRight.frames, anim.jumpingRight.rate, anim.jumpingRight.loop, false);

    player.scale.x = 5.0;
    player.scale.y = 5.0;

    player.anchor.set(0.5, 0.5);

    player.animations.play(states.standingRight);

    return player;
}

function update(game){
    if (game.keys.up.isDown) {
        if (facingRight) {
            player.animations.play(states.jumpingRight);
        } else {
            player.animations.play(this.states.jumpingLeft);
        }
    } else if (game.keys.up.isUp && game.keys.right.isUp) {
        player.animations.play(states.standingRight);
    } else if (game.keys.right.isDown) {
        player.animations.play(states.runningRight);
    }

}

module.exports = {
    instance: (game, x, y, texture) => {
        if (player === null) {
            player = init(game, x, y, texture);
        }

        return player;
    },
    update: game => update(game)
};
