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

function start() {
  var word = getWord();
  var wordToGuess = new Word(word);
  wordToGuess.initialize();
  
  inquirer.prompt(beginning).then(answers => {
    if(answers.start){
      ask();
    } else {
      start();
    }
  })
}

function ask() {
  inquirer.prompt(question).then(answers => {
    var guessedLetter = answers.letter;
    console.log(wordToGuess.wordProcess(guessedLetter));
    ask();
  })
}

start();
