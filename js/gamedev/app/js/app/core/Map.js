goog.provide('elt.core.Map');

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

elt.core.Map.prototype.addLayer = function(layer) {
    this.layers.push(layer);
};

elt.core.Map.prototype.setObjLayer = function(layer) {
    this.objLayer = layer;
};

elt.core.Map.prototype.render = function(now) {
};

elt.core.Map.prototype.fromJSON = function(obj, renderer) {
    var map = new elt.core.Map(obj.width, obj.height, renderer, obj.tileTypes);

    for (var i = 0, len = obj.layers.length; i < len; i++) {
        // TODO: parse layers + create IMG + create Tiles
        map.addLayer();
    }

    return map;
};
