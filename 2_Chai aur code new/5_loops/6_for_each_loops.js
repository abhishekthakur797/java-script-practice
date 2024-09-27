//* Video No 29 : High Order Array loops(21:00)
//! For Each Loop.

const coding = ["Javascript", "Python", "Java", "cpp", "Kotlin"];
// function is callback function thats why it has no name.
coding.forEach(function (val) {
  console.log(val);
});
console.log("---------------");

// printing using arrow function
coding.forEach((val) => {
  console.log(val);
});
console.log("---------------");

// if a function is written we also call back to use it.

function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);
console.log("---------------");

// We can also print other thing using for each loop.
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
console.log("---------------");

// objects in array
const myCoding = [
  {
    languageName: "Javascript",
    languageExtension: "js",
  },
  {
    languageName: "python",
    languageExtension: "py",
  },
  {
    languageName: "java",
    languageExtension: "java",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
