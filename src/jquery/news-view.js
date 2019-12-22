class NewsView {
  constructor(){
  }

  returnHTML(data){
    let $guardianElem = $('#guardian-articles'),
    articles = data.response.results;

    $guardianElem.text("");

    for (let i = 0; i < articles.length; i++) {
        let article = articles[i];
        $guardianElem.append('<li class="article">'+
            '<a href="'+article.webUrl+'">'+article.webTitle+'</a>'+
            '<p>' + article.fields.trailText + '</p>'+
        '</li>');
      }
  }
}
