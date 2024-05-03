const apiKey = "f0740545ae178e59f096bd609bf306b6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".icon");

async function checkWeather(city) {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (!response.ok) {
      throw new Error("Weather data not available for this location");
    }

    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " kph";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.setAttribute(
        "src",
        "https://cdn4.iconfinder.com/data/icons/weather-flat-2/614/428_-_Cloudy-512.png"
      );
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.setAttribute(
        "src",
        "http://clipartmag.com/images/rain-clouds-clipart-27.png"
      );
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.setAttribute(
        "src",
        "https://cdn1.iconfinder.com/data/icons/weather-set2-2/64/Clear-1024.png"
      );
    }
    else if (data.weather[0].main === "Drizzle") {
        weatherIcon.setAttribute(
          "src",
          "https://icons-for-free.com/iconfiles/png/512/drizzle+forecast+rain+rainfall+sun+weather+icon-1320195254549764468.png"
        );
    }
    else if (data.weather[0].main === "Mist") {
        weatherIcon.setAttribute(
          "src",
          "https://cdn1.iconfinder.com/data/icons/weather-colored-outline/50/Weather_Colored-Outline-16-512.png"
        );
    }

      
  } catch (error) {
    console.error(error);
    // You can display an error message to the user here if needed.
  }
}
document.getElementById("searchButton").addEventListener("click", () => {
  const cityInput = document.getElementById("cityInput").value;
  checkWeather(cityInput);
});
const searchButton = document.getElementById("searchButton");
const cityInput = document.getElementById("cityInput");
const box = document.querySelector(".box");
const cityElement = document.querySelector(".city");
searchButton.addEventListener("click", () => {
    const cityName = cityInput.value.trim();
    if (cityName) {
       
        const newBackgroundURL = `https://source.unsplash.com/weekly?${cityName}`;
        box.style.backgroundImage = `url('${newBackgroundURL}')`;
        cityElement.textContent = cityName;
        cityInput.value = "";
    }
});