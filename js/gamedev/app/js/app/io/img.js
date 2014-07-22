goog.provide('elt.io.img');

elt.io.img = function(src) {
    return new Promise(function(resolve, reject) {
        var img = new Image();
        img.onload = function() {
            resolve(this);
        };

        img.onerror = function() {
            reject(Error('Network error'));
        };

        img.src = src;
    });
};
