
function loadData() {
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");


    // let streetStr = $('#street').val();
    // let cityStr = $('#city').val();
    // let address = streetStr + ','+ cityStr
    // let imgSize = '600x300'
    //
    // $greeting.text(`So you are planning to explore ${address} ?`)
    //
    // let streetViewUrl =
    // 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location='
    // + address
    // +'&key=' + config.MapApiKey;
    //
    // $body.append(
    //   `<img class="bgimg" src="${streetViewUrl}" >`
    // )

    // NYT Articles
    var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
    url += cityName + '&sort=newest&api-key=' + nyTimesAPIKey;
    $.getJSON(url, function(data){
        $nytHeaderElem.text('New York Times Articles About ' + cityName);

        articles = data.response.docs;
        for (var i=0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class="articles">' +
                '<a href="' + article.web_url + '" target="_blank">' + article.headline.main + '</a>' +
                '<p>' + article.snippet + '</p>' +
                '</li>');
        };

    }).fail(function(){
        $nytHeaderElem.text('There was an error loading the NY Times Article');

    });


    return false;
};

$('#form-container').submit(loadData);
