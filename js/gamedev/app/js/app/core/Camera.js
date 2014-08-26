goog.provide('elt.core.Camera');

/**
 *
 * @constructor
 */
elt.core.Camera = function(x, y, cols, rows) {
    this.x = x;
    this.y = y;
    this.cols = cols;
    this.rows = rows;

    this.offset = 0;
};

/**
 *
 * @type {elt.core.MapLayer} layer
 */
elt.core.Camera.prototype.calculateOffset = function(layer) {
    var width = this.cols * layer.tileWidth;
    var height = this.rows * layer.tileHeight;

    if (this.x < 0) {
        this.x = 0;
    }

    if (this.y < 0) {
        this.y = 0;
    }

//    if (this.y + heightPx > layer.maxY) {
//        this.y = 100;
//    }
//
//    if (this.x + widthPx > layer.maxX) {
//        this.x = layer.maxX - this.width;
//    }

    this.offset = parseInt(this.y / layer.tileHeight, 10) * layer.width + parseInt(this.x / layer.tileWidth, 10);
};
