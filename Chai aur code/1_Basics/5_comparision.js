//! Video No :: 8 :: Comparison of datatypes in javascript
//! While complex code can serve as a learning tool, prioritize clarity and maintainability for real-world projects.

console.log(2 > 1, 2 >= 1, 2 < 1, 2 != 1, 2 == 2, "2" === 2); //! Basics Comparison (=== checks datatypes with value)

console.log("3" > 1); // true Javascript not strictly checking datatypes
console.log("-----------------");

//! Confusing comparison
// The reason is that an equality check == and comparison check > >= < <= work differently.
// Comparison > >= < <= convert null to a number, treating it as 0.
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true (in this case null is treated as 0 >= True)
console.log("-----------------");

//! Strict check (check value with datatype)
console.log("4" === 4);
