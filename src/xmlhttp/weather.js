class Weather {
    constructor(cityName) {
        this.cityName = cityName;
        this.url = "https://api.openweathermap.org/data/2.5/weather?q="+ this.cityName
        + "&units=metric"
        +"&APPID="+ config.weatherApi;
    }

    getFiveDayWeather(cb){
        let request = new XMLHttpRequest();

        request.open('GET', this.url);
        request.send();
        request.onload = function() {
            let parsedResponse = JSON.parse(this.responseText);
            cb(parsedResponse)
        };
    }

     weatherCallBack(results){
      let weatherElem = document.getElementById("weather-stats")

      let weatherMain = results.weather[0].main,
       currentTemp = Math.round(results.main.temp),
       lowTemp = Math.round(results.main.temp_min),
       highTemp = Math.round(results.main.temp_max);

      weatherElem.innerHTML = `Current Weather: ${weatherMain}` + "<p>" + `Temperature Now: ${currentTemp} Celsius`
      + "<p>" + `Low/High: ${lowTemp}/${highTemp} Celsius`
    }
}
