const bulb = document.querySelector("#bulb");
const button = document.querySelector("button");
let buttonClick = true;

button.addEventListener("click", function () {
  if (buttonClick == true) {
    bulb.style.backgroundColor = "yellow";
    button.innerText = "Click Here to OFF";
    button.style.backgroundColor = "red";
  } else {
    bulb.style.backgroundColor = "white";
    button.innerText = "Click her to ONN";
    button.style.backgroundColor = "green";
  }
  // Toggle the state
  buttonClick = !buttonClick;
});