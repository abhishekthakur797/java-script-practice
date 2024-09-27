//* 22 Scope level and mini hoisting in javascript. :: Re-watch when completed

// We can create function in instead Loop and function can be created in if-else
function one() {
  const username = "Abhishek";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website); // it is trying to get the value outside of the the scope it can be only accessed or used inside curly bracket.
  two();
}
one();

// Scope in if else.
if (true) {
  const username = "Abhishek";
  if (true) {
    const website = " youtube";
    console.log(username + website);
  }
  // console.log(website); // it is trying to get the value outside of the the scope it can be only accessed or used inside curly bracket.
}
// console.log(username);
