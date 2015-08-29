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
    this.npcs = [];
    this.filters = null;
}

Falling.prototype.preload = function () {
    //this.load.audio('bgMusic', ['asset/audio/mm3-intro-yt.HeVva6ddNAc.danielsymphonies.mp3']);
    this.load.atlasJSONHash('mm', 'asset/img/megaman.gif', '/asset/sprites/megaman.json');
};

Falling.prototype.create = function () {
    //this.add.audio('bgMusic').play();

    this.world.setBounds(0, 0, 1000, 1000);

    for (let i = 0; i < 10; i++) {
        this.npcs.push(new MegaMan(this, this.rnd.between(-200, 1000), this.rnd.between(-500, 500), 'mm', {scale: {x: 1.1, y: 1.1}}));
    }

    for (let i = 0; i < 10; i++) {
        this.npcs.push(new MegaMan(this, this.rnd.between(-200, 1000), this.rnd.between(-500, 500), 'mm', {scale: {x: 1.75, y: 1.75}}));
    }

    this.player = new MegaMan(this, this.world.centerX / 2, this.world.centerY / 2, 'mm', {scale: {x: 2, y: 2}});
    //this.player.sprite.fixedToCamera = true;

    for (let i = 0; i < 10; i++) {
        let npc = new MegaMan(this, this.rnd.between(-200, 1000), this.rnd.between(-500, 500), 'mm', {scale: {x: 2.25, y: 2.25}});
        npc.speed = Math.random() * 5 + 3 | 0;
        this.npcs.push(npc);
    }

    this.keys['jump'] = this.input.keyboard.addKey(Phaser.Keyboard.A);
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
    this.player.update(this, this.keys);
    if (this.keys.right.isDown) {
        this.player.sprite.x += 3.5;
        this.world.camera.x += 3.5;
    } else if (this.keys.left.isDown) {
        this.player.sprite.x -= 3.5;
        this.world.camera.x -= 3.5;
    }

    this.npcs.forEach((npc, index) => {
        //npc.sprite.tint = Number('0x' + Number(555555 + index * index * index).toString(16));
        if (index < 10) {
            npc.sprite.y += 3;
        } else if (index < 20 ) {
            npc.sprite.y += 4.5;
        } else {
            npc.sprite.y += npc.speed;
        }

        if (npc.sprite.y > 1000) {
            npc.sprite.y = -100;
        }

        npc.update(this, {
            jump: {
                isDown: true
            },
            right: {},
            left: {}
        });
    });
};

module.exports = Falling;
