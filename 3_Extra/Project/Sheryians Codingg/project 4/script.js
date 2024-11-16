//! It is for one Element.
// const element1 = document.querySelector("#element1");
// const imgElement1 = document.querySelector("#element1 img");

// element1.addEventListener("mousemove", function (details) {
//   imgElement1.style.left = details.x + "px";
//   imgElement1.style.top = details.y + "px";
// });

// element1.addEventListener("mouseenter", () => {
//   imgElement1.style.opacity = 1;
// });
// element1.addEventListener("mouseleave", () => {
//   imgElement1.style.opacity = 0;
// });

const element = document.querySelectorAll(".element");

element.forEach(function (ele) {
  // we have to target image, so we will target child nodes, if you console ele.childNodes[].
  // in the browser console you will se [1] text ,[2] image, [3] h1 like this.
  console.log(ele.childNodes);
  ele.addEventListener("mouseenter", function () {
    ele.childNodes[3].style.opacity = 1;
  });
  ele.addEventListener("mouseleave", function () {
    ele.childNodes[3].style.opacity = 0;
  });
  ele.addEventListener("mousemove", function (movement) {
    ele.childNodes[3].style.left = movement.x + "px";
    ele.childNodes[3].style.top = movement.y + "px";
  });
});
