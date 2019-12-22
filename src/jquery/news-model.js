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
        // delete self.get
        console.log(result)
         // cb(getArticles(result))
         cb(result)
      }
    })
  }

  returnHTML(data){
    let $guardianElem = $('#guardian-articles')
    let articles = data.response.results;
    for (let i = 0; i < articles.length; i++) {
        let article = articles[i];
        $guardianElem.append('<li class="article">'+
            '<a href="'+article.webUrl+'">'+article.webTitle+'</a>'+
            '<p>' + article.fields.trailText + '</p>'+
        '</li>');
    }
   }
}
