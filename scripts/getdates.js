
get_year = document.querySelector('#current_year'); 
last_modify = document.querySelector('#last_modify')

today = new Date(); 

get_year.innerHTML = `&copy; <span>${today.getFullYear()}</span>`;
last_modify.innerHTML = `Last Modified: <span>${document.lastModified}</span>`;