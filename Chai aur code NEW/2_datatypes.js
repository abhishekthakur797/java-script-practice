//! Video No :: 5 :: Datatypes

"use strict"; // treat all js code as newer versions

//! Primitive Datatype :: call by value :: values gets copied.
//  Number, String , Boolean , null , undefined, symbol.

let name = "Carl"; // String
let age = 24; // number
let isLoggedIn = false; // boolean

console.log(Number.MAX_SAFE_INTEGER); // Bigint
let largeNo = BigInt(979797979879797097907097097907); // Bigint
let largeNo2 = 37294727492427979729n; // BigInt
let Temperature = null; // null => standalone value (no value)
let userRating; // Undefined
const id = Symbol("122"); // symbol
console.log(typeof age, age); //! to check the datatype and value

//! Non Primitive datatype :: call by reference
// Object, Arrays , Function.

//! Arrays
let IPLTeams = ["CSK", "MI", "RCB", "DC"];
console.log(typeof IPLTeams, IPLTeams); // Type object

//! Object
let myDetails = {
  nickName: "John",
  idNo: 43,
};
console.log(typeof myDetails, myDetails);
