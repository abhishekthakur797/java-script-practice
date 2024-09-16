//* Video NO 23: THIS and arrow function in javascript
// Arrow was introduced in 2015(ES6)

// Arrow function

// Basic arrow function : in this function where {} are there you have to write to return to get value otherwise it will print undefined.
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(4, 4));

// implicit return :: arrow function in one line
const addNo = (num3, num4) => num3 + num4; // but in this you can directly write don't have to write return.
const userOne = (username) => ({ username: "Abhishek" }); // in this object can be defined but in ()
console.log(addNo(22, 22));
console.log(userOne());
