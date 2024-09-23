//* Video NO 28 : While and do while loop in Javascript

// Simple while loop.
let i = 0;
while (i <= 10) {
  console.log(`Value of index is ${i}`);
  i = i + 2;
}
console.log("-------------");

// While loop for array.
let myArray = ["India", "England", "Australia", "New zealand", "South Africa"];
let arr = 0;
while (arr < myArray.length) {
  console.log(`Cricket Team Rank ${arr + 1} : ${myArray[arr]}`);
  arr++;
}
console.log("-------------");

// do while Loop :: it will execute atleast one time.
let score = 14;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
