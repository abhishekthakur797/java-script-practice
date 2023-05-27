//! Add strings
let myNo1 = "34";
let myNo2 = "88";
let result = myNo1 + myNo2;
console.log(typeof result, result);
console.log("--------------------------------");

//if we add + before string
let result2 = +myNo1 + +myNo2;
console.log(typeof result2, result2);
console.log("--------------------------------");

//! backticks
let myAge = 24;
let myName = "Abhishek Thakur";
console.log("My name is " + myName + " and my age is " + myAge);
console.log(`My name is ${myName} and my age is ${myAge}`);
