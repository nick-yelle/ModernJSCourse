// Init Storage
const storage = new Storage;

const weatherLocation = storage.getLocationData();

// Init UI
const ui = new UI;

//Init Weather
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Creating bootstrap modal
var myModal = new bootstrap.Modal(document.getElementById('locModal'))

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = 'US-' + document.getElementById('state').value;

  // Change Location
  weather.changeLocation(city, state);

  // Set Location
  storage.setLocationData(city,state);

  // Get and display weather
  getWeather();

  // Close modal
  myModal.hide();
});



function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}