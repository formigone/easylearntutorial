// Declaration:
// function <name> ([parameters...]) {
//    <body>
// }

// Expression:
// var varName = function [name]([parameters...]){
//    <body>
// };

// Runtime difference:
// 1. Hoisting
(function(){
	var num = randInt();

	function randInt(){
	   return Math.random() * Number.MAX_SAFE_INTEGER | 0;
	}

	return num;
}());

(function(){
	var num = randInt();

	var randInt = function(){
		return Math.random() * Number.MAX_SAFE_INTEGER | 0;
	};

	return num;
}());


// var num;
// var randInt;
//
// num = randInt();
// randInt = function(){ ... }

// 2. Stack trace
function func1(cb, shouldThrow){
	return cb(shouldThrow);
}

function funcDec(shouldThrow) {
	if (shouldThrow) {
		throw new Error('error @funcDec')
	}

	return 'funcDec';
}

var funcExp = function(shouldThrow){
	if (shouldThrow) {
		throw new Error('error @funxExp')
	}

	return 'funxExp';
};

setTimeout(function(){
	func1(funcDec, true);
}, 0);

setTimeout(function(){
	func1(funcExp, true);
}, 1000);

setTimeout(function(){
	func1(function (shouldThrow){
		if (shouldThrow) {
			throw new Error('error @funcAnon')
		}

		return 'funcAnon';
	}, true);
}, 2000);

setTimeout(function(){
	func1(function funcExpNamed(shouldThrow){
		if (shouldThrow) {
			throw new Error('error @funcExpNamed')
		}

		return 'funcExpNamed';
	}, true);
}, 3000);
