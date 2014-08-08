goog.provide('elt.core.Map');

goog.require('elt.core.MapTile');
goog.require('goog.dom');

/**
 *
 * @type {number}width
 * @type {number}height
 * @type {elt.graphics.AnimRenderer} renderer
 * @type {Object}tileType
 * @constructor
 */
elt.core.Map = function(width, height, renderer, tileType) {
    this.width = width;
    this.height = height;

    this.renderer = renderer;
    this.layers = [];
    this.objLayer = [];

    this.tileType = tileType || {};
};

elt.core.Map.fromJSON = function(obj, renderer) {
    var map = new elt.core.Map(obj.width, obj.height, renderer, obj.tileTypes);

    for (var i = 0, len = obj.layers.length; i < len; i++) {
        var atlas = [];
        for (var w = 0; w < obj.layers[i].atlas.length; w++) {
            atlas.push(new elt.core.MapTile(obj.layers[i].atlas[w][0], obj.layers[i].atlas[w][1], obj.layers[i].atlas[w][2]));
        }

        map.addLayer(new elt.core.MapLayer(
            obj.layers[i].width,
            obj.layers[i].height,
            obj.layers[i].tileWidth,
            obj.layers[i].tileHeight,
            goog.dom.createDom('img', {src: obj.layers[i].img}),
            atlas,
            obj.layers[i].tiles
        ));
    }

    return map;
};

elt.core.Map.prototype.addLayer = function(layer) {
    this.layers.push(layer);
};

elt.core.Map.prototype.setObjLayer = function(layer) {
    this.objLayer = layer;
};


/*

+---+
| | |
+---+
| | |
+---+
w: 2, h: 2, x: 0, y: 0
0, 1, 10, 11

[ 0][ 1][ 2][ 3][ 4][ 5][6 ][ 7][ 8][ 9]
[10][11][12][13][14][15][16][17][18][19]
[20][21][22][23][24][25][26][27][28][29]
[30][31][32][33][34][35][36][37][38][39]
[40][41][42][43][44][45][46][47][48][49]

w: 10, h: 5

Coffset = c.y * c.w + c.x = (0 * 2 + 0) = 0
Coffset * y + (i % c.w)

[1, 2, 11, 22]
w.w = 10, w.h = 5
c.x = 1, c.y = 0;
y = parseInt(i / c.w)
Coffset = c.y * c.w + c.x = (0 * 2 + 1) = 1

y = 0 / 2 = 0
Tile[0] = Coffset + (0 * w.w) + (i % c.w) = 1 + 0 + 0 = 1

y = 1 / 2 = 0
Tile[1] = Coffset + (0 * w.w) + (i % c.w) = 1 + 0 + 1 = 2

y = 2 / 2 = 1
Tile[2] = Coffset + (1 * w.w) + (i % c.w) = 1 + 10 + 0 = 11

y = 2 / 2 = 1
Tile[3] = Coffset + (1 * w.w) + (i % c.w) = 1 + 10 + 1 = 12

w = {w: 10, h: 5}
c = {w: 2, h: 2, x: 1, y: 1}
Coffset = c.y * c.w + c.x

 */


elt.core.Map.prototype.render = function(now) {
    var ctx = this.renderer.ctx;
    var layer = null;
    var x = 0;
    var y = 0;
    var offset = 0;

    for (var i = 0, len = this.layers.length; i < len; i++) {
        layer = this.layers[i];
        camera.offset = camera.calculateOffset(layer);

        for (var w = 0, wLen = Math.min(layer.tiles.length, camera.w * camera.h); w < wLen; w++) {
            y = parseInt(w / camera.w, 10);
            x = w % camera.w;
            offset = camera.offset + (y * layer.width) + x;

            ctx.drawImage(layer.img,
                layer.atlas[layer.tiles[offset]].x, layer.atlas[layer.tiles[offset]].y, layer.tileWidth, layer.tileHeight,
                x * layer.tileWidth, y * layer.tileHeight, layer.tileWidth, layer.tileHeight);
        }
    }
};
