var Word = require('./word');
var getWord = require('./getWord');
var inquirer = require('inquirer');

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
    this.numOfGuessed = 0;
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
        console.log('Run "Node hangman.js" again when you are ready!')
      }
    })
  }
  ask() {
    inquirer.prompt(question).then(answers => {
      var guessedLetter = answers.letter;
      this.judge(guessedLetter);
    })
  }
  judge(guessedLetter) {
    this.current = this.wordToGuess.wordProcess(guessedLetter);
    if (this.wordToGuess.isThisGuessRight === false && this.numOfGuessed !== this.wordToGuess.guessedList.length) {
      this.guessRemain -= 1;;
    }
    this.numOfGuessed = this.wordToGuess.guessedList.length;
    console.log(this.current);
    console.log("Remaining guesses: " + this.guessRemain);
    if (this.wordToGuess.allGuessed === true) {
      console.log("You win! Start Over.");
      var game = new Hangman(10);
      return game.start();
    }
    if (this.guessRemain > 0) {
      this.ask();
    } else {
      console.log("No guess remains. Start Over.");
      console.log("Correct Answer: " + this.word);
      var game = new Hangman(10);
      game.start();
    }
  }
}

var game = new Hangman(10);
game.start();
