import { homePageLoad } from "./home-page";
import { menuPageLoad } from "./menu-page";

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
