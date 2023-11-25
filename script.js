const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "7af2e81ac3d7e59d7be831cd65898d46";

const locationSearch = document.querySelector(".searchBar input");
const searchBtn = document.querySelector(".searchBar button");
function caps(string){
  const arr = string.split(' ')
   return arr[0].charAt(0).toUpperCase()+arr[0].slice(1) + ' ' + arr[1].charAt(0).toUpperCase()+arr[1].slice(1);
}
async function checkWeather(city){
    const response = await fetch(apiUrl + city + '&appid=' + apiKey);
    let data = await response.json();

    console.log(data);
    
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + '&#8451';
    document.querySelector(".minTemp").innerHTML= 'Min: ' + data.main.temp_min + '&#8451 ';
    document.querySelector(".maxTemp").innerHTML= 'Max: ' + data.main.temp_max + '&#8451';
    document.querySelector(".weatherDesc").innerHTML= caps(data.weather[0].description);
    let weatherMain = data.weather[0].main.toLowerCase();
    document.querySelector(".weatherIcon").src = 'images/' + weatherMain + '.png'
    
    document.querySelector('.date').innerHTML= new Date(new Date().getTime() + data.timezone * 1000).toLocaleDateString('en-GB', { 
      //weekday: 'long',
      //year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      //second: 'numeric',
      hour12: true,
    });

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

checkWeather('london');
