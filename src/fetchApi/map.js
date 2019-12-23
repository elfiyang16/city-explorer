class BingMap{
  constructor(cityName){
    this.cityName = cityName
    this.mapUrl = 'https://dev.virtualearth.net/REST/V1/Imagery/Map/Road/'
    + this.cityName
    + '?mapSize=1000,800&mapLayer=Basemap,Buildings&key='
    + config.bingMapApi;
  }

  createImage(url){
    let bgImg = document.createElement("img");
    bgImg.className = "bgimg"
    bgImg.src = `${url}`
    document.getElementById('body').appendChild(bgImg);
  }

  fetchImage(cb){
    fetch(this.mapUrl)
    .then(function(data){
      cb(data.url)
    })
    .catch(function(error) {
      console.log(error);
    });
  }

}


//   getWikiLinks(){
