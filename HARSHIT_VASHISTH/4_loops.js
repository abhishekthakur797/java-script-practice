// if else if
let temp = 35;
if (temp < 0) {
  console.log("Extremely Cold Stay inside");
} else if (temp < 10) {
  console.log("Too Cold !!");
} else if (temp < 20) {
  console.log("Cold !! ");
} else if (temp < 25) {
  console.log("You can go out side");
} else if (temp < 35) {
  console.log("You can go for swimming");
} else {
  console.log("Too Hot");
}

// switch statement
let day = 4;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
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
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

// While Loop
// print numbers from 0 to 9
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
console.log(`current value of i is: ${i}`);

let j = 0;
let total = 0;
while (j <= 10) {
  total = total + j;
  j++;
}
console.log(`the addition value of 1 to 10 is: ${total}`);

// for Loop
for (let k = 0; k < 10; k++) {
  console.log(k);
}

// Break statement
for (let l = 0; l <= 8; l++) {
  if (l == 3) {
    // it breaks the statement and prints l=2
    break;
  }
  console.log("break " + l);
}
// Continue statement
for (let m = 0; m <= 5; m++) {
  if (m == 3) {
    // the loops runs for m=1,2 and when it comes at m=3 loops don't goes down it check m=4
    continue;
  }
  console.log("Continue " + m);
}

// Do while loop // it will execute once if the condition is false or true
let n = 14;
do {
  console.log(n);
  n++;
} while (n <= 13);
