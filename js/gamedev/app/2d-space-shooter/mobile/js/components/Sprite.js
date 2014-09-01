var Packt = Packt || {};
Packt.Components = Packt.Components || {};
Packt.Components.Sprite = function(pEntity, pImgSrc, pWidth, pHeight) {
	var entity = pEntity;
	var img = new Image();
	img.src = pImgSrc;

	var width = pWidth;
	var height = pHeight;
	var sWidth = pWidth;
	var sHeight = pHeight;
	var sX = 0;
	var sY = 0;
	var ctx = null;

	function setCtx(context) {
		ctx = context;
	}

	this.setCtx = setCtx;
	this.setSpriteCoords = function(x, y, width, height) {
		sX = x;
		sY = y;
		sWidth = width;
		sHeight = height;
	};

	this.update = function() {
		if (ctx && entity.isActive()) {
			var pos = entity.getPosition();
			ctx.drawImage(img, sX, sY, sWidth, sHeight, pos.x, pos.y, width, height);
		}
	};

	this.getSize = function() {
		return {
			width: width,
			height: height
		};
	};
};
