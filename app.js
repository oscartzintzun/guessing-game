'use strict';

var correctcount = 0;
var number = Math.floor((Math.random() * 50) + 1);
console.log('The correct number for question 6 is ' + number);
var numberTries = 4;
var animalTries = 6;
var animals = ['fox','whale','sheep','dove','otter'];

var questions = ['Do I like cheese?', 'Was moon landing faked?', 'Is portlands population increasing at a unsustainable rate?', 'Are gorrilas monkeys?', 'were the star wars prequals better than the originals?','I am thinking of a number between 1 and 10... You get 4 tries...', 'What is one of my favorite cities? You have 6 tries!' ];
var correctAnswers = ['Y', 'Y', 'Y', 'N', 'N', number];
var correctWords = ['yes', 'yes,', 'yes', 'no', 'no'];
var corrects = [ 'Corret! Chesse is the original sin!', 'WRONG! it was one small step for man, come on...', 'yes! The living price is rapidly increasing', 'correct! monkeys have tails and apes do not.', 'Emotion is subjective!', 'Good job! you got it right!','You got one of them! My favorite cities are: \n Portland \n Seattle \n Autsin \n New York \n Patzcuaro'];
var wrongAnswers = ['N','N','N','Y','Y',];
var wrongWords = ['no','no','no','yes','yes'];
var wrongs = [ 'Wrong, cheese is my DRUG.', 'Correct! one giant leep for mankind!.', 'incorrect! expenses are increasing due to demand.', 'unfortunately you are wrong, monkeys have tails and apes do not.', 'Emotion is subjective!', 'That is zero... it is not between 1 and 10'];

var confirmquiz = confirm('Hello, would you like to play a game?');
var i = 0;

function askYN(i){
  for (var i = 0; i < 5; i++) {
    var response = prompt(questions[i]);
    if (response.toUpperCase() === correctAnswers[i] || response.toLowerCase() === correctWords[i]){
      console.log(corrects[i]);
      alert(corrects[i]);
      correctcount++;
    } else if (response.toUpperCase() === wrongAnswers[i] || response.toLowerCase() === wrongWords[i]){
      console.log(wrongs[i]);
      alert(wrongs[i]);
    } else {
      console.log('invalid input');
      alert('Please input either a Y or an N.');
      i--;
    }
  }
}

function askRandom(){
  do {
    var response = prompt(questions[5]);
    if (+response === correctAnswers[5]){
      alert(corrects[5]);
      correctcount++;
      break;
    } else if (+response > correctAnswers[5]){
      alert('Too high! ' + numberTries + ' tries remaining.');
      numberTries--;
    } else if (+response < correctAnswers[5]){
      alert('Too low! ' + numberTries + ' tries remaining.');
      numberTries--;
    }
  } while (numberTries >= 0);
  alert('The number was ' + correctAnswers[5] + '!');
}
function askCities(){
  do {
    var response = prompt(questions[6]);
    if (cities.includes(response.toLowerCase())){
      alert(corrects[6]);
      correctcount++;
      break;
    } else {
      animalTries--;
      alert('You have ' + citiesTries + ' tries remaining.');
      if (animalTries === 0){
        alert('My favorite cities are: \n Portland \n Seattle \n Austin \n New York \n Patzcuaro');
      }
    }
  } while (colorTries > 0);
}


if(confirmquiz) {
  console.log('Awsome! Lets get started! Please answer all yes or no questions with a Y or N.');
  var name = prompt('Awesome! Lets get started! What is your name?' );
  alert('Hello, ' + name + ', Please answer all yes or no questions with a Y or N.');
  askYN(i);
  askRandom();
  askAnimal();
  alert(name + ', you have guessed ' + correctcount + ' out of 7 correctly! Thanks for playing!');

} else {
  alert('Okay! Here is my site!');
}
