(function main(){
	var WIDTH = 640;//document.body.offsetWidth;
	var HEIGHT = 960;//document.body.offsetHeight;
	var MAX_ENEMIES = 15;
    var global_score = 0;

	var canvas = new rokko.Canvas(WIDTH, HEIGHT);
	document.body.appendChild(canvas.getCanvas());

    // ugly, but good enough for now
    var global_ctx = canvas.getContext('2d');
    global_ctx.fillStyle = '#fff';
    global_ctx.font = '2em Monospace';

	var playerEnergy = new rokko.Widgets.EnergyBar("energyBar");
	document.body.appendChild(playerEnergy.getElement());

	var player = new rokko.Entity(rokko.ENTITY_TYPES.SHIP,
			canvas.getWidth() / 2,
			canvas.getHeight() - 100);

	var playerLaserGunComp = new rokko.Components.LaserGun(player, canvas, 10);
	var playerStrengthComp = new rokko.Components.Strength(player, 0, 100);
	var playerMoveComp = new rokko.Components.Drag(player, canvas);
	var playerPhysComp = new rokko.Components.Physics(player);
	var playerSpriteComp = new rokko.Components.Sprite(player, "./img/fighter.png", 32, 32);
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
		laserGun.add(pos.x + 28, pos.y);
		laserGun.update();
	});

	var enMan = new rokko.EnemyManager(canvas);
	for (var i = 0; i < MAX_ENEMIES; i++) {
		var offset = i % (WIDTH / 75 >> 0);
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
	});

	gameLoop.run();
})();
