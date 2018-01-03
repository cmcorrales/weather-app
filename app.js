$(document).ready(function() {
  var APIKEY = "5145288f4fd76b9332393c30382a8524"
  function getWeather(latitude, longitude) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&units=imperial&APPID='+APIKEY+'', function(data) {
    $("#city").html(data.name)
    $("#temperature").html(data.main.temp+" &deg;C")
    $("#icon").html('<img src="http://openweathermap.org/img/w/'+data.weather[0].icon+'.png">')
  })
  }
  navigator.geolocation.getCurrentPosition(function(position) {
    getWeather(position.coords.latitude, position.coords.longitude)
  });
  function geo_error() {
    alert("Sorry, no position available.");
  }
})