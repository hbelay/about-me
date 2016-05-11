var userName = prompt('Hi there, thanks for vidsiting About Me page? What is your name? ');
alert('nice to meet you ' + userName + '. I\'m going to ask you some questions about me. Really. Make your best guesses. Please answer yes/no ');
console.log('The user \'s name is ' + userName + ' and he is gruessing my questions');

var response1 = prompt('Do I have kids? ');
var answer1 = 'yes';
if(response1.toLowerCase() === answer1){
  alert('Your response is ' + response1 + ' you are correct, ' + userName + ' ! I have 2 kids');

}else {
  alert('Nope!' + userName + ' . you don\'t get this right');
}
var response2 = prompt('Have I been arrested? ');
var answer2 = 'no';
if(response2.toLowerCase() === answer2){
  alert('Your response is ' + response2 + ' you are correct, ' + userName + ' ! I have not been arested');

}else {
  alert('Nope!' + userName + ' . you don\'t get this right');
}
var response3 = prompt('Am I a good singer? ');
var answer3 = 'no';
if(response3.toLowerCase() === answer3){
  alert('Your response is ' + response3 + ' you are correct, ' + userName + ' ! I\'m not');

}else {
  alert('Nope!' + userName + ' . you don\'t get this right');
}
var response4 = prompt('Do I have siblings? ');
var answer4 = 'yes';
if(response4.toLowerCase() === answer4){
  alert('Your response is ' + response4 + ' you are correct, ' + userName + '  I have 2 5 Siblings');
}else {alert('Nope!' + userName + ' . you don\'t get this right');
}
var response5 = prompt('Do I like talking to friends on facebook? ');
var answer5 = 'no';
if(response5.toLowerCase() === answer5){
  alert('Your response is ' + response5 + ' you are correct, ' + userName + ' ! I don\'t');

}else {
  alert('Nope!' + userName + ' . you don\'t get this right');
}
