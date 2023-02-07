// arrays are good but not sufficient
// objects are reference type
const person = { name: "Abhishek", age: 24 };
console.log(typeof person, person);
console.log(`my name is ${person.name} and i am ${person.age} years old`);

const consumer = {
  name: "james",
  age: 54,
  hobbies: ["cricket", "Football"],
};
console.log(consumer);
console.log(
  `he is ${consumer.name} ${consumer.age} years old he like to play ${consumer.hobbies}`
);

// how to add key pair to objects
consumer.gender = "Male";
console.log(consumer);
// bracket notation
console.log(consumer["name"]);

// Difference b/w dot and bracket notation
//! We cannot write any variable name using space, in javaScript variables are stored in string so we can use like this
const student = {
  name: "Jos",
  "roll no": 5,
  "student hobbies": "playing sports",
};
console.log(student);
