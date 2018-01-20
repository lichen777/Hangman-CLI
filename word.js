import Letter from 'letter';

class Word {
  constructor(word) {
    this.wordToGuess = word;
    this.lettersArr = this.wordToGuess.split("");
  }
  splitWord() {
    let letters = [];
    for (let letter of this.lettersArr) {
      var curLetter = new Letter(letter, false);
      letters.push(curLetter);
    }
    return letters;
  }
  combineWord(letters) {
    let result = [];
    for (let letter of letters) {
      result.push(letter.display());
    }
    return result.join("");
  }
  updateStatus(letters) {
    for (let letter of letters) {
      letter = letter.display();
    }
    return letters;
  }
  guessLetter(s, letters) {
    for (let letter of letters) {
      if(s === letter.value && letter.isGuessed === false) {
        letter.isGuessed = true;
      }
    }
    return letters;
  }
}

export default Word;
