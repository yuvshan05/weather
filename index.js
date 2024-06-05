const apikey="a32f7d1545f816d0b9eb2ccac08348d6";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiURL+ city +`&appid=${apikey}`);

    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    var a = data.weather[0].main;
    switch(a){
        case "Clouds":
            weathericon.src = "images/clouds.png";
            break;
        case "Clear":
            weathericon.src="images/clear.png";
            break;
        case "Rain":
            weathericon.src="images/rain.png";
            break;
        case "Wind":
            weathericon.src="images/wind.png";
            break;
        case "Drizzle":
            weathericon.src="images/drizzle.png";
            break;
        case "Mist":
            weathericon.src="images/mist.png";
            break;
        case "Snow":
            weathericon.src="images/snow.png";
            break;
        default:
            weathericon.src="images/clear.png";
            break;
    }
    document.querySelector(".weather").style.display="block"; 
    document.querySelector(".error").style.display="none";
    }
    
}

searchbox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      checkWeather(searchbox.value);
    }
  });

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
});

