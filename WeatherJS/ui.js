class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-temp');
    this.icon = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feels-like');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.windSpeed = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `${localStorage.city}, ${formatState(localStorage.state)}`;
    this.desc.textContent = weather.weather[0].description;
    this.temp.textContent = `${weather.main.temp}\xB0F`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like.toFixed(1)}\xB0F`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`; 
    this.pressure.textContent = `Visibility: ${weather.visibility/1000}km`;
    this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed.toFixed(1)}mph`;
  }
}

function formatState(ISO3166StateCode) {
  strArr = ISO3166StateCode.split('-');
  return strArr[1];
}