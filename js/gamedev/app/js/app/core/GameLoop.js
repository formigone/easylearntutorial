goog.provide('elt.core.GameLoop');

/**
 *
 * @type {number=} fps
 * @type {Function=} onUpdate
 * @type {Function=} onRnder
 * @constructor
 */
elt.core.GameLoop = function (fps, onUpdate, onRender) {
    this.fps = fps || 32;
    this.freq = 1000 / this.fps;
    this.lastTime = 0;
    this.delta = 0;

    this.onUpdate = onUpdate || goog.nullFunction;
    this.onRender = onRender || goog.nullFunction;
};

elt.core.GameLoop.prototype.run = function(){
    var _run = function(now) {
        this.delta = now - this.lastTime;

        if (this.delta > this.freq) {
            this.onUpdate(now);
            this.lastTime = now;
        }

        this.onRender(now);

        requestAnimationFrame(_run.bind(this));
    };

    _run.bind(this, 0).call();
};
