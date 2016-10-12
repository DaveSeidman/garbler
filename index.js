var apiKey = require('./private/apikey.json'),
    gt = require('google-translate')(apiKey.key);


gt.translate('My name is Brandon', 'en', 'es', (err, translation) => {

    console.log(translation);
    // =>  Mi nombre es Brandon
});
