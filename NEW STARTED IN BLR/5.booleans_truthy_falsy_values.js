//! Booleans and comparison
let no1 = 5;
let no2 = 9;
console.log(no1 > no2);
console.log(no1 == no2);
console.log("---------------------------");

//! == vs ===
let no3 = "5";
let no4 = "5";
console.log(no1 == no3); //It will show true because == don't check the data type
console.log(no1 === no3); //It will show false because === checks the data type
console.log(no3 === no4);
console.log("----------------------------");

//! != and !== Later we will do

//! Truthy and falsy value
//Falsy values :: false, "", null, undefined, 0
let fname = "";
if (fname) {
  console.log(fname);
} else {
  console.log("fname is kinda empty");
}
