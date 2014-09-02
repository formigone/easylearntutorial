var rokko = rokko || {};
rokko.EnemyManager = function(canvas) {
	var entities = new Array();
	var canvas = canvas;
	var worldWidth = canvas.getWidth();
	var worldHeight = canvas.getHeight();

	this.getEntities = function() {
		return entities;
	};

	function addEnemies(x, y, width, height, components) {
		var entity = new rokko.Entity(rokko.ENTITY_TYPES.SHIP, x || 0, y || -100);
		for (var c in components) {
			entity.addComponent(c, components[c]);
		};

		var strengthComp = new rokko.Components.Strength(entity, 0.5, 25);
		var physComp = new rokko.Components.Physics(entity);
		var mockMove = new rokko.Components.Move(entity, (Math.random() * 5 >> 0) + 2);
		var spriteComp = new rokko.Components.Sprite(entity, "./img/enemy_red.png", width, height);
		spriteComp.setCtx(canvas.getContext());
		spriteComp.setSpriteCoords(0, 0, 64, 64);
		entity.addComponent("sprite", spriteComp);
		entity.addComponent("move", mockMove);
		entity.addComponent("physics", physComp);
		entity.addComponent("strength", strengthComp);

		var randPathX = (Math.random() * 100 % 10) - 5;
		var randPathY = (Math.random() * 100 % 50) + 10;
		entity.setOnUpdate(function() {
			mockMove.setDirection(randPathX, 1);
			mockMove.update();
		});

		entities.push(entity);
	}

	this.add = addEnemies;

	this.remove = function(entity) {
		for (var i = 0, len = entities.length; i < len; i++) {
			if (entities[i] === entity) {
				entities.splice(i, 1);
				return entity;
			}
		}

		return null;
	};

	this.update = function() {
		var enemiesDeleted = 0;
        var deleted = [];

		for (var i = 0, len = entities.length; i < len; i++) {
			try {
				entities[i].update();

				var pos = entities[i].getPosition();

				if (pos.y > worldHeight + 100 || !entities[i].isActive()) {
					enemiesDeleted++;
                    deleted.push(i);
				}

				if (pos.x < -100) {
					pos.x = worldWidth + 50;
					entities[i].setPosition(pos);
				} else if (pos.x > worldWidth + 100) {
					pos.x = -50;
					entities[i].setPosition(pos);
				}
			} catch (e) {}
		}

		if (enemiesDeleted > 0) {
            var e = [];
            for (var i = 0, len = entities.length; i < len; i++) {
                if (deleted.indexOf(i) < 0) {
                    e.push(entities[i]);
                }
            }

            entities = e;

			for (var i = 0; i < enemiesDeleted; i++) {
				var offset = parseInt(Math.random() * 100, 10) % parseInt(worldWidth / 75, 10);
				var x = 50 * offset + 25 + (25 * offset);
				var y = 0 - Math.random() * 100 - 100; 
				addEnemies(x, y, 32, 32, {});
			}
		}

        return enemiesDeleted;
	};
};
