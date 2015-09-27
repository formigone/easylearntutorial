const Phaser = require('phaser');
const MegaMan = require('../sprites/mm');

/**
 * @inherits Phaser.Game
 * @constructor
 */
function Col() {
    this.player = null;
    this.floor = null;
    this.jumpTimer = 0;
    this.keys = {};
}

Col.prototype = {
    preload: function () {
        this.load.atlasJSONHash('mm', 'asset/img/megaman.gif', 'asset/sprites/megaman.json');
        this.load.image('ground', 'asset/img/ground_1x1.png');
    },
    create: function () {
        this.keys['jump'] = this.input.keyboard.addKey(Phaser.Keyboard.A);
        this.keys['up'] = this.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.keys['down'] = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.keys['left'] = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.keys['right'] = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

        this.floor = this.add.sprite(this.world.centerX / 2, this.world.centerY + 75, 'ground');

        this.player = new MegaMan(this, this.world.centerX, 0, 'mm', {scale: {x: 2, y: 2}});
        this.player.jumping = false;

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.gravity.y = 1000;

        this.physics.enable([this.player.sprite, this.floor], Phaser.Physics.ARCADE);

        this.player.sprite.body.collideWorldBounds = true;

        this.floor.body.allowGravity = false;
        this.floor.body.immovable = true;
    },
    update: function () {
        this.player.update(this, this.keys);
        this.physics.arcade.collide(this.player.sprite, this.floor, this.collisionHandler);

        const touchingDown = this.player.sprite.body.onFloor() || this.player.sprite.body.touching.down;

        this.player.sprite.body.velocity.x = 0;

        if (this.keys['left'].isDown) {
            this.player.sprite.body.velocity.x = -150;
        } else if (this.keys['right'].isDown) {
            this.player.sprite.body.velocity.x = 150;
        }

        if (this.keys['jump'].isDown && touchingDown && !this.player.jumping) {
            this.player.sprite.body.velocity.y = -550;
            this.player.jumping = true;
        }

        if (touchingDown && this.keys['jump'].isUp) {
            this.player.jumping = false;
        }

        if (touchingDown) {
            this.player.standing = true;
        } else {
            this.player.standing = false;
        }
    }
};

module.exports = Col;
