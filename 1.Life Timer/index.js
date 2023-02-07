let isDobOpen = false;
let dateOfBirth;
const settingsCog = document.getElementById("settings-button");
const settingsContent = document.getElementById("settings-content");
const initialText = document.getElementById("initial-text");
const afterDobText = document.getElementById("after-dob-button");

const toggleDobSelector = () => {
  if (isDobOpen) {
    settingsContent.classList.add("hide");
  } else {
    settingsContent.classList.remove("hide");
  }
  isDobOpen = !isDobOpen;
  console.log("Toggle", isDobOpen);
};
settingsCog.addEventListener("click", toggleDobSelector);
settingsCog.addEventListener("click", toggleDobSelector);
