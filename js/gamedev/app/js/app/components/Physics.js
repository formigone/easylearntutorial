goog.provide('elt.components.Physics');

elt.components.Physics = function(speed) {
    this.speed = speed;
};

elt.components.Physics.prototype.update = function(entity, now) {
    now = now || 1;
    if (now > 150) {
        now = 150;
    }

    if (keys[keys.code.RIGHT]) {
        entity.x += this.speed * now;
    }

    if (keys[keys.code.LEFT]) {
        entity.x -= this.speed * now;
    }

    if (keys[keys.code.SPACE]) {
        entity.y -= this.speed * now;
    }
};
