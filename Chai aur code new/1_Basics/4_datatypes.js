//* VIDEO 5: Datatypes and ECMA Standards.

// ECMA:European computer manufactures associations.
// ECMAScript 1 (1997) first edition.
// ECMAScript 3 (1999) try/catch for exception handling.
// ECMAScript 5 (2009) strict mode, JSON support.
// ECMAScript 6 (2015) / ES6 : let, const, arrow function, modules...
// ES7(2016), ES8(2017), ES9(2018), ES10(2019)

// Primitive Datatype: Call by value, values gets copied.
// String, Number, Boolean, null, undefined, symbol, BigInt.

let name = "Abhishek"; // String Datatype
let age = 25; // Number Datatype
let isLoggedIn = true; // Boolean Datatype
let temperature = null; // Standalone value(no value) when we have send nothing we null instead of values.
let whatNext; // undefined
const id = Symbol("23"); // Symbol(uniqueness)

//* To check the datatype and value
console.log(typeof id, id);

// Non Primitive Datatypes: Call by reference
// Object, Arrays, Functions.

// Arrays
let IPLTeams = ["RCB", "MI", "CSK", "KKR"];
console.log(typeof IPLTeams, IPLTeams);

// Object
let myData = {
  nickName: "vicky",
  yearId: 2023,
};
console.log(typeof myData, myData);
