// Truthy and falsy vales (if else)
let age = 5;
if (age > 18) {
  console.log("adult");
} else {
  console.log("not adult");
}

let age1 = 15;
let drink;
if (age1 >= 5) {
  drink = "coffee";
} else {
  drink = "milk";
}
console.log(drink);

//! Ternary operator / conditional operator
let age2 = 56;
let food = age >= 5 ? "Pizza" : "milk";
console.log(food);

//! Falsy values
// in first name if the values are empty,false," ",null,undefined,0 else loop will execute
// in first name any value is given it it will execute if value
let firstName = "";
if (firstName) {
  console.log(firstName);
} else {
  console.log("first kinda empty");
}

// and or operator
// in and/&& operator all the condition should be then if condition wil execute
let name = "Abhishek";
let ageCheck = 24;
if (name[0] === "A" && ageCheck > 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

// in or/|| operator any one condition should be true then if condition will execute
if (name[0] === "A" || ageCheck > 30) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

// Nested if else
