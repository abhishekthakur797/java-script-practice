//* VIDEO NO 12: Numbers in Maths.

// Defining a number has two methods
const score = 300; // Primitive datatype
const score2 = new Number(400); // Object
console.log(typeof score, score);
console.log(typeof score2, score2);
console.log("----------------------");

// Methods in Numbers.
console.log("Length of score number: " + score.toString().length); // it is converted to string then we can use length method.
console.log("Decimal point after given number: " + score.toFixed(2));

const decimalValue = 23.53443;
console.log(decimalValue.toPrecision(5)); // how many decimal point i want
console.log("----------------------");

// Show Number in Indian or any other format
const KValue = 100000;
console.log("Default US standard format: " + KValue.toLocaleString());
console.log("Indian Format: " + KValue.toLocaleString("en-IN"));
console.log("----------------------");

console.log("Maximum value in integer value: " + Number.MAX_SAFE_INTEGER);
console.log("EPSILON VALUE: " + Number.EPSILON);
console.log("MIN VALUE: " + Number.MIN_VALUE);
console.log("MAX VALUE: " + Number.MAX_VALUE);
