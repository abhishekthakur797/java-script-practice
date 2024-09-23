//* Video No 29 : High Order Array loops (14:00)

//! for in loops

const myObject = {
  js: "JavaScript",
  py: "Python",
  rb: "Ruby",
  cpp: "C++",
};

for (const key in myObject) {
  console.log(`${key} is file of ${myObject[key]}`);
}
console.log("------------");

// if we want to directly print keys in array using for in loops it will only print keys only (0,1,2....)
const myLang = ["js", "py", "cpp", "swift"];
for (const key in myLang) {
  console.log(myLang[key]);
}
console.log("------------");

// for-in-loop in maps :: can iterate for in loops.
