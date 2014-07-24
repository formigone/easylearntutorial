goog.provide('elt.core.Entity');

/**
 * 
 * @type {number} x
 * @type {number} y
 * @type {elt.graphics.AnimSprite} sprites
 * @type {Array.<Object>=} components
 * @constructor
 */
elt.core.Entity = function (x, y, sprites, components) {
    this.x = x;
    this.y = y;
    this.sprites = sprites;

    this.components = components || [];
};

/**
 *
 * @type {number} now
 */
elt.core.Entity.prototype.update = function(now) {
    for (var i = 0, len = this.components.length; i < len; i++) {
        this.components[i].update(this, now);
    }
};
