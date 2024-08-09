//* VIDEO NO 8: Comparison of Data Types in JavaScript

console.log(2 > 1, 2 >= 1);
console.log(2 < 1, 2 <= 1);
console.log(2 == 2, 2 === "2"); // === checks value and datatype
console.log(2 != 1);
console.log("3" > 1); // JS loosely checks datatypes
console.log("-----------------");

//* Confusing Comparisons: Not Important
// null is treated as 0 in comparisons
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log("-----------------");

// undefined is NaN in comparisons, always false
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
