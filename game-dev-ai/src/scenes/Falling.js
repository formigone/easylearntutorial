const Phaser = require('phaser');
const animMM = require('../anim/mm');

/**
 * @inherits Phaser.Game
 * @constructor
 */
function Falling() {
    this.keys = {};
    this.done = false;

    this.player = null;
    this.facingRight = true;
    this.heroState = animMM.states;
}

Falling.prototype.preload = function () {
    //this.load.audio('bgMusic', ['asset/audio/mm3-intro-yt.HeVva6ddNAc.danielsymphonies.mp3']);
    this.load.atlasJSONHash('mm', 'asset/img/megaman.gif', '/asset/sprites/megaman.json');
};

Falling.prototype.create = function () {
    //this.add.audio('bgMusic').play();

    this.keys['up'] = this.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.keys['down'] = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.keys['left'] = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.keys['right'] = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

    const heroState = this.heroState;
    let player = this.add.sprite(250, 250, 'mm');

    player.animations.add(heroState.standingRight, animMM.anim.standingRight.frames, animMM.anim.standingRight.rate, animMM.anim.standingRight.loop, false);
    player.animations.add(heroState.runningRight, animMM.anim.runningRight.frames, animMM.anim.runningRight.rate, animMM.anim.runningRight.loop, false);
    player.animations.add(heroState.jumpingRight, animMM.anim.jumpingRight.frames, animMM.anim.jumpingRight.rate, animMM.anim.jumpingRight.loop, false);

    player.scale.x = 5.0;
    player.scale.y = 5.0;

    player.anchor.set(0.5, 0.5);
    player.heroState = heroState;

    this.player = player;
    player.animations.play(this.heroState.standingRight);
};

Falling.prototype.update = function () {
    if (this.done) {
        // this.state.start('Placeholder');
    }

    const player = this.player;

    if (this.keys.up.isDown) {
        if (this.facingRight) {
            player.animations.play(this.heroState.jumpingRight);
        } else {
            //player.animations.play(this.heroState.jumpingLeft);
        }
    } else if (this.keys.up.isUp && this.keys.right.isUp) {
        player.animations.play(this.heroState.standingRight);
    } else if (this.keys.right.isDown) {
        player.animations.play(this.heroState.runningRight);
    }
};

module.exports = Falling;
