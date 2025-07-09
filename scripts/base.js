const lmf = document.querySelector("#lmf");
const year = document.querySelector("#year");
lmf.textContent = document.lastModified;
today = new Date(); 
year.innerHTML = `&copy; ${today.getFullYear()} 🌴 Charles Alfred Koenig 🌴 Monrovia, Liberia.`;

// Mobile menu styling..... 

const menuBtn = document.querySelector("#burger_menu");
const displayNav = document.querySelector(".mobile-menu");
const line = document.querySelector("#line")
const element = document.querySelector("hr");

menuBtn.addEventListener("click", () => { 
    // alert("menu button has been click");
    menuBtn.classList.toggle("show");
    displayNav.classList.toggle("show");
});

