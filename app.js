
var score = 0;
var userName = prompt('Hi there, thanks for visiting About Me page? What is your name? ').toUpperCase();
alert('Nice to meet you ' + userName + '. I\'m going to ask you 7 questions about me. Make your best guesses.  Please give answer accordingly ');
console.log('The user \'s name is ' + userName + ' and he is guessing my questions');

var questions = ['Do I love Soccer?', 'Have I been in New York?', 'Am I a good singer?',
                'Do I have siblings?', 'Do I like talking to friends on facebook?'];
var answers   = ['yes', 'no', 'no', 'yes', 'yes'];
var responses = ['I\'m crazy Arsenal Fc fun, ', 'I have not been in New York', 'I\'m not a good singer',
                'I have 5 Siblings', 'No, I don\'t like Facebook'];

function yesNoQuestions() {
  for (i = 0; i < 5; i++) {
    var ques = prompt(questions[i]).toLowerCase();
    console.log(ques, answers[i], answers[i][0]);
    if (ques === answers[i] || ques === answers[i][0]){
      alert(responses[i]);
      score++;
    } else {
      alert('Nope, that is not correct. The correct answer is ' + responses[i]);
    }
  }
}
yesNoQuestions();

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
    alert('Hi,' + userName + ' it is high and you have ' + (4 - i) + ' Please try again? ');
  }else if(number > response6){
    alert('Hi,' + userName + ' it is low and you have ' + (4 - i) + ' Please try again? ');
  }else {
    alert('This is not a number, and you have ' + (4 - i) + ' Please try again? ');
  }
}
//# 7
var array = ['LOS ANGLES', 'LONDON', 'NEW YORK', 'CHICOGO', 'BOSTON', 'SEATTLE','PARIS', 'DUBAI'];
for(var i = 0; i < 6; i++){
  var response7 = prompt('Guess the cities I have visited? ').toUpperCase();
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
  alert('Try again! You have ' + (5 - i) + ' trials.');
}
if(score > 5){
  alert('You answered ' + score + ' out of 7 questions correctly ' + userName + ', Well Done! Thak you and see you next time.');
}else {
  alert('You answered ' + score + ' out of 7 questions correctly ' + userName + ', Thak you and see you next time.');
}
