class NewsModel {
  constructor(cityName){
    this.cityName = cityName
    let apiKey = config.guardianApi
    this.guardianUrl =
    "https://content.guardianapis.com/search?q=" + this.cityName
    + "&from-date=2019-06-01&show-fields=trailText&api-key="
    +apiKey
    console.log(this.guardianUrl)
  }

  saveArticles(cb){
    $.ajax({
      type: 'GET',
      url:this.guardianUrl,
      dataType: 'jsonp',
      async: false,
      success: function(result) {
         cb(result)
      }
    })
  }
}
