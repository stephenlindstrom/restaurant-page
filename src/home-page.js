import burgerImg from "./hamburger.jpg";
export { homePageLoad };

const homePageLoad = function () {
    const content = document.querySelector("#content");
    
    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "My Big Restaurant";
    content.appendChild(pageTitle);

    const image = document.createElement("img");
    image.src = burgerImg;
    image.height = 300;
    content.appendChild(image);

    const description = document.createElement("p");
    description.textContent = "The top new hamburber restaurant in the Valley!"
    content.appendChild(description);
};