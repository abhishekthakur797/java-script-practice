//? don't use single quote(') because it is used in string template
console.log("Hello World");

//! Variables
var firstName_ = "Abhishek";
console.log(firstName_);

//! Naming Variables
//? you can not start with keyword starting with number like 1value(X) it can used as value1
//? you can use _ and $ symbol only in variables name
//? underscore symbol example => _firstname, first_name , firstName_ ( snake case writing )
//? dollar symbol example => $firstname , first$name

//! Let keyword (ES2015:ES6)
//? in var you can create many variables with same name but in let you can't (SyntaxError: Identifier 'lastName' has already been declared)
let lastName = "Thakur";
console.log(lastName);

//! Constant
//? you cant say const a variable, let and var are variable
const pi = 3.14;
console.log("Value of PI: " + pi);
console.log("FULL NAME: " + firstName_ + " " + lastName);
