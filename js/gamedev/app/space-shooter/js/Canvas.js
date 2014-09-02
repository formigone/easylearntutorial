var rokko = rokko || {};
rokko.Canvas = function(w, h) {
	var width = w;
	var height = h;
	var canvas = document.createElement("canvas");

	canvas.width = width;
	canvas.height = height;

	var ctx = canvas.getContext("2d");

	this.getCanvas = function() {
		return canvas;
	};

	this.getContext = function() {
		return ctx;
	};

	this.getWidth = function() {
		return width;
	};

	this.getHeight = function() {
		return height;
	};

	this.clear = function() {
		ctx.clearRect(0, 0, width, height);
	};
};