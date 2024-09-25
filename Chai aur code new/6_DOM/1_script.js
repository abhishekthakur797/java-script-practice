//* Video No 31 : DOM introduction in javascript.
//* Video No 32 : All DOM selectors NodeList and HTMLCollection.

document.getElementById("heading").innerHTML = "This sentence is Changed";

// getElementsByClassName  returns a collection, so you need to specify which element in the
// collection you're targeting, like document.getElementsByClassName("heading")[0].
document.getElementsByClassName("heading")[0].innerHTML =
  "This is a new sentence";

// We don't have to write full line, we can store in a variable.

const heading = document.getElementById("heading");
heading.style.backgroundColor = "grey";
heading.style.padding = "5px";

// We can retrieve the value in 3 ways:
console.log(heading.innerHTML); // Retrieves the content, including HTML tags and child elements.
console.log(heading.innerText); // Retrieves only the visible text, excluding any hidden elements.
console.log(heading.textContent); // Retrieves all text, including hidden elements, but without HTML tags.

document.querySelector("h1"); // select first tag.
document.querySelector("#heading");
document.querySelector('input[type="password"]');

const MyUnorderedList = document.querySelector("li");
MyUnorderedList.style.backgroundColor = "red";

// querySelectorAll :: When we use this we have to deal with node list
const MyLi = document.querySelectorAll("li");
MyLi[2].style.backgroundColor = "green";

// We can also use loops in querySelectorAll
// To select elements by class name using querySelectorAll
// prefix the class name with a dot ('.itemList').
const myLinks = document.querySelectorAll("a");
myLinks.forEach((links) => {
  links.style.display = "flex";
  links.style.color = "white";
});

// if we use className we will get HTMLCollection[]
// can't run loop on that, we have to convert into array first.
const itemList = document.getElementsByClassName("item-list");
const convertedArray = Array.from(itemList);
convertedArray.forEach(function (li) {
  li.style.color = "orange";
});
