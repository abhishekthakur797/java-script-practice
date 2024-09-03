//* VIDEO NO: 14 ARRAYS IN JAVASCRIPT

// [] : Square brackets, {} : Curly brackets, () : Round brackets or parentheses.
// An Array is a special variable that can hold more than one value at a time.
const myArr = [0, 1, 2, 3, 4, 5];
let mixedArray = [45, "Hello Javascript", true, null]; // Array can also hold different type of data.
const MyArray = new Array(1, 3, 4, 8, 9);

console.log(myArr);
console.log(mixedArray);
console.log(MyArray);

mixedArray[1] = "Hello Abhishek"; // We can change the value by accessing array index.
console.log(mixedArray);
console.log("----------------------------------");

// Arrays has properties and methods
let fruits = ["Mango", "Banana", "Papaya", "Orange"];
console.log(fruits);
console.log("To String:", fruits.toString());
fruits.push("Strawberry");
console.log("After Pushing:", fruits);
fruits.pop(); // Removes last array
console.log(fruits);
console.log("Length of fruit array:", fruits.length);
