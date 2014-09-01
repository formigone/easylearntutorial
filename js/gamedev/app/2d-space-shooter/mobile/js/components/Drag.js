var Packt = Packt || {};
Packt.Components = Packt.Components || {};
Packt.Components.Drag = function(entity, canvas) {
	var entity = entity;
	var canvas = canvas;
	var isDown = false;
	var pos = entity.getPosition();

	canvas.getCanvas().addEventListener("touchstart", doOnTouchDown);
	canvas.getCanvas().addEventListener("touchend", doOnTouchUp);
	canvas.getCanvas().addEventListener("touchmove", doOnTouchMove);

	function doOnTouchDown(event) {
		event.preventDefault();
		var phy = entity.getComponent("physics");
		var touch = event.changedTouches;

		if (phy) {
			isDown = phy.collide(touch[0].pageX, touch[0].pageY, 0, 0);
		}
	}

	function doOnTouchUp(event) {
		event.preventDefault();
		isDown = false;
	}

	function doOnTouchMove(event) {
		event.preventDefault();
		var touch = event.changedTouches;

		if (isDown) {
			pos.x = touch[0].pageX;
			pos.y = touch[0].pageY;
		}
	}

	this.centerEntity = function() {
		if (isDown) {
			var sprite = entity.getComponent("sprite");
	
			if (sprite) {
				var size = sprite.getSize();
				var x = pos.x - size.width / 2;
				var y = pos.y - size.height / 2;

				entity.setPosition({x: x, y: y});
			}
		}
	};

	this.getPosition = function() {
		return pos;
	};
};
