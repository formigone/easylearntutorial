var Packt = Packt || {};
Packt.Vec2 = function(x, y) {
	var components = {
		x: x,
		y: y
	};

	function normalize() {
		var len = Math.sqrt(
				components.x * components.x + 
				components.y * components.y
				);

		len = 1 / len;
		components.x *= len;
		components.y *= len;
	}

	this.get = function(component) {
		return components[component];
	};

	this.set = function(x, y) {
		components.x = x;
		components.y = y;
	};

	this.setComp = function(component, val) {
		if (components[component]) {
			components[component] = val;
		}
	};

	this.normalize = normalize;
};
