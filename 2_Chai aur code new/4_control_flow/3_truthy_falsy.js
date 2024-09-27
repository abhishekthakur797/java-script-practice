//* Video No 26 : Control flow in javascript in 1 shot(30:00)

// Falsy values : false, 0, -0, BigInt on, "", null, undefined, Nan.
// Truthy Values : true, "0", 'false', " ", [], {}, function(){}

const userMail = [];
if (userMail) {
  console.log("Got the user mail");
} else {
  console.log("user mail not present");
}

// check array is empty or not
if (userMail.length === 0) {
  console.log("Array is Empty");
}

// check object is empty are not
const CheckObj = {};

if (Object.keys(CheckObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : works on null and undefined.
let val1;
val1 = null ?? 10; // it is used for safety check to handle it.
console.log(val1);

// Terniary Operator
const discount = 10;
discount >= 10 ? console.log("offer is good") : console.log("Not good offer");
