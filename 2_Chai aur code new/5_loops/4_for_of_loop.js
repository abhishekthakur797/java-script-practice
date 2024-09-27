//* Video No 29 : High Order Array loops.

//! for of loop(array specific loops).
// in this loop we don't have to declare length of array or variable.
// ["","",""] and [{}, {}. {}] :: these can this type of array easily.
// In place of 'value', you can use any variable name (e.g., i, num, element, etc.).

const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
  console.log(value);
}
console.log("-----------");

const greetings = "Hello Bhai";
for (const greet of greetings) {
  console.log(greet);
}
console.log("-----------");

// Maps :: The Map objects holds key-value pairs(only holds unique values).
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("RU", "Russia");
console.log(map); // Basic Printing.

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// for of loop is not iterable in object.
