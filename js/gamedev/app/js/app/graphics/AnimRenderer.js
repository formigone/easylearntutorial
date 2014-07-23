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
    this.aspRation = width / height;

    this.onRender = goog.nullFunction;

    this.resize();
};

elt.graphics.AnimRenderer.prototype.resize = function() {
    clearTimeout(this.resizeTimer);
    var self = this;

    this.resizeTimer = setTimeout(function() {
        var newWidth = window.innerWidth;
        var newHeight = window.innerHeight;
        var newWidthToHeight = newWidth / newHeight;

        if (newWidthToHeight > self.aspRation) {
            newWidth = newHeight * self.aspRation;
            self.canvas.style.height = newHeight + 'px';
            self.canvas.style.width = newWidth + 'px';
        } else {
            newHeight = newWidth / self.aspRation;
            self.canvas.style.width = newWidth + 'px';
            self.canvas.style.height = newHeight + 'px';
        }

        document.body.style.marginTop = (-newHeight / 2) + 'px';
        document.body.style.marginLeft = (-newWidth / 2) + 'px';
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
