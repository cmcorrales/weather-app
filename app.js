$(document).ready(function() {
  function getWeather(latitude, longitude) {
    $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat='+latitude+'35&lon='+longitude+'', function(data) {
    console.log(data.main.temp);
  })
  }
  navigator.geolocation.getCurrentPosition(function(position) {
    getWeather(position.coords.latitude, position.coords.longitude)
  });
  function geo_error() {
    alert("Sorry, no position available.");
  }
})