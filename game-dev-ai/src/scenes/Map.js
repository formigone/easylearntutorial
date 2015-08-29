const Phaser = require('phaser');

/**
 * @inherits Phaser.Game
 * @constructor
 */
function Map() {
    this.done = false;
    this.item = null;
    this.map = null;
}

Map.prototype.preload = function(){
    this.load.spritesheet('needleman', 'asset/img/needleman-tileset-32x32.png', 32, 32, 23);
    //this.load.spritesheet('ground_1x1.png', 'asset/img/ground_1x1.png', 32, 32);
};

Map.prototype.create = function () {
    this.stage.backgroundColor = '#fff';

    //for (let y = 0; y < 20; y++) {
    //    for (let x = 0; x < 47; x++) {
    //        this.add.sprite(x * 16, y * 16, 'needleman', x % 23);
    //    }
    //}

    let map = this.add.tilemap();
    map.addTilesetImage('needleman');
    let layer = map.create('test', 10, 20, 32, 32);
    layer.resizeWorld();
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 20; x++) {
            map.putTile(11, x, y, layer);
        }
    }
    /*
    map.putTile(4, 0, 0, layer);
    map.putTile(5, 1, 0, layer);
    map.putTile(19, 2, 0, layer);
    map.putTile(11, 3, 0, layer);
    map.putTile(11, 4, 0, layer);
    map.putTile(11, 5, 0, layer);
    map.putTile(11, 6, 0, layer);
    map.putTile(11, 7, 0, layer);
    map.putTile(11, 8, 0, layer);
    map.putTile(11, 9, 0, layer);
    map.putTile(19, 10, 0, layer);
    map.putTile(0, 11, 0, layer);
    map.putTile(1, 12, 0, layer);

    map.putTile(4, 0, 1, layer);
    map.putTile(5, 1, 1, layer);
    map.putTile(19, 2, 1, layer);
    map.putTile(11, 3, 1, layer);
    map.putTile(11, 4, 1, layer);
    map.putTile(11, 5, 1, layer);
    map.putTile(11, 6, 1, layer);
    map.putTile(11, 7, 1, layer);
    map.putTile(11, 8, 1, layer);
    map.putTile(11, 9, 1, layer);
    map.putTile(19, 10, 1, layer);
    map.putTile(0, 11, 1, layer);
    map.putTile(1, 12, 1, layer);

    map.putTile(4, 0, 2, layer);
    map.putTile(5, 1, 2, layer);
    map.putTile(20, 2, 2, layer);
    map.putTile(11, 3, 2, layer);
    map.putTile(11, 4, 2, layer);
    map.putTile(11, 5, 2, layer);
    map.putTile(11, 6, 2, layer);
    map.putTile(11, 7, 2, layer);
    map.putTile(11, 8, 2, layer);
    map.putTile(11, 9, 2, layer);
    map.putTile(19, 10, 2, layer);
    map.putTile(0, 11, 2, layer);
    map.putTile(1, 12, 2, layer);

    map.putTile(4, 0, 3, layer);
    map.putTile(5, 1, 3, layer);
    map.putTile(10, 2, 3, layer);
    map.putTile(11, 3, 3, layer);
    map.putTile(11, 4, 3, layer);
    map.putTile(11, 5, 3, layer);
    map.putTile(11, 6, 3, layer);
    map.putTile(11, 7, 3, layer);
    map.putTile(11, 8, 3, layer);
    map.putTile(11, 9, 3, layer);
    map.putTile(19, 10, 3, layer);
    map.putTile(0, 11, 3, layer);
    map.putTile(1, 12, 3, layer);

    map.putTile(4, 0, 4, layer);
    map.putTile(5, 1, 4, layer);
    map.putTile(16, 2, 4, layer);
    map.putTile(17, 3, 4, layer);
    map.putTile(11, 4, 4, layer);
    map.putTile(11, 5, 4, layer);
    map.putTile(11, 6, 4, layer);
    map.putTile(11, 7, 4, layer);
    map.putTile(11, 8, 4, layer);
    map.putTile(11, 9, 4, layer);
    map.putTile(19, 10, 4, layer);
    map.putTile(0, 11, 4, layer);
    map.putTile(1, 12, 4, layer);

    map.putTile(4, 0, 5, layer);
    map.putTile(5, 1, 5, layer);
    map.putTile(10, 2, 5, layer);
    map.putTile(10, 3, 5, layer);
    map.putTile(11, 4, 5, layer);
    map.putTile(11, 5, 5, layer);
    map.putTile(11, 6, 5, layer);
    map.putTile(11, 7, 5, layer);
    map.putTile(11, 8, 5, layer);
    map.putTile(11, 9, 5, layer);
    map.putTile(20, 10, 5, layer);
    map.putTile(0, 11, 5, layer);
    map.putTile(1, 12, 5, layer);
*/
    //for (let y = 0; y < 10; y++) {
    //    for (let i = 0; i < 23; i++) {
    //        this.add.sprite(i * 32 + 10, y * 32 + 10, 'needleman', i);
    //    }
    //}
};

Map.prototype.update = function() {
    if (this.done) {
       // this.state.start('Placeholder');
    }
};

module.exports = Map;
