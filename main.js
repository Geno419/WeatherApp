const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "7af2e81ac3d7e59d7be831cd65898d46&";

//const locationSeacrh = document.querySelector('.search input');
//const locationSeacrhBTN = document.querySelector('.search button');

async function checkWeather(){
    const response = await fetch(apiUrl + 'london' + '&appid=' + apiKey);
    let data = await response.json();
    
    console.log(data);

    //document.querySelector(".location").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + '°c';
    document.querySelector(".humidity").innerHTML= data.main.humidity + '%';
    document.querySelector(".wind").innerHTML= data.wind.speed + ' km/h';

}
/*locationSeacrhBTN.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})*/
checkWeather();