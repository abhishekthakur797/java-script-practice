"use strict"; // treat all js code as newer version

//! Primitive datatype :: call by value :: vales gets copied
// Number, String , Boolean, null, undefined, symbol.

let name = "Carl"; // String
let age = 24; // number
let isLoggedIn = false; // boolean

console.log(Number.MAX_SAFE_INTEGER); // Bigint
let largeNo = BigInt(979797979879797097907097097907); // Bigint
let largeNo2=  37294727492427979729n; // BigInt
let Temperature=null // null => standalone value (no value)
let userRating; // Undefined
const id =Symbol('122') // symbol

//! Non Primitive datatype :: call by reference 
// object, Arrays, Functions

console.log(typeof name, name); //! to check the data type and value
console.log(typeof null); // object
console.log(typeof undefined); // undefined

//! Arrays
let AsiaCupTeams=["India","SriLanka","Nepal","Bangladesh","Pakistan","Afghanistan"];
console.log(AsiaCupTeams);
console.table(AsiaCupTeams)

//! Object
let myData={
    name:"Abhishek",
    age:24,
    
}
console.log(myData);

//! functions