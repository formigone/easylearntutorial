const Phaser = require('phaser');
const MegaMan = require('../sprites/mm');

/**
 * @inherits Phaser.Game
 * @constructor
 */
function Falling() {
    this.keys = {};
    this.done = false;

    this.player = null;
}

Falling.prototype.preload = function () {
    //this.load.audio('bgMusic', ['asset/audio/mm3-intro-yt.HeVva6ddNAc.danielsymphonies.mp3']);
    this.load.atlasJSONHash('mm', 'asset/img/megaman.gif', '/asset/sprites/megaman.json');
};

Falling.prototype.create = function () {
    //this.add.audio('bgMusic').play();
    //this.player = mm.instance(this, 300, 250, 'mm');
    this.player = new MegaMan(this, 300, 250, 'mm');

    this.keys['up'] = this.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.keys['down'] = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.keys['left'] = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.keys['right'] = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
};

Falling.prototype.update = function () {
    if (this.done) {
        // this.state.start('Placeholder');
    }

    //mm.update(this);
    this.player.update(this);
};

module.exports = Falling;
