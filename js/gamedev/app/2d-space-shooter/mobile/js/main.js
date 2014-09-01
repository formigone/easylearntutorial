(function main(){

	var WIDTH = document.body.offsetWidth;
	var HEIGHT = document.body.offsetHeight;
	var MAX_ENEMIES = 15;

	var canvas = new Packt.Canvas(WIDTH, HEIGHT);
	document.body.appendChild(canvas.getCanvas());

	var playerEnergy = new Packt.Widgets.EnergyBar("energyBar");
	document.body.appendChild(playerEnergy.getElement());

	var player = new Packt.Entity(Packt.ENTITY_TYPES.SHIP, 
			canvas.getWidth() / 2,
			canvas.getHeight() - 100);

	var playerLaserGunComp = new Packt.Components.LaserGun(player, canvas, 10);
	var playerStrengthComp = new Packt.Components.Strength(player, 0, 100);
	var playerMoveComp = new Packt.Components.Drag(player, canvas);
	var playerPhysComp = new Packt.Components.Physics(player);
	var playerSpriteComp = new Packt.Components.Sprite(player, "./img/fighter.png", 64, 64);
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
		laserGun.add(pos.x + 28, pos.y + 50);
		laserGun.update();
	});

	var enMan = new Packt.EnemyManager(canvas);
	for (var i = 0; i < MAX_ENEMIES; i++) {
		var offset = i % (WIDTH / 75 >> 0);
		var x = 50 * offset + 25 + (25 * offset);
		var y = -50 * i + 25 + (-50 * i);
		enMan.add(x, y, {});
	}

	var phy = new Packt.PhysicsManager();
	phy.setPlayer(player);

	var gameLoop = new Packt.GameLoop(60);
	gameLoop.setOnUpdate(function() {
		// Check if game is over
		if (playerStrengthComp.getEnergy() < 0) {
			document.body.classList.add("zoomOut");

			var ctx = canvas.getContext();
			ctx.globalAlpha -= 0.01;

			if (ctx.globaAlpha < 0.0) {
				gameLoop.setRunning(false);
			}
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
		enMan.update();
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
	});

	gameLoop.run();
})();
