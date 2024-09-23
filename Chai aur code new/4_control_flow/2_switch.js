//* Video No 26 : Control flow in javascript in 1 shot(25:00)

// Switch statement
// If the break statement is omitted, execution will continue to the next case until a break is encountered.
// but the default case will only execute if explicitly reached.

const week = 2;
switch (week) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Not Found");
    break;
}

// switch case using string
const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It's an apple!");
    break;
  case "banana":
    console.log("It's a banana!");
    break;
  case "orange":
    console.log("It's an orange!");
    break;
  default:
    console.log("Unknown fruit");
}
