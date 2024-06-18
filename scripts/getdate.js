const lmf = document.querySelector("#lmf");
const get_year = document.querySelector("#current_year");
lmf.textContent = document.lastModified;

today = new Date(); 

get_year.innerHTML = `&copy; <span>${today.getFullYear()} 🌴 Charles Alfred Koenig 🌴 Nicosia, Cyprus.</span>`;
// last_modify.innerHTML = `Last Modified: <span>${document.lastModified}</span>`;