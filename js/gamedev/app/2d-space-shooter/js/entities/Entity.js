var Packt = Packt || {};
Packt.ENTITY_TYPES = {
	SHIP: 0,
	BULLET: 1
};

Packt.Entity = function(type, x, y) {
	var type = type;
	var pos = {
		x: x,
		y: y
	};

	var isActive = true;
	var components = new Object();
	var update = function(){};

	function addComponent(key, component) {
		if (!components[key]) {
			components[key] = component;
		}

		return component;
	}

	function removeComponent(key) {
		if (components[key]) {
			return delete components[key];
		}

		return false;
	}

	function getComponent(key) {
		return components[key] || null;
	}

	function draw() {
		if (components.sprite) {
			components.sprite.update();
		}
	}

	this.addComponent = addComponent;
	this.removeComponent = removeComponent;
	this.getComponent = getComponent;
	this.getPosition = function() {
		return pos;
	};

	this.setPosition = function(newPos) {
		pos = newPos;
	};

	this.isActive = function() {
		return isActive;
	};

	this.setActive = function(active) {
		isActive = active;
	};

	this.draw = draw;
	this.update = update;
	this.update = function() {
		update();
	};

	this.setOnUpdate = function(cb){
		update = cb;
	};
};
