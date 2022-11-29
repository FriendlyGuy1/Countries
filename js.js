import allCountries from './data.js';
console.log(allCountries);

const main_div = document.getElementById('main_div')
let temp_continent = ["all"];
let temp_btn = [];

allCountries.map(countries => {
    //  console.log(countries.name.common)
    temp_btn.push(countries.continents[0])
    if(!temp_continent.includes(countries.continents[0])){
        temp_continent.push(countries.continents[0])
    } 

    let country_div = document.createElement('div');
    let country_name = document.createElement('h3');

    country_name.innerText = countries.name.common;
    country_div.appendChild(country_name);

    let my_img = document.createElement("img");
    my_img.src = countries.flags.png;
    country_div.appendChild(my_img)

    let my_capital = document.createElement("h3");

    if(Array.isArray(countries.capital)){
        my_capital.innerText = countries.capital[0];    
    }

    my_capital.setAttribute("class","center")
    country_div.appendChild(my_capital);

    //continent
    let my_continent = document.createElement("h3");

    if(Array.isArray(countries.continents)){ 
        my_continent.innerText = countries.continents[0];
    }

    my_continent.setAttribute("class","continent");

    
    switch (my_continent.innerText) {
        case "Africa":
            my_continent.style.color ="red";
            country_div.setAttribute("class", "Africa")
            break;
        case "Europe":
            my_continent.style.color ="blue";
            country_div.setAttribute("class", "Europe")
            break;
        case "North America":
            my_continent.style.color ="green";
            country_div.setAttribute("class", "NA")
            break;
        case "South America":
            my_continent.style.color = "#564e91";
            country_div.setAttribute("class", "SA")
            break;
        case "Asia":
            my_continent.style.color = "#fc9403";
            country_div.setAttribute("class", "Asia")
            break;
        case "Antarctica":
            my_continent.style.color = "pink"
            country_div.setAttribute("class", "Antarctica")
            break;
        default:
            my_continent.style.color = "black"
    }

    country_div.appendChild(my_continent);

    //borders
    let borders = document.createElement("h3");
    if(Array.isArray(countries.borders)){
        borders.innerText = "Borders: "
        for(let i = 0; i<countries.borders.length; i++){
            borders.innerText += `${countries.borders[i]} `;
        }
    }

    borders.setAttribute("class","center");
    country_div.appendChild(borders);

    //languages
    let languages = document.createElement("h3");

    for(let i in countries.languages){
        languages.innerText = `Language: ${countries.languages[i]}`
    }
    languages.setAttribute("class","center");
    country_div.appendChild(languages);

    //currency
    let currency = document.createElement("h3");

    if (typeof countries.currencies === 'object'){
        currency.innerText = "Currencies: ";
        for(let i in countries.currencies){
            currency.innerText += `${countries.currencies[i].name} `
        }
    }

    currency.setAttribute("class","center");
    country_div.appendChild(currency);


    main_div.appendChild(country_div);
})

let header_buttons = document.querySelector("header");
header_buttons.setAttribute("id", "nav");

temp_continent.forEach(continents =>{
    let button = document.createElement("button");        
    button.innerText = continents;
    header_buttons.appendChild(button);
            button.addEventListener("click", function(){

            })
   }
)
