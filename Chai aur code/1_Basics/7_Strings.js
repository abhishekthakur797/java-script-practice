//! Video No 11 Strings Advance
//! The more you read about string you become more strong in basics, learn from mdn docs.

//! String concatenation
const name = "Abhishek";
const age = 25;
console.log("My name is " + name + " and my age is " + age); // Hard and old one
console.log(`My Name is ${name} and my age is ${age}`); // Easy and modern (string interpolation using placeholder)
console.log("------------------------------------");

//! New ways to describe string with object
//! Methods in strings
const gameName = new String("Abhishek-ihd");
console.log(gameName); // gets the value in String with key value pair 0:A, 1:b, 2:c
console.log(gameName[0]); // we have so many prototype of string we can check with strings.
console.log(gameName.__proto__); // empty object but has the value in it.
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf("k")); // if character is not available it will get -1 as output.

const newGameName = gameName.substring(0, 2);
console.log(newGameName); // it starts with zero value pair but only print 2 letter.

const anotherGameName = gameName.slice(0, 2);
console.log(anotherGameName);

const userName = "   Root   ";
console.log(userName);
console.log(userName.trim());

const url = "https://google.com/search%what-is-java-script";
console.log(url.replace("java", "type"));

console.log(url.includes("google"));

console.log(gameName.split("-"));
