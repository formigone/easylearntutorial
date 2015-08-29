const Phaser = require('phaser');

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

    [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const mapTmplSize = {
    width: 25,
    height: 15
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
    this.worldSize = {
        width: 25,
        height: 100
    };
    this.stage = [];
    this.init();
}

Map.prototype.init = function(){
    this.stage = [];

    for (let y = 0; y < this.worldSize.height; y++) {
        let index = y > 0 ? parseInt(Math.random() * mapTmplSize.height - 1, 10) + 1 : 0;
        let stageRow = mapTmpl[index]
            .map(cell => {
                return mapIndexToTile[cell][parseInt(Math.random() * mapIndexToTile[cell].length, 10)];
            });

        this.stage.push(stageRow);
    }
};

Map.prototype.preload = function(){
    this.load.spritesheet('mm3-wily-02', 'asset/img/mm3-wily-02.png', 32, 32);
};

Map.prototype.create = function () {
    this.stage.backgroundColor = '#fff';

    let map = this.add.tilemap();
    map.addTilesetImage('mm3-wily-02');
    let layer = map.create('test', this.worldSize.width, this.worldSize.height, 32, 32);
    layer.resizeWorld();

    this.stage.forEach((row, y) => {
        row.forEach((cell, x) => {
            map.putTile(cell, x, y, layer);
        });
    })
};

Map.prototype.update = function() {
    if (this.done) {
       // this.state.start('Placeholder');
    }

    this.camera.y += 5;
};

module.exports = Map;
