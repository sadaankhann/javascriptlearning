const city = "London";
const api_key = "bb2f6154a53a44fe9aa140403251708";
let url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`;


fetch(url)
    .then(response => response.json())
    .then(data =>{
    
        console.log(data.current.temp_c);
    
    })