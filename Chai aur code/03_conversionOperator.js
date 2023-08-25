//! Conversion of datatypes
let marks = "33";
console.log(typeof marks, marks);

let marksType = Number(marks);
console.log(typeof marksType, marksType);

// "33" => 33
// "33abc" => NaN (NOt a Number) type of NaN is number
// true/false => 1/0
// null => 0
// undefined => NaN

//! Numbers to boolean
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn, booleanIsLoggedIn);
//1/0 => true/false
// "" => false
// "carl" => true

//! Numbers to string
let percentage=88;
let stringPercentage=String(percentage)
console.log(typeof stringPercentage,stringPercentage);

//! Number to negative value
let value=4
let negValue=-value
console.log(negValue);

//! Prefix and Postfix operator
let counter=199;
counter++;
console.log("Postfix value "+counter);
++counter;
console.log("Prefix value "+counter);
