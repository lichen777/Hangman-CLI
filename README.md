# Hangman-CLI

### Overview
Hangman-CLI is a hangman Node.JS command-line game using Class building feature using JavaScript ES6 Syntax.

This game also uses the `inquirer` npm package for User Interface and File System for word libray reading.

### Logic Diagram
![Structure Diagram](/Hangman%20diagram.png)

 The game used as different types of classes to build the architecture:

  Class **Word**: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

  Class **Letter**: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
  
  Function **GetWord**: Used to read the word text file to get a random word from library for the user to guess.
  
  **Main** program: Used `inquirer` to interface with user to guess a letter and show update and result.
  
  ### Hangman Game Demo
  ![Game Demo](/hangman-demo.gif)


