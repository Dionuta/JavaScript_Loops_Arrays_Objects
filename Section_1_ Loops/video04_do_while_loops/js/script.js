let randomNumber = getRandomNumber(10);
let guess;
let guessCount = 0;
let correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}
// Code runs in till user guesses correct number
do {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  guessCount += 1;
 //Stops code. 
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }  
} while ( ! correctGuess )
  
document.write('<h1>You guessed the number!</h1>');
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);