var Letter = require('./letter');

class Word {
  constructor(word) {
    this.wordToGuess = word;
    this.lettersArr = this.wordToGuess.split("");
    this.currentLetters = [];
    this.guessedList = [];
    this.allGuessed = false;
    this.isThisGuessRight = false;
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
    this.isThisGuessRight = false;
    if(this.guessedList.indexOf(s) === -1) {
      this.guessedList.push(s);
      var checkAllGuessed = true;
      for (let letter of this.currentLetters) {
        if(s === letter.value && letter.isGuessed === false) {
          letter.isGuessed = true;
          this.isThisGuessRight = true;
        }
        if (letter.isGuessed === false) {
          checkAllGuessed = false;
        }
      }
      this.allGuessed = checkAllGuessed;
    }
  }
  wordProcess(s) {
    this.guessLetter(s);
    this.updateStatus();
    return this.combineWord();
  }
}

module.exports = Word;
