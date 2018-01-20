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
  inquirer.prompt(beginning).then(answers => {

  })
}

function ask() {
  inquirer.prompt(question).then(answers => {

  })
}
