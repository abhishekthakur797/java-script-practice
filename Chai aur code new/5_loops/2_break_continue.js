//* Video No 27 : break and continue[19:00]

// Break : exits the current loop or switch statement.
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log(`Detected ${i}`);
    break;
  }
  console.log(`Value of i is ${i}`);
}
console.log("---------");

// Continue : skips the current iteration and proceeds to the next iteration in a loop.
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log(`Detected ${i}`);
    continue;
  }
  console.log(`Value of i is ${i}`);
}
