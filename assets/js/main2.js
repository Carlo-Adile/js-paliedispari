/* inizializzo variabili */

let userChoice = ''
let userNumber = 1

function randomNumb(min, max) {
  min = 1;
  max = 5;
  let numbToAdd = Math.random() * (max - min) + min;
  
  return parseInt(numbToAdd);
}

let x = randomNumb();
console.log("random number is: " + x)

function tryLuck(userNumber) {
  userChoice = prompt('scegli tra pari e dispari');
  let lucky = '';

  if(userChoice === 'dispari'){
    userChoice = 'dispari'
  }
  else if(userChoice === 'pari'){
    userChoice = 'pari'
  }
  else{
    console.log('you entered an invalid input, try again!')
    return 'invalid';
  }
  
  userNumber = parseInt(prompt('inserisci un numero'))
  let totalNumb = userNumber + x;

  if(totalNumb % 2 == 0 && userChoice === 'pari'){
    lucky = "hai vinto"
  }
  else if(totalNumb % 2 == 1 && userChoice === 'dispari'){
    lucky = "hai vinto"
  }
  else{
    lucky = "hai perso..."
  }

  return lucky;
}

let userGuess = tryLuck()
let numbGuess = x + userNumber
/* console.log(userGuess) */

console.log('visto che hai scelto: ' + userChoice + ", il numero random è: " + x + ", e il tuo numero da sommare è: " + userNumber + ', il risultato finale è: ' + numbGuess + ', quindi... ' + userGuess)

