//* VIDEO NO 7: Operations in JavaScript

// Basic Operations
console.log(0 + 13, 44 - 5, 14 * 5, 1 / 1); // Arithmetic
console.log(5 ** 3); // Exponentiation
console.log(23 % 3); // Modulus
console.log("---------------");

// String Addition
let str1 = "Abhishek";
let str2 = "Thakur";
console.log(`Addition of two strings: ${str1} ${str2}`); // Template literal
console.log("Addition of two strings: " + str1 + " " + str2); // Concatenation
console.log("--------------");

// Complex Situations
// If a string is first, everything is treated as a string
let add1 = "1" + 2;
console.log(typeof add1, add1); // string 12
let add2 = "1" + "2";
console.log(typeof add2, add2); // string 12
let add3 = "1" + 2 + 2;
console.log(typeof add3, add3); // string 122

// If a number is first, numbers are added, then concatenated with the string
let add4 = 1 + 2 + "2";
console.log(typeof add4, add4); // string 32
let add5 = 1 + "2";
console.log(typeof add5, add5); // string 12
console.log("--------------");

// Prefix and Postfix Operators
let counter = 199;
counter++;
console.log("Postfix value: " + counter); // 200
++counter;
console.log("Prefix value: " + counter); // 201
