// ! VIDEO NO 40 : Promise in javascript.

// -> A Promise in JavaScript is an object that represents the eventual completion (or failure)
//    of an asynchronous operation and its resulting value.
// -> Real life example - getting files from computer/server, Payment processing.
// -> previously to use promise we have to install bluebird library. but now all
//    features comes in bluebird.

// Javascript run synchronous code first like console.log, function, loops, dialog etc.
// after that asynchronous code run executes like promise, setTimeout, fetch, async, eventListener, FileReader etc.

// We can also direct create variable (new Promise(function(resolve,reject){})) without storing in the variable.
const promiseOne = new Promise(function (resolve, reject) {
  // Async Task : DB Calls, Network calls, cryptography.
  setTimeout(() => {
    console.log("Async Task is complete");
    resolve(); // connects with .then
  }, 1000);
});

// Consumption
promiseOne.then(function () {
  console.log("Promise consumed");
});

// or we can directly do it without storing in a variable.
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async 2 Task is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Task Resolved");
});

// we can pass values in resolve.
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Abhishek", email: "bugsfinder99@gmail.com" }); // we can pass object, array,function.
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Abhishek", password: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

// Promise chaining allows multiple asynchronous operations to run in sequence.
// Each .then() returns a new promise, enabling the next operation to wait until the previous one resolves.
// .catch(): If any error happens in the promise or in any of the .then() blocks, this will catch and handle it.
// .finally() block runs cleanup code after a promise resolves or rejects, ensuring it always executes.
promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is resolve is rejected");
  });

// Async Await
// In async functions, await pauses execution until a promise resolves, making asynchronous code easier to read.
// pros : Cleaner and readable code-async/await makes code look synchronous, reducing nested chains and improving readability.
// pros : Easier Error Handling: With try...catch, handling errors becomes simpler, avoiding the need for multiple .catch() blocks.
// cons : Compatibility Issues in Older Browsers.
// cons : Sequential Execution by Default-Unless promises are handled in parallel, await will run each promise one after the other.
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ codingLang: "Javascript", extensionCode: ".js" });
    } else {
      reject("ERROR: Js went wrong");
    }
  }, 1000);
});

// The try-catch block is used when you want to handle errors with async/await syntax.
// which makes your asynchronous code look and behave like synchronous code.
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// getting data from api.
async function getUserData() {
  try {
    const response = await fetch(
      "https://api.github.com/users/abhishekthakur797"
    );
    // some time conversion also take time thats why we use await here
    const data = await response.json();
  } catch (error) {
    console.log("Error:", error);
  }
}
getUserData();
