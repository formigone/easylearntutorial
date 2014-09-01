var Packt = Packt || {};
Packt.PhysicsManager = function() {
	var player = null;
	var playerShots = new Array();
	var enemies = new Array();
	var enemyShots = new Array();

	this.setPlayer = function(pPlayer) {
		player = pPlayer;
	};

	this.addPlayerShots = function(playerShot) {
		for (var i = 0, len = playerShots.length; i < len; i++) {
			if (playerShots[i] === playerShot) {
				return false;
			}
		}

		return playerShots.push(playerShot);
	};

	this.addEnemy = function(enemy) {
		for (var i = 0, len = enemies.length; i < len; i++) {
			if (enemies[i] === enemy) {
				return false;
			}
		}

		return enemies.push(enemy);
	};

	this.addEnemyShots = function(enemyShot) {
		for (var i = 0, len = enemyShots.length; i < len; i++) {
			if (enemyShots[i] === enemyShot) {
				return false;
			}
		}

		return enemyShots.push(enemyShot);
	};

	this.removePlayer = function() {
		player = null;
	};

	this.removePlayerShots = function(playerShot) {
		for (var i = 0, len = playerShots.length; i < len; i++) {
			if (playerShots[i] === playerShot) {
				return playerShots.splice(i, 1);
			}
		}

		return null;
	};

	this.removeEnemy = function(enemy) {
		for (var i = 0, len = enemies.length; i < len; i++) {
			if (enemies[i] === enemy) {
				return enemies.splice(i, 1);
			}
		}

		return null;
	};

	this.removeEnemyShots = function(enemyShot) {
		for (var i = 0, len = enemyShots.length; i < len; i++) {
			if (enemyShots[i] === enemyShot) {
				return enemyShots.splice(i, 1);
			}
		}

		return null;
	};

	this.checkCollisions = function() {
		// Check if enemies collide with player
		if (player) {
			var playerPhy = player.getComponent("physics");
			var enemyPhy = null;

			if (playerPhy) {
				// Player collision against enemy ships
				for (var i = 0, len = enemies.length; i < len; i++) {
					if (!enemies[i].isActive())
						continue;

					enemyPhy = enemies[i].getComponent("physics");
					if (enemyPhy) {
						var enemyDef = enemyPhy.getBodyDef();

						if (playerPhy.collide(
								enemyDef.x, 
								enemyDef.y, 
								enemyDef.width, 
								enemyDef.height)) {
							var enemyStrength = enemies[i].getComponent("strength");
							var playerStrength = player.getComponent("strength");

							if (playerStrength && enemyStrength) {
								playerStrength.takeDamage(enemyStrength.getHP());
								enemyStrength.takeDamage(playerStrength.getHP());
							}
						}
					}
				}

				// Player laser collision against enemy ships
				for (var i = 0, len = playerShots.length; i < len; i++) {
					if (!playerShots[i].isActive())
						continue;

					laserPhy = playerShots[i].getComponent("physics");
					if (laserPhy) {
						var laserDef = laserPhy.getBodyDef();

						for (var w = 0, len2 = enemies.length; w < len2; w++) {
							if (!enemies[w].isActive())
								continue;

							var enemyDef = enemies[w].getComponent("physics");

							if (enemyDef.collide(
									laserDef.x, 
									laserDef.y, 
									laserDef.width, 
									laserDef.height)) {
								var laserStrength = playerShots[i].getComponent("strength");
								var enemyStrength = enemies[w].getComponent("strength");

								if (laserStrength && enemyStrength) {
									laserStrength.takeDamage(enemyStrength.getHP());
									enemyStrength.takeDamage(laserStrength.getHP());
									if (laserStrength.getEnergy() < 0) {
										playerShots[i].setActive(false);
									}
									if (enemyStrength.getEnergy() < 0) {
										enemies[w].setActive(false);
									}
								}
							}
						}
					}
				}
			}
		}
	};
};
