const Phaser = require('phaser');
const animMM = require('../anim/mm');

function MegaMan(game, x, y, texture, opt){
    this.sprite = game.add.sprite(x, y, texture);
    this.states = animMM.states;
    this.anim = animMM.anim;
    this.facingRight = true;
    this.jumping = false;

    this.init(opt);
}

MegaMan.prototype.init = function(opt){
    const sprite = this.sprite;
    const states = this.states;
    const anim = this.anim;
    opt = opt || {};

    sprite.animations.add(states.standingRight, anim.standingRight.frames, anim.standingRight.rate, anim.standingRight.loop, false);
    sprite.animations.add(states.runningRight, anim.runningRight.frames, anim.runningRight.rate, anim.runningRight.loop, false);
    sprite.animations.add(states.jumpingRight, anim.jumpingRight.frames, anim.jumpingRight.rate, anim.jumpingRight.loop, false);

    sprite.animations.add(states.standingLeft, anim.standingLeft.frames, anim.standingLeft.rate, anim.standingLeft.loop, false);
    sprite.animations.add(states.runningLeft, anim.runningLeft.frames, anim.runningLeft.rate, anim.runningLeft.loop, false);
    sprite.animations.add(states.jumpingLeft, anim.jumpingLeft.frames, anim.jumpingLeft.rate, anim.jumpingLeft.loop, false);

    if (opt.scale) {
        sprite.scale.x = opt.scale.x || 1.0;
        sprite.scale.y = opt.scale.y || 1.0;
    }

    sprite.anchor.set(0.5, 0.5);

    sprite.animations.play(states.standingRight);
};

MegaMan.prototype.update = function(game, keys){
    const sprite = this.sprite;
    const states = this.states;
    keys = keys || {
        jump: {},
        right: {},
        left: {}
    };

    if (keys.jump.isDown || this.jumping) {
        sprite.animations.play(this.facingRight ? states.jumpingRight : states.jumpingLeft);
    } else if (keys.right.isDown && !this.jumping) {
        sprite.animations.play(states.runningRight);
    } else if (keys.left.isDown && !this.jumping) {
        sprite.animations.play(states.runningLeft);
    } else {
        sprite.animations.play(this.facingRight ? states.standingRight : states.standingLeft);
    }

    if (keys.right.isDown && !this.facingRight) {
        this.facingRight = true;
    }

    if (keys.left.isDown && this.facingRight) {
        this.facingRight = false;
    }
};

module.exports = MegaMan;
