'use strict';

//This code prompts the User asking 5 questions about Rose Anne
//Question Number 1 to User Asking about Rose Annes Hobbies
var username = prompt('Hello, what is your name?');
var rightAnswer = 0;
alert('Hello ' + username + ' and welcome to a guessing game about Rose Anne');
alert('We will be asking you a series of questions, please answer with a yes/y or no/n');
function question1(){
  var response1 = prompt('Does Rose Anne have any hobbies?').toLowerCase();

  if (response1 === 'yes' || response1 === 'y') {
    alert('Yes, Rose Anne does have hobbies!');
    rightAnswer += 1;
    console.log('Does Rose Anne have hobbies?');
    console.log(response1);
  }
  else if (response1 === 'no' || response1 === 'n') {
    alert('Yes, Rose Anne doesn\'t have any hobbies!');
    console.log('Does Rose Anne have hobbies?');
    console.log(response1);
  }
  else {
    alert('Please enter a yes/y or no/n');
    console.log('The user didn\'t answer yes or no.');
    console.log(response1);
  }
}
question1();

//Question Number 2 to User Asking about Travel
function question2() {
  var response2 = prompt('Do you know if Rose Anne likes to travel?').toUpperCase();

  if (response2 === 'YES' || response2 === 'Y') {
    alert('Yes, Rose Anne does like to travel!');
    rightAnswer += 1;
    console.log('Does Rose Anne like to travel?');
    console.log(response2);
  }
  else if (response2 === 'NO' || response2 === 'N') {
    alert('Yes, Rose Anne doesn\'t like to travel!');
    console.log('Does Rose Anne like to travel?');
    console.log(response2);
  }
  else {
    alert('Please enter a YES/Y or NO/N');
    console.log('The user didn\'t answer yes or no.');
    console.log(response2);
  }
}
question2();

// //Question Number 4 to User Asking about Singing
function question3() {
  var response3 = prompt('Do you know if Rose Anne likes to sing?').toUpperCase();

  if (response3 === 'YES' || response3 === 'Y') {
    alert('Yes, Rose Anne does like to sing!');
    rightAnswer += 1;
    console.log('Does Rose Anne like to sing?');
    console.log(response3);
  }
  else if (response3 === 'NO' || response3 === 'N') {
    alert('Yes, Rose Anne doesn\'t like to sing!');
    console.log('Does Rose Anne like to sing?');
    console.log(response3);
  }
  else {
    alert('Please enter a YES/Y or NO/N');
    console.log('The user didn\'t answer YES or NO.');
  }
}
question3();

 //Question Number 4 to User Asking about Dancing

function question4() {
  var response4 = prompt('Does Rose Anne Dance?').toLowerCase();

  if (response4 === 'yes' || response4 === 'y') {
    alert('Yes, Rose Anne dances!');
    rightAnswer += 1;
    console.log('Does Rose Anne dance?');
    console.log(response4);
  }
  else if (response4 === 'no' || response4 === 'n') {
    alert('Yes, Rose Anne doesn\'t dance!');
    console.log('Does Rose Anne dance?');
    console.log(response4);
  }
  else {
    alert('Please enter a yes/y or no/n');
    console.log('The user didn\'t answer yes or no.');
    console.log(response4);
  }
}
question4();

// //Question Number 5 to User Asking about Yodeling
function question5() {
  var response5 = prompt('Does Rose Anne yodel?').toLowerCase();

  if (response5 === 'yes' || response5 === 'y') {
    alert('Yes, Rose Anne yodels!');
    rightAnswer += 1;
    console.log('Does Rose Anne yodel?');
    console.log(response5);
  }
  else if (response5 === 'no' || response5 === 'n') {
    alert('Yes, Rose Anne doesn\'t yodel!');
    console.log('Does Rose Anne yodel?');
    console.log(response5);
  }
  else {
    alert('Please enter a yes/y or no/n');
    console.log('The user didn\'t answer yes or no.');
    console.log(response5);
  }
}
question5();

//Question Number 6 to User Asking about Favorite Number
function question6() {
  alert('For the next question we ask, please provide numbers only in your response');
  var roseAnnesFavoriteNum = 6;
  var response6Counter = 1;

//   //This while loops until the user guesses the correct answer with a maximum of 4 attempts
  while (response6Counter <= 4) {
    var response6 = prompt('What is Rose Anne\'s favoirite number?');
    console.log(response6Counter);
    console.log(response6);
    console.log(roseAnnesFavoriteNum);
    if (parseInt(response6) > roseAnnesFavoriteNum) {
      alert('The number you guessed is too high');
      console.log('Rose Anne\'s favorite number.');
      console.log(roseAnnesFavoriteNum);
      console.log(response6);
      response6Counter += 1;
    }
    else if (parseInt(response6) < roseAnnesFavoriteNum) {
      alert('The number you guessed is too low');
      console.log('Rose Anne\'s favorite number.');
      console.log(roseAnnesFavoriteNum);
      console.log(response6);
      response6Counter += 1;
    }
    else {
      alert('You either guessed the right number or you didn\'t enter a number!');
      rightAnswer += 1;
      console.log('Rose Anne\'s favorite number.');
      console.log(roseAnnesFavoriteNum);
      console.log(response6);
      response6Counter = 5;
    }
  }
}
question6();

//Question Number 7 to User Asking about Where Rose Anne lives
function question7() {
  var roseAnnesStates = ['MICHIGAN', 'WASHINGTON', 'VIRGINIA', 'OHIO', 'FLORIDA'];
  var correctAnswer = false;
  var guessCounter = 0;

  //The following code loop allows the user to guess where Rose Anne live 6 times
  //and if the user guesses correctly or uses all their guess attempts.

  var response7 = prompt('Can you guess what state Rose Anne has lived in?').toUpperCase();
  while (correctAnswer === false && guessCounter <= 5) {
    guessCounter += 1;
    if (correctAnswer === false && guessCounter > 1) {
      response7 = prompt('Can you guess what state Rose Anne has lived in?').toUpperCase();
    }
    for (var i = 0; i < roseAnnesStates.length; i++) {
      if (response7 === roseAnnesStates[i]) {
        correctAnswer = true;
        rightAnswer +=1;
        alert('That is correct, Rose Anne lives in ' + response7);
        break; //breaks out of the for
      }
    }
    if (correctAnswer === false) {
      alert('This is incorrect, try again!'); //provide an alert when user answers incorrectly
    }
  }
  alert('These are the states that Rose Anne has lived in ' + roseAnnesStates);
}

question7();
//provide the user with an overview of how they did in regards to guessing
alert('Hey ' + username + ' You have gotten ' + rightAnswer + ' out of 7 guesses correct');
