goog.provide('elt.io.get');

elt.io.get = function(url) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function() {
            reject(Error('Network error'));
        };

        req.send();
    });
};

elt.io.getJson = function(url) {
    return elt.io.get(url).then(JSON.parse);
};
