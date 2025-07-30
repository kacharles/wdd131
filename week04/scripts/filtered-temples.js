// Toggle Button and Drop Drop Down Menu
// Get the of the menu button and the class name of the unordered list
const hambmenu = document.querySelector("#menu"); 
const navmenu = document.querySelector(".mob-menu"); 

// Toggle the menu button and give a class show and 
// And do the same thing for the navigation menu

hambmenu.addEventListener("click", () => {
    hambmenu.classList.toggle("show"); 
    navmenu.classList.toggle("show"); 
    
})

// Remove the class from the Menu Toggle Button and the Navigation list
// When any of the link items is clicked! 

navlinks = document.querySelector(".mob-menu");
navlinks.addEventListener("click", () => {
    hambmenu.classList.remove("show");
    navmenu.classList.remove("show");
})

//Get the class name of the footer section to dynamically add the current year.
const last_modify = document.querySelector(".lmf");
const currentYear = document.querySelector("#currentYear"); 
last_modify.textContent = document.lastModified;
today = new Date(); 
currentYear.innerHTML = `&copy; <span>${today.getFullYear()} 🌴 Charles Alfred Koenig 🌴 Monrovia, Liberia.</span>`;

// A list of temple objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      year: 2005,
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      year: 1888,
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      year: 2015,
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      year: 2020,
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      year: 1947,
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      year: 1986,
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      year: 1983,
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Accra Ghana Temple", 
        location: "Accra, Greater Accra, Ghana", 
        dedication: "7 August 2005", 
        year: 2005,
        area: 123456, 
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
        
    {
        templeName: "Anchorage Alaska Temple", 
        location: "Anchorage, Alaska, United States", 
        dedication: "9 January 1999", 
        year: 1999,
        area: 789101, 
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/400x225/anchorage-temple-lds-253274-wallpaper.jpg"
    },
        
    {
        templeName: "Belém Brazil Temple", 
        location: "Belém, Para, Brazil",
        dedication: "20 November 2022",
        year: 2022,
        area: 121314, 
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior2.jpg"
    }
    // Add more temple objects here...
  ]
createTempleCard(temples);

function createTempleCard(temples) { 
    temples.forEach(temple => { 
    let card = document.createElement('section');
    card.classList.add("card");
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedication = document.createElement('p');
    let area = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class=label>Dedicated:</span> ${temple.dedication}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.templeName);
    img.setAttribute("loading", "lazy");

    card.appendChild(name); 
    card.appendChild(location); 
    card.appendChild(area); 
    card.appendChild(dedication); 
    card.appendChild(area); 
    card.appendChild(img); 

    document.querySelector('.temples-card').appendChild(card); 
    // document.querySelector('.res-grid').innerHTML = `Some text1`;
    });
  };
// filtering the temples

const home = document.querySelector("#home"); 
const old = document.querySelector("#old"); 
const newt = document.querySelector("#newt"); 
const large = document.querySelector("#large");
const small = document.querySelector("#small"); 

const mhome = document.querySelector("#mhome"); 
const mold = document.querySelector("#mold"); 
const mnew = document.querySelector("#mnew"); 
const mlarge = document.querySelector("#mlarge");
const msmall = document.querySelector("#msmall"); 



home.addEventListener("click", () => { 
  document.querySelector(".temples-card").innerHTML = "";
  createTempleCard(temples);
})


old.addEventListener("click", () => { 
  document.querySelector(".temples-card").innerHTML = "";
  const oldTemples = temples.filter(temple => temple.year < 1900);
  createTempleCard(oldTemples);
})

newt.addEventListener("click", () => { 
  document.querySelector(".temples-card").innerHTML = "";
  const oldTemples = temples.filter(temple => temple.year > 2000);
  createTempleCard(oldTemples);
})

large.addEventListener("click", () => { 
  document.querySelector(".temples-card").innerHTML = "";
  const oldTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(oldTemples);
})

small.addEventListener("click", () => { 
  document.querySelector(".temples-card").innerHTML = "";
  const oldTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(oldTemples);
})


mhome.addEventListener("click", () => { 
  document.querySelector(".temples-card").innerHTML = "";
  createTempleCard(temples);
})


mold.addEventListener("click", () => { 
  document.querySelector(".temples-card").innerHTML = "";
  const oldTemples = temples.filter(temple => temple.year < 1900);
  createTempleCard(oldTemples);
})

mnew.addEventListener("click", () => { 
  document.querySelector(".temples-card").innerHTML = "";
  const oldTemples = temples.filter(temple => temple.year > 2000);
  createTempleCard(oldTemples);
})

mlarge.addEventListener("click", () => { 
  document.querySelector(".temples-card").innerHTML = "";
  const oldTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(oldTemples);
})

msmall.addEventListener("click", () => { 
  document.querySelector(".temples-card").innerHTML = "";
  const oldTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(oldTemples);
})



  