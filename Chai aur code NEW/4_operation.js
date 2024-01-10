//! Video NO :: 6 :: Why string to number conversion is confusing

//! Basics Operation
console.log(0 + 1, 2 - 1, 1 * 1, 1 / 1); // Basics
console.log(2 ** 10); // Power of a Number
console.log(21 % 3); // Remainder of a Number

//! String Add
let str1 = "Kane";
let str2 = "Williamson";
console.log(`Addition of Two String Values ${str1} ${str2}`);

//! Complex Situation
//? If string first it will treat as a string
//? Number comes first, then it adds all the numbers, followed by string.
console.log("1" + 2); // Output 12
console.log(1 + "2"); // Output 12
console.log("1" + "2"); // Output 12
console.log("1" + 2 + 2); // Output 122
console.log(1 + 2 + "2"); //! Output 32
console.log(3 + ((4 * 5) % 3)); // Don't use in real life

//! Prefix and Postfix
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
