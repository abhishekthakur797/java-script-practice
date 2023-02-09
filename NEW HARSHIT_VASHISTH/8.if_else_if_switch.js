//!if else if
let temp = 22;
if (temp < 0) {
  console.log("don't go out side");
} else if (temp < 10) {
  console.log("Go if work is important");
} else if (temp < 20) {
  console.log("Suitable for walk");
} else if (temp < 30) {
  console.log("Perfect weather to play sports");
} else if (temp < 40) {
  console.log("Hot weather");
} else {
  console.log("too hot");
}

//! switch statement
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day!!");
}
