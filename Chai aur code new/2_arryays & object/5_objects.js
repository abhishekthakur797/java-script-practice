//* Video NO 18: Object de-structure and JSON API

const courseDetails = {
  courseName: "Javascript",
  coursePrice: 999,
  courseInstructor: "Abhishek",
};

// Object De-structuring
const { courseName } = courseDetails;
console.log(courseName);
const { courseName: course } = courseDetails; // to shorten the variable name
console.log(course);

// React Code
const navbar = ({ company }) => {};

navbar((company = "Abhishek"));

// API : Application Programming Interface, we get values from backend.
// Previously we get values in xml() now we get values in JSON().

// JSON Code
// {
//     "name": "Steve",
//     "courseName": "Python",
//     "Price": "Free"
//   }

// We get api values in either JSON format or in array
[{}, {}, {}];
