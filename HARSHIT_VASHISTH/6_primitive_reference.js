// Primitive vs reference data types
let num1 = 6;
let num2 = num1;
console.log("Value of num1 is ", num1);
console.log("value of num2 is ", num2);
num1++;
//todo:  after incrementing the value only num 1 values changes
console.log("After incrementing the value of num1 is ", num1);
console.log("After incrementing the value of num2 is ", num2);

// reference type
// array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
//todo: both values changes of array 1 and 2
array1.push("item3");
console.log("after adding item3");
console.log("array1", array1);
console.log("array2", array2);
console.log("is array 1 and 3 are same : ", array1 === array2);

//! how to create clone array and both array should have separate storage
let array3 = ["bla", "bla bla"];
let array4 = [].concat(array1);
// to duplicate the array a new
let array5 = [...array1];
console.log("is array 3 and 4 is same: ", array3 === array4);
