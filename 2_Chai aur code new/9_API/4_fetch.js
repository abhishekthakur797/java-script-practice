//! VIDEO NO 41 - fetch in javascript.
// previously fetch was available in browser, previously it was running on request and more previously on xhrRequest/XMLHttpRequest
// Later it was natively introduced in node.js.
// by using we can send headers, core, navigate, body, method.
// first it will execute fetch then it will implement promise setTimeout or other method (see diagram video no: 37)


// getting data from api.
async function getUserData() {
    try {
      const response = await fetch(
        "https://api.github.com/users/abhishekthakur797"
      );
      // some time conversion also take time thats why we use await here
      const data = await response.json();
    } catch (error) {
      console.log("Error:", error);
    }
  }
  getUserData();
  