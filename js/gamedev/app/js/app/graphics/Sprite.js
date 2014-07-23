goog.provide('elt.graphics.Sprite');

goog.require('goog.dom');

/**
 *
 * @type {string|Element} img
 * @type {number} x
 * @type {number} y
 * @type {number} width
 * @type {number} height
 * @constructor
 */
elt.graphics.Sprite = function(img, x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    if (goog.isString(img)) {
        this.img = goog.dom.createDom('img', {src: img});
    } else {
        this.img = img;
    }
};
