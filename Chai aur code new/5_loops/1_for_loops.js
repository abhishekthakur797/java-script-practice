//* Video No 27 : for loops.

// Simple Loop
for (let i = 0; i < 10; i++) {
  const element = i;
  console.log(element);
}
console.log("-----------");

// if in for loops
for (let i = 0; i <= 2; i++) {
  if (i == 2) {
    console.log(`${i} is present in the loop.`);
  }
}
console.log("-----------");

// for loops in for loops.
// first it executes outer loop and run 5 times inner loop and it repeats the process.
for (let i = 0; i <= 5; i++) {
  console.log(`Outer Loop Value: ${i}`);
  for (let j = 0; j <= 5; j++) {
    console.log(`Outer Loop value: ${i} Inner Loop Value: ${j}`);
  }
}
console.log("-----------");

// Table Printing of 5 to 7.
for (let i = 5; i <= 7; i++) {
  console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(i, "*", j, "=", i * j); // 1st method of printing using commas
    // console.log(i + "*" + j + "=" + i * j); // 2nd method of printing using +
    console.log(`${i} * ${j} = ${i * j}`); // 3rd method using backticks
  }
}
console.log("-----------");

// loops in array

let myArray = ["India", "Australia", "South Africa", "England"];
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}
