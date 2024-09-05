// 16: Objects in JavaScript
// DOM and Objects are very important in JavaScript.

// Object can be declared in two ways: literal and constructor.

// Creating a symbol for a unique ID
const uniqueID = Symbol("id");

// Object literal
const userOne = {
  name: "Abhishek",
  "full name": "Abhishek Thakur", // String key with space
  age: 25,
  location: "India",
  Email: "abhishek797@gmail.com",
  isLoggedIn: false,
  [uniqueID]: 124, // Unique Symbol Property
};

// Accessing object properties
console.log(userOne);
console.log("User one Location:", userOne.location); // Dot notation
console.log("User one Email:", userOne["Email"]); // Bracket notation (square brackets)
console.log("User one full Name:", userOne["full name"]); // Bracket notation for keys with spaces
console.log("user one Unique ID:", userOne[uniqueID]); // Accessing the symbol property

// Changing values in the object
userOne.name = "James Bond"; // Changing the 'name' property
delete userOne.location; // Deleting the property

// Adding a method to the object
userOne.welcomeGreeting = function () {
  console.log(`Hello JS user, ${this.name}`);
};

userOne.welcomeGreeting();
Object.freeze(userOne); // Freezing the object to prevent further modifications (optional)
console.table(userOne);
console.log("---------------------------------");

// Functions in Objects
let car = {
  model: "Tesla",
  drive: function () {
    console.log("Driving a ", this.model);
  },
};
car.drive();
console.log("---------------------------------");

// Defining object using constructor. single Ton Object
const userTwo = new Object();
userTwo.name = "Steve Smith";
userTwo.age = 34;
userTwo.location = "Australia";

console.log(userTwo);
console.log("---------------------------------");

// Defining a properties in empty object. Non Single Ton Object
const userThree = {};
userThree.name = "Joe Root";
userThree.age = 35;
userThree.location = "England";

console.log(userThree);
console.log("---------------------------------");

// Nested Object
let userDetails = {
  name: "Travis Head",
  address: {
    HouseNO: 5,
    Locality: "Main Street near white house",
    District: "Bengaluru",
    State: "Karnataka",
    Zip: 580088,
    Country: "India",
  },
};

console.log(userDetails);
console.log("To Access Exact Property:", userDetails.address.District);
