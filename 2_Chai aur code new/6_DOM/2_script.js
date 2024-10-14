//! Video No 33 : How to create a new element in DOM.
//! DOM is a based on tree structure.

const parent = document.querySelector(".parent");
console.log("Parent Element:", parent); // <div class="parent">
console.log("Children Element:", parent.children); // HTMLCollection { 0: div.day, 1: div.day, 2: div.day, 3: div.day, length: 4 }
console.log("Children Element 1:", parent.children[1]); // <div class="day">
console.log("Children Element 1 Inner HTML:", parent.children[1].innerHTML); // Tuesday

// Loop for children element
for (let i = 0; i < parent.children.length; i++) {
  console.log(`Inner HTML of child ${[i]} : ${parent.children[i].innerHTML}`);
}
console.log("----------------");

// Styling
parent.children[2].style.color = "orange";

// accessing first and last children of an element.
console.log("first element of parent:", parent.firstElementChild.innerHTML);
console.log("Last element of parent:", parent.lastElementChild.innerText);

// Accessing parent through children
const dayOne = document.querySelector(".day");
console.log("Accessing Parent Element: ", dayOne.parentElement);
console.log("Sibling Element: ", dayOne.nextElementSibling.innerHTML);

// Accessing child nodes: node list counts line break, comment, text, div...etc.
console.log("NODES:", parent.childNodes);
