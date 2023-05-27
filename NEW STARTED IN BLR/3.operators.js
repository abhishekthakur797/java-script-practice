//! Primitive Data Type
//? String, Number, booleans, undefined, null, BigInt, Symbol

//! type of function
let age = 24;
//typeof is a function which tells which type of data is used
console.log(typeof age);
console.log(typeof false);
//in typeof function if you (typeof, variable) it prints with the value
console.log(typeof age, age);
var king = "king kohli";
console.log(typeof king, king);
console.log("----------------------------");

//! convert number to string
//Simple hack just add after string + ""
let marks = 45;
console.log(typeof marks, marks);
console.log(typeof (marks + ""), marks);
console.log("---------------------------");

//! convert string to number
let runs = "345";
console.log(typeof runs, runs);
// just add + before string
let runs2 = +"298";
console.log(typeof runs2, runs2);
console.log("-----------------------------");

//! Undefined
// If the value has no value defined it is undefined.
// Undefined only works in let and var. it will not work in const the value must defined in const.
let firstName;
console.log(typeof firstName, firstName);
console.log("----------------------------");

//! null
// if you check the type of null it will show object(Reference data type) it is not correct by js, it is a bug
// js don't this because the previous programs was written with this bug if it is changed it will effect the previous works.
let myVar = null;
console.log(typeof myVar);
console.log("----------------------------");

//! BigInt (ES2020)
console.log("Limit of integer value: " + Number.MAX_SAFE_INTEGER);
let BigNo = BigInt(900719925474099122);
console.log(typeof BigNo, BigNo);
