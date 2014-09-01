var Packt = Packt || {};
Packt.Components = Packt.Components || {};
Packt.Components.Drag = function(entity, canvas) {
	var entity = entity;
	var canvas = canvas;
	var isDown = false;
	var pos = entity.getPosition();

	canvas.getCanvas().addEventListener("mousedown", doOnTouchDown);
	canvas.getCanvas().addEventListener("mouseup", doOnTouchUp);
	canvas.getCanvas().addEventListener("mousemove", doOnTouchMove);

	function doOnTouchDown(event) {
		event.preventDefault();
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
