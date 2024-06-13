//? odd even
let day = 9;
if (day % 2 == 0) {
  console.log(`The given day ${day} is Even no`);
} else {
  console.log(`The given day ${day} is odd no`);
}
//? Drink item
let age = 8;
let drink;
if (age <= 10) {
  drink = "milk";
} else {
  drink = "Tea and Coffee";
}
console.log(drink);
//! Ternary operator
let myAge = 5;
let myDrink = age >= 7 ? "Water" : "coldrink";
console.log(myDrink);

//! and && and || or operator
//? && operator Example
let firstName = "Abhishek";
let userAge = 18;
if (firstName[0] == "A" && userAge >= 18) {
  console.log("Your name start with A and you are adult");
} else {
  console.log("Your age doesn't start with A");
}

//? or || operator
let marks12th = 60;
let marks10th = 70;
if (marks10th === 80 || marks12th === 60) {
  console.log("You are Eligible");
} else {
  console.log("You are not eligible");
}
