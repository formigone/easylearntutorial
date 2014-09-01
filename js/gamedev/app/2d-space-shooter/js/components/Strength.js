var Packt = Packt || {};
Packt.Components = Packt.Components || {};
Packt.Components.Strength = function(pEntity, pHP, pEnergy) {
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
