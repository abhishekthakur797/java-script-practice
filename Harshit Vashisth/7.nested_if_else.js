//! Nested if else
//? User guessing number
let winningNumber = 17;
let userGuess = +prompt("Guess the NO"); //* if you don't add + before prompt it will take the value as string
if (userGuess === winningNumber) {
  console.log(`you guessed the right no ${userGuess}`);
} else {
  if (userGuess < winningNumber) {
    console.log("Too Low");
  } else {
    console.log("Too High");
  }
}

//!if else if
//? to run this code in terminal comment out the upper code
let temp = 22;
if (temp < 0) {
  console.log("don't go out side");
} else if (temp < 10) {
  console.log("Go if work is important");
} else if (temp < 20) {
  console.log("Suitable for walk");
} else if (temp < 30) {
  console.log("Perfect weather to play sports");
} else if (temp < 40) {
  console.log("Hot weather");
} else {
  console.log("too hot");
}
