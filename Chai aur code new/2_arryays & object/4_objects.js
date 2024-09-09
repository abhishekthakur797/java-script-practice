//* 17 Objects in JavaScript

// Combining Objects
const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 3: "d", 4: "e", 5: "f" };

const obj3 = Object.assign({}, obj1, obj2);
/**{} creates a new empty object as the target for merging. Without it,
 * the properties would merge into the first object (obj1), modifying it.
 * Using {} keeps the original objects unchanged and creates a new object (obj3). */
console.log(obj3);

// Simple Way to do that
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);
console.log("------------------------------");

// Database values are stored as objects, and we interact with them like this.
// Later, we will use these values in our operations.
// We retrieve the values in arrays.

const tinderUser = {
  id: 43,
  name: "Abhishek",
  isLoggedIn: false,
};

// To get keys, values, and entries of the object
console.log(Object.keys(tinderUser)); // ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser)); // [43, 'Abhishek', false]
console.log(Object.entries(tinderUser)); // [['id', 43], ['name', 'Abhishek'], ['isLoggedIn', false]]
console.log("name key present? :", tinderUser.hasOwnProperty("name"));
console.log("address key present? :", tinderUser.hasOwnProperty("address"));
console.log("------------------------------");

// Array of user data objects
const userData = [
  { id: 1, email: "user1@gmail.com" },
  { id: 2, email: "user2@gmail.com" },
];

// Access email of the second user
console.log(userData[1].email); // user2@gmail.com
