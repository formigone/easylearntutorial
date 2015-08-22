const Phaser = require('phaser');

/**
 * @inherits Phaser.Game
 * @constructor
 */
function Main() {
}

Main.prototype.preload = function(){
    this.load.audio('bgMusic', ['/asset/audio/mm3-intro-yt.HeVva6ddNAc.danielsymphonies.mp3']);
    this.load.atlasJSONHash('atlas', '/asset/img/main-screen-0.0.3.png', '/asset/sprites/main-screen.json');
    this.load.image('img', '/asset/img/main-screen-0.0.3.png');
};

Main.prototype.create = function () {
    this.add.audio('bgMusic').play();
    const logo = this.add.sprite(0, 0, 'atlas', 'logo');
    this.add.sprite(100, 100, 'img');
};

module.exports = Main;
