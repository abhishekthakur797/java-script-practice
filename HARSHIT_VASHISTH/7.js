let fruits = ["apple", "mango", "oranges", "jackfruit"];
console.log(fruits.length);
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i].toUpperCase());
}

// const :: values can't be changed of const
const pi = 3.14;
console.log(`value of pi is ${pi}`);
// const for array
const fruit = ["kiwi", "coconut"];
fruit.push("mango");
console.log(`mango is pushed in const array: ${fruit}`);
// for of loop
// for in loop
// array destructing
const myArray = ["value1", "value2"];
let [myVar1, myVar2] = myArray;
console.log("value of var1 ", myVar1);
console.log("value of var2 ", myVar2);
