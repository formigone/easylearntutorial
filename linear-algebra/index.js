var Vec = require('./vec.js');

var vec1 = new Vec([1, 2, 3]);
var vec2 = new Vec([1, 2, 3]);
var vec3 = new Vec([2, 3, 4]);

console.log('vec1 => ' + vec1);
console.log('vec2 => ' + vec2);
console.log('vec3 => ' + vec3);
console.log('\n');

console.log('vec1 === vec2 => ' + vec1.eq(vec2));
console.log('vec2 === vec3 => ' + vec2.eq(vec3));
