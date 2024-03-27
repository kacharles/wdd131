const menu = document.querySelector("#menu");
const items = document.querySelector(".mobile");

menu.addEventListener("click", () => {
    menu.classList.toggle("activate");
    items.classList.toggle("activate");
    menu.classList.toggle("show");
})
