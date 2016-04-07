'use strict'

const assert = require('assert');
const Vec = require('./vec.js');

//
// 1.1 - Plus, Minus, Scalar Multiply
//
let vecA = new Vec([ 8.218, -9.341]);
let vecB = new Vec([-1.129,  2.111]);
let vecC = new Vec([7.089, -7.230]).toFixed(3);
let out = vecA.add(vecB).toFixed(3);

console.log('Quiz 1.1 - Plus, Minus, Scalar Multiply');
console.log('  ' + vecA + '\n+ ' + vecB + '\n= ' + vecC);
assert(out.eq(vecC), 'Should have save components');


vecA = new Vec([ 7.119, 8.215]);
vecB = new Vec([-8.223,  0.878]);
vecC = new Vec([15.342, 7.337]).toFixed(3);
out = vecA.sub(vecB).toFixed(3);

console.log('-------');
console.log('  ' + vecA + '\n- ' + vecB + '\n= ' + vecC);
assert(out.eq(vecC), 'Should have save components');


vecA = new Vec([1.671, -1.012, -0.318]);
vecB = new Vec([12.38211, -7.49892, -2.35638]);
let scale = 7.41;
out = vecA.mult(scale).toFixed(5);

console.log('-------');
console.log('  ' + vecA + '\n* ' + scale + '\n= ' + vecB);
assert(out.eq(vecB), 'Should have save components');
