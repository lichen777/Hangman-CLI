const fs = require('fs');

function getAWord () {
  fs.readFile('./word.txt', 'utf8', (err, data) => {
    if(err) console.log(err);
    var wordList = data.split("\n");
    var len = wordList.length;
    var randomNum = randomSelect(len);
    return wordList[randomNum];
  })
}

function randomSelect(len) {
  return Math.floor(Math.random() * (len - 1));
}

module.exports = getWord;
