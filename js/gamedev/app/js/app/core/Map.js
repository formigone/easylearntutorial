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

elt.core.Map.prototype.render = function(now) {
    var ctx = this.renderer.ctx;

    for (var layer = null, i = 0, len = this.layers.length; i < len; i++) {
        layer = this.layers[i];
        for (var w = 0, wLen = layer.tiles.length; w < wLen; w++) {
            var x = w % layer.width;
            var y = parseInt(w / layer.width, 10);

            ctx.drawImage(layer.img,
                layer.atlas[layer.tiles[w]].x, layer.atlas[layer.tiles[w]].y, layer.tileWidth, layer.tileHeight,
                x * layer.tileWidth, y * layer.tileHeight, layer.tileWidth, layer.tileHeight);
        }
    }
};
