//! Topics Covered - const let var table printing with console
const accountId = 13343;
let accountEmail = "Abhishek@ihd.com"
var accountPassword = "24242"
accountCity = "London"
let accountState

// You can't change the value of const the value is Locked
// in previous time var is used, the developer uses the same keyword it creates the mesh
// Later on let keyword introduced then the developer can't use the same keyword but the values can be changed.
//!Prefer not to use var because of issue in block scope and functional scope

// accountId=3343;
accountEmail = "abhishek@google.com"
accountPassword = "3353"
accountCity = "Paris"

console.log("the user account id is: " + accountId);

//! To Present data of many logs use table function
console.table([accountId, accountEmail, accountPassword, accountCity])