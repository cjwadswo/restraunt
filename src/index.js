import "./styles.css";
import myImage1 from "./image1.jpg";
import myImage2 from "./image2.jpg";
import myImage3 from "./image3.jpg";

const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");

const homeTabBtn = document.getElementById("home");
const aboutTabBtn = document.getElementById("about");
const contactTabBtn = document.getElementById("contact");

homeTabBtn.addEventListener("click", changeTab);

function changeTab(e) {
  let currentTab = document.querySelector('[data-selected="true"]');
  currentTab.dataset.selected = false;
  console.log(e.target);
}
