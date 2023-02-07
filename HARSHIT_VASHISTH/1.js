console.log("hello");

//! Variables => can store some information and use if later or change
var firstName = "Abhishek";
var lastName = "Thakur";
console.log(firstName + " " + lastName);
console.log("-----------------------------------");

//! Let Keyword
let age = 24;
console.log(age);
console.log("-----------------------------------");

//! Declare constant
const pi = 3.14;
console.log(pi);
console.log("-----------------------------------");

//! String Indexing
let city = "Patna";
// p  a   t   n   a
// 0  1   2   3   4
console.log("the third letter at index 2 is :: " + city[2]);
console.log("The length of patna word is :: " + city.length);
console.log("-----------------------------------");

// String function
// Trim function
let mobile = "  samsung  ";
console.log(mobile);
console.log("The length of samsung keyword with spaces is :" + mobile.length);
// we have to create a new string for the trim... string is immutable
let newMobile = mobile.trim();
console.log(newMobile);
console.log("After trim the length of samsung is : " + newMobile.length);
console.log(newMobile.toUpperCase());
console.log(newMobile.toLowerCase());
// Slice method
let newString = newMobile.slice(0, 4);
console.log(newString);
console.log("-----------------------------------");

//! Type of operator
// String, number,booleans,undefined,null,BigInt,Symbol
let num = 45;
console.log(typeof num);
console.log(typeof mobile);
// convert number to string 22=> "22"
console.log(typeof (age + ""));
let no = 56;
no = String(no);
console.log(typeof no);
// convert string to number
let myStr = "34";
console.log("String to number: " + typeof +myStr);
myStr = Number(myStr);

//String concatenation
let str1 = "Abhishek";
let str2 = "Thakur";
let fullName = str1 + " " + str2;
console.log(fullName);

// How to add two strings
let no1 = "55";
let no2 = "45";
let addNo = +no1 + +no2;
console.log("Adding string " + addNo);

// template String
let aboutMe = `My name is ${fullName} and my age is ${age}`;
console.log(aboutMe);

// checking type and value at the same time
console.log(typeof fullName, fullName);

// BigInt
console.log(Number.MAX_SAFE_INTEGER);
let largeNo = BigInt(979797979879797097907097097907);
let largeNo2 = 5235252525252252542522n;
console.log(typeof largeNo, largeNo);

//! Booleans and Comparison Operator

let num1 = 5;
let num2 = 3;
console.log(num1 > num2);

//== compares two values, === compares value and data type both at same time
