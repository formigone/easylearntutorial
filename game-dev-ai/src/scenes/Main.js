const Phaser = require('phaser');

/**
 * @inherits Phaser.Game
 * @constructor
 */
function Main() {
    this.sprites = [];
    this.keys = {};
    this.options = {};
    this.optionArrow = {};
    this.selectedOption = 0;

    this.delayBeforeFadeout_ms = 1000;
    this.fullyLoaded = false;
    this.startFadingOut = false;
    this.fadeRate = 0.008;
    this.done = false;
}

Main.prototype.preload = function(){
    this.load.audio('bgMusic', ['asset/audio/mm3-intro-yt.HeVva6ddNAc.danielsymphonies.mp3']);
    this.load.atlasJSONHash('atlas', 'asset/img/main-screen-0.0.3.png', 'asset/sprites/main-screen.json');
};

Main.prototype.create = function () {
    this.add.audio('bgMusic').play();

    this.keys['up'] = this.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.keys['down'] = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);

    this.optionArrow = this.add.sprite(185, 285, 'atlas', 'arrow');
    this.options.startLearning = this.add.sprite(210, 284, 'atlas', 'startLearning');
    this.options.aboutElt = this.add.sprite(210, 320, 'atlas', 'aboutElt');

    this.sprites.push(this.add.sprite(this.world.centerX, 125, 'atlas', 'logo'));
    this.sprites.push(this.add.sprite(556, 300, 'atlas', 'mascot'));
    this.sprites.push(this.optionArrow);
    this.sprites.push(this.options.startLearning);
    this.sprites.push(this.options.aboutElt);

    this.sprites.forEach(sprite => {
        sprite.anchor.set(0.5, 0.5);
        sprite.alpha = 0;
    });

    this.options.startLearning.anchor.set(0, 0.5);
    this.options.aboutElt.anchor.set(0, 0.5);
};

Main.prototype.update = function() {
    if (this.done) {
       // this.state.start('Placeholder');
    }

    if (!this.startFadingOut) {
        this.sprites.forEach(sprite => {
            if (sprite.alpha < 1.0) {
                sprite.alpha += this.fadeRate;
            }
        });
    }

    if (this.keys.up.isDown) {
        this.selectedOption = 0;
    } else if (this.keys.down.isDown) {
        this.selectedOption = 1;
    }

    this.optionArrow.y = (this.selectedOption === 0) ? 285 : 321;
};

module.exports = Main;
