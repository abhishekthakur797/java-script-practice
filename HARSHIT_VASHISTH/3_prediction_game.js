// nested if else
// Winning number 19
// 19 your prediction in right
// 10 low low
// 30 too high

let WinningNumber = 19;
let userGuess = +prompt("Guess a number");
// it is storing the value in string "15"
// to convert in number just add +before
console.log(typeof userGuess, userGuess);
if (userGuess === WinningNumber) {
  console.log("Wholla You Guessed it Wright!");
} else {
  if (userGuess < WinningNumber) {
    console.log("too low !!!");
  } else {
    console.log("Too high!!!");
  }
}
