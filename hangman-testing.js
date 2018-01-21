var Word = require('./word');
var getWord = require('./getWord');
var inquirer = require('inquirer');

/*
var word = getWord();

var wordToGuess = new Word(word);
wordToGuess.initialize();
console.log(wordToGuess.wordProcess('a'));
console.log(wordToGuess.guessedList);
*/

var beginning = {
  type: 'confirm',
  name: 'start',
  message: 'Ready to start?',
  default: true
};

var question = {
  type: 'input',
  name: 'letter',
  message: 'Guess a letter!',
  validate: function validateSingleString(name) {
    return name.length === 1 && name.toUpperCase().charCodeAt(0) >= 65 && name.toUpperCase().charCodeAt(0) <= 90;
  }
}

class Hangman {
  constructor(count) {
    this.word = '';
    this.wordToGuess = {};
    this.guessRemain = count;
    this.current = '';
  }
  start() {
    this.word = getWord();
    this.wordToGuess = new Word(this.word);
    this.wordToGuess.initialize();
    inquirer.prompt(beginning).then(answers => {
      if(answers.start){
        this.ask();
      } else {
        this.start();
      }
    })
  }
  ask() {
    inquirer.prompt(question).then(answers => {
      var guessedLetter = answers.letter;
      if (this.current !== )
      this.current = this.wordToGuess.wordProcess(guessedLetter);
      console.log(this.current);
      if (this.guessRemain > 0) {
        this.ask();
      } else {
        this.start();
      }

    })
  }
}

var game = new Hangman(10);
game.start();
