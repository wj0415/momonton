const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY = "631788087e629321f11f48dddd86d11a";


function getWeather(lat,lon){
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(
        api
        ).then(response => {
            return response.json();
        }).then(json => {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature}°C @ ${place}`;
        }
    );
}

function saveCoords(obj){
    localStorage.setItem(COORDS,JSON.stringify(obj));
}

function handleGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coordsObj={
        lat,lon
    };
    
    saveCoords(coordsObj);
    getWeather(lat,lon);
}

function handleErrorSuccess(){
    console.log("error");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleErrorSuccess)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if( loadedCoords === null){
         askForCoords();
    }else{
         const parsedCoords = JSON.parse(loadedCoords);
         getWeather(parsedCoords.lat,parsedCoords.lon)
    }
    

}

function init(){
    loadCoords();
}
init();