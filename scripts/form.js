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

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productName = document.querySelector("#pn"); 


function getOption() { 

    products.forEach(p => { 
        let option = document.createElement("option"); 
        option.textContent = p.name;
        option.value = p.id;
        productName.appendChild(option);
        productName.selectedIndex = -1;
    })

}
getOption();

