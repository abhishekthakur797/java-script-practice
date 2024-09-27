//* Video NO 23: THIS and arrow function in javascript

// this keyword

const user = {
  username: "Abhishek",
  price: 999,
  WelcomeMessage: function () {
    console.log(`${this.username}, welcome to coding with IHD`);
  },
};
user.WelcomeMessage();
user.username = "Rahul";
user.WelcomeMessage();
console.log(this);

// if this keyword is printed in a function

function one() {
  console.log(this);
}
one(); // it prints ton of values
