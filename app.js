$(document).ready(function() {
  var APIKEY = "5145288f4fd76b9332393c30382a8524"
  function getWeather(latitude, longitude) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&units=imperial&APPID='+APIKEY+'', function(data) {
    var city = data.name;
    var temperature = data.main.temp;
    var icon = data.weather[0].icon
    $("#city").html(city)
    $("#icon").html('<img src="http://openweathermap.org/img/w/'+icon+'.png">')
      var temp = $("#temperature")
      $("switch").onclick = toggleClass;
      var celsiusTemp = (temperature - 32) * 5/9;
    function toggleClass(){
      if(temp.className == 'celsius'){
          temp.className = 'fahrenheit'
      } else {
          temp.className = 'celsius'
      }
    }
    $(".celsius").html(celsiusTemp);
    $(".fahrenheit").html(temperature);
    // $("#switch").click(function(){
    //   function toggleClass() {
    //     if 
    //   }
    //   $("p").toggle();
    //   if ($("input").is(':checked')) {
    //     console.log("click")
    //     $("h2").html(celsiusTemp);
    //   }
    //   else {
    //     $("h2").html(temperature);
    //   }
    // });
  })
  }
  navigator.geolocation.getCurrentPosition(function(position) {
    getWeather(position.coords.latitude, position.coords.longitude)
  });
  function geo_error() {
    alert("Sorry, cannot determine your location.");
  }
})