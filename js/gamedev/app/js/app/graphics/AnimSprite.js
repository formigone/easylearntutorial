goog.provide('elt.graphics.AnimSprite');

goog.require('goog.dom');

/**
 *
 * @type {string|Element} img
 * @type {Array.<elt.graphics.AnimSpriteFrame>} frames}
 * @constructor
 */
elt.graphics.AnimSprite = function(img, frames) {
    this.frames = frames;
    this.lastTime = 0;
    this.delta = 0;
    this.currentFrame = 0;

    if (goog.isString(img)) {
        this.img = goog.dom.createDom('img', {src: img});
    } else {
        this.img = img;
    }
};

/**
 *
 * @type {number} delay
 * @type {number} x
 * @type {number} y
 * @type {number} width
 * @type {number} height
 * @constructor
 */
elt.graphics.AnimSpriteFrame = function(delay, x, y, width, height) {
    this.delay = delay;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};
