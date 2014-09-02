var rokko = rokko || {};
rokko.Components = rokko.Components || {};
rokko.Components.Strength = function(pEntity, pHP, pEnergy) {
	var entity = pEntity;
	var hp = pHP;
	var energy = pEnergy;

	this.getHP = function() {
		return hp;
	};

	this.getEnergy = function() {
		return energy;
	};

	this.takeDamage = function(damage) {
		energy -= damage;
		return energy;
	};
};
