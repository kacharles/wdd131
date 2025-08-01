// Dynamically configuring number of visits


const displayNumVisits = document.querySelector(".numVisits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls"));

//Determine if this is the first visit or display the numer of vists. 

if(numVisits !== 0) { 
    displayNumVisits.textContent = numVisits;
}
else { 
    displayNumVisits.textContent = "You've completed your first review. Thank you!";
}
//increment the number of visits by one after the page loads

numVisits++;

//Store the new visit total into localStorage, key=numVisits-ls

localStorage.setItem("numVisits-ls", numVisits);