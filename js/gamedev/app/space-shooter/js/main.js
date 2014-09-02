(function main(){
	var SCREEN_WIDTH = document.body.offsetWidth;
	var SCREEN_HEIGHT = document.body.offsetHeight;
	var CANVAS_WIDTH = 640;//document.body.offsetWidth;
	var CANVAS_HEIGHT = 960;//document.body.offsetHeight;
	var MAX_ENEMIES = 75;
	var MAX_SHOTS = 10;
	var PLAYER_WIDTH = 32;
	var PLAYER_HEIGHT = 32;
    var global_score = 0;

    var BG_X = 0;
    var BG_Y = 0;
    var BG_SPEED_X = 0.1;
    var BG_SPEED_Y = 0.75;

	var canvas = new rokko.Canvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	document.body.appendChild(canvas.getCanvas());

    // ugly, but good enough for now
    var global_canvas = document.body;
    global_canvas.style.backgroundPositionX = 0;
    global_canvas.style.backgroundPositionY = 0;

    var global_ctx = canvas.getContext('2d');
    global_ctx.fillStyle = '#fff';
    global_ctx.font = '2em Monospace';

	var playerEnergy = new rokko.Widgets.EnergyBar("energyBar");
	document.body.appendChild(playerEnergy.getElement());

	var player = new rokko.Entity(rokko.ENTITY_TYPES.SHIP,
			SCREEN_WIDTH / 2,
			SCREEN_HEIGHT - 64);

	var playerLaserGunComp = new rokko.Components.LaserGun(player, canvas, MAX_SHOTS);
	var playerStrengthComp = new rokko.Components.Strength(player, 0, 100);
	var playerMoveComp = new rokko.Components.Drag(player, canvas);
	var playerPhysComp = new rokko.Components.Physics(player);
	var playerSpriteComp = new rokko.Components.Sprite(player, "./img/fighter.png", PLAYER_WIDTH, PLAYER_HEIGHT);
	playerSpriteComp.setCtx(canvas.getContext());
	playerSpriteComp.setSpriteCoords(64 * 3, 0, 64, 64);
	player.addComponent("sprite", playerSpriteComp);
	player.addComponent("drag", playerMoveComp);
	player.addComponent("physics", playerPhysComp);
	player.addComponent("strength", playerStrengthComp);
	player.addComponent("laserGun", playerLaserGunComp);

	player.setOnUpdate(function() {
		var drag = player.getComponent("drag");
		drag.centerEntity();

		var pos = player.getPosition();
		var laserGun = player.getComponent("laserGun");

        laserGun.add(pos.x + PLAYER_WIDTH * 0.5 - 4, pos.y + 10);

        laserGun.update();
	});

	var enMan = new rokko.EnemyManager(canvas);
	for (var i = 0; i < MAX_ENEMIES; i++) {
		var offset = i % (CANVAS_WIDTH / 75 >> 0);
		var x = 50 * offset + 25 + (25 * offset);
		var y = -50 * i + 25 + (-50 * i);
		enMan.add(x, y, 32, 32, {});
	}

	var phy = new rokko.PhysicsManager();
	phy.setPlayer(player);

	var gameLoop = new rokko.GameLoop(60);
	gameLoop.setOnUpdate(function() {
		// Check if game is over
		if (playerStrengthComp.getEnergy() < 0) {
			document.body.classList.add("zoomOut");

//			var ctx = canvas.getContext();
//			ctx.globalAlpha -= 0.5;

//			if (ctx.globaAlpha < 0.0) {
				gameLoop.setRunning(false);
            setTimeout(function(){
                if (confirm('Play again?')) {
                    window.location.reload();
                }
            }, 3000);
//			}
		}

		// Add everyone to the physics manager to check for collision
		var enemies = enMan.getEntities();
		for (var i = 0, len = enemies.length; i < len; i++) {
			phy.addEnemy(enemies[i]);
		}

		var playerLasers = playerLaserGunComp.getShots();
		for (var i = 0, len = playerLasers.length; i < len; i++) {
			phy.addPlayerShots(playerLasers[i]);
		}

		// Update positions
		global_score += enMan.update();
		player.update();

		// Check for collisions
		phy.checkCollisions();

		// Draw
		canvas.clear();
		for (var i = 0, len = enemies.length; i < len; i++) {
			enemies[i].draw();
		}

		for (var i = 0, len = playerLasers.length; i < len; i++) {
			playerLasers[i].draw();
		}

		player.draw();
		playerEnergy.setEnergy(playerStrengthComp.getEnergy());

        // manually draw score
        global_ctx.fillText('Score: ' + global_score, 15, 70);
        global_canvas.style.backgroundPositionX = parseInt(BG_X, 10) + 'px';
        global_canvas.style.backgroundPositionY = parseInt(BG_Y, 10) + 'px';
        BG_X -= BG_SPEED_X;
        BG_Y += BG_SPEED_Y;
	});

	gameLoop.run();
})();
