var apiKey = require('./private/apikey.json'),
    gt = require('google-translate')(apiKey.key),
    http = require('http'),
    querystring = require('querystring');

const PORT = 80;

function handleRequest(request, response) {

    var query = request.url.split('&')[8].replace(/\+/g, ' ');

    gt.translate(query, 'en', 'es', (err, translation) => {

        if(err) {

            console.log("couldn't translate");
            return;
        }

        response.end(translation.translatedText);
    });
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

    console.log("server listening on port", PORT);
})




// gt.translate('My name is Brandon', 'en', 'es', (err, translation) => {
//
//     console.log(translation);
//     // =>  Mi nombre es Brandon
// });
