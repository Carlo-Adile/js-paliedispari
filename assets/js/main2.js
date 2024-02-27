/* inizializzo variabili */
let userChoice = ''
let userNumber = 1

/* produci il numero casuale */
function randomNumb(min, max) {
  min = 1;
  max = 5;
  let numbToAdd = Math.random() * (max - min) + min;
  
  return parseInt(numbToAdd);
}
/* otteniamo il numero casuale */
let x = randomNumb();
console.log("random number is: " + x)

/* l'utente inserisce un numero e prova ad indovinare pari o dispari */
function tryLuck() {
  userChoice = prompt('scegli tra pari e dispari');
  let lucky = '';

  if(userChoice === 'dispari'){
    userChoice = 'dispari'
  }
  else if(userChoice === 'pari'){
    userChoice = 'pari'
  }
  else{
    userChoice = prompt('input incorretto! scegli tra pari e dispari');
  }
  
  /* userNumber = parseInt(prompt('inserisci un numero')) */
  userNumber = parseInt(prompt('inserisci un numero'));
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
console.log("il tuo numero è: " + userNumber)

console.log('visto che hai scelto: ' + userChoice + ", il numero random è: " + x + ", e il tuo numero da sommare è: " + userNumber + ', il risultato finale è: ' + numbGuess + ', quindi... ' + userGuess)

