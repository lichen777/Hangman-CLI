const fs = require('fs');

var getWord = function selectRandomWordFromDataBase () {

  var data = fs.readFileSync('./word.txt', 'utf8');
  var wordList = data.split("\n");
  var len = wordList.length;
  var randomNum = randomSelect(len);
  return wordList[randomNum];

}

function randomSelect(len) {
  return Math.floor(Math.random() * (len - 1));
}

module.exports = getWord;
