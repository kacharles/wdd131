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