var rokko = rokko || {};
rokko.Components = rokko.Components || {};
rokko.Components.Move = function(entity, speed) {
	var entity = entity;
	var speed = speed;
	var direction = new rokko.Vec2(0, 0);

	this.update = function() {
		var pos = entity.getPosition();
		direction.normalize();

		var newPos = {
			x: pos.x + direction.get("x") * speed,
			y: pos.y + direction.get("y") * speed
		};

		entity.setPosition(newPos);
	};

	this.setDirection = function(x, y) {
		direction.set(x, y);
	};
};
