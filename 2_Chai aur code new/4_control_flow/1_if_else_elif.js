//* Video No 26 : Control flow in javascript in 1 shot.

// < (less than), > (greater than)
// <= (less than or equal to), >= (greater than or equal to)
// == : Equal to (loose comparison, type conversion allowed)
//. != : Not equal to (loose comparison, type conversion allowed)
// === : Strictly equal to (no type conversion)
//. !== : Strictly not equal to (no type conversion)

// if statement
const isUserLoggedInn = true;

if (isUserLoggedInn) {
  console.log("Welcome to our website");
}

// else statement

const temp = 23;
if (temp < 30) {
  console.log("Weather is perfect for walking");
} else {
  console.log("Weather is not great to go outdoor ");
}

// elif statement

const age = 18;
if (age < 10) {
  console.log("You are not allowed to use mobile");
} else if (age < 15) {
  console.log("You can use mobile but limited");
} else if (age <= 18) {
  console.log("You can use mobile freely");
}

// Multiple condition check

// Both condition has two be true.
const userLoggedIn = true;
const userDebitCard = true;

if (userLoggedIn && userDebitCard) {
  console.log("user can shop now from our website");
} else {
  console.log("user can't shop, T&C apply");
}

// one condition has to be true.
const userCash = false;
if (userDebitCard || userCash) {
  console.log("user can shop because he/she has money");
}

// one condition has to be true and from 2 condition one has to be true
if ((userLoggedIn && userDebitCard) || userCash) {
  console.log("User is logged in and also has money");
}
