// Function to add languages to li div.
function addLang(langName) {
  const li = document.createElement("li"); // Create a new <li> element
  li.innerHTML = `${langName}`; // Set the content of the <li> to the language name
  document.querySelector(".languages").appendChild(li); // Append the <li> to the <ul> with class "languages"
}
addLang("Python");
addLang("Java");

// Function to add languages to li div but in optimized way.
function optAddLang(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".languages").appendChild(li);
}
optAddLang("Kotlin");
optAddLang("Swift");

// Edit the values
const secondLang = document.querySelector("li:nth-child(2)");
secondLang.innerHTML = "Assembly";
