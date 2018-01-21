var Letter = require('./letter');

class Word {
  constructor(word) {
    this.wordToGuess = word;
    this.lettersArr = this.wordToGuess.split("");
    this.currentLetters = [];
    this.guessedList = [];
  }
  initialize() {
    for (let letter of this.lettersArr) {
      let curLetter = new Letter(letter, false);
      this.currentLetters.push(curLetter);
    }
  }
  combineWord() {
    let result = [];
    for (let letter of this.currentLetters) {
      result.push(letter.display());
    }
    return result.join(" ");
  }
  updateStatus() {
    for (let letter of this.currentLetters) {
      letter = letter.display();
    }
  }
  guessLetter(s) {
    if(this.guessedList.indexOf(s) === -1) {
      this.guessedList.push(s);
      for (let letter of this.currentLetters) {
        if(s === letter.value && letter.isGuessed === false) {
          letter.isGuessed = true;
        }
      }
    }
  }
  wordProcess(s) {
    this.guessLetter(s);
    this.updateStatus();
    return this.combineWord();
  }
}

module.exports = Word;
