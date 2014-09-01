var Packt = Packt || {};
Packt.Components = Packt.Components || {};
Packt.Components.Physics = function(entity) {
	var entity = entity;

	this.collide = function(x, y, w, h) {
		var sprite = entity.getComponent("sprite");
		if (sprite) {
			var pos = entity.getPosition();
			var size = sprite.getSize();

			if (pos.x > x + w) {
				return false;
			}

			if (pos.x + size.width < x) {
				return false;
			}

			if (pos.y > y + h) {
				return false;
			}

			if (pos.y + size.height < y) {
				return false;
			}

			return true;
		}

		return false;
	};

	this.getBodyDef = function() {
		var pos = entity.getPosition();
		var sprite = entity.getComponent("sprite");
		var size = sprite.getSize() || {width: 0, height: 0};

		return {
			x: pos.x,
			y: pos.y,
			width: size.width,
			height: size.height
		};
	};
};
