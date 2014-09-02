var rokko = rokko || {};
rokko.Components = rokko.Components || {};
rokko.Components.Drag = function(entity, canvas) {
	var entity = entity;
	var canvas = canvas;
	var isDown = false;
	var pos = entity.getPosition();

	canvas.getCanvas().addEventListener("mousedown", doOnTouchDown);
	canvas.getCanvas().addEventListener("mouseup", doOnTouchUp);
	canvas.getCanvas().addEventListener("mousemove", doOnTouchMove);

	canvas.getCanvas().addEventListener("touchstart", doOnTouchDown);
	canvas.getCanvas().addEventListener("touchend", doOnTouchUp);
	canvas.getCanvas().addEventListener("touchmove", doOnTouchMove);

	function doOnTouchDown(event) {
		event.preventDefault();
        if (event.touches && event.touches.length) {
            event = event.touches[0] || event;
        }

		var phy = entity.getComponent("physics");

		if (phy) {
			isDown = phy.collide(event.clientX, event.clientY, 0, 0);
		}
	}

	function doOnTouchUp(event) {
		event.preventDefault();
		isDown = false;
	}

	function doOnTouchMove(event) {
		event.preventDefault();
        if (event.touches && event.touches.length) {
            event = event.touches[0] || event;
        }

		if (isDown) {
			pos.x = event.clientX;
			pos.y = event.clientY;
		}
	}

	this.centerEntity = function() {
		if (isDown) {
			var sprite = entity.getComponent("sprite");
	
			if (sprite) {
				var size = sprite.getSize();
				var x = pos.x - size.width * 0.5;
				var y = pos.y - size.height * 0.5;

				entity.setPosition({x: x, y: y});
			}
		}
	};

	this.getPosition = function() {
		return pos;
	};
};
