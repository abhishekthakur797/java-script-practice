//* VIDEO NO 19: Functions and Parameters in JavaScript

// Basic function that logs a name
function sayMyName() {
  console.log("Abhishek");
}
sayMyName();

// Function to add two numbers and log the result
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

// Example calls to addTwoNumbers with different argument types
addTwoNumbers(5, 6); // 11
addTwoNumbers(5, "6"); // "56" (string concatenation)
addTwoNumbers(5, "a"); // "5a" (string concatenation)

// Explanation of console.log behavior
// If you print inside the function, no need to use console.log again when calling it.
// If you return a value from a function, you need console.log to print the result outside the function.
// Example: This will log undefined because addTwoNumbers doesn't return anything.
const result = addTwoNumbers(20, 20); // 40
console.log("Result of 1st function: ", result); // undefined

// Function that returns the sum of two numbers
function addTwoNumbers2(num3, num4) {
  return num3 + num4; // No code will run after 'return'
}

const result2 = addTwoNumbers2(25, 25); // 50
console.log("Result of 2nd function: ", result2);
console.log("----------------------------------");

// Function with default parameter
function loginUserMessage(username = "no user name") {
  return `${username} just logged in`;
}

// Example calls to loginUserMessage with and without arguments
console.log(loginUserMessage("Abhishek")); // Abhishek just logged in
console.log(loginUserMessage()); // no user name just logged in
