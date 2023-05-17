//! Printing
//? Don't use single quote because it is used in strings template
console.log("Hello javaScript");

//! Variables
//? You can not start with number in variable name you can use after text like value1 not 1value
//? You can use underscore(_) and $ symbol in variable name only
var firstName = "Abhishek";
console.log(firstName);

//! let keyword :: (ES2015:ES6)
//? In you can create many variable with same name but in let you can't it will give you error (SyntaxError: Identifier 'lastName' has already been declared))
let lastName = "Thakur";
console.log(lastName);
console.log(firstName + " " + lastName);

//! Constant
//? constant are not variables like var and let
const pi = 3.14;
console.log("Value of pI: " + pi);
