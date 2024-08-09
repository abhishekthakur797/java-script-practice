//* VIDEO 10: Strings in Javascript

// String Concatenation
const name = "Abhishek";
const age = 25;
console.log("My name is " + name + " and my age is " + age);
console.log(`my name is ${name} and my age is ${age}`);
console.log("------------------------------------");

// Methods in strings.
//* if we create a string and after that type in browser console console.log(userId.__proto__) it will show all the method and functions
//* and after string if we put dot(.) vs code will show all property.
const userId = new String("Abhishek-ihd"); // Way of describe string with object
console.log(userId); // gets the value in string with key value pair 0:A, 1:b.
console.log("Value of first key value: " + userId[0]);
console.log(userId.__proto__);
console.log("Converted to upper case: " + userId.toUpperCase());
console.log("Converted to lower case: " + userId.toLowerCase());
console.log("Length of the string: " + userId.length);
console.log("char at index 4:" + userId.charAt(4));
console.log("check if s is present in which index: " + userId.indexOf("s"));
console.log("Print only first letter: " + userId.substring(0, 4));
console.log("Print after Abhi:" + userId.substring(4, 8));

const boot = "  Root  ";
console.log(boot.trim()); // it deletes blank space from both side.

const url = "https://google.com/search%search%what-is-java-script";
console.log("Replace java with type: " + url.replace("java", "type"));

console.log("is google present is the url?: " + url.includes("google"));
console.log("is bing present is the url?: " + url.includes("bing"));

console.log(userId.split("-"));
console.log(url.split("/"));
