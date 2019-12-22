class NewsController {
  constructor(newsModel, newsView){
    this.newsModel = newsModel
    this.newsView = newsView
  }
  addArticleToHTML(){
    this.newsModel.saveArticles(this.newsView.returnHTML )
  }
}
