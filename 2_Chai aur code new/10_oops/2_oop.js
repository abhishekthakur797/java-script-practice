//! VIDEO NO 42 : Object Oriented in Javascript (10:00)

// Object Literal
const user = {
  username: "abhishek",
  loginCount: 3,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from DB");
    console.log(`username: ${this.username}`); // this defines to the current context.
    console.log(this);
  },
};

console.log(user);
console.log("-----------------");
console.log(user.getUserDetails()); // why we get undefined??

// constructor function
