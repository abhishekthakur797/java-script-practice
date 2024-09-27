//* VIDEO NO 11 : MATHS IN JAVASCRIPT.

// Maths has lot of methods we will only check the useful ones.
console.log("PI Value: " + Math.PI);
console.log("Absolute Value of -5: " + Math.abs(-5));
console.log("Round off value 5.5: " + Math.round(5.5));
console.log("Round off value 4.1: " + Math.round(4.1));
console.log("Round off value 5.9: " + Math.round(5.9));
console.log("---------------------");

console.log("Square Root of a no: " + Math.sqrt(5));
console.log("Power of a no: " + Math.pow(4, 2));
console.log("Chooses higher value from given data: " + Math.max(299, 504, 505));
console.log("Chooses Lover value from given data: " + Math.min(299, 504, 505));
console.log("Random No: " + Math.random() * 100); // output will give decimal values
console.log("Random No: " + Math.floor(Math.random() * 10) + 1); // this will give output without decimal point

// To get random number between two number
const start = 8;
const end = 33;
console.log(Math.floor(Math.random() * (end - start + 1)) + start);
