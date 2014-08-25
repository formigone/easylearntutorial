goog.provide('elt.core.MapLayer');

/**
 *
 * @type {number} width
 * @type {number} height
 * @type {number} tileWidth
 * @type {number} tileHeight
 * @type {Element} img
 * @type {Array.<elt.core.MapTile>} atlas
 * @type {Array.<number>} tiles
 * @constructor
 */
elt.core.MapLayer = function(width, height, tileWidth, tileHeight, img, atlas, tiles){
    this.width = width;
    this.height = height;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;

    this.maxX = this.width * this.tileWidth;
    this.maxY = this.height * this.tileHeight;

    this.img = img;
    this.atlas = atlas;
    this.tiles = tiles;
};
