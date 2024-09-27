//* VIDEO NO 4: LET CONST AND VAR

const accountUserId = 797; // const variable can't be change.
let accountEmail = "abhishek@ihd.com";
var accountPwd = "Abhishek@#1234";
accountCity = "Bengaluru";
let State;

console.table([accountUserId, accountEmail, accountPwd, accountCity, State]);

// accountUserId = 45; // TypeError: Assignment to constant variable.

console.log("After changing the value in let var and ");

accountEmail = "abhishek2@ihd.com";
accountPwd = "abhishek2@#1234";
accountCity = "Darbhanga";

console.table([accountUserId, accountEmail, accountPwd, accountCity]);

//! Notes - Prefer not to use var because of issue of block and functional scope.
// 'let' is preferred over 'var' because 'let' is block-scoped (restricted within {}) and 'var' is function-scoped (accessible outside the block).
