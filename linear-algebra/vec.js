function Vec(comps) {
	this.comps = comps;
}

Vec.prototype.toString = function() {
	return 'Vector: (' + this.comps + ')';
};

Vec.prototype.size = function() {
	return this.comps.length;
};

Vec.prototype.sameSize = function(vec) {
	return vec.size() === this.size();
};

Vec.prototype.toFixed = function(size) {
	this.comps = this.comps.map(comp => comp.toFixed(size));
	return this;
};

Vec.prototype.eq = function(vec) {
	if (!this.sameSize(vec)) {
		return false;
	}

	return this.comps.every((val, index) => String(val) === String(vec.comps[index]));
};

Vec.prototype.add = function(vec) {
	if (!this.sameSize(vec)) {
		// throw?
	}

	const res = this.comps.map((comp, index) => comp + vec.comps[index]);
	return new Vec(res);
};

Vec.prototype.sub = function(vec) {
	if (!this.sameSize(vec)) {
		// throw?
	}

	const res = this.comps.map((comp, index) => comp - vec.comps[index]);
	return new Vec(res);
};

Vec.prototype.mult = function(scale) {
	const res = this.comps.map(comp => comp * scale);
	return new Vec(res);
};

module.exports = Vec;
