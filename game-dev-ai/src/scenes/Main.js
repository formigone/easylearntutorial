const Phaser = require('phaser');

/**
 * @inherits Phaser.Game
 * @constructor
 */
function Main() {
    this.text = [];
    this.delayBeforeFadeout_ms = 1000;
    this.fullyLoaded = false;
    this.startFadingOut = false;
    this.fadeRate = 0.008;
    this.done = false;
}

Main.prototype.preload = function(){
    this.load.audio('bgMusic', ['/asset/audio/mm3-intro-yt.HeVva6ddNAc.danielsymphonies.mp3']);
    this.load.atlasJSONHash('atlas', '/asset/img/main-screen-0.0.3.png', '/asset/sprites/main-screen.json');
};

Main.prototype.create = function () {
    this.add.audio('bgMusic').play();
    
    this.text.push(this.add.sprite(this.world.centerX, 125, 'atlas', 'logo'));
    this.text.push(this.add.sprite(185, 285, 'atlas', 'arrow'));
    this.text.push(this.add.sprite(210, 284, 'atlas', 'startLearning'));
    this.text.push(this.add.sprite(210, 320, 'atlas', 'aboutElt'));
    this.text.push(this.add.sprite(556, 300, 'atlas', 'mascot'));

    this.text.forEach(txt => {
        txt.anchor.set(0.5);
        txt.alpha = 0;
    });

    this.text[2].anchor.set(0, 0.5);
    this.text[3].anchor.set(0, 0.5);
};

Main.prototype.update = function() {
    if (this.done) {
       // this.state.start('Placeholder');
    }

    this.text.forEach(txt => {
        if (!this.startFadingOut && txt.alpha < 1.0) {
            txt.alpha += this.fadeRate;
        }
    });
};

module.exports = Main;
