var gm = require('gm');

var DAFAULT_SYMBOLS = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM";

function generateCapcha(width, heigth, _symbols, length) {
    var symbols = _symbols || DAFAULT_SYMBOLS;
    var phrase = length ? getRandomPhrase(symbols, length) : symbols;
    return generateInage(width, heigth, phrase);
}

function generateInage(width, heigth, phrase) {
    var font_size = heigth * 0.8;
    var img = gm(width, heigth, "#f0ffffff");
    for (var i = 0; i < phrase.length; i++) {
        img = drawSymbol(img, phrase[i], font_size, i * font_size * 0.7, font_size);
    }
    img.write('/home/nazar/jss/capcha/img.jpg', function(err) {
        if (err) {
            console.log(err);
        } else {}
    })
}

function drawSymbol(img, symbol, fontSize, x, y) {
    img
        .fontSize(Math.round(fontSize * (Math.random() + 0.6)))
        .drawText(x, y, symbol);
    return img;
}

function getRandomPhrase(string, phraseLength) {
    var phrase = [];
    var pointer = 0;
    for (var i = 0; i < phraseLength; i++) {
        pointer = Math.round(Math.random() * string.length - 1);
        phrase.push(string.charAt(pointer));
    }
    return phrase;
}

exports.generateCapcha = generateCapcha;
exports.getRandomPhrase = getRandomPhrase;