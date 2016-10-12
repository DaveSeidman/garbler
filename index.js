var apiKey = require('./private/apikey.json'),
    gt = require('google-translate')(apiKey.key),
    http = require('http');

const PORT = 80;

function handleRequest(request, response) {



    response.end("you said" + request.url.substring());
    console.log(request.url.split('&')[8]);

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
