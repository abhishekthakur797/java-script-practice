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
