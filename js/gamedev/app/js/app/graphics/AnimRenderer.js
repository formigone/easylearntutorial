goog.provide('elt.graphics.AnimRenderer');

goog.require('goog.dom');

/**
 *
 * @type {number} width
 * @type {number} height
 * @constructor
 */
elt.graphics.AnimRenderer = function(width, height) {
    this.canvas = goog.dom.createDom('canvas', {width: width, height: height});
    this.ctx = this.canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;

    this.resizeTimer = null;
    this.aspRation = this.width / this.height;

    this.onRender = goog.nullFunction;
};

/**
 *
 * @type {Element} container
 */
elt.graphics.AnimRenderer.prototype.resize = function(container) {
    clearTimeout(this.resizeTimer);

    this.resizeTimer = setTimeout(function() {
        var newWidth = container.innerWidth;
        var newHeight = container.innerHeight;
        var newWidthToHeight = newWidth / newHeight;

        if (newWidthToHeight > this.aspRation) {
            newWidth = newHeight * this.aspRation;
            this.canvas.style.height = newHeight + 'px';
            this.canvas.style.width = newWidth + 'px';
        } else {
            newHeight = newWidth / this.aspRation;
            this.canvas.style.width = newWidth + 'px';
            this.canvas.style.height = newHeight + 'px';
        }

        container.style.marginTop = (-newHeight / 2) + 'px';
        container.style.marginLeft = (-newWidth / 2) + 'px';
    }, 100);
};

/**
 *
 * @type {Element} container
 */
elt.graphics.AnimRenderer.prototype.bindTo = function(container) {
    goog.dom.appendChild(container, this.canvas);
};

/**
 *
 * @type {string} name
 * @type {string|number} val
 */
elt.graphics.AnimRenderer.prototype.attr = function(name, val) {
    this.ctx[name] = val;
};

/**
 *
 */
elt.graphics.AnimRenderer.prototype.render = function(now) {
    this.onRender(now);
    requestAnimationFrame(this.render.bind(this));
};
