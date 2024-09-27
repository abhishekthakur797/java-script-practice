//! Booleans and comparison
let no1 = 5;
let no2 = 9;
console.log(no1 > no2);

//? == vs ===
let no3 = "5";

console.log(no3 == no1); // it will show true because == don't check the data type
console.log(no3 === no1); // it will show false because it also check data type

//? != and !==
console.log(no3 != no1); //! confusion section

//! Truthy and falsy value
//? Falsy values are: false, "", null, undefined, 0
let fname = "";
if (fname) {
  console.log(fname);
} else {
  console.log("fname is kinda empty");
}
