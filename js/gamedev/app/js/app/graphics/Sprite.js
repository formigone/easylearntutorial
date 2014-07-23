goog.provide('elt.graphics.Sprite');

goog.require('goog.dom');

/**
 *
 * @param {string|Element} img
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
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
