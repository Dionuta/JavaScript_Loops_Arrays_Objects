var upper = 10000;
var randomNumber = getRandomNumber (upper);
var guess;
var attemps  = 0;
//makes random number between 1 and upper var.
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
//runs in till number gussed
while (guess !== randomNumber) {
    guess = getRandomNumber(upper);
    attemps += 1;
}
//prints code to site
document.write('<p> The random number was ' + randomNumber + '.</p>');
document.write('<p> It took the computer ' + attemps + ' attemps to get it right, </p>');