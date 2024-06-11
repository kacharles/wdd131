/*
Fahrenheit & miles per hour formula
WCF=35.74+0.6215×T 
a −35.75×V^0.16 +0.4275×Ta ×V^0.16

Celcius and kilometer per hour formula
13.12+0.6215×Ta −11.37×V^0.16 + 
0.3965×Ta × V^0.16

*/



const area = 
document.querySelector(".area");

const pop = 
document.querySelector(".pop");

const cap = 
document.querySelector(".cap");

const lan = 
document.querySelector(".lan");

const currency = 
document.querySelector(".cur");

const timeZone = 
document.querySelector(".time"); 

const callCode = 
document.querySelector(".call")

const intTLD  = 
document.querySelector(".intr"); 

temperature = 
document.querySelector(".temp"); 

conditions = 
document.querySelector(".cond");

wind = 
document.querySelector(".wind");

wChill = 
document.querySelector(".wchill");

// Changing the content of the 
// span element. 

area.textContent = "Spain"; 


// Defining the data variables and values

const data = { 
    area: "Liberia", 
    population: 5000000, 
    capital: "Monrovia",
    language: "English", 
    currency: "$ LRD",
    timeZone: "GMT", 
    callCode: "+231", 
    intTLD: "LR"
}

const weather = { 
    temperature: 10, 
    condition: "Partly Cloudly",
    wind: 5,
    windChill: (temp, wind) => {

        if (temp <=10 & wind > 4.8)
        {
        wc = (13.12 + 0.6215) * 
        (temp - 11.37) * (wind**0.16) + 
        (0.3965 * temp) * (wind**0.16);
        
        return Math.round(wc, 2) + "°C";

        }
        else { 
            return "NA"; 
        }
    }
}

area.textContent = data.area;
pop.textContent = data.population;
cap.textContent = data.capital;
lan.textContent = data.language; 
currency.textContent = data.currency;
timeZone.textContent = data.timeZone;
callCode.textContent = data.callCode;
intTLD.textContent = data.intTLD;

temperature.textContent = weather.temperature;
conditions.textContent = weather.condition;
wind.textContent = weather.wind;
wChill.textContent = weather.windChill(weather.temperature, weather.wind);

lmf = document.querySelector("#lmf");
lmf.textContent = document.lastModified;
