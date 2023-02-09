//! Primitive data type
//? String, Number, Booleans, Undefined, Null, BigInt, Symbol

let age = 24;
console.log(typeof age, age);
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

//! Undefined
//? Undefined only works in let and var it will not work in const the value must be defined in const
//?  if the value has no value defined it is undefined
let firstName;
console.log(typeof firstName, firstName);

//! null
//? if you check the type of null it will show object(Reference data type) it is not correct it is bug from js
//? js don't this because the previous programs was written with this bug if it changes it will effect the previous works

let myVar = null;
console.log(typeof myVar); // typeof object

//!BigInt (ES2020)
console.log("Limit of integer value: " + Number.MAX_SAFE_INTEGER);
let myBigNo = BigInt(454564654654654654564654654654654654654654654654654654);
let myBigNo2 =
  354365436545646546546546546546546545646545646546546546546545646546546565656565656565656565656565656554n;
console.log(typeof myBigNo, myBigNo);
console.log(typeof myBigNo2, myBigNo2);
