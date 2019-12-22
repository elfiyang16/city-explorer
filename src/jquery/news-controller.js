(function(exports){

  function NewsController(articleModel, articleView){
    this.articleModel = articleModel
    this.articleView = articleView
  }

  NewsController.prototype = {
    addHTMLtoElement: function(){
      let self = this
      let element = document.getElementById('app');
      this.articleModel.saveArticles(function(returnRes){
        element.innerHTML = self.articleView.returnHTML(returnRes);
      })
    }
  }

 exports.NewsContoller = NewsController

})(this);
