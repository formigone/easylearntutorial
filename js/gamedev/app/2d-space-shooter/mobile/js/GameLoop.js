var Packt = Packt || {};
Packt.GameLoop = function(fps) {
	var fps = fps;
	var frameDelay = 1000 / fps;
	var lastFrameTime = 0;
	var isRunning = true;

	var update = function(){};

	function run(time) {
		if (isRunning) {
			var delta = time - lastFrameTime;
	
			if (delta >= frameDelay) {
				update();
				lastFrameTime = time;
			}
	
			requestAnimationFrame(run);
		}
	}

	this.setRunning = function(running) {
		isRunning = running;
		return isRunning;
	};

	this.isRunning = function() {
		return isRunning;
	};

	this.run = run;
	this.setOnUpdate = function(cb){
		update = cb;
	};
};
