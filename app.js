// Global variable.
var answer1 = 'yes';
var answer2 = 'no';
var score = 0;
var userName = prompt('Hi there, thanks for visiting About Me page? What is your name? ').toUpperCase();
alert('Nice to meet you ' + userName + '. I\'m going to ask you 7 questions about me. Make your best guesses.  Please give answer accordingly ');
console.log('The user \'s name is ' + userName + ' and he is guessing my questions');

var response1 = prompt('Do I live in Seattle?').toLowerCase();
if(response1 === answer1 || response1 === answer1[0]){
  alert('Your response is ' + response1 + '! You are correct, ' + userName + ' ! I live in Seattle, WA.');
  score++;
}else {
  alert('Nope! ' + userName + ' . You don\'t get this right');
}
// #2
var response2 = prompt('Have I been in New York? ').toLowerCase();
if (response2 === answer2 || response2 === answer2[0]) {
  alert('Your response is ' + response2 + ', and you are correct, ' + userName + ' ! I have not been in New York');
  score++;
} else {
  alert('Nope! ' + userName + ',  you don\'t get this right');
}
// #3
var response3 = prompt('Am I a good singer? ').toLowerCase() ;
if(response3 === answer2 || response3 === answer2[0]) {
  alert('Your response is ' + response3 + ' you are correct ' + userName + '! I\'m not');
  score++;
}else {
  alert('Nope!' + userName + ', you don\'t get this right');
}
// #4
var response4 = prompt('Do I have siblings? ').toLowerCase();
if(response4 === answer1 || response4 === answer1[0]) {
  alert('Your response is ' + response4 + ' you are correct ' + userName + ',  I have 5 Siblings');
  score++;
} else {
  alert('Nope! ' + userName + ', you don\'t get this right');
}
// #5
var response5 = prompt('Do I like talking to friends on facebook? ').toLowerCase() ;
if(response5 === answer1 || response5 === answer1[0]) {
  alert('Your response is ' + response5 + ', you are correct ' + userName + '! I don\'t like Facebook');
  score++;
}else {
  alert('Nope! ' + userName + ', you don\'t get this right');
}
// #6
var number = 25;
for(var i = 0; i < 4; i++){
  console.log(number);
  var response6 = parseInt(prompt('Guess my number between 1 to 100'));
  if (number === response6) {
    alert ('Great! you get it. ');
    score++;
    break;
  } else if(number < response6){
    alert('Hi, it is too high. Please try again? ');
  }else if(number > response6){
    alert('Hi, this is low. Please try again ');
  }else {
    alert('This is not a number');
  }
}
// # 7
var array = ['LOS ANGLES', 'LONDON', 'NEW YORK', 'CHICOGO', 'BOSTON', 'SEATTLE','PARIS', 'DUBAI'];
for(var i = 0; i < 6; i++){
  var response7 = prompt('Gess the cities I have visited? ').toUpperCase();
  for(var j = 0; j < array.length; j++){
    console.log(array);
    if (array[j] === response7) {
      alert('Great, you get it!');
      score++;
      var correctAnswer = true;
      break;
    }
  }
  if (correctAnswer) {
    break;
  }
  alert('Try again!');
}
if(score > 5){
  alert('You answered ' + score + ' out of 7 questions correctly ' + userName + ', Well Done! Thak you and see you next time.');
}else {
  alert('You answered ' + score + ' out of 7 questions correctly ' + userName + ', Thak you and see you next time.');
}
