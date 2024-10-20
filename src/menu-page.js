export { menuPageLoad };

const menuPageLoad = function () {
    const content = document.querySelector("#content");

    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "Menu";
    content.appendChild(pageTitle);

    const menu = document.createElement("ul");
    const menuItems = ["Burger", "Fries", "Milkshake"];
    menuItems.forEach((item) => {
        const menuItem = document.createElement("li");
        menuItem.textContent = item;
        menu.appendChild(menuItem);
    })
    content.appendChild(menu);
}