//! Video No 33(18:00) : How to create a new element in DOM.

// Creating Element (div, h1, p, etc...)
const div = document.createElement("div"); // Creates a new 'div' element in memory
console.log(div);

// Adding class and ID to the 'div' element
div.className = "main"; // Assigns the class "main" to the 'div'
div.id = "myId"; // Assigns the ID "myId" to the 'div'

div.setAttribute("tittle", "new tittle");
div.style.backgroundColor = "green";

// Adding text using innerText (simple but not optimized)
const addText = document.createTextNode("Abhishek kumar Thakur");
// Adding text using innerText (simple but not optimized)
div.appendChild(addText); // Adds text "Abhishek Thakur" directly (simple method, but may not be ideal for large texts or performance)

// At this point, everything is created in memory but not yet visible on the webpage.
// We need to attach the 'div' to the DOM for it to display.

document.body.appendChild(div);
