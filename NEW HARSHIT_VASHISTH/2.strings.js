//! String Indexing
let firstName = "Abhishek";
console.log(firstName[3]);
console.log(firstName[5]);
console.log("Length of Abhishek word: " + firstName.length);

//! trim() function
let lastName = " Thakur  ";
console.log(lastName);
console.log("Length of last name before trim:" + lastName.length);
lastName = lastName.trim();
console.log(lastName);
console.log("Length of last name after trim:" + lastName.length);

//! toUpperCase() and toLowerCase()
console.log("UPPERCASE CONVERT: " + firstName.toUpperCase());
console.log("LOWE CASE CONVERT: " + firstName.toLowerCase());

//! Slice()
console.log("SLICE: " + firstName.slice(0, 5));
console.log("SLICE 2 : " + firstName.slice(1)); //? it will start from 1 to end
