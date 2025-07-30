const hambmenu = document.querySelector("#menu"); 
const navmenu = document.querySelector(".mob-menu"); 

hambmenu.addEventListener("click", () => {
    hambmenu.classList.toggle("show"); 
    navmenu.classList.toggle("show"); 
    
})

navlinks = document.querySelector(".mob-menu");
navlinks.addEventListener("click", () => {
    hambmenu.classList.remove("show");
    navmenu.classList.remove("show");
})

const last_modify = document.querySelector(".lmf");
const currentYear = document.querySelector("#currentYear"); 
last_modify.textContent = document.lastModified;
today = new Date(); 
currentYear.innerHTML = `&copy; <span>${today.getFullYear()} 🌴 Charles Alfred Koenig 🌴 Monrovia, Liberia.</span>`;