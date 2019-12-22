  let wikiElem = document.getElementById("wikipedia-links")
  // wikiElem.innerHTML = "";

  let cityStr = document.getElementById("city").value
  // let address = streetStr + ','+ cityStr

  const wikiUrl = `http://en.wikipedia.org/w/api.php?action=opensearch&search=${cityStr}&format=json&callback=wikiCallback`;
  // $greeting.text('So, you want to live at ' + address + '?');

  let wikiRequestTimeout = setTimeout(function(){
      wikiElem.innerHTML = "failed to get wikipedia resources";
    }, 8000);

  class WikiSearch{
    constructor(cityName,url){
      this.cityName = cityName
      this.url = url
    }

    getHeadlinesFromWiki(){
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.url;
      document.body.appendChild(script);
    }
  }

  function wikiCallback(dataViaJsonp){
    let wikiContent = ""
    console.log(dataViaJsonp)
    let wikiList = dataViaJsonp[1]
    for (let i = 0; i < wikiList.length; i++) {
        wikiStr = wikiList[i];
        let url = 'http://en.wikipedia.org/wiki/' + wikiStr;
        wikiElem.append('<li><a href="' + url + '">' + wikiStr + '</a></li>');
    };
    clearTimeout(wikiRequestTimeout);
  }

  window.addEventListener('load', () => {
    wikiArticles = new WikiSearch(cityStr, wikiUrl)
    wikiArticles.getHeadlinesFromWiki()

  })
