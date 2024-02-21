"use strict";
let a = 10;
console.log(typeof a);

//a = -a;  unary operation
console.log(a);

let b = 20;

//let result = b - a; binary operation

/* Addition Operator
let x = 12;
let y = 20;

let resultAdd = b + a; // binary plus
console.log(resultAdd)

let resultSub = b - a; // binary minus
console.log(resultSub)
*/


//Division
let months = 99;
let interval  = 12;

let noOfYears = months / interval;
console.log(noOfYears)

// to get int
console.log(parseInt(noOfYears)); // integer
console.log(parseFloat(noOfYears))//float conversion

// Modulo operator
let agereminder = months % interval;
console.log(agereminder);

// Exponential Operator
let radius  = 5;

let area = Math.PI * radius**2 ;// Similar to Math.PI * radius * radius 
