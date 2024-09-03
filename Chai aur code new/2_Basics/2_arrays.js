//* Video No : 15 Arrays Part 2

let marvelHeros = ["Iron men", "Captain America", "Thor", "Hulk"];
let dcHeros = ["Superman", "Batman", "Flash"];

let allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);

// spread operator :: in this method we can add multiple arrays.
// in concat we have to do multiple calls => let allNewHerosConcat=marvelHeros.concat(dcHeros).concat(indianHeros)
let indianHeros = ["Shaktiman", "Krish"];
let allNewHeros = [...marvelHeros, ...dcHeros, ...indianHeros];
console.log(allNewHeros);
console.log("-------------------");

// The flat() method is used to flatten nested arrays into a single-level array
let depthArrays = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, [12, 13]]]];
let depthToSimpleArray = depthArrays.flat(Infinity);
console.log(depthToSimpleArray);
