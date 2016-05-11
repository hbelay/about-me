var userName = prompt('Hi there, thanks for visiting About Me page? What is your name? ').toUpperCase();
alert('Nice to meet you ' + userName + '. I\'m going to ask you some questions about me. Make your best guesses.  Please give answer yes/no! ');
console.log('The user \'s name is ' + userName + ' and he is guessing my questions');

var response1 = prompt('Do I live in Seattle?').toLowerCase();
if(response1 === 'yes' || response1 === 'y'){
  alert('Your response is ' + response1 + '! You are correct, ' + userName + ' ! I live in Seattle, WA.');
}else {
  alert('Nope! ' + userName + ' . You don\'t get this right');
}

var response2 = prompt('Have I been in New York? ').toLowerCase();
if(response2 === 'no' || response2 === 'n'){
  alert('Your response is ' + response2 + ', and you are correct, ' + userName + ' ! I have not been in New York');

}else {
  alert('Nope! ' + userName + ',  you don\'t get this right');
}

var response3 = prompt('Am I a good singer? ').toLowerCase() ;
if(response3 === 'no' || response3 === 'n'){
  alert('Your response is ' + response3 + ' you are correct ' + userName + '! I\'m not');

}else {
  alert('Nope!' + userName + ', you don\'t get this right');
}

var response4 = prompt('Do I have siblings? ').toLowerCase();
if(response4 === 'yes' || response4 === 'y'){
  alert('Your response is ' + response4 + ' you are correct ' + userName + ',  I have 2 5 Siblings');
}else {
  alert('Nope!' + userName + ', you don\'t get this right');
}

var response5 = prompt('Do I like talking to friends on facebook? ').toLowerCase() ;
if(response5 === 'yes' || response5 === 'n'){
  alert('Your response is ' + response5 + ', you are correct ' + userName + '! I don\'t like Facebook');

}else {
  alert('Nope!' + userName + ', you don\'t get this right');
}
