goog.provide('elt.Test');

elt.Test = function(num) {
    this.num = num;
};

elt.Test.prototype.doit = function() {
    var el = document.createElement('h1');
    el.textContent = this.num;
    document.body.appendChild(el);
};