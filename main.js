const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "7af2e81ac3d7e59d7be831cd65898d46&";

const locationSeacrh = document.querySelector('.search input');
const locationSeacrhBTN = document.querySelector('.search button');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + '&appid=' + apiKey);
    let data = await response.json();
    
}