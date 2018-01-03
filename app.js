$(document).ready(function() {
  var APIKEY = "5145288f4fd76b9332393c30382a8524"
  function getWeather(latitude, longitude) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&units=imperial&APPID='+APIKEY+'', function(data) {
    var city = data.name;
    var temperature = data.main.temp;
    var icon = data.weather[0].icon
    $("#city").html(city)
    $("#temperature").html(temperature+" &deg;F")
    $("#icon").html('<img src="http://openweathermap.org/img/w/'+icon+'.png">')
    $(".switch").click(function() {
      console.log("click");

    })
  })
  }
  navigator.geolocation.getCurrentPosition(function(position) {
    getWeather(position.coords.latitude, position.coords.longitude)
  });
  function geo_error() {
    alert("Sorry, no position available, cannot determine weather.");
  }
})