//! Video No :: 5 :: Datatypes
//! Vide No :: 9 :: Datatypes interview perspective.

"use strict"; // treat all js code as newer versions

//! Primitive Datatype :: call by value :: values gets copied.
//  Number, String , Boolean , null , undefined, symbol, BigInt.

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
console.log("______________________");

//! Video 9 :: Datatypes
// Datatypes are mainly of two types primitive and non primitive these are categorized on the basis of how data is stored in memory and how it can be accessed.
//? Javascript is a dynamically type language or static type language :: dynamically.
//? variable is determined at run time, not at compile time, this allows you to assign value of types to the same variable.
//? you don't have to define int,float,sting.... Javascript automatically detects the variable type.

//! Function stored in a variable

const myFunction = function () {
  console.log("This is a function");
};

console.log(typeof myFunction); // The type of function is not function, but object function
