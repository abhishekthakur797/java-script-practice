//! String Indexing
let firstName = "Abhishek";
console.log("The 4th Letter of Abhishek is : " + firstName[3]);
console.log("-------------------------");

//! Length of a variable
console.log(
  "Total number of letter present in Abhishek is :" + firstName.length
);
console.log("----------------------------");

//! Trim Function
//it trims the space before and after the keyword
let language = "  javaScript  ";
console.log("Language name before trim: " + language);
console.log("Length of name before trim: " + language.length);
language = language.trim();
console.log(language);
console.log(language.length);
console.log("----------------------------");

//! toUpperCase() and toLowerCase()
console.log("UPPERCASE: " + firstName.toUpperCase());
console.log("LOWERCASE: " + firstName.toLowerCase());
console.log("----------------------------");

//! Slice()
console.log("SLICE 1: " + firstName.slice(0, 5));
//it will start from 0 indexing and end on indexing 5
console.log("SLICE 2: " + firstName.slice(0, 3));
//it will start form 0 indexing and end on indexing 3
console.log("SLICE 3: " + firstName.slice(1));
//it will start from index 1 to the last
console.log("SLICE 4: " + firstName.trim(2));
console.log("----------------------------");
