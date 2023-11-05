const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "7af2e81ac3d7e59d7be831cd65898d46";

const locationSearch = document.querySelector(".searchBarContainer input");
const searchBtn = document.querySelector(".searchBarContainer button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + '&appid=' + apiKey);
    let data = await response.json();
    
    console.log(data);

    document.querySelector(".location").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + '&#8451';
    document.querySelector(".maxTemp").innerHTML= data.wind.speed + '&#37';
    document.querySelector(".minTemp").innerHTML= 'min: ' + data.main.temp_min + '&#8451 ';
    document.querySelector(".maxTemp").innerHTML= 'max: ' + data.main.temp_max + '&#8451';
    document.querySelector(".humidity").innerHTML= data.main.humidity + '&#37';
    document.querySelector(".weatherDesc").innerHTML= data.weather[0].description;
    document.querySelector('.date').innerHTML= new Date(new Date().getTime() + data.timezone * 1000).toLocaleDateString('en-GB', { 
 
      //weekday: 'long',
      //year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      //second: 'numeric',
      hour12: true,});
    
}

locationSearch.addEventListener("keydown", (event) =>{
    if (event.key === "Enter") {
      event.preventDefault(); 
      checkWeather(locationSearch.value);
    }
  });

searchBtn.addEventListener("click", ()=>{
    checkWeather(locationSearch.value);
})

checkWeather("London");
