(function(exports){

  function ArticleListView (articleListModel){
  }

  ArticleListView.prototype = {
    returnHTML: function(articles){
      let self = this
      let indexContent = []
      for(let i=0; i<articles.length; i++){
        indexContent.push(
        `<ul><div class="articles" id="${articles[i].id}">
        <li><h3 style="color:blue; font-size:16px;">${articles[i].title}</h3>
        <img src="${articles[i].img}" id="${articles[i].id}">
        <p> <span style="color:blue">Abstract:</span> ${articles[i].extract}</p></li></div></ul>`
      )}
      return `<div>${indexContent.join("")}</div>`
     }
    }
    
    exports.ArticleListView = ArticleListView
})(this)
