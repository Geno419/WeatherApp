const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "7af2e81ac3d7e59d7be831cd65898d46&";

//const locationSeacrh = document.querySelector('.search input');
//const locationSeacrhBTN = document.querySelector('.search button');

async function checkWeather(){
    const response = await fetch(apiUrl + 'london' + '&appid=' + apiKey);
    let data = await response.json();
    
    console.log(data);

    document.querySelector(".location").innerHTML= data.name;
<<<<<<< HEAD
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + '°c';
    document.querySelector(".humidity").innerHTML= data.main.humidity + '%';
    document.querySelector(".wind").innerHTML= data.wind.speed + ' km/h';

=======
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + '&#8451';
    document.querySelector(".maxTemp").innerHTML= data.wind.speed + '&#37';
    document.querySelector(".minTemp").innerHTML= 'min: ' + data.main.temp_min + '&#8451 ';
    document.querySelector(".maxTemp").innerHTML= 'max: ' + data.main.temp_max + '&#8451';
    document.querySelector(".humidity").innerHTML= data.main.humidity + '&#37';
    document.querySelector(".weatherDesc").innerHTML= data.weather[0].description;

    
>>>>>>> parent of 4e3f8cc (major improvements with the time)
}
locationSeacrhBTN.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
<<<<<<< HEAD
checkWeather();
=======

<<<<<<< HEAD
checkWeather();

=======
checkWeather();
>>>>>>> parent of 4eeb28c (all set)
>>>>>>> parent of 4e3f8cc (major improvements with the time)
