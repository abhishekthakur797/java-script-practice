//* Video No 24 : Immediately Invoked Function Expressions IIFE

// IIFE Where function can run without implementing the function.
// but the function should be write in ()
// if you write a function a save you code the code editor will put ; after the function and if execute IIFE (); it will not run
// don't put two semi colon one in function and one in execution other wise the code will not run.

// first example :: Named IIFE
(function DBConnectionCheck() {
  console.log("Database Connected");
})();

// 2nd example :: SIMPLE IIFE
(() => {
  console.log("2nd Database connected");
})();

// 3rd Example :: PARAMETER PASSING IN IIFE
((name) => {
  console.log(name);
})("Abhishek");
