const city = "London";
const api_key = "fb03734eac554851a2850136252706";
const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`;

fetch(url)
    .then(response => response.json())
    .then(data =>{

        console.log(data); 

    })