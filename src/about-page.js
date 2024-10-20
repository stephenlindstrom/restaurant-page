export { aboutPageLoad };

const aboutPageLoad = function() {
    const content = document.querySelector("#content");

    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "About Page";
    content.appendChild(pageTitle);

    const restaurantInfo = document.createElement("p");
    restaurantInfo.textContent = "My Big Restaurant was first founded in 1976 by Wally Jones. He had a vision for a restaurant that served great tasting food in a friendly environment.";
    content.appendChild(restaurantInfo);
};