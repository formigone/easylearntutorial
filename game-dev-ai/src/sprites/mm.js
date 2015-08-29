const Phaser = require('phaser');
const animMM = require('../anim/mm');

/** @type {Phaser.Game} */
let player = null;
const states = animMM.states;
const anim = animMM.anim;
let facingRight = true;

function init(game, x, y, texture){
    let player = game.add.sprite(x, y, texture);

    player.animations.add(states.standingRight, anim.standingRight.frames, anim.standingRight.rate, anim.standingRight.loop, false);
    player.animations.add(states.runningRight, anim.runningRight.frames, anim.runningRight.rate, anim.runningRight.loop, false);
    player.animations.add(states.jumpingRight, anim.jumpingRight.frames, anim.jumpingRight.rate, anim.jumpingRight.loop, false);

    player.animations.add(states.standingLeft, anim.standingLeft.frames, anim.standingLeft.rate, anim.standingLeft.loop, false);
    player.animations.add(states.runningLeft, anim.runningLeft.frames, anim.runningLeft.rate, anim.runningLeft.loop, false);
    player.animations.add(states.jumpingLeft, anim.jumpingLeft.frames, anim.jumpingLeft.rate, anim.jumpingLeft.loop, false);

    player.scale.x = 5.0;
    player.scale.y = 5.0;

    player.anchor.set(0.5, 0.5);

    player.animations.play(states.standingRight);

    return player;
}

function update(game){
    if (game.keys.up.isDown) {
        player.animations.play(facingRight ? states.jumpingRight : states.jumpingLeft);
    } else if (game.keys.right.isDown) {
        player.animations.play(states.runningRight);
    } else if (game.keys.left.isDown) {
        player.animations.play(states.runningLeft);
    } else {
        player.animations.play(facingRight ? states.standingRight : states.standingLeft);
    }

    if (game.keys.right.isDown && !facingRight) {
        facingRight = true;
    }

    if (game.keys.left.isDown && facingRight) {
        facingRight = false;
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
