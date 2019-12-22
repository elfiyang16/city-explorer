(function(exports){
  let apiKey = config.guardianApi
  let worldNewsApi =
  "https://content.guardianapis.com/search?q=technology&from-date=2019-12-01&show-fields=trailText,thumbnail,body&show-blocks=all&api-key="+apiKey
  function ArticleList(){
 }

  ArticleList.prototype = {
    saveArticles:function(cb){
      let self = this;
      $.ajax({
        type: 'GET',
        url:worldNewsApi,
        dataType: 'jsonp',
        async: false,
        success: function(result) {
           cb(self.getArticles(result))
        }
      })
    },

    getArticles: function(data){
      let results = data.response.results.map(function(article) {
        return {
          id: article.id,
          title: article.webTitle,
          extract: article.fields.trailText,
          body: article.fields.body,
          img: article.fields.thumbnail
        }
      });

      return results;
    },

  }
  exports.ArticleList = ArticleList
})(this)
