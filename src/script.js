
function loadData() {
    let $body = $('body');
    let $wikiElem = $('#wikipedia-links');
    let $nytHeaderElem = $('#nytimes-header');
    let $nytElem = $('#nytimes-articles');
    let $greeting = $('#greeting');

    $wikiElem.text("");
    $nytElem.text("");

    let streetStr = $('#street').val();
    let cityStr = $('#city').val();
    let address = streetStr + ','+ cityStr

    $greeting.text('So, you want to live at ' + address + '?');

    // NYT Articles
    // let url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
    // url += cityName + '&sort=newest&api-key=' + nyTimesAPIKey;
    // $.getJSON(url, function(data){
    //     $nytHeaderElem.text('New York Times Articles About ' + cityName);
    //
    //     articles = data.response.docs;
    //     for (let i=0; i < articles.length; i++) {
    //         let article = articles[i];
    //         $nytElem.append('<li class="articles">' +
    //             '<a href="' + article.web_url + '" target="_blank">' + article.headline.main + '</a>' +
    //             '<p>' + article.snippet + '</p>' +
    //             '</li>');
    //     };
    //
    // }).fail(function(){
    //     $nytHeaderElem.text('There was an error loading the NY Times Article');
    // });

    // Wikepedia api

    let wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + cityStr + '&format=json&callback=wikiCallback';
    let wikiRequestTimeout = setTimeout(function(){
        $wikiElem.text("failed to get wikipedia resources");
    }, 8000);

    $.ajax({
        url: wikiUrl,
        dataType: "jsonp",
        jsonp: "callback",
        success: function( response ) {
            let articleList = response[1];

            for (let i = 0; i < articleList.length; i++) {
                articleStr = articleList[i];
                let url = 'http://en.wikipedia.org/wiki/' + articleStr;
                $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
            };
            clearTimeout(wikiRequestTimeout);
        }
    });

    return false;
};
