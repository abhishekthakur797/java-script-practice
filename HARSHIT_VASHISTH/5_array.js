//! push pop is faster than shift and unshift
let fruits = ["apple", "mango", "kiwi"];

console.log(typeof fruits, fruits);
console.log(Array.isArray(fruits));

// push pop shift unshift
// push add elements in last

fruits.push("strawberry");
console.log("after adding element using push: " + fruits);
// pop ->>> Removes elements from last
fruits.pop();
console.log(fruits.pop()); // Removes and returns the object eg it has kiwi stores in it
console.log("After removing last element using pop: " + fruits);

// unshift ->>> add elements in starting
fruits.unshift("watermelon");
console.log("After adding fruits in starting position: " + fruits);

//shift removes the object from starting position
fruits.shift(); // and the object will not be erased it will stored
console.log("After removing objects from starting position: " + fruits);
