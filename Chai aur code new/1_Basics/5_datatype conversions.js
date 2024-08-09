//* VIDEO NO 7: DATATYPE CONVERSIONS

// String to Number
let score = "56";
let valueInNumber = Number(score);
console.log(typeof valueInNumber, valueInNumber); // number 56

// Mixed String to Number (contains non-numeric characters)
let score2 = "45abc";
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2, valueInNumber2); // number NaN

// Non-numeric String to Number
let name = "Abhishek";
let nameInNumber = Number(name);
console.log(typeof nameInNumber, nameInNumber); // number NaN

// Primitive Data Types to Number
let score3 = null;
console.log(typeof Number(score3), Number(score3)); // number 0

let score4 = undefined;
console.log(typeof Number(score4), Number(score4)); // number NaN

let score5 = true;
console.log(typeof Number(score5), Number(score5)); // number 1

// Number to Boolean
let answer = 1;
console.log(typeof Boolean(answer), Boolean(answer)); // boolean true
/**
 * 1 => true; 0 => false
 * "" => false; "John" => true
 */

// Number to String
let number = 44;
console.log(typeof String(number), String(number)); // string "44"

// Negating a Number
let value = 5;
console.log(-value); // -5
