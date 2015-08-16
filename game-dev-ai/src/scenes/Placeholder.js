/**
 * @inherits Phaser.Game
 * @constructor
 */
function Placeholder() {
    this.style = {
        font: '2em "Press Start 2P"',
        fill: '#fff',
        align: 'center'
    };

    this.text = {};
    this.textSize = 1;
    this.dir = 1;
}

Placeholder.prototype.create = function () {
    this.text = this.add.text(this.world.centerX, this.world.centerY, 'PLACEHOLDER SCENE', this.style);
    this.text.anchor.set(0.5);
};

Placeholder.prototype.update = function () {
    this.text.scale.set(this.textSize, this.textSize);
    this.textSize += 0.03 * this.dir;

    if (this.textSize > 1.75 || this.textSize < 0.5) {
        this.dir *= -1;
    }
};

module.exports = Placeholder;
