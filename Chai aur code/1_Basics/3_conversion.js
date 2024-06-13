//! Video NO :: 6 :: Datatype conversion

//! String to Number
let score = "56";
let valueInNumber = Number(score);
console.log(typeof score, score); // Output :: Number 33

// can we convert a string where the value is mixed with numbers and strings?
let score2 = "43abc";
let valueInNumber2 = Number(score2);
console.log(valueInNumber2); // Output :: NaN :: but here the type is not mention.

let score3 = null;
let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3, valueInNumber3); // Output :: number 0

let score4 = undefined;
let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4, valueInNumber4); // Output :: number NaN

let score5 = true;
let valueInNumber5 = Number(score5);
console.log(typeof valueInNumber5, valueInNumber5); // Output :: number 1

let name = "Mitchell";
let nameInNumber = Number(name);
console.log(typeof nameInNumber, nameInNumber); // Output :: number NaN
console.log("--------------------------------");

//! Number to Boolean
let answer = 1;
let checkAnswer = Boolean(answer);
console.log(typeof checkAnswer, checkAnswer); // Output :: boolean true
console.log("-----------------------------");
/*  1=> true
    0=> false
    ""=>false
    "John"=>true 
*/

//! Number to string
let number = 5;
let NumberToString = String(number);
console.log(typeof NumberToString, NumberToString); // Output :: string 5

//! Number to negative value
let value = 4;
let negValue = -value;
console.log(negValue);

//! Prefix and Postfix operator
let counter = 199;
counter++;
console.log("Postfix value " + counter);
++counter;
console.log("Prefix value " + counter);
