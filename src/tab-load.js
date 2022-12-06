//Create button listeners for tabs
const homeTabBtn = document.getElementById("home");
const aboutTabBtn = document.getElementById("about");
const contactTabBtn = document.getElementById("contact");

homeTabBtn.addEventListener("click", changeTab);

function changeTab(e) {
  const currentTab = document.querySelector('[data-selected]="true"');
  currentTab.dataset.selected = false;
}
