import { homePageLoad } from "./home-page";
import { menuPageLoad } from "./menu-page";
import { aboutPageLoad } from "./about-page";

const clearContent = function () {
    const content = document.querySelector("#content");
    content.textContent = "";
};

homePageLoad();

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
    clearContent();
    menuPageLoad();
});

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    clearContent();
    homePageLoad();
});

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", () => {
    clearContent();
    aboutPageLoad();
});
