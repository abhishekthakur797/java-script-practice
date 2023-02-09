//! While Loop
let i = 0;
while (i <= 9) {
  console.log(i);
  i++;
}
console.log(`The current value of i is ${i}`); //* when 9 finishes it goes out the loop and print 10 but when it goes inside the condition checks and does't execute

//? while loop another example
let total = 0;
let j = 0;
while (j <= 100) {
  total = total + j;
  j++;
}
console.log(`The Total of number 1 to 10: ${total}`);

//! for loop
//? if you use let the code will not execute outside the loop
//? if you use var the code will execute outside the loop
for (let k = 1; k <= 5; k++) {
  console.log(k);
}
