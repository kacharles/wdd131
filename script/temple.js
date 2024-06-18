alert("loaded");
const last_modify = document.querySelector("#lmf");
const currentYear = document.querySelector("#currentYear"); 
last_modify.innerHTML = `Some text`;
today = new Date(); 
currentYear = `&copy; <span>${today.getFullYear()} 🌴 Charles Alfred Koenig 🌴 Nicosia, Cyprus.</span>`;