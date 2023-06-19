const WEATHER_BASE_URI = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const requestURI = `?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const url = `${WEATHER_BASE_URI}${requestURI}`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child"); 
        city.innerText = data.name;
        weather.innerText =data.weather[0].main;
    });
}

function onGeoError(position){
    console.log("Can't find you. No Weather for you.");
}

const currentLocation = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
console.log(navigator.geolocation);