import { worksData, createWorksElem } from "./datas.js";
import { linksData, createElement } from "./link.js";

const navButtons = document.getElementsByClassName("nav");
for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      const dest = document.querySelector(e.target.getAttribute("href"));
      dest.scrollIntoView({ behavior: "smooth" });
    },
    false
  );
}

const project = document.getElementById("projects-parent");
createWorksElem(worksData, project);
const link = document.getElementById("profile-link");
createElement(linksData, link);
