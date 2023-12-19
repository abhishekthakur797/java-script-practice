//! Video NO :: 4 Variables and constant
//? Assume we build e-commerce site, user registers with name, id, email, city, etc. and we have to store the data.

const accountId = 456;
let accountEmail = "abhishek@google.com";
var accountPwd = "34343";
accountCity = "New Delhi";
let accountState; // Undefined

// Only Use let don't use var because of issue in block scope and functional scope
/* var can be re-declared in the same scope without any error, which can lead to 
accidental overwriting of variables. let and const do not allow re-declaration in 
the same scope, and they will throw a SyntaxError if attempted. */

//accountId=45 // You can't change the value of const (Assignment to constant variable.)
console.log(accountId);
accountEmail = "new@email.com";
accountPwd = "New Password";
accountCity = "New City";

//! To Present data of many logs use table function
console.table([accountId, accountEmail, accountPwd, accountCity, accountState]);
