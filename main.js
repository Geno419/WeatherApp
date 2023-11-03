const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=london";
const apiKey = "7af2e81ac3d7e59d7be831cd65898d46&";

async function checkWeather(){
    const response = await fetch(apiUrl + '&appid=${apiKey}')
    let data = await response.json()
    
}

