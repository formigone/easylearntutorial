const Phaser = require('phaser');
const MegaMan = require('../sprites/mm');

const tileKeys = {
    spike: 0,
    bgHorHighlight: 1,
    bgSolid: 2,
    bgHorLowlight: 3,
    bgRand_1: 4,
    bgRand_2: 6,
    bgRand_3: 7,
    solid_1: 5,
    solid_2: 8,
    solid_3: 9,
    solid_4: 10,
    bgSolidTop: 12
};

const mapTmpl = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1],
    [1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1],
    [1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1],
    [1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1],

    [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1],

    [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1],

    [1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1],
    [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1],

    [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
];

const mapTmplSize = {
    width: 25,
    height: 25
};

const mapIndexToTile = {
    1: [
        tileKeys.solid_1,
        tileKeys.solid_2,
        tileKeys.solid_3,
        tileKeys.solid_4
    ],
    0: [
        tileKeys.bgSolid,
        tileKeys.bgRand_1,
        tileKeys.bgRand_1,
        tileKeys.bgRand_2,
        tileKeys.bgRand_2,
        tileKeys.bgRand_2,
        tileKeys.bgRand_3,
        tileKeys.bgRand_3
    ],
    9: [
        tileKeys.spike
    ]
};

/**
 * @inherits Phaser.Game
 * @constructor
 */
function Map() {
    this.done = false;
    this.map = null;
    this.keys = {};
    this.worldSize = {
        width: 25,
        height: 100
    };
    this.stage = [];
    this.player = null;
    this.init();
}

Map.prototype.init = function(){
    this.stage = [];

    for (let y = 0; y < this.worldSize.height; y++) {
        let index = y > 15 ? (y > 20 ? parseInt(Math.random() * mapTmplSize.height - 2, 10) + 1 : 1) : 0;
        if (y === this.worldSize.height - 1) {
            index = mapTmplSize.height - 1;
        }

        let stageRow = mapTmpl[index]
            .map(cell => {
                return mapIndexToTile[cell][parseInt(Math.random() * mapIndexToTile[cell].length, 10)];
            });

        this.stage.push(stageRow);
    }
};

Map.prototype.preload = function(){
    this.load.spritesheet('mm3-wily-02', 'asset/img/mm3-wily-02.png', 32, 32);
    this.load.atlasJSONHash('mm', 'asset/img/megaman.gif', 'asset/sprites/megaman.json');
};

Map.prototype.create = function () {
    this.add.audio('mm3Wily02').play();

    let map = this.add.tilemap();
    map.addTilesetImage('mm3-wily-02');
    let layerBg = map.create('background', this.worldSize.width, this.worldSize.height, 32, 32);
    let layerFg = map.createBlankLayer('foreground', this.worldSize.width, this.worldSize.height, 32, 32);
    layerFg.resizeWorld();
    layerBg.scrollFactorY = 0.5;
    layerFg.scrollFactorY = 1;

    this.stage.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell !== tileKeys.spike && cell !== tileKeys.solid_1 && cell !== tileKeys.solid_2 && cell !== tileKeys.solid_3 && cell !== tileKeys.solid_4) {
                map.putTile(cell, x, y, layerBg);
            } else {
                map.putTile(cell, x, y, layerFg);
            }
        });
    });

    this.keys['jump'] = this.input.keyboard.addKey(Phaser.Keyboard.A);
    this.keys['up'] = this.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.keys['down'] = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.keys['left'] = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.keys['right'] = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

    this.player = new MegaMan(this, this.world.centerX, -550, 'mm', {scale: {x: 2, y: 2}});
    this.player.jumping = true;
    this.camera.follow(this.player.sprite);
};

Map.prototype.update = function() {
    if (this.done) {
       // this.state.start('Placeholder');
    }

    //this.camera.y += 5;
    this.player.update(this, this.keys);

    if (this.keys['left'].isDown) {
        this.player.sprite.x -= 3;
    } else if (this.keys['right'].isDown) {
        this.player.sprite.x += 3;
    }

    this.player.sprite.y += 5;
};

module.exports = Map;
