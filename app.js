var gm = require('gm');
var width = 400;
var heigth = 200;
var symbols = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM";
var length = 6;

function getRandomPhrase(string, phraseLength){
	var phrase = '';
	var pointer = 0;
	for (var i = 0; i < phraseLength; i++) {
		pointer = Math.round(Math.random()*string.length - 1);
		phrase += string.charAt(pointer);
	}
	return phrase;
}

getRandomPhrase(symbols, 6);
