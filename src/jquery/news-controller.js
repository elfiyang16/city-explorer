class NewsController {
  constructor(newsModel, newsView){
    this.newsModel = newsModel
    this.newsView = newsView
    console.log("create news controller")
  }
  addArticleToHTML(){
    debugger;
    let self = this
    this.newsModel.saveArticles(self.newsView.returnHTML)
  }
}
