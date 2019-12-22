class Wiki{
  constructor(cityName){
    this.cityName = cityName
    this.wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='
    + this.cityName
    + '&format=json&callback=wikiCallback';

  }


  getWikiLinks(){
    let wikiRequestTimeout = setTimeout(function(){
        $('#wikipedia-links').text("failed to get wikipedia resources");
    }, 8000);

    $.ajax({
        url: this.wikiUrl,
        dataType: "jsonp",
        jsonp: "callback",
        success: function(response){
          let articleList = response[1];
          let $wikiElem = $('#wikipedia-links')
          $wikiElem.text("");

          for (let i = 0; i < articleList.length; i++) {
              let articleStr = articleList[i];
              let url = 'http://en.wikipedia.org/wiki/' + articleStr;
              $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
          };
          clearTimeout(wikiRequestTimeout);
        }
    });
  }

}
