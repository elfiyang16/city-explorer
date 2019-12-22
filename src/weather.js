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
            console.log(parsedResponse)
            cb(parsedResponse)
        };
    }

     weatherCallBack(results){
      console.log(results)
      let weatherElem = document.getElementById("weather-stats")
      weatherElem.innerHTML = results.main.temp
    }
}


  // function getFiveDayWeather(url, cb){
  //     let weatherUrl = url
  //     console.log(weatherUrl)
  //     let request = new XMLHttpRequest();
  //
  //     request.open('GET', weatherUrl);
  //     request.send();
  //
  //     request.onload = function() {
  //         let parsedResponse = JSON.parse(this.responseText);
  //         console.log(parsedResponse)
  //         cb(parsedResponse)
  //     };
  // }

  // function weatherCallBack(results){
  //   console.log(results)
  //   let weatherElem = document.getElementById("weather-stats")
  //
  //   weatherElem.innerHTML = results.main.temp
  //   // results.forEach(function(res) {
  //   //     newArticle = new Article(res.webTitle, res.webUrl);
  //   //     articles.push(newArticle)
  //   // });
  //   //
  //   // articles.forEach(function(article) {
  //   //     let node = document.createElement("li");
  //   //     let textNode = document.createTextNode(article.headline);
  //   //     node.appendChild(textNode);
  //   //     weatherList.appendChild(node)
  //   // });
  // }
