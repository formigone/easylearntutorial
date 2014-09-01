var Packt = Packt || {};
Packt.Widgets = Packt.Widgets || {};
Packt.Widgets.EnergyBar = function(cssClass) {
	var energy = 100;
	var container = document.createElement("div");
	container.classList.add(cssClass);

	var bar = document.createElement("div");
	bar.style.width = energy + "%";
	container.appendChild(bar);

	this.getElement = function() {
		return container;
	};

	this.addEnergy = function(amount) {
		energy += amount;
		bar.style.width = energy + "%";
	};

	this.setEnergy = function(amount) {
		energy = amount;
		bar.style.width = energy + "%";
	};
};
