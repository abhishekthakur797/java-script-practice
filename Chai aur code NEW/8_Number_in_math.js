//! Video No :: 12 Numbers in Maths

const score = 300;
const score2 = new Number(400);
console.log(typeof score, score);
console.log(typeof score2, score2);

//! Properties and Methods of Numbers
console.log(score.toString().length); // it is converted to string now we can use the string methods
console.log(score.toFixed(2)); // how many decimal place after the number

const decimalScore = 23.5343;
console.log(decimalScore.toPrecision(3)); // Judge to decimal point and precise the value

const hundredNo = 10000000;
console.log(hundredNo.toLocaleString()); // By default it used as US standard.
console.log(hundredNo.toLocaleString("en-IN")); // now it will show as indian standards.

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE); // check all property one by one.
console.log("-------------------------------------");

//! ++++++++++++++ Maths in JavaScript +++++++++++++++++++

console.log(Math.PI); // Maths has lot of method we will only check the useful ones.
console.log(Math.abs(-5)); // Absolute value convert any no to positive no.
console.log(Math.round(5.5)); // it rounds off the value.
console.log(Math.ceil(4.1)); // it give the higher value.
console.log(Math.floor(4.9)); // it give the lower value.
console.log("---------------");

console.log(Math.sqrt(9)); // Square root of any Number.
console.log(Math.pow(4, 2)); // power of any Number.
console.log(Math.min(5, 4, 2, 1)); // choose the higher value.
console.log(Math.max(5, 4, 2, 1)); // chooses the lower value.
console.log(Math.random() * 100); // Result will come between 0-1, there is change of coming 0 to avoid add 1.
console.log(Math.floor(Math.random() * 10) + 1); // to avoid decimal point use floor property.

//! To get a result between two numbers.
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
