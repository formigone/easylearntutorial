var Person = function(name) {
	this.name = name;
};

function main(){
	var name = "RODRIGO";
	if (name != "Rodrigo") {
		name = "Rodrigo";
	}

	var me = new Person(name);
	alert(me.name);
}

main();
