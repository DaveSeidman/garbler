var apiKey = require('./private/apikey.json'),
    gt = require('google-translate')(apiKey.key),
    http = require('http'),
    querystring = require('querystring');

const PORT = 80;

function handleRequest(request, response) {

    var query = request.url.split('&')[8].replace(/\+/g, ' ');
    response.end("you said", query);
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
