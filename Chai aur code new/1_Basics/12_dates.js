//* VIDEO NO 13: Dates in Javascript.

let myDate = new Date();
console.log(typeof myDate, myDate); // object
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log("----------------------");

let createMyDate = new Date(2024, 8, 12); // Create your own date (YYY MM DD)
console.log(createMyDate.toDateString());
let createMyDateTime = new Date(2004, 22, 8, 8, 24); // (YYYY M D H M)
console.log(createMyDateTime.toLocaleString());
