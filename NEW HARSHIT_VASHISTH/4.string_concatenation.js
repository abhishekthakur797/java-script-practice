//? Add to string
let myNo1 = "37";
let myNo2 = "89";
let result = myNo1 + myNo2;
console.log(typeof result, result);

//*if we add + before string
let result2 = +myNo1 + +myNo2;
console.log(typeof result2, result2);

let myAge = 24;
let myName = "Abhishek";
console.log("my name is " + myName + " and my age is " + myAge);
console.log(`my name is ${myName} and my ages is ${myAge}`); //backticks
console.log(
  `my name is ${myName} and my age is ${myAge} and marks in maths is ${myNo1} and in computer science is ${myNo2}`
);
