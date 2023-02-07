//! Primitive data type
//? String, Number, Booleans, Undefined, Null, BigInt, Symbol

let age = 24;
console.log(typeof age);
console.log(typeof false);
console.log(typeof "King Kohli");
console.log(typeof 57);

//? Convert Number to Sting
console.log(typeof (age + "")); // Simple hack just add after string + " "
let marks = 85;
marks = String(marks);
console.log(typeof marks);

//? Convert String to Number
let equity = +"3"; // Simple hack just add + before "string"
console.log(typeof equity);
equity = Number(equity);
console.log(typeof equity);
