//* VIDEO NO 20: Functions with objects and array in javascript.

// If you are a situation where you don't know how many parameters will come from user.

function addCartPrice(...num) {
  return num;
}
console.log(addCartPrice(129, 87, 200, 76));

// If we pass two other values with ...argument
function addCartPrice(price1, price2, ...price) {
  return price;
}
console.log(addCartPrice(99, 199, 299, 399)); // 99 and 199 goes to price1 and price2 and rest goes to price argument

// using object in functions
const product1 = {
  productName: "Play station 5",
  price: 49999,
};

function handleObject(anyObject) {
  console.log(
    `Product name is ${anyObject.productName} and price of the product ${anyObject.price}`
  );
}

handleObject(product1);
