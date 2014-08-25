goog.provide('elt.core.Camera');

/**
 *
 * @constructor
 */
elt.core.Camera = function(x, y, widthTiles, heightTiles) {
    this.x = x;
    this.y = y;
    this.width = widthTiles;
    this.height = heightTiles;

    this.offset = 0;
};

/**
 *
 * @type {elt.core.MapLayer} layer
 */
elt.core.Camera.prototype.calculateOffset = function(layer) {
    var widthPx = this.width * layer.tileWidth;
    var heightPx = this.height * layer.tileHeight;

    if (this.x < 0) {
        this.x = 0;
    }

    if (this.y < 0) {
        this.y = 0;
    }

    if (this.y + heightPx > layer.maxY) {
        this.y = 100;
    }

    if (this.x + widthPx > layer.maxX) {
        this.x = layer.maxX - this.width;
    }

    this.offset = this.y * layer.width + this.x;
};
